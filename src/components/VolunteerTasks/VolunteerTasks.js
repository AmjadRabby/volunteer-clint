
import { CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
// import { useStyles } from '@material-ui/pickers/views/Calendar/SlideTransition';
import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';


const useStyles = makeStyles({
    root: {
      width: 250,
      height:270,
    },
  });

const VolunteerTasks = (props) => {
     const [loggedInVolunteer, setLoggedInVolunteer] = useContext(UserContext)
    const history = useHistory()

    const handleRegister = (id) => {
        // setLoggedInVolunteer({...loggedInVolunteer, event:props.event})
        history.push(`/register/${id}`);
    }


    const classes = useStyles();
    const {image, eventName, _id}=props.event
    return (
        <div className="">            

            <Card onClick={() => handleRegister(_id)} className={classes.root} style={{background:props.myColor}}>
            <CardActionArea >
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height='200'
                image={image}
                title="Contemplative Reptile"
                />
                <CardContent style={{color:'white'}}>
                <Typography gutterBottom >
                    {eventName}
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>

        </div>
    );
};

export default VolunteerTasks;