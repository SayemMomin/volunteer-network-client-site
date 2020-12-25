import React, { useEffect, useState, useContext } from 'react';
import VolunteerDetail from '../VolunteerDetail/VolunteerDetail';
import loader from '../../Images/loader.gif';
import background from '../../Images/backgroud.jpg';
import { Button } from 'react-bootstrap';
import { EventContext } from '../../App';

const Home = () => {

    const [volunteerinfo] = useContext(EventContext)
    
    return (
        <>
         <div style={{background:`linear-gradient(to bottom,
                 rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)),
                 url(${background}) `, height:'496px'}}>
        <div style={{textAlign:'center', padding:'30px 0'}}>
                    <h2 style={{margin:'20px'}}>I GROW BY HELPING PEOPLE IN NEED</h2>
                    
                        
                            <input style={{width: "25%", fontSize: "20px", borderTopLeftRadius: '5px',borderBottomLeftRadius: '5px'}}
                                className='input border border-primary' type="text" placeholder="Search"/>
                            <button style={{fontSize: "20px", borderLeft: 'none', borderTopRightRadius: '5px',borderBottomRightRadius: '5px'}}
                                className='text-white bg-primary' type="submit">Search</button>
                        
                    
                </div>

        <div className="container m-auto">
            <div className="row">
            { volunteerinfo.length > 0 ?
               volunteerinfo.map(vInfo =>
               
               <VolunteerDetail key={vInfo._id} volunterinfo={vInfo}></VolunteerDetail> 
            )
              : <img style={{width: '50%', margin:"auto"}} src={loader} alt=""/> 
            }
        </div>
        </div>
        </div>
        </>
    );
};

export default Home;