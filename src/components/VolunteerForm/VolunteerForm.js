import React, { useState, useContext, useEffect } from "react";
 
import "react-datepicker/dist/react-datepicker.css";
import { Link, useParams, useHistory } from "react-router-dom";
import { UserContext, EventContext } from "../../App";
import { useForm } from "react-hook-form";
import logo from '../../Images/logo.png';

const VolunteerForm = () => {
    const { id } = useParams();
    const history = useHistory()
    let today = new Date().toISOString().substr(0, 10);

//     const [event, setEvent] = useState([])
//     useEffect(() => {
  
//       fetch('https://obscure-everglades-48660.herokuapp.com/events')
//       .then(res => res.json())
//       .then(data => setEvent(data))
//   },[])
const [event, setEvent] = useContext(EventContext)
  console.log(event);
    const selectedItem = event.filter(e => e.id == id)
    // console.log(selectedItem[0].title);

    const [loggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();
    
    const onSubmit = data => {
        //console.log('form submitted', data)
       
        const regDetails = {...data, img: selectedItem[0].img}
        fetch('https://obscure-everglades-48660.herokuapp.com/addSelectedEvent', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(regDetails)
        })   
        if (data) {
            history.push('/eventSelected')
        }
        
    }


    return (
        <div className="container" style={{width: "50%"}}>
        <Link to="/">
        <div style={{width:"200px", margin:'auto', paddingBottom: "15px"}}>
           <img src={logo} className="img-fluid" alt="" />
           </div></Link>
        <div className="" style={{width: "600px", borderRadius: "5px", backgroundColor: "#f2f2f2", padding: "20px"}}>
           

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
                <input type="date" name="date" defaultValue={today}  className="form-control"  ref={register({ required: true })}></input>
                {errors.date && <span className="text-danger">Date is required</span>}
                <br/>

                <div className=" mb-3">
                <label htmlFor="validationServer02">Description</label>
                <input type="text" name="description" className="form-control" id="validationServer02" ref={register({ required: true })}></input>
                {errors.description && <span className="text-danger">Description is required</span>}
                </div>
                <div className=" mb-3">
                <label htmlFor="validationServer02">Event Title</label>
                <input type="text" name="title" defaultValue={selectedItem[0].title}  className="form-control" id="validationServer02" ref={register({ required: true })}></input>
                {errors.title && <span className="text-danger">Event Title is required</span>}
                </div>
                <div className=" mb-3">
                
                <input type="submit" value="Register"  className="form-control btn btn-primary" id="validationServer03" aria-describedby="validationServer03Feedback" ></input>
                
                </div>               
            </div> 
            </div>
            </form>   
        </div>
        </div>
    );
};

export default VolunteerForm;