import React from 'react';
import './AreYouReady.css'
import Button from '@mui/material/Button';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';



const newsEvents = [
    {
        id: 1,
        img: "https://i.ibb.co/HTk7xHW/news1.jpg",
        description: "Micro Entrepreneurship Program for the Poor Women in Bangladesh",
        img1: "https://i.ibb.co/Q9RRNtC/works2.jpg" ,
        name: "Micro Entrepreneurship Program for the Poor Women in Bangladesh", 
        description2 : "We are happy to share that we have signed an MoU with Zhumka Bangladesh (NGO with 20 years long working experience in Bangladesh) to work for the development of poor/unprivileged women in rural areas of Bangladesh. Study shows that a huge number of skilled and semi skilled women are struggling for livelihood in rural level (especially in our target areas) who are very much passionate to do something. They just need skills up-gradation, business management training and a sustainable platform to do so. The support we are planning to do is the best way for them to move forward and improve their living standard. Zhumka Bangladesh has already provided skills training to them on Tailoring, Jute Products, Bamboo Products, Cane Products, Wooden Products, Cultural handicrafts etc. to 5000 (approx.) women and they are eagerly waiting to start their own business in small scale!",
        objectivesName: "Our planning:",
        list1: "To provide a suitable Basic Business Training",
        list2: "To provide Basic Machineries, Raw Materials, Working Capital to start their own business",
        list3: "To establish market place in Bangladesh and Japan to introduce their quality products and ensure a regular sale zone",
        list4: "To provide necessary guidance for business operations, they will be under our close monitoring and follow up for 3 years",
       

        name1: "",
        description3: "This is a donation base project. Any one can contribute in this project who is eager to support poor women for their better livelihood. You can donate for at least 1 woman!As we are working on Entrepreneurship Development to solve the social problems, we have decided to help them to overcome their obstacles and free them from poverty.MoU signing ceremony was held on 26th January 2021 at Zhumka Bangladesh Office, Dhaka, Bangladesh. Ms Shirin Jahan, Executive Director of Uddog o Uddokta Foundation, Bangladesh, Ms Samira Hossain, Director, Uddog o Uddokta Japan Association, Ms Sharmin Kabir Bina, Executive Director of Zhumka Bangladesh, Ms Shegufta Nadi, Director of Zhumka Bangladesh and Mr Monir Hossain, Program Manager of Zhumka Bangladesh was present in the ceremony."


    },
    {
        id: 2,
        img: "https://i.ibb.co/HTk7xHW/news1.jpg",
        description: "Internship opportunity for enthusiastic people",
        img1: "https://i.ibb.co/QKZ6sKm/today1.jpg" ,
        name: "Internship opportunity for enthusiastic people", 
        description2 : "Just having a good degree is no longer enough to secure that all-important graduate job offer in today’s world. Pertinent work experience is now just as valuable as your degree and exam results when it comes to building a successful career. As a result, internships have become an essential way to help candidates make themselves stand out. An internship is an official program offered by organisations to help train and provide work experience to students and recent graduates. The concept of working as an intern began a long time ago but has drastically evolved over the years. Internships first started as a labourer who would take on young individuals and teach them their art or trade. In exchange for being taught a skill, the trainee would agree to work for the labourer for a specific time. Even then, the purpose of an internship or rather an apprenticeship was to gain new skills to be able to obtain future work. This is a virtual internship offer by Uddog o Uddokta Japan Association which is a registered social organization in Japan",
       
        duration: "6 months/200 hours",
        period: "01 May to 30 October 2022",
        WorkMedium: "Online",
Reporting: "Online meeting",
Department: "ICT, Project Management",
FinancialManagement: "Branding & Promotions, and Research.",
NoOfVacancies: "05",
Eligibility: "University students from Japan/Bangladesh",
Application: "Please send an email writing your interest along with CV",
Email: "info.uujp@gmail.com"

       

    },
    {
        id: 3,
        img: "https://i.ibb.co/HTk7xHW/news1.jpg",
        description: "Annual Conference 2022: 50 Years of Japan-Bangladesh relationship and opportunities for future collaboration",
        img1: "https://i.ibb.co/z22c2ZK/newsEve3.jpg" ,
        name: "Annual Conference 2022: 50 Years of Japan-Bangladesh relationship and opportunities for future collaboration", 
        description2: "Japan -Bangladesh relationship was established on 10 February 1972. In 2022 It will reach 50 years. Japan is already recognized as the best friendly country for Bangladesh considering diplomatic relations and foreign aid. We believe that this relationship will be stronger and more impactful in near future. Japanese ideology for industry and social development always inspires us and we want to make it more impactful for the young generations. On this remarkable occasion, we would like to organize two days international conference virtually to show the 50 years' achievements of Japan-Bangladesh relationships as well as the future opportunities to move forward. Bangladeshi students in Japan, any Bangladeshi citizen in Japan, and Bangladeshi students from Bangladesh and any interested person will be able to participate in this conference. Japanese and Bangladeshi professors, researchers, entrepreneurs, community leaders, youth leaders will be the speaker to share the success and future opportunities from different perspectives. Also, we will publish a hardcopy souvenir to make an archive in one book bringing some remarkable stories of this relationship as well as stories of successful Bangladeshi entrepreneurs in Japan.",
        Date: "2-3 July 2022",
Time: "9.00 am to 5.00 pm, Japan Time",
Venue: "Online",
objectiveName: "Objectives:",
    list1: "Highlight the 50 years support of Japan for Bangladesh",
    list2: "To make an understanding for Bangladeshi people especially for youth about status and future trend of Japan-Bangladesh relationship impact",
    list3: "To make a learning statement from Japanese economic miracle and social development for the Bangladeshi people",
    list4: "To find out the new opportunities for future collaboration through knowledge and resource exchange between Bangladesh and Japan",
        name1: "Outline",
        description3: "Two days conference will be held in online for them, who are doing or interested to do entrepreneurial activity. There will be 10 sessions to cover 10 topics relevant to the title. Participants will be able to know the previous success and future opportunity and they will be able to plan for their future work for business or social development initiatives. They will get direction how to design their entrepreneurship to work with Japan for the economic and social development of Bangladesh and strengthen relationship between Bangladesh and Japan. We will also highlight SDG issue. We are expecting registered participants from Japan about 200 and from Bangladesh about 300 in total 500 from diverse background including students, teacher, researcher, housewife, businessman, job holder, social activist, government officials. We will publish a souvenir covering the success stories of Bangladeshi entrepreneurs in japan as well as some articles about the previous success and future opportunities of Japan-Bangladesh relationship."


    }
]
const AreYouReady = () => {
    return (
        <div data-aos="zoom-in-up" className='AreYouReady'>
            <div>
            <h2 className='text-white'>Anyone Can Be a Volunteer. Also You</h2>
          <p className='areyouready-text text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Labore qui totam sunt veritatis id adipisci corrupti mollitia assumenda quo! Aliquid iusto unde quas suscipit cum <br /> laudantium tenetur mollitia alias impedit!</p>
<Button><Nav.Link className="style-member-1 hover-underline-animation" as={HashLink} to="/MemberForm"><span className='style-member'>BECOME A MEMBER</span></Nav.Link>
</Button>
            </div>
   
        </div>
    );
};

export default AreYouReady;