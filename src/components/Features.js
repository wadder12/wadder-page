import React, { useState } from 'react';
import './Features.css';

const Command = ({ title, description, onClick }) => {
  return (
    <div className="command-item" onClick={onClick}>
      <h4>{title}</h4>
    </div>
  );
};

const Features = () => {
  const allCommands = [
    {
      title: '!help',
      description: 'Shows a list of available commands and their descriptions.',
    },
    {
      title: '!kick',
      description: 'Kicks a specified user from the server.',
    },
    {
      title: '!ban',
      description: 'Bans a specified user from the server.',
    },
    {
      title: '!mute',
      description: 'Mutes a specified user for a specified duration.',
    },
    {
      title: '!unmute',
      description: 'Unmutes a specified user.',
    },
    {
      title: '!poll',
      description: 'Creates a poll with specified options.',
    },
    {
      title: '!trivia',
      description: 'Starts a trivia game with multiple choice questions.',
    },
    {
      title: '!quote',
      description: 'Displays a random quote.',
    },
    {
      title: '!joke',
      description: 'Tells a random joke.',
    },
    {
      title: '!weather',
      description: 'Shows the current weather for a specified location.',
    },
  ];

  const [selectedCommand, setSelectedCommand] = useState(allCommands[0]);

  return (
    <section className="features">
      <h2 className="section-title">Wadder Bot Commands</h2>
      <div className="features-container">
        <div className="command-list">
          {allCommands.map((command) => (
            <Command
              key={command.title}
              title={command.title}
              description={command.description}
              onClick={() => setSelectedCommand(command)}
            />
          ))}
        </div>
        <div className="command-details">
          <h3 className="command-title">{selectedCommand.title}</h3>
          <p className="command-description">{selectedCommand.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
