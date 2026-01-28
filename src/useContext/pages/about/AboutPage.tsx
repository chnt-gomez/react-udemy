import { Button } from '@/components/ui/button';
import { UserContext } from '@/useContext/context/UserContext';
import React, { use } from 'react';
import { Link } from 'react-router';

export const AboutPage = () => {

  const { user, authStatus, logout } = use(UserContext)
  const handleLogout = () => {
    logout();
  }
  return (
    <div className="flex flex-col items-center justify-center min-g-screen">
      <h1 className="text-4xl font-bold">About me</h1>
      <hr />
      <div className="flex flex-col gap-2">

        <Link to ="/profile" className="hover:text-blue-500 underline text-2xl">
          Profile
        </Link>
        {authStatus === 'authenticated' ? (
          <Button onClick={handleLogout} variant="destructive" className="mt-4">
            Logout
          </Button>
        ) : (
            <Link to ="/login" className="hover:text-blue-500 underline text-2xl">
          Login
        </Link>
        )}

      
      </div>
    </div>
  )
}
