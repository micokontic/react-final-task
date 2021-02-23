import { useForm } from "react-hook-form";
import React from "react";
import "./NewAdventureFormStyle.css";
import Tags from './Tags/Tags.js'
import { OverlayView } from "react-google-maps";


export default function NewAdventureForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="wrappingDiv">
      <div className="addAdv-container">
        <div className="text">Add new adventure</div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row">
            <div className="input-data">
              <input type="text" name="title" ref={register} />
              <div className="underline"></div>
              <label>Title</label>
            </div>
            <div className="input-data">
              <input type="text" name="location" ref={register} />
              <div className="underline"></div>
              <label>Location</label>
            </div>
          </div>
          {/* 2 */}
          <div className="form-row">
            <div className="input-data">
              <input type="number" name="duration" ref={register} />
              <div className="underline"></div>
              <label>Duration (Hours)</label>
            </div>
            <div className="input-data">
              <input type="number" name="pricePerPerson" ref={register} />
              <div className="underline"></div>
              <label>Price per person</label>
            </div>
            <div className="input-data">
              <input type="number" name="rating" ref={register} />
              <div className="underline"></div>
              <label>Rating</label>
            </div>
          </div>
          {/* 3*/}
          <div className="form-row">
            <div className="input-data">
              <input
                type="time"
                name="startingTime"
                max="18:00"
                ref={register}
              />
              <div className="underline"></div>
              <label>Starting time</label>
            </div>
            <div className="input-data">
              <input type="time" name="endingTime" max="23:59" ref={register} />
              <div className="underline"></div>
              <label>Ending time</label>
            </div>

            <div className="input-data">
              <input type="date" name="seasonStart" ref={register} />
              <div className="underline"></div>
              <label>Season from</label>
            </div>

            <div className="input-data">
              <input type="date" name="seasonEnd" ref={register} />
              <div className="underline"></div>
              <label>Season to</label>
            </div>
          </div>
          {/* 4 */}
          <div className="form-row">
            <div className="input-data">
              <select name="fitnessLvl" ref={register}>
                <option selected="true" disabled="disabled">
                  Fitness Level
                </option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
              <div className="underline"></div>
            </div>
            <div className="input-data">
              <select name="goodForKids" ref={register}>
                <option selected="true" disabled="disabled">
                  Good for kids?
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <div className="underline"></div>
            </div>
            <div className="input-data">
              <select name="groupTours" ref={register}>
                <option selected="true" disabled="disabled">
                  Group Tours?
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <div className="underline"></div>
            </div>

            <div className="input-data">
              <input type="number" name="maximalGroupSize" ref={register} />
              <div className="underline"></div>
              <label>Maximal Group Size</label>
            </div>
          </div>

          {/*    5 */}
          <div className="form-row">
            <div className="input-data">
              <input type="text" name="image" ref={register} />
              <div className="underline"></div>
              <label>Image 1 url</label>
            </div>
            <div className="input-data">
              <input type="text" name="image2" ref={register} />
              <div className="underline"></div>
              <label>Image 2 url</label>
            </div>
            <div className="input-data">
              <input type="text" name="image3" ref={register} />
              <div className="underline"></div>
              <label>Image 3 url</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <textarea cols='5' id="overview-text-area" name="overview">Please add short overview of your adventure...</textarea>
            </div>
          </div>


          <div className="tags-container">
            <label>Included</label>
            <Tags />
            <label>Not Included</label>
            <Tags />
            <label>What to bring</label>
            <Tags />
            <label>Additional Info</label>
            <Tags />
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
