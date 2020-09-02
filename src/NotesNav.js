import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Note from './Note';

export default class NotesNav extends Component {
  render(){
    const notes = this.props.STORE.notes.map(note => {
      return (
        <Note key={note.id} note={note}/> 
      )
    });
    return (
      <div className="notes-nav">
        {notes}
      </div>
    )
  }
} 