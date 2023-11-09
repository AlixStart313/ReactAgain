import { useEffect, useState } from 'react';
import './App.css';
import ListUsers from './components/ListUsers';
import { getUsers,getUsersFromFirebase } from './components/get-user';
import RegistrarUsuarios from './components/RegistrarUsuarios';

function App() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    console.log('get usuarios');
   getUsers().then((users)=>setUsers(users))
   console.log(getUsersFromFirebase())
  }, []);

  return (
    <>
      <h1>Usuarios</h1>
      <ul>
      <RegistrarUsuarios/>
        <ListUsers users={users} />
      </ul>
    </>
  );
}

export default App;
