import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const VolunteerDetail = (props) => {
    //console.log(props.volunterinfo);
    const volunterinfo = props.volunterinfo
    const{img, title, moderator, id} = volunterinfo;


    let colors=['#3F90FC','#FFBD3E','#FF7044', '#cc6fb5e0'];
    const random = Math.floor(Math.random()*4)
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 text-center">
            <Link to={`/selected/${id}`} style={{textDecorationStyle: 'none'}}>
            <div className="mb-3" style={{width: '100%'}}>
                <img src={img} alt="" className="img-fluid" />
                <h5 style={{background:colors[random], hover: 'none', paddingTop:"15px", height:"70px",position:"relative",  marginTop: "-6px", color:"white"}}>{title} </h5>
            </div>
            </Link>
        </div>
    );
};

export default VolunteerDetail;