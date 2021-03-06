import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Subscribe from './Subscribe/Subscribe';

const SubscriberUser = () => {
    const [subscribeUsers, setSubscribeUser] = useState([])
    useEffect(() => {
        fetch('https://dry-inlet-45409.herokuapp.com/users')
        .then(res => res.json())
        .then(data => setSubscribeUser(data));
    },[])
    return (
        <div>
            <h2>Subscriber Users {subscribeUsers.length}</h2>
          {
              subscribeUsers.map(subscribeUser => <Subscribe subscribeUser={subscribeUser}></Subscribe> )
          }
        </div>
    );
};

export default SubscriberUser;