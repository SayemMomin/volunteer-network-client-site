import React, { useEffect, useState } from 'react';


const VolunteerSelectedOptions = (props) => {
    const eventSelected = props.eventSelected

    const {email, selectedEvent, _id} = eventSelected

    const [event, setEvent] = useState([])

    const handleDelete = (id) => {
       
        fetch(`https://obscure-everglades-48660.herokuapp.com/delete/${id}`, {
            method: "DELETE"
        })
        .then(result => {
            console.log('successfully delete');
            
    })
    }

    return (
        <div>
           <div className="card m-2 p-2" style={{width: '18rem'}}>
            {/* <img src={img} className="card-img-top" alt="..."></img> */}
            <div className="card-body">
            <h5 className="card-title">{email} </h5>
            <p className="card-text">{selectedEvent} </p>
            
            </div>
            </div>
            <button onClick={() =>  handleDelete(_id)} className="btn btn-danger">Delete</button>
           
        </div>
    );
};

export default VolunteerSelectedOptions;