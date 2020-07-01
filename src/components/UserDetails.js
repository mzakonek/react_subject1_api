import User from './User';
import UserMap from './UserMap'
import React from 'react';

export default function userDetails(props) {
    console.log(props);
    console.log(props.location.userData.location.coordinates)
    return(
        <div>
            <User data={props.location.userData} />
            <UserMap location={props.location.userData.location.coordinates}/>
        </div>
    )
}