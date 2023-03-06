import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AddMajorIconSource, Schedule80HandIconSource, NoResultsIllustrationSource, MigrateTeamsSpotIconSource, AddMajorIcon, MigrateTeamsSpotIcon } from "@alexasselin008/icons"

// const Test = createIcon(MigrateTeamsSpotIconSource);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          <AddMajorIconSource aria-label="" fill="blue" />
          <Schedule80HandIconSource aria-label="" fill="red" />
          <NoResultsIllustrationSource aria-label="" fill="green" />
          <MigrateTeamsSpotIconSource aria-label="" fill="yellow" />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <AddMajorIcon />
        <MigrateTeamsSpotIcon aria-label="" fill="yellow"  />
      </header>
    </div>
  );
}

export default App;
