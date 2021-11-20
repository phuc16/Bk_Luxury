import { Grid, } from '@material-ui/core';
import Controls from "./components/controls/Controls";
import { useForm, Form } from './components/useForm';

const initialFValues = {
    firstName: '',
    lastName: '',
    email: '',
    emailConfirm: '',
    password: '',
    passwordConfirm: '',
    country: '',
    phoneNumber: '',
    dob: null,
    showPassword: false
}

export default function SignUp() {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('firstName' in fieldValues)
            temp.firstName = fieldValues.firstName ? "" : "This field is required."
        if ('lastName' in fieldValues)
            temp.lastName = fieldValues.lastName ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = fieldValues.email ? ((/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(String(fieldValues.email).toLowerCase()) ? "" : "Email is invalid") : "This field is required."
        if ('emailConfirm' in fieldValues)
            temp.emailConfirm = fieldValues.emailConfirm ? (fieldValues.emailConfirm === fieldValues.email ? "" : "Emails don't match") : "This field is required."
        if ('password' in fieldValues)
            temp.password = fieldValues.password ? ((/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/).test(fieldValues.password) ? "" : "Please select a password between 8 to 16 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character") : "This field is required."
        if ('passwordConfirm' in fieldValues)
            temp.passwordConfirm = fieldValues.passwordConfirm ? (fieldValues.passwordConfirm === fieldValues.password ? "" : "Passwords don't match") : "This field is required."
        if ('country' in fieldValues)
            temp.country = fieldValues.country ? "" : "This field is required."
        if ('phoneNumber' in fieldValues)
            temp.mobile = temp.phoneNumber = fieldValues.phoneNumber ? ((/^[0-9]\w{0,10}$/).test(fieldValues.phoneNumber) ? "" : "Phone number is not valid.") : "This field is required."
        if ('dob' in fieldValues)
            temp.dob = fieldValues.dob !== null ? "" : "This field is required."
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
        resetForm
    } = useForm(initialFValues, true, validate);
    
    const handleSubmit = e => {
        e.preventDefault()
        if (validate()){
            alert(`${values.firstName}, ${values.lastName}, ${values.email}`)
            resetForm()
        }
    }

    return (
        <Form onSubmit={handleSubmit} style={{marginTop: '64px'}}>
            <Grid container>
                <Grid item>
                    <Controls.Input
                        label="First Name *"
                        name="firstName"
                        value={values.firstName}
                        type="input"
                        onChange={handleInputChange}
                        error={errors.firstName}
                    />
                    <Controls.Input
                        label="Last Name *"
                        name="lastName"
                        value={values.lastName}
                        type="input"
                        onChange={handleInputChange}
                        error={errors.lastName}
                    />
                    <Controls.Input
                        label="Email address *"
                        name="email"
                        value={values.email}
                        type="email"
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Input
                        label="Verify email address *"
                        name="emailConfirm"
                        value={values.emailConfirm}
                        type="email"
                        onChange={handleInputChange}
                        error={errors.emailConfirm}
                    />
                    <Controls.Input
                        label="Password *"
                        name="password"
                        value={values.password}
                        type="password"
                        onChange={handleInputChange}
                        error={errors.password}
                    />
                    <Controls.Input
                        label="Verify password *"
                        name="passwordConfirm"
                        value={values.passwordConfirm}
                        type="password"
                        onChange={handleInputChange}
                        error={errors.passwordConfirm}
                    />
                    <Controls.Input
                        label="Country/Region *"
                        name="country"
                        value={values.country}
                        type="input"
                        onChange={handleInputChange}
                        error={errors.country}
                    />
                    
                    <Controls.Input
                        label="Phone Number *"
                        name="phoneNumber"
                        value={values.phoneNumber}
                        type="number"
                        onChange={handleInputChange}
                        error={errors.phoneNumber}
                    />
                    <Controls.DatePicker
                        label="Date of birth *"
                        name="dob"
                        value={values.dob}
                        onChange={handleInputChange}
                        error={errors.dob}
                    />
                    <div>
                        <Controls.Button
                            type="submit"
                            text="Sign Up Now" />
                        
                        <Controls.Button
                            text="Reset"
                            onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}