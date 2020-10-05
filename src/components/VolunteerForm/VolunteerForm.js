import React, { useState, useContext, useEffect } from "react";
 
import "react-datepicker/dist/react-datepicker.css";
import { Link, useParams, useHistory } from "react-router-dom";
import { UserContext } from "../../App";
//import volunteerData from '../../FakeData/VolunteerData';
import { useForm } from "react-hook-form";

const VolunteerForm = () => {

    const [volunteerinfo, setVolunteerinfo] = useState([])
    useEffect(() => {
        fetch('https://obscure-everglades-48660.herokuapp.com/events')
        //fetch('https://boiling-depths-13220.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setVolunteerinfo(data))
    },[])

    const {title, id} = volunteerinfo;

    const [work, setWork] = useState({})

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();
    
    const onSubmit = data => {
        console.log('form submitted', data)
       
        const regDetails = {...loggedInUser, volunteerForm: data, selectedEvent: title}
        setWork(regDetails)
        if (data) {
            alert('Your Register successfully')
        }
        
    }

    const handleSelectedEvent = () =>{
        const selectedEvent = {...loggedInUser, ...work,}
        
        fetch('https://obscure-everglades-48660.herokuapp.com/addSelectedEvent', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(selectedEvent)
        })
    }

    return (
        <div className="container">
           

            <form onSubmit={handleSubmit(onSubmit)}> 
            <div className="form-group">     
            
                <div className=" mb-3">
                <label htmlFor="validationServer01">Full name</label>
                <input type="text" name="name" defaultValue={loggedInUser.name} className="form-control " id="validationServer01" ref={register({ required: true })}></input>
                {errors.name && <span className="text-danger">Name is required</span>}
                <br/>
                
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" name="email" defaultValue={loggedInUser.email}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={register({ required: true })}></input>
                {errors.name && <span className="text-danger">Email is required</span>}
                <br/>

                <label htmlFor="validationServer01">Date</label>
                <input type="date" name="date"  className="form-control" id="validationServer01" aria-describedby="emailHelp" ref={register({ required: true })}></input>
                {errors.date && <span className="text-danger">Date is required</span>}
                <br/>

                <div className=" mb-3">
                <label htmlFor="validationServer02">Description</label>
                <input type="text" name="description" className="form-control" id="validationServer02" ref={register({ required: true })}></input>
                {errors.description && <span className="text-danger">Description is required</span>}
                </div>
                <div className=" mb-3">
                
                <input type="submit" value="Register"  className="form-control btn btn-primary" id="validationServer03" aria-describedby="validationServer03Feedback" ></input>
                
                </div>               
            </div> 
            </div>
            </form>
            
            <Link to={"/eventSelected"}>
                <button onClick={handleSelectedEvent} className="btn btn-primary" type="submit">Check Your Event</button>
            </Link>


            
        </div>
    );
};

export default VolunteerForm;