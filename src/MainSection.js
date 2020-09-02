import React from 'react';
import Note from './Note';
import FoldersNav from './FoldersNav';
import NotefulContext from './NotefulContext';



export default class MainSection extends React.Component {
  static contextType = NotefulContext;

  handleDeleteNote = () => {
    this.props.history.push(`/`);
    console.log('test');
  }

  render(){
    const notes = this.context.notes.map(note => {
      return (
        <Note key={note.id} note={note} onDeleteNote={this.handleDeleteNote}/> 
      )
    });

    return (
    <div className="main-section-route">
      <header>
        <h1>Noteful</h1>
      </header>
      <FoldersNav/>
      <main>
        <ul className="main-section-route-list">
        {notes}
        </ul>
      </main>
    </div>
    )
  }
}