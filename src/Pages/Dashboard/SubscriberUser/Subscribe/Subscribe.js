import React from 'react';

const Subscribe = (props) => {
    const {email} = props.subscribeUser;
    return (
        <div>
            <h6>{email}</h6>
        </div>
    );
};

export default Subscribe;