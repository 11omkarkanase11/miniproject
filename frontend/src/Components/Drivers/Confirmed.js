import React from "react";
import { Checkmark } from "react-checkmark";
import { useNavigate } from "react-router-dom";

export default function Confirmed() {

    const navigate=useNavigate();

    return (
        <div className="flex w-screen h-screen items-center bg-gradient-to-r from-orange-500 to-yellow-500">
            <div className="w-4/5 block m-auto text-center">
                <h2 className="text-4xl p-8 font-bold ">
                    Transaction Successfull !!
                </h2>
                <div className="confirmed p-4 pb-8  ">
                    <Checkmark size={'196'} color='#2add15' />
                </div>
                <button className="hover:bg-red-600 hover:text-white transition-all duration-0.4 border-2 border-black rounded-xl px-8 py-2 font-semibold my-4 text-lg" onClick={()=>{navigate('/')}}>Log Out</button>
            </div>
        </div>
    );
}