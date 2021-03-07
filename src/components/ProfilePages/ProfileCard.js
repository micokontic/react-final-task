import React, { useEffect, useState } from "react";
import { Button } from "../../Button";
import AdventureCard from "../AdventureCard/AdventureCard";
import { BrowserRouter as Router, Route, NavLink,Link } from 'react-router-dom'

import "./ProfileCard.css";

function ProfileCard({ type, activities }) {
  const [admin, setadmin] = useState(false);

  const Notifications = () => setadmin(true);
  const AdminPanel = () => setadmin(false);
  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <div className="profile-up">
          <div
            className={
              type === "user"
                ? "profile-left userTitle"
                : "profile-left hostTitle"
            }
          >
            <img
              src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4-300x300.png"
              className="profile-image"
              alt=""
            />
          </div>
          <div className="profile-right">
          <h1 className="welcomeTitle">Welcome Marko!</h1>
            <div className="profile-details profile-card-details">
              <h3 className="profile-name">First name: Marko </h3>
              <h3 className="profile-name">Last name: Markovic</h3>
              <h3 className="profile-name">Interests:  Rafting, Snowboarding</h3>
            </div>
          </div>
          
        </div>
        {type === "user" ? (
              <div></div>
            ) : (
              <div className="hostOptions">
                <Button onClick={Notifications}>Notifications</Button>
                <Button onClick={AdminPanel}>Your adventures</Button>
                <Link to="/addNewAdventure"><Button onClick={Notifications}>Add New Adventure</Button></Link>

              </div>
            )}
        <div className="profile-down">
          {admin ? (
            <div>
              <div className="profile-activitiesTitle">
                <h2>Activities: </h2>
              </div>
              <AdventureCard type={"host"} activitie={activities[0]} />
              <AdventureCard type={"host"} activitie={activities[3]} />
              <AdventureCard type={'host'} activitie={activities[2]} />
            </div>
          ) : type="host" ? (
            <div>
              <div className="profile-activitiesTitle">
                <h2>Notifications: </h2>
              </div>
              <AdventureCard type={"host-edit"} activitie={activities[3]} />
              <AdventureCard type={"host-edit"} activitie={activities[2]} />
              <AdventureCard type={"host-edit"} activitie={activities[0]} />
            </div>
          ) : (
            <div>
              <div className="profile-activitiesTitle">
                <h2>Your adventures: </h2>
              </div>
              <AdventureCard type={"host-edit"} activitie={activities[2]} />
              <AdventureCard type={"host-edit"} activitie={activities[3]} />
              <AdventureCard type={"host-edit"} activitie={activities[0]} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
/*  {admin ? (  <div>
              <div className="profile-activitiesTitle">
                <h2>Notifications: </h2>
              </div>
              <AdventureCard type={type} activitie={activitie} />
              <AdventureCard type={type} activitie={activitie} />
            </div>) : (
                <div>
                <div className="profile-activitiesTitle">
                <h2>Admin Panel: </h2>
              </div>
              <AdventureCard type={type} activitie={activitie} />
              <AdventureCard type={type} activitie={activitie} />
            </div>
            )}
          ) */
