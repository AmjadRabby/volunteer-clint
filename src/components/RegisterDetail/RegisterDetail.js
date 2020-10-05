import { Grid } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './RegisterDetail.css';


const RegisterDetail = () => {
    const [loggedInVolunteer, setLoggedInVolunteer] = useContext(UserContext)
    const [registers, setRegisters] = useState([])
    

    useEffect(() => {
        fetch('https://limitless-wave-42171.herokuapp.com/volunteerRegister?email='+loggedInVolunteer.email)
        .then(res => res.json())
        .then(data => setRegisters(data))
    }, [])


    const delateEventHandler = (id) => {
        fetch(`https://limitless-wave-42171.herokuapp.com/delate/${id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                const existingEvents = registers.filter(data=>data._id !== id)                
                setRegisters(existingEvents)
            }
           
        })     
    }
    return (
        <div className="">
            <Header/>
            <div style={{width:'70vw', margin:'auto', marginTop:'70px'}}>            
            <div>
            <Grid container item xs={12} spacing='5'>
                {
                    registers.map(eventItem=>{
                       return(
                        
                        <Grid item xs={12} md={6} key={eventItem._id}>
                            <div style={{display:'flex',boxShadow:'0px 2px 5px lightGray', width:'400px',padding:'20px' }}>
                                <div>
                                    <img style={{height:'130px', width:'140px'}} src={eventItem.events.image} alt=""/>
                                </div>
                                <div style={{marginLeft:'10px', width:'100%'}}>
                                    <h3>{eventItem.events.eventName}</h3>
                                    <h4>{eventItem.form.date}</h4>
                                    <div style={{textAlign:'right', marginLeft:'20px'}}>
                                        <button onClick={()=> delateEventHandler(eventItem._id)}  className='event-cancel'>
                                            cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        
                       )
                    })
                }
            </Grid>
            </div>
        </div>

            
        </div>
    );
};

export default RegisterDetail;