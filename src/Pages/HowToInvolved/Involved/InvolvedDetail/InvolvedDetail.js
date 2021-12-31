import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Navigation from './../../../Shared/Navigation/Navigation';
import { Card } from 'react-bootstrap';



const activities = [
    {id:1,
     name: 'Donor',
     Description: 'Win your chance to donate for the sustainable development of society',
     img:'https://i.ibb.co/hcrWS31/Crowdfunding-concept-Social-business-fundraising-and-investing-into-new-ideas-Sponsorship-and-invest.jpg',
     joinTitle: 'Join As A Donor',
  
     img2:"https://i.ibb.co/100hmvM/112.jpg",
        heading: "Win your chance to donate for the sustainable development of society"
        ,
        name1: "Benefits",
        name2: "Eligibility",
        benefit1: "Giving to charity makes you feel good",
        benefit2: "Giving to charity strengthens personal values",
        benefit3: "It helps to protect your community",
        benefit4: "It helps to solve social problems and create larger impact for social development",
        benefit5: "Charity enables you to give more meaning to your life",
        
      eligibility1: "From any country",
      eligibility2: "Legal financial sources",

      heading2: "Enlistment as Donor",
      requestToFillup: "Please register here to become enlisted donor and to be a social change maker:",

      formLink: "https://docs.google.com/forms/d/e/1FAIpQLScNbaX7AWA9BhXA3C3UEh7zEeeRUeehEPYWdIakfwJkgo94Aw/viewform?embedded=true"
     
    },
    { id:2,
     name: 'Investor',
     Description: 'Opportunity to create a social impact through investing in youth innovations and dedications. ',
     img:'https://i.ibb.co/0mQDm93/final-Investor2.jpg',
     joinTitle: 'Join As An Investor',
     img2: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_529136403_312011.jpg",
     img:"https://thekashmirpress.com/wp-content/uploads/2021/10/investor-1.jpg",
        heading: "Opportunity to create a social impact through investing in youth innovations and dedications. You can be an enlisted investor with us to create larger and quick social impacts"
        ,
        name1: "Benefits",
        name2: "Eligibility",
        benefit1: "Meet interesting people with fascinating ideas",
        benefit2: "Support what you care about",
        benefit3: "High-Risk High Return",
        benefit4: "Diversifying Opportunities",
        benefit5: "Investment is all about securing the future and getting good returns in the coming years.",
        
      eligibility1: "From any country",
      eligibility2: "Legal financial sources",
      eligibility3: "Ability to take risk and interested on new initiatives",

      heading2: "Enlistment as Investor",
      requestToFillup: "Please register here to become enlisted angel investor:",

      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdFGn7FpJ46rYPlVvb5uBUzBm42xujo0HDoMlveSl1cCEYTgg/viewform?embedded=true"
    },
    {
     name: 'Mentor',
     Description: 'Are you an experienced individual who desires to contribute for entrepreneurship and social development? ',
     img:'https://i.ibb.co/KLw7NHd/Skilled-or-motivational-coach-lecturing-to-diverse-multiracial-students-or-businesspeople-in-a-face.jpg',
     joinTitle: 'Join As A Mentor',
     img2: "https://thumbs.dreamstime.com/b/mentor-word-cloud-concept-blackboard-45761001.jpg"
    },
    {
     name: 'Member',
     Description: 'Let’s work together for our self and social development through entrepreneurship',
     img:'https://i.ibb.co/hRxWVVz/final-Member.png',
     joinTitle: 'Join As A Member',
     img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_h1NLHuoIc6Kmg_f9ofcgm72sIFOkVs5MLCeJnc2OGPHkxXKR_yFpm1FzYEis0YNnvyo&usqp=CAU"
    },
    
 
 
 ]




const InvolvedDetail = () => {
    const activities = activities.filter(activity => activity.id === activity.id && activity.name === activity.name);
  

const {id} = useParams();

    return (
        <div>
        
         <Navigation></Navigation>
         {
 activities.filter(activity=> activity.id === activity.id && activity.name === activity.name)
         }
        
     
        </div> 
    );
};

export default InvolvedDetail;