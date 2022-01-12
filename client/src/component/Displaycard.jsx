import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Comment from "./Comment";
import axios from "axios";


const Displaycard = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [getapi, setGetapi] = useState([]);
  const [comment, setComment] = useState("");
  const[mypost, setMypost] = useState(0)

  const likes = () => {
    setCount((c) => c + 1);
  };

  const dislikes = () => {
    setCount1((c) => c + 1);
  };


  let getData = async () => {
    const response = await axios.get("http://localhost:3006/posts");
    setGetapi(response.data);
  };

  const mycomment = async () => {
    if(comment === null || comment === ""){
    toast.warning("Please comment", {
      position: "top-center",
      theme: "dark",
      autoClose: 2000,
    });
    }else{
      let myComm = { Comment: comment, postID: mypost };
    await axios.post("http://localhost:3006/comments", JSON.stringify(myComm), {
      headers: {
        "Content-Type": "application/json",
      },
    });
      toast.success("Added successfully", {
        position: "bottom-right",
        theme: "dark",
        autoClose: 2000,
      });
    }
  }

 

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
        {getapi.map((api, index) => 
        (
           
          <div key={index} className=" bg- d-flex justify-content-center">
            <div
              className="col-6 text-center card shadow-lg p-3 mb-5"
              style={{ borderRadius: "20px" }}
            >
              <div className="d-flex flex-row ">
                <img
                  src={api.Image}
                  alt="..."
                  className="rounded-circle"
                  style={{ width: "40px", height: "40px" }}
                ></img>
                <h3 className="text-center fs-3 ms-3">{api.Name}</h3>
                
              </div>

              <img
                className="rounded mx-auto"
                style={{ height: "300px", width: "400px" }}
                src={api.Image}
                alt="..."
              ></img>
              <p className=" fs-5 ms-3 text-center mt-2">{api.Description}</p>

              <div className="bg-dark rounded-pill text-center d-flex flex-row p-3 mx-auto ">
                <div className="mt-2">
                  <i
                    className="fas fa-thumbs-up "
                    onClick={likes}
                    style={{ color: "white", cursor: "pointer" }}
                  ></i>
                  <span className="ms-2" style={{ color: "white" }}>
                    {count}
                  </span>
                  <i
                    className="fas fa-thumbs-down ms-3"
                    onClick={dislikes}
                    style={{ color: "white", cursor: "pointer" }}
                  ></i>
                  <span className="ms-2" style={{ color: "white" }}>
                    {count1}
                  </span>
                </div>

                <div className="d-flex flex-row justify-content-center ms-2 ">
                  <input
                    className="form-control shadow "
                    placeholder="Add comments"
                    style={{ width: "300px" }}
                    onChange={(e) => {
                      setMypost(api.id)
                      setComment(e.target.value)
                    }}
                    
                  ></input>

                  <button
                    className="btn btn-primary rounded-end"
                    onClick={mycomment}
                  >
                    Post
                  </button>
                  <div className="ms-2">
                    <Comment pid={api.id} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <ToastContainer />
      </div>
    </>
  );
};

export default Displaycard;
