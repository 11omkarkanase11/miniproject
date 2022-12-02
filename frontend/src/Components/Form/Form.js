import React, { useState } from 'react';
import lgimf from '../Assets/loginForm3.png';
import {collection, addDoc} from 'firebase/firestore';
import {db} from '../../firebase-config';
import { useNavigate } from 'react-router-dom';


const Form = () => {

    const driverDataCollection=collection(db,"drivers");
    const [d_name, setname] = useState("");
    const [d_id, setmail] = useState("");
    const [dpass, setpass] = useState("");
    const navigate=useNavigate();

    async function registerUser(event) {

        event.preventDefault();

        await addDoc(driverDataCollection,{driver_name:d_name,driver_password:dpass,driver_trans_id:d_id}).then(navigate("/"));

    }


    return (
        <div className='grid grid-cols-2 gap-2 px-8' >
            <div className='pb-16 pt-20 font-bold text-black'>
                <form onSubmit={registerUser} className='w-4/6 m-auto' >
                    <fieldset className='border-2 text-xl border-black p-4 rounded-lg mb-8'>
                        <legend ><label htmlFor="user_name" className='px-1' >Driver Name</label></legend>
                        <input type="text" id='user_name' name='user_name' placeholder='Name' className='rounded-lg text-lg border-b focus:outline-0 border-black p-2 bg-transparent' value={d_name} onChange={(e) => { setname(e.target.value) }} />
                    </fieldset>
                    <fieldset className='text-xl border-2 border-black p-4 rounded-lg mb-8'>
                        <legend ><label htmlFor="user_email" className='px-1'>Transaction Id</label></legend>
                        <input type="text" id='user_email' name='user_email' placeholder='Email-address' className='rounded-lg text-lg bg-transparent border-b border-black focus:outline-0 p-2' value={d_id} onChange={(e) => { setmail(e.target.value) }} />
                    </fieldset>
                    <fieldset className='text-xl border-2 border-black p-4 rounded-lg'>
                        <legend ><label htmlFor="user_pass" className='px-1'>Password</label></legend>
                        <input type="password" id='user_pass' name='user_pass' placeholder='Password' className='rounded-lg text-lg bg-transparent border-b border-black focus:outline-0 p-2' value={dpass} onChange={(e) => { setpass(e.target.value) }} />
                    </fieldset>
                    <div className='block pt-10'>
                                <button className='text-xl block m-auto border border-black px-8 hover:bg-slate-300 transition-bg duration-200 py-2 rounded-lg' type='submit'>Submit</button>
                            </div>
                </form>
            </div>
            <div className=''>
                <img src={lgimf} alt="LOGIN_FORM_IMG" className='object-auto h-screen m-auto' />
            </div>
        </div>
    )
}

export default Form;