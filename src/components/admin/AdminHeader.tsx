import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import logoUtopia from '@/assets/logo-utopia-new.png';

interface AdminHeaderProps {
  userEmail?: string;
  onSignOut: () => void;
}

const AdminHeader = ({ userEmail, onSignOut }: AdminHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={logoUtopia} alt="U-topia" className="h-8 w-auto" />
          <div className="hidden sm:block w-px h-6 bg-border" />
          <span className="text-lg font-semibold text-foreground hidden sm:block">Admin Panel</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground hidden md:block">
            {userEmail}
          </span>
          <Button onClick={onSignOut} variant="outline" size="sm" className="gap-2">
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Sign Out</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
