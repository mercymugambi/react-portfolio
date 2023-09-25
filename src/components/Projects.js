import React from 'react';

function Projects() {
  // Array of image data
  const images = [
    {
      id: 1,
      src: 'todo3.PNG',
      alt: 'Todo List',
      title: 'Todo List',
      description: 'Todays to-do list" is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete. This simple web page is built using webpack, es6 and served by a webpack dev server.',
      skill1: 'Javascript',
      skill2: 'Webpack',
      skill3: 'html',
      demo: 'https://to-do-list-p2a8.onrender.com/',
      code: 'https://github.com/mercymugambi/to-do-list-webpack-project',
    },
    {
      id: 2,
      src: 'pop_metrics1.PNG',
      alt: 'Population Metrics',
      title: 'Country Populations Metrics',
      description: 'This is a web application that provides information about population in different countries around the world. It allows users to explore population by country and view details of individual country.',
      skill1: 'React',
      skill2: 'Redux',
      skill3: 'API',
      demo: 'https://population-metrics.onrender.com/',
      code: 'https://github.com/mercymugambi/country-filters-capstone',
    },
    {
      id: 3,
      src: 'space_travel.PNG',
      alt: 'Space Travel App',
      title: 'Space Travel App',
      description: 'This is the Space Travel Hub website created with React using CRA CLI. It describes a number of features related to the rockets, and missions associated with providing commercial and scientific space travel services.',
      skill1: 'React',
      skill2: 'JS',
      skill3: 'CSS',
      demo: 'https://space-travel-project.onrender.com/',
      code: 'https://github.com/mercymugambi/space-travel-project',
    },
    {
      id: 4,
      src: 'calculator1.PNG',
      alt: 'Calculator',
      title: 'Calculator App',
      description: 'This project is a calculator app called Math-Magician that allows users to perform simple arithmetic calculations. It was built using React, a popular JavaScript library for building user interfaces.',
      skill1: 'React',
      skill2: 'Js',
      skill3: 'CSS',
      demo: 'https://math-magician-ji5f.onrender.com/',
      code: 'https://github.com/mercymugambi/math-magician',
    },
    // Add more image objects with the same structure for additional images
  ];

  return (
    <div className="projects-container1">
      <h2 className="projects-heading1">Projects</h2>
      <div className="projects-list">
        {images.map((image) => (
          <div className="flip-box1" key={image.id}>
            <div className="flip-box1-inner">
              <div className="flip-box1-front">
                <img
                  src={`/images/${image.src}`}
                  alt={image.alt}
                  className="project-image1" // Added a class for the image
                />
              </div>
              <div className="flip-box1-back">
                <h3 className="flip-title">{image.title}</h3>
                <ul className="flip-box1-skills">
                  <li>
                    {image.skill1}
                    ,
                  </li>
                  <li>
                    {image.skill2}
                    ,
                  </li>
                  <li>{image.skill3}</li>
                </ul>
                <p>{image.description}</p>
                <div className="button-container">
                  <a href={image.demo} target="_blank" rel="noopener noreferrer">
                    <button type="button" className="code-button">
                      Demo
                    </button>
                  </a>
                  <a href={image.code} target="_blank" rel="noopener noreferrer">
                    <button type="button" className="code-button">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
