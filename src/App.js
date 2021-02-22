import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React,{useEffect,useState} from 'react'
import Home from "./components/pages/HomePage/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer/Footer";
import FormRegister from "./components/pages/forms/registrationForm/FormCallRegister";
import FormLogin from "./components/pages/forms/registrationForm/FormCallLogin";
import Weather from "./components/weather/Weather";
import DetailProductPage from "./components/DetailProductPage/DetailProductPage";
import NewAdventureForm from "./components/pages/forms/registrationForm/newAdventureForm/NewAdventureForm";
import ContactUs from "./components/pages/contactUs/ContactUs";
import Blog from "./components/pages/HomePage/Blog";

function App() {
  const [activities,setActivities]=useState([{
    title:'',
    pricePerPerson:'',
    included:['dsa','dsadas'],
    notIncluded:['dsa','dsadas'],
    thingsToBring:['dsa','dsadas'],
    AdditionalInfo:['dsa','dsadas'],
    lng:42,
    lat:19,
    images:['fsfas','fsafsa','fsafa']
  }]);
  useEffect(() => {
    getBlob();
  }, []);

    const getBlob=()=>{ 
        /*ovdje bi stavio url tog koji ti treba*/
        fetch("https://jsonblob.com/api/jsonBlob/d98ac18e-6a1c-11eb-b59d-a157b950443c") 
              .then(response=>{
             return response.json();
              })
        .then(response=>{
            setActivities(response);

        })
              .catch(function(error){
                  console.log(error);
              });
      }
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={FormRegister} />
        <Route path="/log-in" component={FormLogin} />
        <Route path="/detail" render={(props) => (
        <DetailProductPage {...props} activitie={activities[0]}/>
  )}/>
        <Route path="/addNewAdventure" component={NewAdventureForm} />
        <Route path="/contactUs" component={ContactUs} />
        <Route path="/blog" component={Blog} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
