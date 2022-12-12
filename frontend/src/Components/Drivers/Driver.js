import React, { useContext } from "react";
import drivericon from './drivericon.jpg';

export default function CardComponent({ uname, uid }) {

    let x = Math.random() / 1000;
    return (
        <div className="mt-8 flex justify-between items-center m-auto w-3/5 h-56 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-0.5 border-2 border-black hover:cursor-pointer px-4" >
            <div>
                <img
                    className="object-cover w-52 h-52 p-2 objext-fit"
                    src={drivericon}
                    alt=""
                    style={{ "borderRadius": "60%" }}
                />
            </div>
            <div className="p-4 text-left w-3/4 text-lg font-semibold text-black">
                <p className="m-3  tracking-tight">
                    Driver Name: {uname}
                </p>
                <p className="m-3 tracking-tight">
                    Driver Transaction Id: {uid}
                </p>
                <p className="m-3 tracking-tight">
                    Amount : {x.toPrecision(1)}
                </p>
                <div className="block pl-3 py-2">
                    <button className="border-2 border-black rounded-xl px-8 hover:bg-amber-400 transition-all duration-0.5" onClick={() => { navigator.clipboard.writeText(uid);alert("Transaction Id Copied"); }}>Select and Copy ID</button>
                </div>
            </div>
        </div>
    );
}
