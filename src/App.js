import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//VIEWS
import Home from "./components/views/Home";

// COMPONENTS
import Footer from "./components/Footer";
import Header from "./components/Header";

// CONTEXTPROVIDERS
import QuestionContextProvider from "./Contexts/QuestionContextProvider";

// CSS/SASS
import "./sass/styles.scss";

function App() {
  return (
    <div className="App">
      <QuestionContextProvider>
        <Router>
          <Header />
          <main className="container">
            <div className="row">
              <Switch>
                <Route exact path="/" component={Home} />
                {/*  <Route path="*" component={PageNotFound} /> */}
              </Switch>
            </div>
          </main>
        </Router>
        <Footer />
      </QuestionContextProvider>
    </div>
  );
}

export default App;
