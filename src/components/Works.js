import React from 'react';
import './Works.css';
import CardWork from './CardWork';

export default function Works() {
  return (
    <div id="works">
      <div className="worksContainer">
        <h1>Works</h1>
        <div className="navbarTag">
          <ul>
            <li>
              <a href="#all">All</a>
            </li>
            <li>
              <a href="#React">React</a>
            </li>
            <li>
              <a href="#JavaScript">JavaScript</a>
            </li>
            <li>
              <a href="#HTML/CSS">HTML/CSS</a>
            </li>
          </ul>
        </div>
        <div>
          <CardWork />
        </div>

        <div> Projet 2</div>
        <div> Projet 3</div>
        <div> Projet 4</div>
        <div> Projet 5</div>
      </div>
    </div>
  );
}
