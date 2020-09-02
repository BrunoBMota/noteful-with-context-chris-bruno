import React from 'react'
import { Link } from 'react-router-dom'
import NotefulContext from './NotefulContext';


export default class Note extends React.Component{
  static defaultProps = {
    onDeleteNote: () => {}
  }
  static contextType = NotefulContext;

  handleButtonClick = () => {
    console.log(this.context)
    fetch(`http://localhost:9090/notes/${this.props.note.id}`, {
      method: 'DELETE'
    }).then(() => {
      this.context.deleteNote(this.props.note.id);
      this.props.onDeleteNote(this.props.note.id);
    }).catch(error => {
      console.log(error);
    });
  }

  render(){
    return (
      <li className="note-list-item">
        <Link to={`/note/${this.props.note.id}`}>
          <h2>{this.props.note.name}</h2>
          <h3>{this.props.note.modified}</h3>
        </Link>
        <button onClick={this.handleButtonClick}className="note-buttton-delete">DELETE</button>
      </li> 
    )
  }
}