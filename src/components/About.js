import React from 'react';
import './About.css';

export default function About() {
  return (
    <div id="about">
      <div className="fondAbout">
        <div className="aboutContainer">
          <div className="containerLeft">
            <img
              className="image"
              src="https://picsum.photos/1000/1000?random"
              alt="imageprofil"
            />
          </div>

          <div className="containerRight">
            <p>Développeuse Web Junior </p>
            <h1>About Me</h1>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing
            </p>
            <button type="submit"> CV </button>
          </div>
        </div>
      </div>
    </div>
  );
}
