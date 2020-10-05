import React, { useState } from 'react';

const VolunteerRegListShow = (props) => {
    const regList = props.regList
    const{name, email, selectedEvent} = regList;
  

    

    return (
        <div className="container border border-primary ml-1 mb-1">
           
           
            <div className="pr-2"><p> Name: {name} </p> </div>
            <div className="pr-2"><p>Email: {email} </p> </div>
            <div className="pr-2"><p>Event: {selectedEvent} </p> </div>         
        </div>
    );
};

export default VolunteerRegListShow;