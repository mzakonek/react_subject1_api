import React from 'react';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import User from './User';

import { Link } from 'react-router-dom';



export default class UserList extends React.Component {
    state = {
        users: [],
        ready: false,
        userPerPage: 10
    };
    componentDidMount() {
        fetch("https://randomuser.me/api/?results=10")
        .then(response => {return response.json()})
        .then(data => {
            setTimeout(() => this.setState({ ready: true, users: data.results}), 4000);
        })
        .catch(error => console.error(error));
    }

    render() {
        return(
            <div>
                <ReactPlaceholder type='text' rows={this.state.userPerPage} ready={this.state.ready}>
                    {this.state.users.map(user => (
                        <div key={user.login.uuid}>
                            <Link to={{pathname: `/user/${user.login.uuid}`, userData: user}}>
                                <User data={user} />
                            </Link>
                        </div>
                    ))}
                </ReactPlaceholder>
            </div>
        )
    }
}
