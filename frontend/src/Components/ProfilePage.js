import React from "react";
import Profile from "./Profile.js";

function ProfilePage() {
  const styles = {
    minHeight: "80vh",
  };
  return (
    <>
      <div style={styles}>
        Profile
        <Profile></Profile>
      </div>
    </>
  );
}

export default ProfilePage;
