import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import Annotations from "./pages/Annotations";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="lg:container m-auto px-4">
        <Switch>
          <Route path="/annotations" component={Annotations} />
          <Route path="/projects" component={Projects} />
          <Route path="/" exact component={AboutUs} />
          <Route
            component={() => (
              <div className="lg:container mx-auto px-4">
                <h1 className="text-2xl text-red-400">Error 404</h1>
                <span className="font-bold">Page no found</span>
              </div>
            )}
          />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
