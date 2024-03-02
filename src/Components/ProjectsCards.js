import React, { useState } from 'react'
import Projects from '../assets/projects'
import Card from './card'
import '../styles/projects.css'

function ProjectsCards() {
    const [expandedProjects, setExpandedProjects] = useState([]);
  
    const toggleExpansion = (projectId) => {
      setExpandedProjects((prevExpandedProjects) => {
        if (prevExpandedProjects.includes(projectId)) {
          return prevExpandedProjects.filter((id) => id !== projectId);
        } else {
          return [...prevExpandedProjects, projectId];
        }
      });
    };
    
  
    return (
    <div className='projects'>
        <h2>Projects</h2>
        <div className='project-cards'>
            {Projects.map((item, key) => (
            <div className='project' key={key}>
                <Card title={item.name} link={item.link} image={item.image}/>
                <p className={expandedProjects.includes(key) ? 'expanded' : ''}>
                {item.description}
                </p>
                {item.description.split('\n').length > 6 && (
                <button
                    className='read-more-link'
                    onClick={() => toggleExpansion(key)}
                >
                    {expandedProjects.includes(key) ? 'Read less' : 'Read more'}
                </button>
                )}
            </div>
            ))}
        </div>
    </div>
    );
  }

export default ProjectsCards