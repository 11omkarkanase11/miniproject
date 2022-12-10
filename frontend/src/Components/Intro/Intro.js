import React from "react";
import Navbar from "./Navbar";
import car_img from '../Assets/car_img.jpg'
import './Intro.css';
import Steps from "./Steps";
import user from '../Assets/user.jpg';
import driver from '../Assets/driver.jpg';
import { useNavigate } from "react-router-dom";
const Intro=()=>{

    const navigate=useNavigate();

    return(
        <div className="bg-gradient-to-r from-orange-500 to-yellow-500">
            {<Navbar />}
            <div className="grid grid-cols-2 gap-4 justify-around w-full px-8 bg-gradient-to-r from-orange-500 to-yellow-500 pt-8">
                <div className="flex justify-around items-center">
                    <h2 className="text-center text-7xl font-bold">We can help you to book a ride.</h2>
                </div>
                <div className="text-center p-12">
                    <img src={car_img} alt="car_img" className="rounded-2xl shadow-2xl shadow-orange-400 block m-auto object-fit" />
                </div>
            </div>
            {<Steps />}
            <h1 className="text-center text-7xl font-bold">Who are you??</h1>
            <div className="flex items-center w-full p-8 pt-16">
                <div className="flex w-full justify-around items-center px-12 py-4">
                    <div className="text-center shadow-2xl px-12 py-6 rounded-xl">
                        <img src={user} alt="user_image" className="w-56 object-fit my-8 mb-10" style={{"borderRadius":"100%"}} />
                        <span className="border-2 border-purple-900 bg-purple-800 text-white font-semibold cursor-pointer hover:bg-purple-900 transition-all duration-0.2 hover:text-yellow-100 px-6 py-3 rounded-2xl" onClick={()=>{navigate('/userPage')}}>User Page</span>
                    </div>
                    <div className="text-center shadow-2xl px-12 py-6 rounded-xl">
                        <img src={driver} alt="driver_image" className="w-56 object-fit my-8 mb-10" style={{"borderRadius":"100%"}} />
                        <span className="border-2 border-purple-900 bg-purple-800 text-white font-semibold cursor-pointer hover:bg-purple-900 transition-all duration-0.2 hover:text-yellow-100 px-6 py-3 rounded-2xl" onClick={()=>{navigate('/driverLogin')}}>Driver Login</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;