import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import React, { useContext, useState } from 'react'
import { Link } from 'react-router';
import { UserContext } from '@/useContext/context/UserContext';
import { toast } from 'sonner';

export const LoginPage = () => {

  const { login } = useContext(UserContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = login(+userId);
    console.log(result);
    if (!result) {
      toast('usuario no encontrado');
      return;
    }
  } 

  const [userId, setUserId] = useState('')
  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-4xl font-bold">Login</h1>
      <hr />

      <form className="flex flex-col gap-2 my-10"
        onSubmit={handleSubmit}>
        <Input type="number" placeholder="User id"
        value={userId}
        onChange={(event) => setUserId(event.target.value)}/>

        <Button type="submit">Login</Button>
      </form>

      <Link to="/about">
        <Button variant="ghost"> Back </Button>
      </Link>
    </div>
  )
}
