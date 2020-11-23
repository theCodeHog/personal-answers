import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//VIEWS
import Home from "./views/Home";
import QuestionPage from "./views/QuestionPage";

// COMPONENTS
import Footer from "./components/Footer";
import Header from "./components/Header";

// CONTEXTPROVIDERS
import QuestionContext from "./Contexts/QuestionContext";

// CSS/SASS
import "./sass/styles.scss";

function App() {
  return (
    <div className="App">
      <QuestionContext>
        <Router>
          <Header />
          <main className="container">
            <div className="row">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/:id" component={QuestionPage} />
                {/*  <Route path="*" component={PageNotFound} /> */}
              </Switch>
            </div>
          </main>
        </Router>
        <Footer />
      </QuestionContext>
    </div>
  );
}

export default App;
