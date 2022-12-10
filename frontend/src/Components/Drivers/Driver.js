import React, { useContext } from "react";
import drivericon from './drivericon.jpg';

export default function CardComponent({uname,uid}) {

    let x=Math.random()/1000;
    return (
        <div className="mt-4 flex justify-between items-center m-auto w-1/2 h-56 rounded-lg shadow-lg border-2 border-grey-400 hover:cursor-pointer hover:border-slate-600 px-4" >
            <div>
            <img
                className="object-cover w-52 h-52 p-2 objext-fit"
                src={drivericon}
                alt=""
                style={{"borderRadius":"60%"}}
            />
            </div>
            <div className="p-4 text-left w-3/4">
                <p className="text-lg m-3 font-semibold tracking-tight text-purple-900">
                    Driver Name: {uname}
                </p>
                <p className="text-lg m-3 font-semibold tracking-tight text-purple-900">
                    Driver Transaction Id: {uid}
                </p>
                <p className="text-lg m-3 font-semibold tracking-tight text-purple-900">
                    Amount : {x.toPrecision(1)}
                </p>
            </div>
        </div>
    );
}
