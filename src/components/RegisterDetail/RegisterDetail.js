import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const RegisterDetail = () => {
    const [loggedInVolunteer, setLoggedInVolunteer] = useContext(UserContext)
    const [registers, setRegisters] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/volunteerRegister?email='+loggedInVolunteer.email)
        .then(res => res.json())
        .then(data => setRegisters(data))
    }, [])

    return (
        <div>
            
            {
                    registers.map(register => <li key={register._id}>Register: {register.volunteerInfo.name} </li>)
            }
        </div>
    );
};

export default RegisterDetail;