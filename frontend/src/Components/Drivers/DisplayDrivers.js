import { React, useEffect, useState, useContext } from 'react';
import { db } from '../../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import Driver from './Driver';
import { TransactionContext } from '../../context/TransacionContext';
import { useNavigate } from 'react-router-dom';
import Timer from '../Timer/Timer'

const DisplayDrivers = () => {
  const [drivers, setUsers] = useState([]);
  const driverDataCollection = collection(db, "drivers");
  const [time, setTime] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(driverDataCollection);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    getUsers();
  }, [])


  setTimeout(() => {
    return (
      setTime(true)
    )
  }, 3000)

  if (!time) {
    return <Timer />
  }
  else
    return (
      <div className="p-5 block items-center bg-gradient-to-r from-orange-500 to-yellow-500">
        <div className='text-center font-bold text-3xl p-4'>
          <h2>Select Driver, Proceed to payment</h2>
        </div>
        {drivers.map((val, key) => {
          return (<Driver uname={val.driver_name} uid={val.driver_trans_id} />);
        })}
        <div className='block text-center font-bold py-12'>
          <button className="border-2 border-black rounded-xl px-16 py-3 text-xl hover:bg-lime-500 transition-all duration-0.5" onClick={() => { navigate('/paymentPage') }}>Proceed To Payment</button>
        </div>

      </div>
    )



};

export default DisplayDrivers;