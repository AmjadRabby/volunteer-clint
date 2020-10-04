
import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const VolunteerTasks = ({task}) => {
    const history = useHistory()
    const {name, image, _id} = task;

    const handleRegister = (id) => {
        // console.log(id)
        history.push(`/register/${id}`);
    }
    return (
        <div className="col-md-3 mb-5 category-task">            
            <Card onClick={() => handleRegister(_id)}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                <Card.Title><h5>{name}</h5></Card.Title>            
                </Card.Body>            
            </Card>
        </div>
    );
};

export default VolunteerTasks;