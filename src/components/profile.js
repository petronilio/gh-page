import React from 'react';
import profile from './profile.jpg'; // Tell Webpack this JS file uses this image

console.log(profile); // /logo.84287d09.png

function Profile() {
  // Import result is the URL of your image
  return <img src={profile} alt="Profile" className="logo" />;
}

export default Profile;