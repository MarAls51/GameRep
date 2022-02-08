import React , {useState} from "react";
import Navbar from "../Navbar/Navbar";
import "./Profile.css";
const Profile = () => {
    const [selected, setSelected] = useState("Account")
  return (
    <div>
      <Navbar />
      <div className="entire-settings-page">
        <div className="settings-div-display">
          <div className="settings-navbar">
            <div className="settings-profile-display">
              <img
                className="settings-profile-picture"
                src="/assets/master.jpg"
                alt=""
              ></img>
            </div>
            <div className="settings-profile-navbar">
              <button className="settings-button" onClick={() => setSelected("Account")}>
                <i class="fas fa-home"></i>
                <h2 className="settings-account-navbar">Account</h2>
              </button>
              <button className="settings-button" onClick={() => setSelected("Settings")}>
                <i class="fas fa-cogs"></i>
                <h2 className="settings-account-navbar">Settings</h2>
              </button>
              <button className="settings-button" onClick={() => setSelected("Notifications")}>
                <i class="fas fa-bell"></i>
                <h2 className="settings-account-navbar">Notifications</h2>
              </button>
            </div>
          </div>
          <div className="settings-bio">
            <h3>Account Home</h3>
            <div className="settings-bio-account">
              <h4>Username</h4>
              <input
                className="settings-username-input"
                type="text"
                placeholder="Username"
              />
              <h4>Email</h4>
              <input
                className="settings-username-input"
                type="text"
                placeholder="Email"
              />
              <h4>Password</h4>
              <input
                className="settings-username-input"
                type="password"
                placeholder="Password"
              />
              <div className="settings-update-cancel">
                <button className="settings-update">Update</button>
                <button className="settings-update">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
