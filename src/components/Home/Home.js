import React, { useEffect, useState } from 'react';
import Admin from '../Admin/Admin';
import VolunteerTasks from '../VolunteerTasks/VolunteerTasks';

const Home = () => {
    const [volunteerTasks, setVolunteerTasks] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/volunteerTasks')
        .then(res => res.json())
        .then(data => setVolunteerTasks(data))
    }, [])
    return (
        <div className="container">
            <h1>This is a Home</h1>
          
            <div className=" row">
            {
                volunteerTasks.map(task => <VolunteerTasks key={task._id} task={task} />)
            }
            </div>
            
        </div>
    );
};

export default Home;