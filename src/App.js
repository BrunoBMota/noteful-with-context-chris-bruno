import React from 'react';
import './App.css';
import MainSection from './MainSection';
import Folder from './Folder';
import { Route } from 'react-router-dom'
import ExpandedNote from './ExpandedNote';
import NotefulContext from './NotefulContext';


class App extends React.Component {
  state = {
    notes: [],
    folders: []
  }

  componentDidMount(){
    fetch('http://localhost:9090/notes').then(response => response.json()).then(responseJSON => {
      console.log(responseJSON);
      this.setState({
        notes: responseJSON
      })
    });

    fetch('http://localhost:9090/folders').then(response => response.json()).then(responseJSON => {
      console.log(responseJSON);
      this.setState({
        folders: responseJSON
      })
      console.log('Mounted')
    });
  }

  handleDeleteNote = noteId => {
    this.setState({
        notes: this.state.notes.filter(note => note.id !== noteId)
    });
};

  render(){
    return(
      <NotefulContext.Provider value={{
        notes: this.state.notes,
        folders: this.state.folders,
        deleteNote: this.handleDeleteNote
      }}>
    <div className="App">
      <Route exact path='/' component={
      MainSection
      }/>
      <Route exact path='/folder/:folderId' component={
        Folder
      }/>
      <Route path='/note/:noteId' component={
        ExpandedNote
      }/>
    </div>
    </NotefulContext.Provider>
    )
  }
}

export default App;
