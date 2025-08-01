import React from 'react';

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <img
          key={index}
          src={project.img}
          alt={project.category}
          className="project-img"
        />
      ))}
    </div>
  );
};

export default ProjectList;