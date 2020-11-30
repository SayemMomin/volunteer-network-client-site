import React from 'react';
import { useForm } from 'react-hook-form';

const AddEvent = () => {
    
    const { register, handleSubmit, watch, errors } = useForm();
    
    const onSubmit = data => {
        //onsole.log('form submitted', data)
        
        const newEvent = {volunteerEvent: data}
  
      fetch('https://obscure-everglades-48660.herokuapp.com/createEvent', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newEvent)
      })
      .then(res => res.json())
      .then(data => {
        if(data){
          alert('Your ordere successfully')
        }
      })
  };
    return (
        <div>
            <h2>Create New Event</h2>
            <form onSubmit={handleSubmit(onSubmit)}> 
            <div className="form-group">     
            
                <div className=" mb-3">
                <label htmlFor="validationServer01">Event Title</label>
                <input type="text" name="name"  className="form-control " id="validationServer01" ref={register({ required: true })}></input>
                {errors.name && <span className="text-danger">Name is required</span>}
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
                
                <input type="submit" value="Create A New Event"  className="form-control btn btn-primary" id="validationServer03" aria-describedby="validationServer03Feedback" ></input>
                
                </div>               
            </div> 
            </div>
            </form>
        </div>
    );
};

export default AddEvent;