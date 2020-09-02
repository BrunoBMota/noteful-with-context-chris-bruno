import React from 'react';
import { Link } from 'react-router-dom'
import NotefulContext from './NotefulContext';

export default class FoldersNav extends React.Component {
  static contextType = NotefulContext;
  
  render(){
    const folders = this.context.folders.map(folder => {
      return (
      <li key={folder.id} className="folder">
        <Link to={`/folder/${folder.id}`}>{folder.name}</Link>
      </li>
      )
    });

    return (
      <aside>
        <ul>
          {folders}
        </ul>
      </aside>
    )
  }
}