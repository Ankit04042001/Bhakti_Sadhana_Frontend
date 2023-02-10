import React, {useEffect, useRef, useState} from 'react';
import { Modal, Container, Row, Col } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ForgetPassword from '../authForm/ForgetPassword';
import Otp from '../authForm/Otp';
import SignIn from '../authForm/SignIn';
import SignUp from '../authForm/SignUp';
import '../css/auth.css'


const Auth = (props) => {    
    const location  = useLocation();
    const navigate = useNavigate();

    const [IsActiveSignInForm, setIsActiveSignInForm] = useState('');
    const [IsActiveSignUpForm, setIsActiveSignUpForm] = useState('');
    const [IsActiveForgetPasswordForm, setIsActiveForgetPasswordForm] = useState('');
    const [IsActiveOtpForm, setIsActiveOtpForm] = useState('');

    const handleSignInForm = ()=>{
        setIsActiveSignInForm('active');
        setIsActiveSignUpForm('');
        setIsActiveForgetPasswordForm('');
        setIsActiveOtpForm('');
    }

    const handleSignUpForm = ()=>{
        setIsActiveSignUpForm('active');
        setIsActiveSignInForm('');
        setIsActiveForgetPasswordForm('');
        setIsActiveOtpForm('');
    }

    const handleForgetPasswordForm =(()=>{
        setIsActiveSignInForm('');
        setIsActiveSignUpForm('');
        setIsActiveForgetPasswordForm('active');
        setIsActiveOtpForm('');
    });

    const handleOtpForm = (()=>{
        setIsActiveSignInForm('');
        setIsActiveSignUpForm('');
        setIsActiveForgetPasswordForm('');
        setIsActiveOtpForm('active');
    });

    useEffect(()=>{
        if(location.pathname.search('sign-in') != -1){
            props.handleShow(true);    
            handleSignInForm();
        }
        if(location.pathname.search('sign-up') != -1){
            props.handleShow(true);    
            handleSignUpForm();
        }
        if(location.pathname.search('forget-password') != -1){
            props.handleShow(true);    
            handleForgetPasswordForm();
        }
        if(location.pathname.search('otp') != -1 ){
            if(location.state=='forget-password' || location.state=='register'){
                props.handleShow(true);    
                handleOtpForm();
            }else{
                navigate('/');
            }
        }
        
    });

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton className={'sign-in-header '+ IsActiveSignInForm} >
                <Modal.Title>Please Login To Continue</Modal.Title>
            </Modal.Header>
            <Modal.Header closeButton className={'sign-up-header '+ IsActiveSignUpForm} >
                <Modal.Title>Create Your Account</Modal.Title>
            </Modal.Header>
            <Modal.Header closeButton className={'forget-password-header '+ IsActiveForgetPasswordForm} >
                <Modal.Title>Forget Password</Modal.Title>
            </Modal.Header>
            <Modal.Header closeButton className={'otp-header '+IsActiveOtpForm} >
                <Modal.Title>Enter Otp</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <div className='main-body'>
                        <div className={'heading '+(IsActiveSignInForm || IsActiveSignUpForm)} >
                            <Row>
                                <Col><Link to='/sign-in' replace={true} className={'sign-in '+ IsActiveSignInForm}>Sign In</Link></Col>
                                <Col><Link to='/sign-up' replace={true} className={'sign-up '+ IsActiveSignUpForm}>Sign Up</Link></Col>
                            </Row>
                        </div>
                        <SignIn IsActiveSignInForm={IsActiveSignInForm} handleForgetPasswordForm={handleForgetPasswordForm}/>
                        <SignUp IsActiveSignUpForm={IsActiveSignUpForm} handleOtpForm={handleOtpForm}/>
                        <ForgetPassword IsActiveForgetPasswordForm={IsActiveForgetPasswordForm} handleOtpForm={handleOtpForm}/>
                        <Otp IsActiveOtpForm={IsActiveOtpForm}/>

                    </div>
                </Container>
            </Modal.Body>
        </Modal>
    )
}

export default Auth