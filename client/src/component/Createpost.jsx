import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Createpost = () => {
    const[name, setName] = useState("");
    const[myimage, setMyimage] = useState("");
    const[mydescription, setMydescription] = useState("");

    
    const diffToast = async () => {
        let sendData = {Name: name, Image: myimage, Description: mydescription}
        await axios.post("http://localhost:3006/posts", JSON.stringify(sendData), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
    
        toast.success("Post successfully", {
          position: "top-center",
          theme: "dark",
          autoClose: 3000,
        });
      };

      

    return (
        <div className='container'>
            <div className='col-6 mx-auto'>
                <div className='card border border-3 p-3 shadow-lg '>
                    <h1 className='mx-auto mb-3'>Create Post</h1>
                    <span>Name</span>
                    <input className='form-control' onChange={(e)=> setName(e.target.value)}></input>
                    <span className='mt-3 mb-2'>Upload Your Image url</span>
                    <input type="text" className='form-control mb-3' onChange={(e) => setMyimage(e.target.value)}></input>
                    <span> Description</span>
                    <input className='form-control mb-3' onChange={(e) => setMydescription(e.target.value)}></input>
                    <button className='btn btn-primary' onClick={diffToast} >Submit</button>
                
                    
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Createpost
