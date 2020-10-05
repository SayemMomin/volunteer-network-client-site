import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../App';
import VolunteerSelectedOptions from '../VolunteerSelectedOptions/VolunteerSelectedOptions';

const EventSelected = () => {
    const [eventSelected, seteventSelected] = useState([])
    const [loggedInUser, setLoggedInUser] =useContext(UserContext)

    

    useEffect(() => {
        fetch('https://obscure-everglades-48660.herokuapp.com/eventSelected?email='+ loggedInUser.email, 
        )
        .then(res => res.json())
        .then(data => {
            seteventSelected(data)
            console.log(data);
        })
    }, [])
    return (
        
        <div className="container">
            <h4>You have: {eventSelected.length} eventSelected</h4>
            <div className="d-flex flex-wrap">
            {
                 eventSelected.map(event => <VolunteerSelectedOptions key={event._id} eventSelected= {event}></VolunteerSelectedOptions> )
            }
           </div>
        </div>
    );
};

export default EventSelected;