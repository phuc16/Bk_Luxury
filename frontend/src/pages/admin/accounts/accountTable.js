import BootstrapTable from "react-bootstrap-table-next";
//import 'bootstrap/dist/css/bootstrap.min.css';
import {CloseButton, Modal} from 'react-bootstrap'
import { useState } from "react";
import axios from 'axios';
import './accountTable.css'
import * as React from 'react';
import paginationFactory from "react-bootstrap-table2-paginator";
import './script';
import '../css/table.css';
import Button from '@mui/material/Button';
import moment from 'moment';
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from "@mui/material";

export default function Product() {
  const [datas, setData] = React.useState([]);
  React.useEffect(()=>{
    axios.get('/api/account')
    .then(response=>{
      console.log(response.data);
      for (let i = 0; i < response.data.length; i++) {
        const dob = new Date(response.data[i].dob);
        response.data[i] = {...response.data[i], dob: moment(dob).format('DD-MM-YYYY')};
      }
      console.log(response.data);
      setData(response.data);
    })
    .catch(error=>{
      console.log(error);
    })
  }, [])  
  const [accountDescription, setAccountDescription] = useState({tog: -1})
  
  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
    },
    {
      dataField: "firstName",
      text: "First Name",
      sort: true,
    },
    {
      dataField: "lastName",
      text: "Last Name",
      sort: true,
      
    },
    {
      dataField: "email",
      text: "Email",
      sort: true,

    },
    {
      dataField: "password",
      text: "Password",
      sort: true,
    },
    {
      dataField: "dob",
      text: "Birth",
      sort: true,
    },
    {
      dataField: "phone",
      text: "Phone Number",
      sort: true,
    },
    {
      dataField: "country",
      text: "Country",
      sort: true,
    },
    {
      dataField: "isAdmin",
      text: "Admin",
      sort: true,
    }
    
    
  ];


  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      setAccountDescription(row)
    },
  };

  return (
    <div>
      <div className="table-custom room-table">
      <Typography variant="h4" style={{fontWeight: 'bold', marginBottom:'30px'}}> MANAGE ACCOUNT</Typography>
         {/* https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/about.html  */}
        <BootstrapTable  
          keyField="id" data={datas} 
          columns={columns} 
          rowEvents={rowEvents}
          pagination={paginationFactory({ sizePerPage: 7 })}
        />
      </div>
      {accountDescription.tog === -1 ? <p/> : <AccountDescription data={accountDescription} setAccountDescription={setAccountDescription} />}
      <Button variant="contained" type="submit" id="signup"  name="update" onClick={() => {setAccountDescription({tog: 0})}} style={{color: 'black' , backgroundColor: '#D2B58D'}}>
        Add Account
      </Button>
    </div>
  );
}


