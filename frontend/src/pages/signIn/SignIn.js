import { Grid, } from '@material-ui/core';
import Controls from "./components/controls/Controls";
import { useForm, Form } from './components/useForm';

import {Link} from '@material-ui/core';

import {Link as PageLink} from 'react-router-dom';

import axios from 'axios';

const initialFValues = {
    email: '',
    password: '',
    isRemember: false
}

export default function SignIn() {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('email' in fieldValues)
            temp.email = fieldValues.email ? "" : "This field is required."
        if ('password' in fieldValues)
            temp.password = fieldValues.password ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    const {
        values,
        errors,
        setErrors,
        handleInputChange,
    } = useForm(initialFValues, true, validate);
    
    const handleSubmit = e => {
        e.preventDefault()
        if (validate()){
          const input = {
            email: values.email,
            password: values.password
          }
          axios.post('http://localhost:8080/account/login', { input })
          .then((response) => {
            if (response.data){
              alert(response.data);
            }
          })
          .catch((error) => {
              alert('Email or password is incorrect!')
          });
        }
    }

    return (
      <Grid container spacing={10} style={{marginTop: '64px'}}>
        <Grid item lg={6} md={6} sm={6}>
          <Form onSubmit={handleSubmit}>
            <h4>Please Sign In</h4>
            <Controls.Input
                label="Email or member number *"
                name="email"
                value={values.email}
                type="input"
                onChange={handleInputChange}
                error={errors.email}
            />
            <Controls.Input
                label="Password *"
                name="password"
                value={values.password}
                type="password"
                onChange={handleInputChange}
                error={errors.password}
            />
            <Controls.Checkbox
                name="isRemember"
                label="Remember Me"
                value={values.isPermanent}
                onChange={handleInputChange}
            />
            <div>
              <Controls.Button
                type="submit"
                text="Sign In" 
              />
            </div>
            <div>
            <Link href="#" underline="always" color="inherit">Reset Password</Link>
            </div>
          </Form>
        </Grid> 
        <Grid item lg={6} md={6} sm={5}>
          <div style={{
            textAlign: 'center',
            margin: '0 auto',
            padding: '10px'
          }}>
            <h4>You are not a member</h4>
            <p style={{ textAlign: 'left'}}>Experience travel the way it should be: personal and rewarding. Enjoy low member-exclusive rates and included Wi-Fi. Plus, earn points on every stay and redeem for Reward Nights, gift cards, and more.</p>
            <PageLink style={{
              textDecoration: 'none'
            }}
            to="/signup">             
              <Controls.Button
                type="submit"
                text="Sign Up Now" 
              />
            </PageLink>
          </div>
        </Grid>
      </Grid>
    )
}