import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Top from '../Home/Top/Top';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import EventBanner from './EventBanner/EventBanner';
import EventPage from './EventPage/EventPage';


const ViewMoreEvents = () => {
    const [event, setEvent] = useState({})
    const {id} = useParams();

    useEffect(()=>{
        const url = `https://dry-inlet-45409.herokuapp.com/newsEvents/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setEvent(data));
    }, [])
    
    return (
        <div>
            <Top></Top>
            <Navigation></Navigation>
            <EventBanner event={event}></EventBanner>
            <EventPage event={event}></EventPage>
            
            
           
        </div>
    );
};

export default ViewMoreEvents;