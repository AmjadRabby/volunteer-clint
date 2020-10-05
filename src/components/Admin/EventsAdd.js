import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { Button } from '@material-ui/core';
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const EventAdd = () => {
      const [loggedInVolunteer, setLoggedInVolunteer] = useContext(UserContext);
      setLoggedInVolunteer(false);

     const [selectedDate, setSelectedDate] = useState(
       new Date()
     );

     const handleDateChange = (date) => {
       setSelectedDate(date);
      };

      const addEvent = (event) => {
          console.log(event);
      }
  
    return (
      <div className="eventPage">
        <form
          onSubmit={addEvent}
          className="form"
        >
          <label htmlFor="title">Event Title</label>
          <br />
          <input type="text" name="title" id="" />
          <br />
          <br />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Event Date"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
          <br />
          <br />
          <label htmlFor="img">Upload image</label>
          <br />
          <input type="file" name="image" id="" />
          <br />
          <br />
          <label htmlFor="eventDetail">Description</label>
          <br />
          <textarea name="eventDetail" id="" cols="30" rows="6"></textarea>
          <br />
          <br />
          <Button type="submit" color="primary" variant="contained">
            Submit
          </Button>
        </form>
      </div>
    );
};

export default EventAdd;