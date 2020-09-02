import React, { Component } from 'react';
import NotefulContext from './NotefulContext';

export default class ExpandedNote extends Component{
  static contextType = NotefulContext;

  goBack = () => {
    this.props.history.goBack();
  }
  render()
  {
    let note = this.context.notes.find(note => note.id === this.props.match.params.noteId);
    let folder = this.context.folders.find(folder => folder.id === note.folderId);
    console.log(note);
    return(
      <div className="expanded-note-container">
        <h2>{note.name}</h2>
        <h3>{note.modified}</h3>
        <p>{note.content}</p>
        <button onClick={() => this.context.deleteNote} className="note-buttton-delete">DELETE</button>
        <hr/>
        <h2>Current folder: {folder.name}</h2>
        <button onClick={this.goBack}>Go back!</button>
      </div>
    )
  }
}