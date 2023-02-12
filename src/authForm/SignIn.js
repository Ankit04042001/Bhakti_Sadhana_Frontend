import React, {useContext, useState } from 'react'
import {Form, Button} from 'react-bootstrap'
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { authContext, loadingContext } from '../component/Context';
import {login} from '../authFunctions/authFunction';



const SignIn = (props) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);
    const {isLoading, setIsLoading} = useContext(loadingContext);
    const location = useLocation();
    

    const user = useContext(authContext);
    const navigate = useNavigate()

    const handleEmailChange = ((e)=>{
        setEmail(e.target.value)
    });

    const handlePasswordChange = ((e)=>{
        setPassword(e.target.value);
    });

    const handleSubmit = (async(e)=>{
        e.preventDefault();
        setIsLoading(true);
        const res = await login(email, password);
        
        if(res.data.status){
            setIsLoading(false);
            user.setUser(res.data.data.first_name);
            navigate('/', {replace:true});
        }else{
            setIsLoading(false);
            setError(res.data.message);
            navigate('/error', {replace:true});
            
        }
    });


    return (
        <div>
            <div className='error'>{error}</div>
            <Form className={'sign-in-form '+props.IsActiveSignInForm} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="sign-in-email">
                    <Form.Label >Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Your Email" onChange={handleEmailChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="sign-in-password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" onChange={handlePasswordChange} required/>
                </Form.Group>
                <Link className='forget-password' to='/forget-password' replace={true} >Forget Password</Link>
                <Button type='submit' disabled={isLoading}> Submit </Button>
            </Form>

        </div>
    )
};

export default SignIn