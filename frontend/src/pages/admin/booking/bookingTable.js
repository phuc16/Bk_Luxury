import BootstrapTable from "react-bootstrap-table-next";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap'
import { useState } from "react";
import axios from 'axios';
import './bookingTable.css'
import * as React from 'react';
import paginationFactory from "react-bootstrap-table2-paginator";
import './script';

import moment from 'moment';


export default function Product() {
  const [datas, setData] = React.useState([]);
  React.useEffect(()=>{
    axios.get('http://localhost:8080/booking')
    .then(response=>{
      // console.log(response.data);
      for (let i = 0; i < response.data.length; i++) {
        const checkIn = new Date(response.data[i].checkIn);
        const checkOut = new Date(response.data[i].checkOut);
        response.data[i] = {...response.data[i], checkIn: moment(checkIn).format('DD-MM-YYYY'), checkOut: moment(checkOut).format('DD-MM-YYYY')};
      }
      console.log(response.data);
      setData(response.data);
    })
    .catch(error=>{
      console.log(error);
    })
  }, [])  
  const [bookingDescription, setBookingDescription] = useState({tog: -1})
  
  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
    },
    {
      dataField: "accountId",
      text: "AccountID",
      sort: true,
    },
    {
      dataField: "roomNumber",
      text: "RoomNumber",
      sort: true,
      
    },
    {
      dataField: "checkIn",
      text: "CheckIn",
      sort: true,

    },
    {
      dataField: "checkOut",
      text: "CheckOut",
      sort: true,
    }
    
    
  ];


  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      setBookingDescription(row)
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
      {bookingDescription.tog === -1 ? <p/> : <BookingDescription data={bookingDescription} setBookingDescription={setBookingDescription} />}
      <button className="btn btn-outline-danger add-btn" type="submit" id="signup"  name="update" onClick={() => {setBookingDescription({tog: 0})}}>
            Add booking
      </button>
    </div>
  );
}


function BookingDescription(props) {

  const {data, setBookingDescription} = props
  const initialFValues = {
    id:data.id,
    accountId: data.accountId,
    roomNumber: data.roomNumber,
    checkIn: data.checkIn,
    checkOut: data.checkOut,
  }
  const [values, setValues] = useState(initialFValues);

  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({
        ...values,
        [name]: value
    })
  }

  const deleteBooking = e =>{
    setBookingDescription({tog: -1})
    axios.delete(`http://localhost:8080/booking/${values.id}`)
    .then(response => {
      console.log(response);
      window.location.reload();
    })
    .catch(error => {
      console.log(error);
      alert('Deleting failed');
    })
  }

  const addBooking = e =>{
    axios.post(`http://localhost:8080/booking/`, {
        id:values.id,
        accountId: values.accountId,
        roomNumber: values.roomNumber,
        checkIn: values.checkIn,
        checkOut: values.checkOut,
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

  const editBooking = e => {
    axios.put(`http://localhost:8080/booking/${values.id}`, {
      accountId: values.accountId,
      roomNumber: values.roomNumber,
      checkIn: values.checkIn,
      checkOut: values.checkOut,
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
      <Modal.Header style={{backgroundColor: '#D2B58B', height: "45px"}} closeButton onClick={() => setBookingDescription({tog:-1})}>
        <Modal.Title>
          {data.id === undefined ? 'Booking Creating':'Booking Updating'}  
          {/* Room Updating */}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form class="row g-3 needs-validation infoForm" novalidate >
            <div class="mb-4 row ">
                <label class="form-label col-sm-3" for="id">ID</label>
                <div class="col-sm-9">
                    <input type="number"  readOnly={data.id !== undefined} onChange={handleInputChange}  class="form-control" name="id" id="id" placeholder="" required defaultValue={data.id}/>
                    <div class="invalid-feedback">
                        ID IS INVALID!
                    </div>
                </div>
            </div>
            <div class="mb-4 row ">
                <label class="form-label col-sm-3" for="accountId">AccountID</label>
                <div class="col-sm-9">
                    <input type="number" onChange={handleInputChange} class="form-control" name="accountId"  id="accountId" placeholder="" required defaultValue={data.accountId}/>
                    <div class="invalid-feedback">
                        AccountID IS INVALID!
                    </div>
                </div>
            </div>
            <div class="mb-4 row ">
                <label class="form-label col-sm-3" for="roomNumber">Room Number</label>
                <div class="col-sm-9">
                    <input type="number" onChange={handleInputChange} class="form-control" name="roomNumber"  id="roomNumber" placeholder="" required  defaultValue={data.roomNumber}/>
                    <div class="invalid-feedback">
                        Room Number IS INVALID!
                    </div>
                </div>
            </div>
            <div class="mb-4 row ">
                <label class="form-label col-sm-3" for="checkIn">Check In</label>
                <div class="col-sm-9">
                    <input type="date" onChange={handleInputChange} class="form-control" name="checkIn"  id="checkIn" placeholder="" required  defaultValue={data.id === undefined ? '' : moment(moment(data.checkIn, 'DD-MM-YYYY').toDate()).format('YYYY-MM-DD')}/>
                    <div class="invalid-feedback">
                      Check In IS INVALID!
                    </div>
                </div>
            </div>
            <div class="mb-4 row ">
                <label class="form-label col-sm-3" for="checkOut">Check Out</label>
                <div class="col-sm-9">
                    <input type="date" onChange={handleInputChange} class="form-control" name="checkOut"  id="checkOut" placeholder="" required  defaultValue={data.id === undefined ? '' : moment(moment(data.checkOut, 'DD-MM-YYYY').toDate()).format('YYYY-MM-DD')}/>
                    <div class="invalid-feedback">
                        Check Out IS INVALID!
                    </div>
                </div>
            </div>
            
        </form>
      </Modal.Body>

      <Modal.Footer>
        {/* <Button variant="danger" onClick={() => {deleteProduct(data.id); setBookingDescription({id: -1})}}>Delete</Button> */}
        <button class="btn btn-outline-primary update-btn" type="submit" id="signup" name="update" onClick={data.id === undefined ? addBooking : editBooking}>
                  Xác nhận
        </button>

        {data.id !== undefined && <button class="btn btn-outline-danger del-btn" type="submit" id="signup"  name="update" onClick={deleteBooking}>
                  Xóa
        </button>}
      </Modal.Footer>
    </Modal.Dialog>
    </div>
  )
}