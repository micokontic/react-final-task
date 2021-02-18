import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer/Footer";
import FormRegister from "./components/pages/forms/registrationForm/FormCallRegister";
import FormLogin from "./components/pages/forms/registrationForm/FormCallLogin";
import Weather from "./components/weather/Weather";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={FormRegister} />
        <Route path="/log-in" component={FormLogin} />
      </Switch>
      <Weather />
      <Footer />
    </Router>
  );
}

export default App;
