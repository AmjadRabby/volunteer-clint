import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import fakeData from '../../fakeData/fakeData';
import Admin from '../Admin/AdminPanel';
import RegisterDetail from '../RegisterDetail/RegisterDetail';


import { FormControl, FormGroup, Input, InputLabel } from '@material-ui/core';
import logo from '../../images/Group 1329.png'



const Register = () => {

    const [loggedInVolunteer, setLoggedInVolunteer] = useContext(UserContext)
    const [events, setEvents] = useState({})
    const history = useHistory()
    const {id} = useParams()
   
    const [form, setForm]=useState({eventName: loggedInVolunteer.event?.name, date:new Date().toDateString(), })
//   const { register, handleSubmit, watch, errors } = useForm();

    useEffect(() => {
        fetch('http://localhost:5000/volunteerTask/'+id)
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [id])

    const submitFormHandler = (event) => { 
       
        const volunteerDetail = {...loggedInVolunteer,  events, form}

        console.log('form submitted', volunteerDetail)

        fetch('http://localhost:5000/addRegister', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(volunteerDetail)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('Register successfully');
            }


        })
        event.preventDefault()
        history.push('/registerDetail');
    
        
    };

// console.log(tasks.name)

return (
    <div >
        <div  style={{width:"200px", margin:'auto', padding:'20px'}}>
            <img style={{height:'50px'}} src={logo} alt=""/>
        </div>
        <form onSubmit={submitFormHandler} >
        <FormGroup style={{width:'370px', margin:'auto',padding:'30px',
                border:'1px solid lightgray', borderRadius:'5px'}}>
            <h3 style={{marginTop:'0'}}>Register as a Volunteer</h3>
            
                <FormControl style={{marginBottom:'10px'}}>
                    <InputLabel htmlFor="name">Full Name</InputLabel>
                    <Input onBlur={(event)=>setForm({...form,name:event.target.value})} name='name' style={{color:'#3d3b3b'}} id="name" aria-describedby="my-helper-text" value={loggedInVolunteer.name}/>
                </FormControl>
                <FormControl style={{marginBottom:'10px'}}>
                    <InputLabel htmlFor="email">Email address</InputLabel>
                    <Input onBlur={(event)=>setForm({...form,email:event.target.value})} name='email' style={{color:'#3d3b3b'}} id="email" aria-describedby="my-helper-text" value={loggedInVolunteer.email}/>
                </FormControl>
                <FormControl style={{marginBottom:'10px'}}>
                    <InputLabel htmlFor="date">Date</InputLabel>
                    <Input onBlur={(event)=>setForm({...form,date:event.target.value})} name='date' style={{color:'#3d3b3b'}} id="date" aria-describedby="my-helper-text" value={new Date().toDateString()}/>
                </FormControl>
                <FormControl style={{marginBottom:'10px'}}>
                    <InputLabel htmlFor="description">Description</InputLabel>
                    <Input onBlur={(event)=>setForm({...form,description:event.target.value})} style={{color:'#3d3b3b'}} id="description" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl style={{marginBottom:'10px'}}>
                <InputLabel htmlFor="description"></InputLabel>
                    <Input onBlur={(event)=>setForm({...form,eventName:event.target.value})} name='organizationName' style={{color:'#3d3b3b'}} id="organizationName" aria-describedby="my-helper-text" value={events.eventName} />
                </FormControl>

            
            <button type='submit' style={{marginTop:'20px', borderRadius:'5px'}} 
                className="btn btn-primary">
                Registation
            </button>

        </FormGroup>
        </form>
    </div>
);
};

export default Register;