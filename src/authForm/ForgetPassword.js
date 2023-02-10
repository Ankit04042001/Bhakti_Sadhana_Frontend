import React, { useContext, useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { reset_password } from '../authFunctions/authFunction';
import { loadingContext } from '../component/Context';

const ForgetPassword = (props) => {
    const [email, setEmail] = useState(null);
    const [error, setError] = useState(null);
    const {isLoading, setIsLoading} = useContext(loadingContext);
    const navigate = useNavigate()

    const handleChangeEmail = ((e)=>{
        setEmail(e.target.value);
    })

    const handleSubmit = (async (e)=>{
        e.preventDefault();
        setIsLoading(true);
        const res = await reset_password(email);
        if(res.data.status){
            setIsLoading(false);
            navigate('/otp',{state : 'forget-password', replace:true});

        }else{
            setIsLoading(false);
            setError(res.data.message);
        }
    })

    return (
        <div>
            <div className='error'>{error}</div>
            <Form className={'forget-password-form '+props.IsActiveForgetPasswordForm} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="forget-password-email">
                    <Form.Label >Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Your Email" onChange={handleChangeEmail} required/>
                </Form.Group>
                <Button type='submit' disabled={isLoading}> Submit </Button>
            </Form>
        </div>
    )
};

export default ForgetPassword