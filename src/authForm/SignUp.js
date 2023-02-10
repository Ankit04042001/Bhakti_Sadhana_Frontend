import React, {useState, useContext } from 'react';
import {Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { register } from '../authFunctions/authFunction';
import { loadingContext } from '../component/Context';

const SignUp = (props) => {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [password2, setPassword2] = useState(null);
    const [error, setError] = useState(null);
    const {isLoading, setIsLoading} = useContext(loadingContext);

    const navigate = useNavigate();

    const handleChangeFirstName = ((e)=>{
        setFirstName(e.target.value)
    });
    const handleChangeLastName = ((e)=>{
        setLastName(e.target.value)
    });
    const handleEmailChange = ((e)=>{
        setEmail(e.target.value)
    });

    const handlePasswordChange = ((e)=>{
        setPassword(e.target.value);
    });
  
    const handlePasswordChange2 = ((e)=>{
        setPassword2(e.target.value);
    });

    const handleSubmit = (async(e)=>{
        e.preventDefault();
        setIsLoading(true);
        const res = await register(firstName, lastName, email, password, password2);
        if(res.data.status){
            setIsLoading(false);
            navigate('/otp',{state:'register', replace:true});
        }else{
            setIsLoading(false);
            setError(res.data.message);
        }

    });


    return (
        <div>
            <div className='error'>{error}</div>
            <Form className={'sign-up-form '+props.IsActiveSignUpForm} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="first_name">
                    <Form.Label >First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your First Name" onChange={handleChangeFirstName} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="last_name">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Last Name" onChange={handleChangeLastName} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="sign-up-email">
                    <Form.Label >Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Your Email" onChange={handleEmailChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="sign-up-password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" onChange={handlePasswordChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="confirm-password">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Confirm Password" onChange={handlePasswordChange2} required/>
                </Form.Group>
                <Button type='submit' disabled={isLoading}> Submit </Button>
            </Form>
        </div>
    )
};

export default SignUp