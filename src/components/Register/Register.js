import React, { useContext, useEffect, useState } from 'react';
import './Register.css'
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import fakeData from '../../fakeData/fakeData';
import Admin from '../Admin/Admin';
import RegisterDetail from '../RegisterDetail/RegisterDetail';



const Register = () => {
    const [loggedInVolunteer, setLoggedInVolunteer] = useContext(UserContext)
    const [tasks, setTasks] = useState({})
    const history = useHistory()
    const {id} = useParams()
    // console.log(id) 

  const { register, handleSubmit, watch, errors } = useForm();

    useEffect(() => {
        fetch('http://localhost:5000/volunteerTask/'+id)
        .then(res => res.json())
        .then(data => setTasks(data))
    }, [id])

    const onSubmit = data => { 
        const volunteerDetail = {...loggedInVolunteer, volunteerInfo: tasks, registerDate: new Date()}
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
        history.push('/registerDetail'); 
        
    };

    // console.log(tasks.name)

  return (    
      <div>
        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>

            <input name="name" defaultValue={loggedInVolunteer.name} ref={register({ required: true })} placeholder="Full Name"/>     
                {errors.name && <span className="error">Full Name is required</span>}

            <input name="email" defaultValue={loggedInVolunteer.email} ref={register({ required: true })} placeholder="Email"/>     
                {errors.email && <span className="error">Email is required</span>}

            <input name="date" ref={register({ required: true })} placeholder="Date"/>     
                {errors.date && <span className="error">Date is required</span>}

            <input name="description" ref={register({ required: true })} placeholder="Description"/>     
                {errors.description && <span className="error">Description is required</span>}

            <input name="task" defaultValue={tasks.name} ref={register({ required: true })} placeholder="Organize books at the library."/>     
                {errors.task && <span className="error">Volunteer Tasks is required</span>}        
        
            <input type="submit" />
        </form>
        {/* <RegisterDetail/> */}
    </div>
  );
};

export default Register;