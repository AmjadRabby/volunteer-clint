import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../App';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

const AdminEvent = () => {
  const [loggedInVolunteer, setLoggedInVolunteer] = useContext(UserContext);
  setLoggedInVolunteer(false);

    const [regisPerson, setRegisPerson] = useState([]);

   const loadData = () => {
      fetch("http://localhost:5000/adminEvent")
        .then((res) => res.json())
        .then((data) => setRegisPerson(data));
    };

    loadData();

    const deleteItem = (id ) => {
      console.log(id)
        fetch("https://localhost:5000/adminDelate/" + id, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
    }
    
    return (
      <div className="volunteerPage">
        <h2>Event register list</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Reg. Date</TableCell>
              <TableCell>Program</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {regisPerson.map(d => (
              <TableRow>
                <TableCell>{d.name}</TableCell>
                <TableCell>{d.email}</TableCell>
                <TableCell>
                  {new Date(d.form.date).toDateString("dd/MM/yyyy")}
                </TableCell>
                <TableCell>{d.eventName}</TableCell>
                <TableCell>
                  <DeleteForeverOutlinedIcon
                    className="deleteIcon"
                    onClick={() => deleteItem(`${d._id}`)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
};

export default AdminEvent;