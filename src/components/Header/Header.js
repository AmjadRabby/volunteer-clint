import React, { useContext } from 'react';
import './Header.css';
import logos from '../../images/Group 1329.png';
import { Link } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInVolunteer, setLoggedInVolunteer] = useContext(UserContext)
    return (
        <div>
            <Grid container item xs={12} style={{height:'60px', padding:'10px 20px'}} alignItems='center' >
                <Grid item xs={7}>
                    <img style={{height:'60px'}} src={logos} alt="volunteer network logo"/>
                </Grid>
                <Grid container item xs={5} justify='space-around'>
                    <Link to='/' className='link'><b>Home</b></Link>
                    <Link to='/donation' className='link'><b>Donation</b></Link>
                    <Link to='/eventsAdd' className='link'><b>Events</b></Link>
                    <Link to='/blog' className='link'><b>Blog</b></Link>
                    <Link to='/login' className='link'>
                        {
                                loggedInVolunteer.email ? <p>{loggedInVolunteer.name}</p> :  <Button  variant="contained" style={{background:'#3F90FC', color:'white'}}>
                                Register
                            </Button>
                        }                        
                    </Link>
                    <Link to='/adminPanel' className='link'>
                        <Button variant="contained" style={{background:'#434141', color:'white'}}>
                            Admin
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
};

export default Header;