import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  isAdmin: boolean;
  adminLoading: boolean;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signUp: (email: string, password: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(false);
  const [loading, setLoading] = useState(true);

  const withTimeout = <T,>(promiseLike: PromiseLike<T>, ms: number): Promise<T> => {
    // `supabase.from(...).select(...)` returns a thenable (not always a real Promise),
    // so we normalize it using `Promise.resolve`.
    const promise = Promise.resolve(promiseLike);

    return new Promise<T>((resolve, reject) => {
      const t = window.setTimeout(() => {
        reject(new Error('Request timed out'));
      }, ms);

      promise.then(
        (val) => {
          window.clearTimeout(t);
          resolve(val);
        },
        (err) => {
          window.clearTimeout(t);
          reject(err);
        }
      );
    });
  };

  const checkAdminRole = async (userId: string) => {
    setAdminLoading(true);
    try {
      const roleQuery = supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', userId)
        .eq('role', 'admin')
        .maybeSingle();

      const { data, error } = await withTimeout(
        roleQuery as unknown as PromiseLike<{ data: { role: string } | null; error: any }>,
        6000
      );

      if (error) {
        // Don't flip admin state on transient/network issues (common when backgrounding tabs).
        console.error('[auth] admin role check failed:', error);
        return;
      }

      setIsAdmin(!!data);
    } catch (err) {
      // Don't flip admin state on transient/timeouts; keep last-known state.
      console.error('[auth] admin role check error:', err);
    } finally {
      setAdminLoading(false);
    }
  };

  useEffect(() => {
    let isMounted = true;
    let lastUserId: string | null = null;

    // Set up auth state listener BEFORE checking session
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (!isMounted) return;

        // Skip redundant updates (e.g., TOKEN_REFRESHED, visibility changes)
        const currentUserId = session?.user?.id ?? null;
        if (currentUserId === lastUserId && event !== 'SIGNED_OUT' && event !== 'SIGNED_IN') {
          return;
        }
        lastUserId = currentUserId;

        // Prevent a UI frame where loading/adminLoading are both false.
        if (session?.user) setAdminLoading(true);

        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);

        if (session?.user) {
          await checkAdminRole(session.user.id);
        } else {
          setIsAdmin(false);
          setAdminLoading(false);
        }
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (!isMounted) return;
      
      lastUserId = session?.user?.id ?? null;

      if (session?.user) setAdminLoading(true);
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);

      if (session?.user) {
        await checkAdminRole(session.user.id);
      } else {
        setIsAdmin(false);
        setAdminLoading(false);
      }
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return { error };
  };

  const signUp = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: window.location.origin,
      },
    });
    return { error };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ user, session, isAdmin, adminLoading, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
