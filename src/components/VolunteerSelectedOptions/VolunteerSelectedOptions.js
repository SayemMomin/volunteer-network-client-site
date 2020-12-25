import React from 'react';

const VolunteerSelectedOptions = (props) => {
    const eventSelected = props.eventSelected

    const {img, title, name, _id} = eventSelected

    const handleDelete = (event, id) => {

        event.target.parentNode.style.display="none";
        fetch(`https://obscure-everglades-48660.herokuapp.com/delete/${id}`, {
            method: "DELETE"
        })
    }

    return (
        <div>
           <div className="card m-2 p-2" style={{width: '18rem'}}>
            <div className="card-body">
                <img src={img} alt=""className="img-fluid" />
            <h5 className="card-title">{title} </h5>
            <p className="card-text">Volunteer Name: {name} </p>
            <button onClick={(e) =>  handleDelete(e, _id)} className="btn btn-danger">Delete</button>
            </div>
            </div>
            
           
        </div>
    );
};

export default VolunteerSelectedOptions;