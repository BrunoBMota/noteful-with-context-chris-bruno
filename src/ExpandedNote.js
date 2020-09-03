import React, { Component } from 'react';
import NotefulContext from './NotefulContext';

export default class ExpandedNote extends Component{
  static contextType = NotefulContext;

  static defaultProps = {
    onDeleteNote: () => {}
  }

  handleButtonClick = () => {
    console.log(this.context)
    fetch(`http://localhost:9090/notes/${this.props.match.params.noteId}`, {
      method: 'DELETE'
    }).then(() => {
      this.context.deleteNote(this.props.match.params.noteId);
      this.props.onDeleteNote(this.props.match.params.noteId);
    }).catch(error => {
      console.log(error);
    });
    this.props.history.goBack();
  }

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
        <button onClick={this.handleButtonClick} className="note-buttton-delete">DELETE</button>
        <hr/>
        <h2>Current folder: {folder.name}</h2>
        <button onClick={this.goBack}>Go back!</button>
      </div>
    )
  }
}