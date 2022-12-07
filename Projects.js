import React from "react";
import "./Projects.css"
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="projects">


        <div className="header">

          <h1 className="header-title">
            Projects
          </h1>
        </div>
        <div className="gallery">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="card-link">
              <div className="card">
                <img
                  alt="gallery"
                  className="card-image"
                  src={project.image}
                />
                <div className="card-details">
                <h2 className="card-text">
                    {project.subtitle}
                  </h2>
                  <h1 className="card-text">
                    {project.title}
                  </h1>
                  <p className="card-text">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
    </section>
  );
}