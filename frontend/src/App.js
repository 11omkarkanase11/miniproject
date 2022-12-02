import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase-config';
import Form from './Components/Form/Form';
import { Routes, Route } from 'react-router-dom'
import Intro from './Components/Intro';
import Note from './Components/Note';
import DisplayDrivers from './Components/Drivers/DisplayDrivers';

function App() {

  const [users, setUsers] = useState([]);
  const userDataCollection = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userDataCollection);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    getUsers();
    console.log(users);
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Note />}></Route>
      <Route path='/userLogin' element={<Form />}></Route>
      <Route path='/displayDrivers' element={<DisplayDrivers />}></Route>
    </Routes>
  );
}

export default App;
