import React from 'react';
import { useParams } from 'react-router-dom';





const ViewMoreEvents = () => {
    const {id} = useParams();
    return (
        <div>
            <h2>this is update user</h2>
            <p>small {id}</p>
        </div>
    );
};

export default ViewMoreEvents;