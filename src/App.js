import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./components/pages/HomePage/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer/Footer";
import FormRegister from "./components/pages/forms/registrationForm/FormCallRegister";
import FormLogin from "./components/pages/forms/registrationForm/FormCallLogin";
import Weather from "./components/weather/Weather";
import DetailProductPage from "./components/DetailProductPage/DetailProductPage";
import NewAdventureForm from "./components/pages/forms/registrationForm/newAdventureForm/NewAdventureForm";
import BookAdventure from "./components/pages/forms/registrationForm/BookAdventure/BookAdventure";
import ContactUs from "./components/pages/contactUs/ContactUs";
import Blog from "./components/pages/HomePage/Blog";
import AdventureCard from "./components/AdventureCard/AdventureCard";
import ProfileCard from "./components/ProfilePages/ProfileCard";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import FrontEnd from "./components/pages/AboutUs/FrontEnd";
import BackEnd from "./components/pages/AboutUs/BackEnd";
import EventsPage from "./components/EventsPage";
import NotFound from "./components/pages/NotFound/NotFound"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  const [activities, setActivities] = useState([
    {
      title: "",
      pricePerPerson: "",
      included: ["dsa", "dsadas"],
      notIncluded: ["dsa", "dsadas"],
      thingsToBring: ["dsa", "dsadas"],
      AdditionalInfo: ["dsa", "dsadas"],
      lng: 42,
      lat: 19,
      images: ["fsfas", "fsafsa", "fsafa"],
    },
  ]);
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
    <Router>
      <ScrollToTop>
      <Switch>
        <Navbar path="/" exact backgroundStyle="transparent" />
        <Navbar path="/log-in" exact backgroundStyle="transparent" />
        <Navbar path="/register" exact backgroundStyle="transparent" />
        <Navbar path="/addNewAdventure" exact backgroundStyle="transparent" />
        <Navbar path="/aboutUs" exact backgroundStyle="transparent" />
        <Navbar path="/contactUs" exact backgroundStyle="transparent" />
        <Navbar path="/bookAdventure" exact backgroundStyle="transparent" />
        <Navbar path="/notFound" exact backgroundStyle="transparent" />

        <Navbar backgroundStyle="#33333329" />
      </Switch>
      {/* <Navbar />  stara pozicija navbara */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={FormRegister} />
        <Route path="/log-in" component={FormLogin} />
        <Route
          path="/detail"
          render={(props) => (
            <DetailProductPage {...props} activitie={activities[0]} />
          )}
        />
        <Route path="/addNewAdventure" component={NewAdventureForm} />
        <Route path="/bookAdventure" component={BookAdventure} />
        <Route path="/contactUs" component={ContactUs} />
        <Route path="/blog" component={Blog} />
        <Route path="/notFound" component={NotFound}/>
        <Route
          path="/card"
          render={(props) => (
            <>
              <AdventureCard
                {...props}
                activitie={activities[0]}
                type="host-edit"
              />
              <AdventureCard {...props} activitie={activities[0]} type="host" />
              <AdventureCard {...props} activitie={activities[0]} type="user" />
            </>
          )}
        />
        <Route
          path="/profile"
          render={(props) => (
            <>
              <ProfileCard {...props} activitie={activities[0]} type="host" />
            </>
          )}
        />
        <Route path="/events" component={EventsPage} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/frontEndTeam" component={FrontEnd} />
        <Route path="/backEndTeam" component={BackEnd} />
      </Switch>

      <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
