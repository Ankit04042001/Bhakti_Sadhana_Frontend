import React, { useState, useRef, useEffect, useContext } from 'react';
import MenuDiv from './MenuDiv';
import Auth from './Auth'
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import FormatListNumberedOutlinedIcon from '@mui/icons-material/FormatListNumberedOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../css/footer.css';
import { RequireNotAuth } from '../RequireAuth';
import { authContext } from './Context';


const Footer = () => {
    const [menuIndex, setMenuIndex] = useState(0);
    const [menuListCount, setMenuListCount] = useState(0);
    const [scrollWidth, setScrollWidth] = useState(0);
    const [show, setShow] = useState(false);
    const user = useContext(authContext);
    const menuDivRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {

        setMenuListCount(menuDivRef.current.children.length);
        setScrollWidth(200);
        if (menuDivRef.current.children.length <= 6) {
            menuDivRef.current.parentElement.children[1].style.display = 'none';
            menuDivRef.current.parentElement.children[2].style.display = 'none';
        }
    }, [])

    const handleScrollLeft = async () => {
        if (menuListCount >= 6) {
            console.log(menuDivRef.current.children[0].offsetWidth);
            menuDivRef.current.style = `transform : translateX(-${scrollWidth * (menuIndex + 1)}px); transition : transform 0.5s ease-in-out`;
            setMenuIndex(menuIndex + 1)
            setMenuListCount(menuListCount - 1)
            console.log(menuDivRef.current.children[12]);

        }
    }

    const handleScrollRight = () => {
        if (menuIndex > 0) {
            console.log(menuDivRef.current.children[menuListCount].offsetWidth)
            menuDivRef.current.children[menuIndex - 1].style.display = 'block'
            menuDivRef.current.style = `transform : translateX(-${scrollWidth * (menuIndex - 1)}px); transition : transform 0.5s ease-in-out`;
            setMenuIndex(menuIndex - 1)
            setMenuListCount(menuListCount + 1)
            console.log(menuIndex);
        }
    }

    const handleShow = () => {
        setShow(true);
    }
    const handleClose = () => {
        setShow(false);
        navigate('/');

    }

    return (
        <>
            <Auth show={show} handleShow={handleShow} handleClose={handleClose} />
            <div className='menu-div-wrapper'>
                <div className='wrapper' ref={menuDivRef}>
                    <Link to='/' replace={true}>
                        <MenuDiv>
                            <CampaignOutlinedIcon />
                            Notice
                        </MenuDiv>
                    </Link>
                    <Link to='/' replace={true}>
                        <MenuDiv>
                            <FormatListNumberedOutlinedIcon />
                            Tasks
                        </MenuDiv>
                    </Link>
                    {!user.user?
                        <Link to='/sign-in' replace={true}>
                            <MenuDiv handleShow={handleShow}>
                                <LockOutlinedIcon />
                                Login
                            </MenuDiv>
                        </Link>
                        :
                        <Link to='/logout' replace={true}>
                            <MenuDiv handleShow={handleShow}>
                                <LockOpenOutlinedIcon />
                                Logout
                            </MenuDiv>
                        </Link>
                        }
                    <Link to='/' replace={true}>
                        <MenuDiv>
                            < CalendarMonthOutlinedIcon />
                            Attendence
                        </MenuDiv>
                    </Link>
                    <Link to='/' replace={true}>
                        <MenuDiv>
                            <InsertPhotoOutlinedIcon />
                            Photos
                        </MenuDiv>
                    </Link>
                    <Link to='/' replace={true}>
                        <MenuDiv>
                            <EmailOutlinedIcon />
                            Contact
                        </MenuDiv>
                    </Link>
                    <Link to='/' replace={true}>
                        <MenuDiv>
                            <CampaignOutlinedIcon />
                            Notice
                        </MenuDiv>
                    </Link>
                </div>
                <Button className='left-button' onClick={handleScrollLeft}><ChevronLeftOutlinedIcon /></Button>
                <Button className='right-button' onClick={handleScrollRight}><ChevronRightOutlinedIcon /></Button>
            </div>
        </>

    )
}

export default Footer

