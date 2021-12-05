import BootstrapTable from "react-bootstrap-table-next";
<<<<<<< HEAD:frontend/src/pages/admin/data-table.js
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap'
=======
import {Modal} from 'react-bootstrap'
>>>>>>> adminUI:frontend/src/pages/admin/rooms/data-table.js
import { useState } from "react";
import axios from 'axios';
import './data-table.css'
import * as React from 'react';
import paginationFactory from "react-bootstrap-table2-paginator";
import './script';
import '../css/table.css';
import Button from '@mui/material/Button'
import CloseIcon from '@mui/icons-material/Close';
//import '../css/bootstrap.min.css'



export default function Product() {
  const [datas, setData] = React.useState([]);
  React.useEffect(()=>{
    axios.get('http://localhost:8080/room')
    .then(response=>{
      console.log(response.data);
      setData(response.data);
    })
    .catch(error=>{
      console.log(error);
    })
  }, [])  
  const [roomDescription, setroomDescription] = useState({id: -1})
  
  const columns = [
    {
      dataField: "number",
      text: "Number",
      sort: true,
    },
    {
      dataField: "name",
      text: "Name",
      sort: true,
    },
    {
      dataField: "description",
      text: "Description",
      sort: true,
    },
    {
      dataField: "picture",
      text: "Picture",
      sort: true,
    },
    {
      dataField: "capacity",
      text: "Capacity",
      sort: true,
    },
    {
      dataField: "square",
      text: "Square",
      sort: true,
    },
    {
      dataField: "price",
      text: "Price",
      sort: true,
    },
    {
      dataField: "type",
      text: "Type",
      sort: true,
    },
    {
      dataField: "status",
      text: "Status",
      sort: true,
    },
    
  ];


  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      setroomDescription(row)
    },
  };

  return (
    <div>
      <div className="table-custom room-table">
         {/* https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/about.html  */}
        <BootstrapTable  
          keyField="id" data={datas} 
          columns={columns} 
          rowEvents={rowEvents}
          pagination={paginationFactory({ sizePerPage: 7 })}
        />
      </div>
      {roomDescription.id === -1 ? <p/> : <RoomDescription data={roomDescription} setroomDescription={setroomDescription} />}
      
      <Button variant="contained" type="submit" id="signup"  name="update" onClick={() => {setroomDescription({id: 0})}} style={{color: 'black' , backgroundColor: '#D2B58D'}}>
        Add Room
      </Button>

    </div>
  );
}


