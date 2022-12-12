import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase-config';
import Form from './Components/Form/Form';
import { Routes, Route } from 'react-router-dom'
import Intro from './Components/Intro/Intro';
import Note from './Components/Note';
import DisplayDrivers from './Components/Drivers/DisplayDrivers';
import Loc from '../src/Components/Location/Loc'
import Payment from './Components/Drivers/Payment';
import Confirmed from './Components/Drivers/Confirmed';

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
      <Route path='/' element={<Intro />}></Route>
      <Route path='/driverLogin' element={<Form />}></Route>
      <Route path='/displayDrivers' element={<DisplayDrivers />}></Route>
      <Route path='/userPage' element={<Loc />} ></Route>
      <Route path='/paymentPage' element={<Payment />} ></Route>
      <Route path='/confirmationPage' element={<Confirmed />} ></Route>
    </Routes>
  );
}

export default App;
