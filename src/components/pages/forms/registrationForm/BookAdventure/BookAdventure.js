import { useForm } from "react-hook-form";
import React,{useState} from "react";
import "./BookAdventure.css";

export default function NewAdventureForm() {
  const { register, handleSubmit } = useForm();


  const onSubmit = (data) => {
    console.log(data)
  };



  return (
    <div className="wrappingDiv bookAdvendture">
      <div className="addAdv-container">
        <div className="text">Book Canyoning in Nevidio Canyon</div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row">
            <div className="input-data">
              <input type="text" name="name" ref={register} />
              <div className="underline"></div>
              <label>Name</label>
            </div>
            
          </div>
          {/* 2 */}
          <div className="form-row">
          <div className="input-data">
              <input type="text" name="surname" ref={register} />
              <div className="underline"></div>
              <label>Last Name</label>
            </div>
          </div>
          {/* 3*/}
          <div className="form-row">
            <div className="input-data">
                <input type="date" name="date" ref={register} />
                <div className="underline"></div>
                <label>When do you want to have your adventure?</label>
            </div>
          </div>

          <div className="form-row">
            <div className="input-data">
              <textarea cols='5' id="overview-text-area" ref={register} name="overview" placeholder='If you have any additional questions or requests, please write it here' ></textarea>
            </div>
          </div>
        
          <div className="form-row submit-btn">
            <div className="input-data">
              <div className="inner" />
              <input type="submit" defaultValue="submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
