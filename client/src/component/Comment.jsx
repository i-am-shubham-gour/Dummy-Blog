import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

const Comment = ({pid}) => {
  const [show, setShow] = useState(false);
  const[myData, setMydata] = useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const getData = async () => {
  let response = await axios.get("http://localhost:3006/comments");
  setMydata(response.data)
  console.log(response.data);
}

useEffect(()=> {
getData()
},[])


  return (
    <div>
      <Button variant="primary fw-bold" size="sm" style={{width:"80px", fontSize:"10px"}} onClick={handleShow}>
       Show Comments
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Comments</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            myData.filter((c) => c.postID === pid ).map((api, index) => (
              <p key={index}>{api.Comment}</p>
            ))
          }
          <hr></hr>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Comment;
