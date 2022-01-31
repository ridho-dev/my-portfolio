import React from 'react';
import profileImage from "../assets/img/bruh.jpeg";
import MyProfile from '../assets/data/MyProfile';

const Who = () => {
  return (
    <div className="who" id="Who">
      <div className="container">
        <div>
          <p className="main-title">Who Am I?</p>
        </div>
        <div className="who-content">
          <div className="who-social">
            <img className="who-image" src={profileImage} alt="" />
            <div className="socials">
              <a href="https://web.facebook.com/ridho.pardede27" className="social-btn" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/ridhoo.pardede/" className="social-btn" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/ridho-pardede/" className="social-btn" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://twitter.com/RidhoPardede4" className="social-btn" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://www.youtube.com/channel/UCOh9WbNNX2sljf6rxKqNIVw" className="social-btn" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="who-profile">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptate, placeat dolor voluptatum adipisci blanditiis excepturi! Maiores voluptates placeat illo rem, est soluta eveniet enim inventore! At est quas nihil.</p>
            {
              MyProfile.map((profile, index) => {
                return (
                  <div className="who-profile-container" key={index}>
                    <div className="profile-title-header">
                      <p className="who-profile-detail">{profile.title}</p>
                      <p className="profile-colon">:  &nbsp;</p>
                    </div>
                    <p>{profile.value}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Who;
