import React, { useContext, useState } from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Offcanvas, Button } from 'react-bootstrap';
import MenuItem from './MenuItem';

import '../css/header.css';
import { authContext } from './Context';
import { LockOpenOutlined, LockOutlined } from '@mui/icons-material';

const Header = () => {
  const [showUser, setShowUser] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { user, logout } = useContext(authContext)
  const handleCloseUser = () => setShowUser(false);
  const handleShowUser = () => setShowUser(true);
  const handleCloseMenu = () => setShowMenu(false);
  const handleShowMenu = () => setShowMenu(true);

  return (
    <>
      <div className='header'>
        <div className='logo'>
          BHAKTI_SADHANA
        </div>
        <div className='buttons'>
          <Button className='user' onClick={handleShowUser}><PersonOutlineOutlinedIcon className='user-icon' /> </Button>
          <Button className='menu' onClick={handleShowMenu}><MenuIcon className='menu-icon' /></Button>
        </div>
      </div>
      <Offcanvas show={showUser} onHide={handleCloseUser} placement='end' className="userSidebar">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Hello {user ? user : 'User'}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
          this is show
        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas show={showMenu} onHide={handleCloseMenu} className='menuSidebar'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <MenuItem name="Home" url='/'>
            <HomeIcon className='icon' />
          </MenuItem>
          <MenuItem name="Tasks" url='/tasks'>
            <FormatListNumberedIcon className='icon'/>
          </MenuItem>

          {
            user ? (
              <MenuItem name="Logout" url='/logout'>
                <LockOpenOutlined className='icon' />
              </MenuItem>

            ) : (
              <MenuItem name="Login" url='sign-in'>
                <LockOutlined className='icon' />
              </MenuItem>
            )
          }
        </Offcanvas.Body>
      </Offcanvas>

    </>


  )
}

export default Header


