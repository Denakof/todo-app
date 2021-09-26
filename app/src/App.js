import React from 'react';

import ToDo from './components/todo/todo.js';
import  SettingsContext  from './context/settings.js';
export default class App extends React.Component {
  render() {
    return (
      
      <SettingsContext>

      <ToDo />
      </SettingsContext>
     
    );
  }
}