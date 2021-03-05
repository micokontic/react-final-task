import React, { useEffect, useState } from "react";
import FlipCard from "./FlipCard";
import "./FlipCards.css";
import "./TitleBackground.css";
function FlipCards() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getBlob();
  }, []);

  const getBlob = () => {
    /*ovdje bi stavio url tog koji ti treba*/
    fetch(
      "https://jsonblob.com/api/jsonBlob/d98ac18e-6a1c-11eb-b59d-a157b950443c"
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setActivities(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="titleBackground">
        <div className="titleh1">
          <h1>MOST POPULAR</h1>
        </div>
        <div className="flip-cards-section" style={{"padding-top":"7rem"}}>
          <div className="flip-cards-container">
            
            {activities.map((activitie,i) => {
              while(i<3){
              return (
                <FlipCard activitie={activitie} height={"400px"} size={"big"} />
              
              );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default FlipCards;
