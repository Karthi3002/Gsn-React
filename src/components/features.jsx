import React, { useEffect } from "react";

export const Features = (props) => {
  useEffect(() => {
    const handleScroll = () => {
      const featuresSection = document.getElementById("features");
      const featureItems = document.querySelectorAll(".feature-item");

      const sectionTop = featuresSection.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (sectionTop < screenHeight - 100) {
        featuresSection.classList.add("show");
        featureItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add("show");
          }, index * 150); // delay effect
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title1">FEATURES</h2>
        <div className="feature-grid">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="feature-item">
                  <div className="feature-icon">
                    <i className={d.icon}></i>
                  </div>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </section>
  );
};

