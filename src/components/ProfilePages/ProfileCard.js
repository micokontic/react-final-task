import React, { useEffect, useState } from "react";
import { Button } from "../../Button";
import AdventureCard from "../AdventureCard/AdventureCard";
import "./ProfileCard.css";

function ProfileCard({ type, activitie }) {
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
            <div className="profile-details">
              <h1 className="welcomeTitle">Welcome Username!</h1>
              <h3 className="profile-info">About: </h3>
              <h3 className="profile-name">First name: FirstName </h3>
              <h3 className="profile-name">Last name: LastName</h3>
            </div>
            {type === "user" ? (
              <div></div>
            ) : (
              <div className="hostOptions">
                <Button onClick={Notifications}>Notifications</Button>
                <Button onClick={AdminPanel}>Admin Panel</Button>
              </div>
            )}
          </div>
        </div>

        <div className="profile-down">
          {type === "user" ? (
            <div>
              <div className="profile-activitiesTitle">
                <h2>Activities: </h2>
              </div>
              <AdventureCard type={type} activitie={activitie} />
              <AdventureCard type={type} activitie={activitie} />
              <AdventureCard type={type} activitie={activitie} />
            </div>
          ) : admin ? (
            <div>
              <div className="profile-activitiesTitle">
                <h2>Notifications: </h2>
              </div>
              <AdventureCard type={"host"} activitie={activitie} />
              <AdventureCard type={"host"} activitie={activitie} />
              <AdventureCard type={"host"} activitie={activitie} />
            </div>
          ) : (
            <div>
              <div className="profile-activitiesTitle">
                <h2>Admin Panel: </h2>
              </div>
              <AdventureCard type={"host-edit"} activitie={activitie} />
              <AdventureCard type={"host-edit"} activitie={activitie} />
              <AdventureCard type={"host-edit"} activitie={activitie} />
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
