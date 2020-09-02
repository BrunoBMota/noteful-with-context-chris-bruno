import React from 'react';
import Note from './Note';
import FoldersNav from './FoldersNav';
import NotefulContext from './NotefulContext';


export default class Folder extends React.Component {
  static contextType = NotefulContext;
  render(){
    let newNotes = this.context.notes.filter(note => note.folderId === this.props.match.params.folderId);
    const notes = newNotes.map(note => {
      return (
        <Note key={note.id} note={note}/> 
      )
    });

    return (
      <div className="folder-container">
        <FoldersNav/>
        <ul>
          {notes}
        </ul>
      </div>
    )
  }
}