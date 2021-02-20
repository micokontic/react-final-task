import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer/Footer";
import FormRegister from "./components/pages/forms/registrationForm/FormCallRegister";
import FormLogin from "./components/pages/forms/registrationForm/FormCallLogin";
import NewAdventureForm from "./components/pages/forms/registrationForm/newAdventureForm/NewAdventureForm";
import ContactUs from "./components/pages/contactUs/ContactUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={FormRegister} />
        <Route path="/log-in" component={FormLogin} />
        <Route path="/addNewAdventure" component={NewAdventureForm} />
        <Route path="/contactUs" component={ContactUs} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
