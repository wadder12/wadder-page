import React, { useState } from 'react';
import './Features.css';

const Feature = ({ title, description }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="feature">
      <h3 className="feature-title" onClick={toggleDescription}>
        {title}
      </h3>
      {showDescription && <p className="feature-description">{description}</p>}
    </div>
  );
};

const Features = () => {
  const aiFeatures = [
    { title: 'AI Chatbot', description: 'Prompt your own chatbot for fun and interactive conversations.' },
    { title: 'AI Moderation', description: 'Keep your server in check with AI-powered moderation tools.' },
    { title: 'AI Fun Commands', description: 'Entertain your members with AI-generated fun commands.' },
    { title: 'Image Creation', description: 'Generate and share images using AI capabilities.' },
    { title: 'AI Games', description: 'Engage your server with exciting AI-powered games.' },
  ];

  const basicFeatures = [
    { title: 'Moderation', description: 'Manage your server with a robust set of moderation tools.' },
    { title: 'Games', description: 'Keep your community entertained with various games.' },
    { title: 'Fun Commands', description: 'Make your server more lively with a collection of fun commands.' },
    { title: 'File System for Admins', description: 'Organize your server with a handy file system for admins.' },
    { title: 'User Notes', description: 'Keep track of user information with a user notes system.' },
    { title: 'Calendar', description: 'Stay up-to-date with a built-in calendar for events and reminders.' },
    { title: 'Ticket Bots', description: 'Provide support to your members with an integrated ticket bot system.' },
    { title: 'Bug Reports', description: 'Collect and address bug reports from your community.' },
    { title: 'Suggestions', description: 'Gather suggestions and feedback from your server members.' },
    { title: 'And More...', description: 'Explore a wide range of additional features to enhance your server.' },
  ];

  const allFeatures = [...aiFeatures, ...basicFeatures];

  return (
    <section className="features">
      <h2 className="section-title">Wadder Bot Features</h2>
      <div className="feature-list">
        {allFeatures.map((feature) => (
          <Feature key={feature.title} title={feature.title} description={feature.description} />
        ))}
      </div>
    </section>
  );
};

export default Features;