function AccountDescription(props) {

  const {data, setAccountDescription} = props
  const initialFValues = {
    id: data.id,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.password,
    dob: data.dob,
    phone: data.phone,
    country: data.country,
    isAdmin: data.isAdmin
  }
  const [values, setValues] = useState(initialFValues);

  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({
        ...values,
        [name]: value
    })
  }

  const deleteAccount = e =>{
    setAccountDescription({tog: -1})
    axios.delete(`/api/account/${values.id}`)
    .then(response => {
      console.log(response);
      window.location.reload();
    })
    .catch(error => {
      console.log(error);
      alert('Deleting failed');
    })
  }

  const addAccount = e =>{
    axios.post(`/api/account`, {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      dob: values.dob,
      phone: values.phone,
      country: values.country,
      isAdmin: values.isAdmin
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
      
    <Modal.Dialog className="popup-content account-table">
      <Modal.Header style={{backgroundColor: '#D2B58B', height: "45px"}} onClick={() => setAccountDescription({tog:-1})}>
        <Modal.Title className='dataTitle'>
          {data.id === undefined ? 'Account Creating':'Account Deleting'}  
          {/* Booking Updating */}
          <CloseIcon className='closeI' />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form autocomplete="off" class="row g-3 needs-validation infoForm accountForm" novalidate >
            {data.id === undefined ? '' : <div class="mb-4 row ">
                <label class="form-label col-sm-3" for="id">ID</label>
                <div class="col-sm-9">
                    <input type="number" readOnly={data.id !== undefined} onChange={handleInputChange}  class="form-control" name="id" id="id" placeholder="" required defaultValue={data.id}/>
                    
                </div>
            </div>}
            <div class="mb-4 row ">
                <label class="form-label col-sm-3" for="firstName">First Name</label>
                <div class="col-sm-9">
                    <input type="text" readOnly={data.id !== undefined} onChange={handleInputChange} class="form-control" name="firstName"  id="firstName" placeholder="" required  defaultValue={data.firstName}/>
                  
                </div>
            </div>

            <div class="mb-4 row ">
                <label class="form-label col-sm-3" for="lastName">Last Name</label>
                <div class="col-sm-9">
                    <input type="text" readOnly={data.id !== undefined} onChange={handleInputChange} class="form-control" name="lastName"  id="lastName" placeholder="" required defaultValue={data.lastName}/>
                    
                </div>
            </div>

            <div class="mb-4 row ">
                <label class="form-label col-sm-3" for="email">Email</label>
                <div class="col-sm-9">
                    <input type="email" readOnly={data.id !== undefined} onChange={handleInputChange} class="form-control" name="email"  id="email" placeholder="" required defaultValue={data.email}/>
                </div>
            </div>

            <div class="mb-4 row ">
                <label class="form-label col-sm-3" for="password">Password</label>
                <div class="col-sm-9">
                    <input type="password" readOnly={data.id !== undefined} onChange={handleInputChange} class="form-control" name="password"  id="password" placeholder="" required defaultValue={data.id === undefined ? '' : data.password}/>
                </div>
            </div>
            
            <div class="mb-4 row ">
                <label class="form-label col-sm-3" for="dob">Birth</label>
                <div class="col-sm-9">
                    <input type="date" readOnly={data.id !== undefined} onChange={handleInputChange} class="form-control" name="dob"  id="dob" placeholder="" required  defaultValue={data.id === undefined ? '' : moment(moment(data.dob, 'DD-MM-YYYY').toDate()).format('YYYY-MM-DD')}/>
                </div>
            </div>

            <div class="mb-4 row ">
                <label class="form-label col-sm-3" for="phone">Phone</label>
                <div class="col-sm-9">
                    <input type="text" readOnly={data.id !== undefined} onChange={handleInputChange} class="form-control" name="phone"  id="phone" placeholder="" required defaultValue={data.phone}/>
                </div>
            </div>

            <div class="mb-4 row ">
                <label class="form-label col-sm-3" for="country">Country</label>
                <div class="col-sm-9">
                    <input type="text" readOnly={data.id !== undefined} onChange={handleInputChange} class="form-control" name="country"  id="country" placeholder="" required defaultValue={data.country}/>
                </div>
            </div>

            <div class="mb-4 row ">
                <label class="form-label col-sm-3" for="isAdmin">Admin</label>
                <div class="col-sm-9">
                    <input type="number" readOnly={data.id !== undefined} onChange={handleInputChange} class="form-control" name="isAdmin"  id="isAdmin" placeholder="" required defaultValue={data.isAdmin}/>
                </div>
            </div>
            
        </form>
      </Modal.Body>

      <Modal.Footer>
        {/* <Button variant="danger" onClick={() => {deleteProduct(data.id); setAccountDescription({id: -1})}}>Delete</Button> */}
        {data.id === undefined && <Button className='confirmBtn' variant="contained" type="submit" id="signup" name="update" onClick={ addAccount} style={{color: 'black' , backgroundColor: '#D2B58D'}}>
          Xác nhận
        </Button>}
        {data.id !== undefined && <Button className='delBtn' variant="contained" type="submit" id="signup"  name="update" onClick={deleteAccount} style={{color: 'black' , backgroundColor: '#D2B58D'}}>
                  Xóa
        </Button>}
      </Modal.Footer>
    </Modal.Dialog>
    </div>
  )
}