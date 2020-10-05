import React, { useEffect, useState } from 'react';
//import volunteerData from '../../FakeData/VolunteerData';

const Admin = () => {
    const [volunteerinfo, setVolunteerinfo] = useState([])
    useEffect(() => {
        fetch('https://obscure-everglades-48660.herokuapp.com/events')
        //fetch('https://boiling-depths-13220.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setVolunteerinfo(data))
    },[])
    const handleAddtoDb = () =>{
        //const event = {};
        fetch('https://obscure-everglades-48660.herokuapp.com/addEvent', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(volunteerinfo)
        })
    }
    return (
        <div>
            <h1>Admin Panel</h1>
            <h2> Be Careful! Without Admin Permission, Don't something in this page, Please.</h2>
            <form action="">
                <p><span>Name</span><input type="text"/></p>
                <p><span>Price</span><input type="number"/></p>
                <p><span>Quantity</span><input type="text"/></p>
                <p><span>Image</span><input type="file"/></p>
            </form>
            <button onClick={handleAddtoDb} className="btn btn-danger" >Add to DataBase</button>
            
        </div>
    );
};

export default Admin;