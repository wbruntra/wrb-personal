import React, { useState } from "react";
import Portfolio from "./Portfolio";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import "./App.css";

const pages = [
  { name: "Portfolio", url: "/", component: Portfolio },
  { name: "About", url: "/about", component: About },
  { name: "Contact", url: "/contact", component: Contact }
];

function Main() {
  const [activePage, setPage] = useState(window.location.pathname);
  const [changing, setChanging] = useState(false);
  return (
    <Router>
      <header>
        <div className="container">
          <div id="logo">
            <h1>William Bruntrager</h1>
            <h2>Full-Stack Developer</h2>
          </div>
          <nav>
            <ul>
              {pages.map(page => {
                return (
                  <li key={page.name}>
                    <Link
                      className={page.url === activePage ? "selected" : ""}
                      onClick={e => {
                        if (activePage === page.url) {
                          return;
                        }
                        setChanging(true);
                        window.setTimeout(() => {
                          setPage(page.url);
                          setChanging(false);
                        }, 800);
                      }}
                      to={page.url}
                    >
                      {page.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
      {pages.map(page => {
        return (
          activePage === page.url && <page.component changing={changing} />
        );
      })}
      {/* <Route path="/" exact component={Portfolio} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} /> */}
    </Router>
  );
}

export default Main;
