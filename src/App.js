import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer/Footer";
import Form from "./components/pages/forms/registrationForm/Form";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Form} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
