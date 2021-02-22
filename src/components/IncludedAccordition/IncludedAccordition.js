import React,{useEffect} from 'react'
import './IncludedAccordition.css'

function IncludedAccordition({activitie}) {

function openTabs(el) {
    
    var tabLinks = document.querySelectorAll(".tablinks");
    var tabContent = document.querySelectorAll(".tabcontent");
    
    console.log('kliknuo si')
   var btnTarget = el.currentTarget;
   var country = btnTarget.dataset.country;

   tabContent.forEach(function(el) {
      el.classList.remove("active");
   });

   tabLinks.forEach(function(el) {
      el.classList.remove("active");
   });

   document.querySelector("#" + country).classList.add("active");
   
   btnTarget.classList.add("active");
}

useEffect(() => {
    console.log('use effect odradjen!');
    
    var tabLinks = document.querySelectorAll(".tablinks");
    var tabContent = document.querySelectorAll(".tabcontent");
    
    console.log(tabLinks);
    tabLinks.forEach(function(el) {
        el.addEventListener("click", openTabs);
        
     });
    return () => {
         tabLinks.forEach(function(el){
             el.removeEventListener('click',openTabs);
         })
    }
},[] )

    return (

        <>
<section id="wrapper" className="included-navigation">
   <div className="content">
      <div className="tabs">
         <button className="tablinks active" data-country="London"><p data-title="Included">Included</p></button>
         <button className="tablinks" data-country="Paris"><p data-title="Not Included">Not Included</p></button>
         <button className="tablinks" data-country="Barcelona"><p data-title="What to bring">What to bring</p></button>
         <button className="tablinks" data-country="Madrid"><p data-title="Additional Info">Additional Info</p></button>
         
      </div>

      <div className="wrapper_tabcontent">
         <div id="London" className="tabcontent active">
            <h3>Included</h3>
            <ul>
                {activitie.included.map((include)=>{
                  return (<li>{include}</li>)
                })}
            </ul>
         </div>

         <div id="Paris" className="tabcontent">
            <h3>Not Included</h3>
            <ul>
                {activitie.notIncluded.map((include)=>{
                  return (<li>{include}</li>)
                })}
            </ul>
         </div>

         <div id="Barcelona" className="tabcontent">
            <h3>What to bring</h3>
            <ul>
                {activitie.thingsToBring.map((include)=>{
                  return (<li>{include}</li>)
                })}
            </ul>
         </div>

         <div id="Madrid" className="tabcontent">
            <h3>Additional Info</h3>
            <ul>
                {activitie.AdditionalInfo.map((include)=>{
                  return (<li>{include}</li>)
                })}
            </ul>
         </div>
      </div>
   </div>
</section>   
        </>
    )
}

export default IncludedAccordition
