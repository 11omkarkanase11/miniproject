import React, { useContext } from "react";
import drivericon from './drivericon.jpg';

export default function CardComponent({uname,uid}) {


    return (
        <div className="mt-4 flex justify-between items-center m-auto w-1/2 h-56 rounded-lg shadow-lg border-2 border-grey-400">
            <div>
            <img
                className="object-cover w-52 h-52 p-2 objext-fit"
                src={drivericon}
                alt=""
            />
            </div>
            <div className="p-4 text-left w-3/4">
                <p className="text-lg m-3 font-semibold tracking-tight text-blue-600">
                    Driver Name: {uname}
                </p>
                <p className="text-lg m-3 font-semibold tracking-tight text-blue-600">
                    Driver Transaction Id: {uid}
                </p>
            </div>
        </div>
    );
}