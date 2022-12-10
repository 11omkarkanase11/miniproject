import { React, useEffect, useState, useContext } from 'react';
import { db } from '../../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import Driver from './Driver';
import { TransactionContext } from '../../context/TransacionContext';

const DisplayDrivers = () => {
  const [drivers, setUsers] = useState([]);
  const driverDataCollection = collection(db, "drivers");
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(driverDataCollection);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    getUsers();
  }, [])

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;
    e.preventDefault();
    if (!addressTo || !amount || !message) return;
    sendTransaction();
  };

  return (
    <div className="p-5 block items-center bg-gradient-to-r from-orange-500 to-yellow-500">
      {drivers.map((val, key) => {
        return (<Driver uname={val.driver_name} uid={val.driver_trans_id} />);
      })}
      
    </div>
  )



};

export default DisplayDrivers;