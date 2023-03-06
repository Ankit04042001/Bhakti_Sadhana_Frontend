import React, { forwardRef, useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { reg_otp, reset_otp } from '../authFunctions/authFunction';
import { loadingContext } from '../component/Context';

const Otp = forwardRef((props, ref) => {
    const [otp, setOtp] = useState(null);
    const [password, setPassword] = useState(null);
    const [password2, setPassword2] = useState(null);
    const [error, setError] = useState(null);
    const {isLoading, setIsLoading} = useContext(loadingContext);

    const location = useLocation();
    const navigate = useNavigate();

    const handleChangeOtp = ((e) => {
        var regex = new RegExp("\\d{1,6}$");
        if (regex.test(e.target.value) && e.target.value <= 999999) {
            setOtp(e.target.value);
        } else if (e.target.value === "") {
            setOtp(e.target.value);
            e.target.value = ""
        } else {
            e.target.value = otp
        }
    });

    const handlePasswordChange = ((e)=>{
        setPassword(e.target.value);
    });

    const handlePasswordChange2 = ((e)=>{
        setPassword2(e.target.value);
    });

    const handleSubmit = (async (e) => {
        e.preventDefault();
        setIsLoading(true);
        if(location.state==='forget-password'){
            const res = await reset_otp(otp, password, password2);
            if(res.data.status){
                setIsLoading(false);
                alert('Password Changed Successfully.')
                navigate('/');
            }else{
                setIsLoading(false);
                console.log(res.data.message);
            }
        }
        if(location.state==='register'){
            const res = await reg_otp(otp);
            if(res.data.status){
                setIsLoading(false);
                alert(res.data.message);
                navigate('/');
            }else{
                setError(res.data.message);
            }
        }
    })

    return (
        <div>
            <div className='error'>{error}</div>
            <Form className={'otp-form ' + props.IsActiveOtpForm} ref={ref} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="otp">
                    <Form.Label >Otp</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Otp" onChange={handleChangeOtp} required />
                </Form.Group>
                {
                    (location.state === 'forget-password') ? (<div>
                        <Form.Group className="mb-3" controlId="reset-password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" onChange={handlePasswordChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="reset-confirm-password">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Confirm Password" onChange={handlePasswordChange2} required />
                        </Form.Group>

                    </div>) : <span className='d-none'></span>
                }
                <Button type='submit' disabled={isLoading}> Submit </Button>
            </Form>
        </div>
    )
});

export default Otp