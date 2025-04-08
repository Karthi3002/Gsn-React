import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Meet the Team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="team-container">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="card">
                  <div className="wrapper">
                    <img src={d.img} alt={d.name} className="cover-image" />
                  </div>
                  <img src={d.character} alt={d.name} className="character" />
                  <div className="title">
                    <h3>{d.name}</h3>
                    <p>{d.job}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};