import React, { useEffect, useState } from 'react';
//import volunteerData from '../../FakeData/VolunteerData';
import VolunteerDetail from '../VolunteerDetail/VolunteerDetail';

const Home = () => {

    const [volunteerinfo, setVolunteerinfo] = useState([])
    useEffect(() => {
       // fetch('https://obscure-everglades-48660.herokuapp.com/events')
        fetch('https://obscure-everglades-48660.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setVolunteerinfo(data))
    },[])
    
    return (
        <div className="row m-5">
            <div className="d-flex flex-wrap">
            {
                volunteerinfo.map(vInfo => <VolunteerDetail key={vInfo._id} volunterinfo={vInfo}></VolunteerDetail> )
            }
        </div>
        </div>
    );
};

export default Home;