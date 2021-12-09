import React ,{ useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Achievement from './Achievement/Achievement';
import './Achievements.css'

const Achievements = () => {
    const [achievements, setAchievements] = useState([]);
    useEffect(()=>{
        fetch('./achievements.json')
        .then(res => res.json())
        .then(data => setAchievements(data))
    })
    return (
       
        <div className="achievements  py-5" id="achievements">
        <Row xs={1} md={4} className="container mx-auto">

{
            achievements.map(achievement => <Achievement key={achievements.id} achievement={achievement}></Achievement>)
        }

</Row>
    </div>
    );
};

export default Achievements;