import React from 'react';
import user from '../../Images/users.png';
import add from '../../Images/plus.png';
import { Container, Row, Col } from 'react-bootstrap';
import VolunteerRegList from '../VolunteerRegList/VolunteerRegList';
import { useState } from 'react';
import AddEvent from '../AddEvent/AddEvent';
import './SideBar.css'

const SideBar = () => {
    const [view,setView] = useState(true);
    return (
        <Container fluid style={{backgroundColor:"white", position:"relative",height:"600px",width:"100%",padding:"15px"}}>
         
         
           <Row style={{marginTop:"20px"}} >
               <Col sm={3} >
                 <button className="viewBtn pl-5"   onClick={()=>setView(true)}> <img src={user} alt="" width="20px"/>  Volunteer List</button>
                 <button className="viewBtn pl-5" onClick={()=>setView(false)}> <img src={add} alt="" width="20px"/>    Add Event</button>
               </Col>
               <Col sm={9}>
                    {
                        view?(<VolunteerRegList/>):(<AddEvent/>)
                    }
               </Col>
           </Row>
       </Container>
    );
};

export default SideBar;