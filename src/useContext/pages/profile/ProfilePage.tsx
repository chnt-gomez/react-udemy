import { Button } from '@/components/ui/button'
import { UserContext } from '@/useContext/context/UserContext'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router';

export const ProfilePage = () => {

  const { user, logout } = useContext(UserContext);

  const navigation = useNavigate();

  const handleLogout = () => {

    logout();
    navigation('/login');
  }
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl">User profile</h1>
      <hr />

      <pre className="my-4">{JSON.stringify({user}, null, 2)}</pre>  
      <Button onClick={handleLogout} variant="destructive">Logout</Button>
    </div>
  )
}
