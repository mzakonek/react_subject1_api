import React from 'react';
import Moment from 'react-moment';


export default class User extends React.Component {
    
    render() {
        const {
            name: { first: firstName, last: lastName },
            login: {uuid},
            location: { city, street },
            registered: { date: registrationDate },
            picture: {large: imagePath},
            email
        } = this.props.data;
        
        // check if variables were returned by the Api, set default values if not 
        const fullname = (firstName && lastName) ? `${firstName} ${lastName}` : 'Brak imienia i nazwiska';
        const address = (city && street.name) ? `Address: ${city}, ${street.name}` : 'Brak adresu';
        
        const dateFormatted = <Moment format="YYYY/MM/DD">{registrationDate}</Moment>;
        
        // console.log(this.props.data)

        return(
            <div className="row">
                <div className="column">
                    <h1>{fullname}</h1>
                    <p>{email}</p>
                    <p>{address}</p>
                    <p>Registration date: {dateFormatted}</p>
                </div>
                <div className="column">
                    <img src={imagePath} alt={`${firstName}${lastName}`} />
                </div>
            </div>
        )
    }
}

