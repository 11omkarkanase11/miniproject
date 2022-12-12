import Loader from './Loader';
import { useContext, useState } from 'react';
import { TransactionContext } from '../../context/TransacionContext';
import './payment.css';
import { useNavigate } from 'react-router-dom';
import Timer from '../Timer/Timer';
import Confirmed from './Confirmed';

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-4 w-full rounded-2xl outline-none bg-transparent text-black white-glassmorphism border-2 border-black placeholder-yellow-200 p-4"
  />
);

const Payment = () => {

  const navigate = useNavigate();
  const {currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);
  const [time,setTime]=useState(false);
  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;
    e.preventDefault();
    if (!addressTo || !amount || !message) return;
    sendTransaction();
  };

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
      <div className='flex items-center w-screen h-screen bg-gradient-to-r from-orange-500 to-yellow-500 text-center font-bold text-md'>
        <div className='w-1/2 block m-auto'>
          <h1 className='text-3xl mb-8 p-2'>PAYMENT DETAILS</h1>
          <div className="block m-auto text-black my-2 py-16 px-12 shadow-orange-900 border-orange-600 rounded-2xl shadow-2xl">
            <Input placeholder="Driver's ID" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />
            {(isLoading===1)
              ? <Loader />
              :(isLoading===0)?(
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-1/3 mt-8 border-2 border-black p-2 rounded-2xl cursor-pointer hover:bg-lime-600 transition-all duration-0.6"
                >
                  Send now
                </button>
              ):navigate('/confirmationPage')}
          </div>
        </div>
      </div>
    )
}

export default Payment;