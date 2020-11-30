import React, { useState, useEffect } from 'react';
import VolunteerRegListShow from '../VolunteerRegListShow/VolunteerRegListShow';
import { useForm } from 'react-hook-form';
import deleteIcon from '../../Images/trash.png';
import loader from '../../Images/loader.gif';


const VolunteerRegList = () => {
    const [volunteerList, setVolunteerList] = useState([])
    useEffect(() => {
        fetch('https://obscure-everglades-48660.herokuapp.com/volunteerRegList')
        .then(res => res.json())
        .then(data => {
            setVolunteerList(data)
            console.log(data);
        })
    },[])

    const handleDelete = (event, id) => {

        event.target.parentNode.parentNode.parentNode.style.display="none";
        fetch(`https://obscure-everglades-48660.herokuapp.com/delete/${id}`, {
            method: "DELETE"
        })
    }


    return (
        <div>
        <div className='container' style={{backgroundColor:"#F4F7FC",padding:"30px"}}>
           <h4>Volunteer List</h4>
         <div style={{overflow:"auto", backgroundColor: "white",padding:"20px 5px",}}>

        
          <table id="activityTable" className="table table-borderless">
              
                  <tr>
                      <th>Name</th>
                      <th>Email Id</th>
                      <th>Date</th>
                      <th>Activity</th>
                      <th>Action</th>
                  </tr>
              
                  {
                     volunteerList.length > 0? volunteerList.map(activity=>
                        <tr>
                            <td>{activity.name}</td>
                            <td>{activity.email}</td>
                            <td>{activity.date}</td>
                            <td>{activity.title}</td>
                            <td>
                                <button onClick={(e)=>handleDelete(e,activity._id)} style={{border:"none"}}>
                                    <img id="deleteIcon" src={deleteIcon} alt="" width="50%" style={{color:"red"}} />
                                </button>
                             </td>
                        </tr>
                        
                        )
                        : <img style={{width: '100%', margin:"auto"}} src={loader} alt=""/> 
                  }
              
          </table>
         
          </div>
            </div>


                

        </div>
    );
};

export default VolunteerRegList;