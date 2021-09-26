import React from 'react'
import  SettingsContext  from '../../context/settings';
import { useContext } from 'react';
export default function List(props) {
    const site = useContext(SettingsContext);
    return (
        <div>
               {props.list.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      ))}
        </div>
    )
}
