import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import VolunteerForm from '../VolunteerForm/VolunteerForm';

const VolunteerDetail = (props) => {
    //console.log(props.volunterinfo);
    const volunterinfo = props.volunterinfo
    const{img, title, moderator, id} = volunterinfo;

    const history = useHistory()
    const handleVolunteerSubmit = (id) => {
        history.push(`/selected/${id}`)
    }
    return (
        <div className="">
            <div className="card container ml-1 mb-1" style={{width: '18rem'}}>
            <img src={img} className="card-img-top" alt="..."></img>
            <div className="card-body">
            <h5 className="card-title">{title} </h5>
                <button onClick={() => handleVolunteerSubmit(id)}  className="btn btn-primary">{title} </button>
            </div>
            </div>

            
        </div>
    );
};

export default VolunteerDetail;