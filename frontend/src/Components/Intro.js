import React,{useContext, useEffect} from "react";
import { TransactionContext } from "../context/TransacionContext";

const Intro=()=>{

    const {connectWallet}=useContext(TransactionContext);
    // console.log();

    useEffect(()=>{
        // connectWallet();
    },[]);

    return(
        <div>
            <h1>Introductory Page of the app</h1>
        </div>
    )
}

export default Intro;