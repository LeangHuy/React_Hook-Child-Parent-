import { useState } from 'react'
import './App.css'
import Table from './components/Table'
import Form from './components/FormInput'

function App() {
  const listUsers = [
    {
      email: "linlin@gmail.com",
      name: "Lin",
      age: 24,
    },
    {
      email: "huy@gmail.com",
      name: "huy",
      age: 22,
    },
    {
      email: "leanghuy@gmail.com",
      name: "Leanghuy",
      age: 22,
    },
  ];

  const [users, setUsers] = useState(listUsers);

  const addUser = (user) => {
    setUsers((insertUser) => [...insertUser, user]);
  };

  return (
    <>
      {/* <Form count={count} calculate ={cal}/> */}
      <Form user={addUser} />
      <Table users={users} />
    </>
  )
}

export default App
