import React from 'react';
import '../styles/Portfolio.css';

import Project from '../components/Project';

import slack from '../assets/Slack2.PNG';
import netflix from '../assets/Netflix.PNG';



function Portfolio() {
  
    return (
      <>
      
      <h3 className="Portfolio_title">Projects I've worked on</h3>
      
      <div className="Portfolio">
          <Project left image={slack} title="Slack Clone" projectLink="https://slack-clone-8aa72.web.app/"  technologies="ReactJs, Firebase, Bootstrap, JSX, CSS, Cloud-Firestore, Firebase-Authentication" discription="This is a chat application which has UI similar to Slack. A user can login with their google ID. User can send message in various arbitrary channels. This project was built using ReactJS and Firebase. It uses authentication and database services from firebase. " />
          <Project  image={netflix} title="Netflix Clone" projectLink="https://netflixclone-artik.web.app/" technologies="ReactJs, Firebase, Bootstrap, JSX, CSS, REST Api" discription="This project replicates the user-interface of Netflix. When you tap on any movie title it will play the trailer of that movie. The data of movies is fetched from an external REST API using axios. The site is hosted on firebase hosting." />
         
         
      </div>
      
      </> 
  )
}

export default Portfolio


// https://netflixclone-artik.web.app/
