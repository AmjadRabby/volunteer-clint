import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData';

const Admin = () => {
    const [allRegisters, setAllRegisters] = useState([])

    const handleVolunteerTask = () => {
        // fetch('http://localhost:5000/addVolunteerItem', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'

        //     },
        //     body: JSON.stringify(fakeData)
        // })
    }

    useEffect(() => {
        fetch('http://localhost:5000/volunteerRegister')
        .then(res => res.json())
        .then(data => setAllRegisters(data))
    }, [])

    return (
        <div>
                <h3>This is a Admin </h3>
                <h4>All registers item {allRegisters.length} </h4>



                {
                    allRegisters.map(register => <li key={register._id}>Register: {register.volunteerInfo.name} </li>)
                }

                {/* <button onClick={handleVolunteerTask}>Add Volunteer Tasks </button> */}
        </div>
    );
};

export default Admin;