function RoomDescription(props) {

  const {data, setroomDescription} = props
  const initialFValues = {
    number:data.number,
    name: data.name,
    description: data.description,
    picture: data.picture,
    capacity: data.capacity,
    square: data.square,
    price: data.price,
    type: data.type,
    status: data.status,
  }
  const [values, setValues] = useState(initialFValues);

  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({
        ...values,
        [name]: value
    })
  }

  const deleteRoom = e =>{
    setroomDescription({id: -1})
    axios.delete(`http://localhost:8080/room/${values.number}`)
    .then(response => {
      console.log(response);
      window.location.reload();
    })
    .catch(error => {
      console.log(error);
      alert('Deleting failed');
    })
  }

  const addRoom = e =>{
    axios.post(`http://localhost:8080/room/`, {
      number: values.number, 
      name: values.name,
      description: values.description,
      picture: values.picture,
      capacity: values.capacity,
      square: values.square,
      price: values.price,
      type: values.type,
      status: values.status
    })
    .then(response => {
      console.log(response);
      window.location.reload();
    })
    .catch(error => {
      console.log(error);
      alert('Invalid input');
    })
  }

  const editRoom = e => {
    axios.put(`http://localhost:8080/room/${values.number}`, {
      name: values.name,
      description: values.description,
      picture: values.picture,
      capacity: values.capacity,
      square: values.square,
      price: values.price,
      type: values.type,
      status: values.status
    })
    .then(response => {
      console.log(response);
      window.location.reload();
    })
    .catch(error => {
      console.log(error);
      alert('Invalid input');
    })
  }
  
  return(
    <div className="popup-box">
    <Modal.Dialog className="popup-content">
      <Modal.Header style={{backgroundColor: '#D2B58B', height: "45px"}} closeButton onClick={() => setroomDescription({id:-1})}>
        <Modal.Title className='dataTitle'>
          {data.number === undefined ? 'Room Creating':'Room Updating'}  
          {/* Room Updating */}
          <CloseIcon className='closeI' />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form class="row g-3 needs-validation infoForm" novalidate >
            <div class="mb-4 row ">
                <label class="form-label col-sm-3" for="name">Number</label>
                <div class="col-sm-9">
                    <input type="text"  readOnly={data.number !== undefined} onChange={handleInputChange}  class="form-control" name="number" id="username" placeholder="" required defaultValue={data.number}/>
                    {/* <div class="invalid-feedback">
                        Number IS INVALID!
                    </div> */}
                </div>
            </div>
            <div class="mb-4 row ">
                <label class="form-label col-sm-3" for="name">Name</label>
                <div class="col-sm-9">
                    <input type="text" onChange={handleInputChange} class="form-control" name="name"  id="name" placeholder="" required defaultValue={data.name}/>
                    {/* <div class="invalid-feedback">
                        NAME IS INVALID!
                    </div> */}
                </div>
            </div>
            <div class="mb-4 row ">
                <label class="form-label col-sm-3" for="description">Description</label>
                <div class="col-sm-9">
                    <input type="text" onChange={handleInputChange} class="form-control" name="description"  id="description" placeholder="" required  defaultValue={data.description}/>
                    {/* <div class="invalid-feedback">
                        DESCRIPTION IS INVALID!
                    </div> */}
                </div>
            </div>
            <div class="mb-4 row ">
                <label class="form-label col-sm-3" for="picture">Picture</label>
                <div class="col-sm-9">
                    <input type="text" onChange={handleInputChange} class="form-control" name="picture"  id="picture" placeholder="" required  defaultValue={data.picture}/>
                    {/* <div class="invalid-feedback">
                      PICTURE IS INVALID!
                    </div> */}
                </div>
            </div>
            <div class="mb-4 row ">
                <label class="form-label col-sm-3" for="capacity">Capacity</label>
                <div class="col-sm-9">
                    <input type="number" onChange={handleInputChange} class="form-control" name="capacity"  id="capacity" placeholder="" required  defaultValue={data.capacity}/>
                    {/* <div class="invalid-feedback">
                        CAPACITY IS INVALID!
                    </div> */}
                </div>
            </div>
            <div class="mb-4 row ">
                <label class="form-label col-sm-3" for="square">Square</label>
                <div class="col-sm-9">
                    <input type="number" onChange={handleInputChange} class="form-control" name="square"  id="square" placeholder="" required  defaultValue={data.square}/>
                    {/* <div class="invalid-feedback">
                        SQUARE IS INVALID!
                    </div> */}
                </div>
            </div>
            <div class="mb-4 row ">
                <label class="form-label col-sm-3" for="price">Price</label>
                <div class="col-sm-9">
                    <input type="number" onChange={handleInputChange} class="form-control" name="price"  id="price" placeholder="" required  defaultValue={data.price}/>
                    {/* <div class="invalid-feedback">
                        PRICE IS INVALID!
                    </div> */}
                </div>
            </div>
            <div class="mb-4 row ">
                <label class="form-label col-sm-3" for="type">Type</label>
                <div class="col-sm-9">
                    <input type="text" onChange={handleInputChange} class="form-control" name="type"  id="type" placeholder="" required  defaultValue={data.type}/>
                    {/* <div class="invalid-feedback">
                        TYPE IS INVALID!
                    </div> */}
                </div>
            </div>
            <div class="mb-4 row ">
                <label class="form-label col-sm-3" for="status">Status</label>
                <div class="col-sm-9">
                    <input type="text" onChange={handleInputChange} class="form-control" name="status"  id="status" placeholder="" required  defaultValue={data.status}/>
                    {/* <div class="invalid-feedback">
                        STATUS IS INVALID!
                    </div> */}
                </div>
            </div>
        </form>
      </Modal.Body>

      <Modal.Footer>
        {/* <Button variant="danger" onClick={() => {deleteProduct(data.id); setroomDescription({id: -1})}}>Delete</Button> */}
        <Button className='confirmBtn' variant="contained" type="submit" id="signup" name="update" onClick={data.number === undefined ? addRoom : editRoom} style={{color: 'black' , backgroundColor: '#D2B58D'}}>
          Xác nhận
        </Button>
        {data.number !== undefined && <Button className='delBtn' variant="contained" type="submit" id="signup"  name="update" onClick={deleteRoom} style={{color: 'black' , backgroundColor: '#D2B58D'}}>
                  Xóa
        </Button>}
      </Modal.Footer>
    </Modal.Dialog>
    </div>
  )
}