import React from "react";
import Profile from "./Profile.js";

function ProfilePage() {
  const styles = {
    minHeight: "80vh",
  };
  return (
    <>
      <div style={styles}>Profile</div>
      <Profile></Profile>
    </>
  );
}

export default ProfilePage;
