import React, { useState, useRef } from 'react';

const Home = () => {
  const profiles = ["Web Developer", "Tester", "Student"];
  const [profile, setProfile] = useState("Student");
  const [values, setValues] = useState(0);

  const profileDetail = useRef("Halo")

  const changeProfile = () => {
    setTimeout(() => {
      profileDetail.current.classList.add("profile-detail-left")
      setTimeout(() => {
        setProfile(profiles[values])
        if (values > profiles.length - 2) {
          setValues(0)
        } else {
          setValues(values + 1)
        }
        profileDetail.current.classList.remove("profile-detail-left")
      }, 500)
    }, 3000)
  }

  return <div className="home">
    <div className="home-container">
      <p className="home-text">Hi There! My name is</p>
      <p className="my-name">Ridho Pardede</p>
      <p className="profile">I'm a&nbsp;
        <span
          className="profile-detail"
          ref={profileDetail}
          onChange={changeProfile()}
        >
          {profile}</span>
      </p>
      <p className="home-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nulla necessitatibus dignissimos sint recusandae dolorum?</p>
    </div>
  </div>;
};

export default Home;
