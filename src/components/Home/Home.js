import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import VolunteerTasks from '../VolunteerTasks/VolunteerTasks';
import background from '../../images/backgroud.jpg'
import { Grid } from '@material-ui/core';

const Home = () => {
    const [volunteerTasks, setVolunteerTasks] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/volunteerTasks')
        .then(res => res.json())
        .then(data => setVolunteerTasks(data))
    }, [])
    return (        
        <div style={{background:`linear-gradient(to bottom,
                 rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)),
                 url(${background}) `, height:'496px'}}>                   

                <Header/>

                <div className='banner d-flex flex-column justify-content-center align-items-center mt-3'>
                    <h2>I GROW BY HELPING PEOPLE IN NEED</h2>
                    <div className="input-group pt-2 w-25">
                        <input type="text" className="form-control" placeholder="Search food items" aria-label="Search food items" aria-describedby="button-addon2"></input>
                        <div className="input-group-append">
                            <button className="btn btn-primary " type="button" id="button-addon2">Search</button>
                        </div>
                    </div>
                </div>
                
                <div className='container' style={{marginTop:'70px'}}>
                    <Grid container item xs={12} spacing='4' justify='center'  style={{ textAlign:'center', margin:'auto'}}>
                    {   
                        volunteerTasks.map(event=>{
                            let colors=['#3F90FC','#FFBD3E','#FF7044', '#cc6fb5e0'];
                            const random = Math.floor(Math.random()*4)
                            return(
                                <Grid item xs={12} sm={6} md={3} key={event._id}>
                                
                                    <VolunteerTasks event={event} myColor={colors[random]} ></VolunteerTasks>
                                </Grid>
                            )
                        })
                    }
                    </Grid>
                </div>           
            </div>       
    );
};

export default Home;