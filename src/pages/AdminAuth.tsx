import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/use-auth';
import { Mail, Lock, ArrowRight, Eye, EyeOff } from 'lucide-react';
import logoUtopia from '@/assets/logo-utopia-new.png';

const AdminAuth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { signIn, signUp } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isSignUp) {
        const { error } = await signUp(email, password);
        if (error) throw error;
        toast({
          title: "Account created",
          description: "Your account has been created. Please wait for admin approval.",
        });
        setIsLoading(false);
      } else {
        const { error } = await signIn(email, password);
        if (error) throw error;
        toast({
          title: "Success",
          description: "Signed in successfully. Redirecting...",
        });
        // Small delay to let auth state update
        setTimeout(() => {
          navigate('/admin');
        }, 500);
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      {/* Header */}
      <header className="p-6">
        <a href="/" className="flex items-center gap-3">
          <img src={logoUtopia} alt="U-topia" className="h-8 w-auto" />
          <span className="text-xl font-bold text-white">U-topia</span>
        </a>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 pb-20">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Tabs */}
            <div className="flex">
              <button
                onClick={() => setIsSignUp(true)}
                className={`flex-1 py-4 text-sm font-semibold transition-all duration-300 ${
                  isSignUp
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-500 hover:text-gray-700'
                }`}
              >
                Sign Up
              </button>
              <button
                onClick={() => setIsSignUp(false)}
                className={`flex-1 py-4 text-sm font-semibold transition-all duration-300 ${
                  !isSignUp
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-500 hover:text-gray-700'
                }`}
              >
                Sign In
              </button>
            </div>

            {/* Form */}
            <div className="p-8">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {isSignUp ? 'Create Your Account' : 'Welcome Back'}
                </h1>
                <p className="text-gray-500">
                  {isSignUp
                    ? 'Join the U-topia Admin Panel'
                    : 'Sign in to access the Admin Panel'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-12 h-12 bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 rounded-xl focus:border-primary focus:ring-primary"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-12 pr-12 h-12 bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 rounded-xl focus:border-primary focus:ring-primary"
                      required
                      minLength={6}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold text-base"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Please wait...
                    </span>
                  ) : (
                    <>
                      {isSignUp ? 'Create Account' : 'Sign In'}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>

              {/* Footer */}
              <p className="text-center text-xs text-gray-500 mt-6">
                By {isSignUp ? 'creating an account' : 'signing in'}, you agree to our{' '}
                <a
                  href="https://docsend.com/view/pehz2xqa23xw3pyc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Terms of Service
                </a>{' '}
                and{' '}
                <a
                  href="https://docsend.com/view/3wjptrvw2c35gj8p"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>

          {/* Back link */}
          <div className="text-center mt-6">
            <a
              href="/"
              className="text-sm text-gray-400 hover:text-primary transition-colors"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminAuth;
