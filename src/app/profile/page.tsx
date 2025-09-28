'use client';

import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { getAuth, updateProfile } from 'firebase/auth';
import { Loader2 } from 'lucide-react';

export default function ProfilePage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const [displayName, setDisplayName] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/');
    }
    if (user) {
      setDisplayName(user.displayName || '');
    }
  }, [user, loading, router]);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth.currentUser) return;
    
    setIsUpdating(true);
    try {
      await updateProfile(auth.currentUser, { displayName });
      toast({ title: 'Profile updated successfully!' });
      // The auth context will update automatically on next refresh or state change
    } catch (error: any) {
      toast({ title: 'Error updating profile', description: error.message, variant: 'destructive' });
    } finally {
      setIsUpdating(false);
    }
  };

  if (loading || !user) {
    return <div className="flex justify-center items-center h-screen"><p>Loading...</p></div>;
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <Avatar className="h-24 w-24 mx-auto mb-4">
              <AvatarImage src={user.photoURL || undefined} alt={user.displayName || user.email || 'User'} />
              <AvatarFallback>{user.email?.[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            <CardTitle className="text-3xl font-headline">{user.displayName || 'User Profile'}</CardTitle>
            <CardDescription>{user.email}</CardDescription>
            <div className="flex justify-center gap-2 mt-2">
                <Badge variant="secondary">{user.role}</Badge>
                {user.role === 'owner' && <Badge className="bg-primary text-primary-foreground">Owner</Badge>}
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleUpdateProfile} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="displayName">Display Name</Label>
                <Input
                  id="displayName"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Your display name"
                />
              </div>
              <Button type="submit" className="w-full" disabled={isUpdating}>
                 {isUpdating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Update Profile
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
