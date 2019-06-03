import React from 'react';
import './App.css';
import SetImage from '../img/set-screenshot.png';
import DFImage from '../img/whatsgood.jpg';
import Footer from './Footer'

function Portfolio({ changing }) {
  return (
    <div className={`wrapper ${changing && 'slide-out-left'}`}>
      <section>
        <h3>
          Personal Projects <span className="details">(click for details)</span>
        </h3>
        <ul id="gallery">
          <li>
            <a data-toggle="modal" data-target="#setModal">
              <img src={SetImage} alt="Multiplayer Game" />
              <p>Set Game</p>
            </a>
          </li>
          <li>
            <a data-toggle="modal" data-target="#dfModal">
              <img src={DFImage} alt="WhatsGood DF" />
              <p>Mexico City Street Food</p>
            </a>
          </li>
        </ul>
      </section>

      <div
        className="modal fade"
        id="setModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="basicModal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <h3>SET</h3>
              <p>
                Written using the Google App Engine framework, this website allows users to play the
                card game SET against friends in real-time.
              </p>
            </div>
            <div className="modal-footer">
              <a href="http://wrb-set-multi.appspot.com">
                Visit site
              </a>
              <a href="https://github.com/wbruntra/react-set">
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="dfModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="basicModal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <h3>WhatsGood</h3>
              <p>
                Written in Node.js and incorporating Google Maps, the site and its accompanying{' '}
                <a href="https://github.com/wbruntra/form-sender">
                  Android
                </a>{' '}
                app allows users to find and register street food locations in Mexico City.
              </p>
            </div>
            <div className="modal-footer">
              <a href="https://pacific-castle-63467.herokuapp.com/">
                Visit site
              </a>
              <a href="https://github.com/wbruntra/whatsgood">
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
