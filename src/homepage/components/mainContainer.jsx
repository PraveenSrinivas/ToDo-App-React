import React, { Component } from 'react';
import NoteComponent from './note';
import * as $ from 'jquery';
import AddOrEditNoteModalComponent from './addOrEditNoteModal';
import { GetRawObject } from '../../utilities/helper';

class MainContainerComponent extends Component {
  createNoteDefaultData = {
    noteForm: { title: '', content: '', status: 'todo' },
    mode: 'add',
    index: 0
  };

  state = {
    addOrEditNoteModalData: GetRawObject(this.createNoteDefaultData),
    notes: []
  };

  // Dummy Notes data for testing
  // { title: '1', content: 'ljadskbksjdbc', status: 'todo' },
  // { title: '2', content: 'lkajs dbckadjfv', status: 'in-progress' },
  // { title: '3', content: 'ljasdbvljb  adsv', status: 'todo' },
  // { title: '4', content: 'ljadskbksjdbc', status: 'todo' },
  // { title: '5', content: 'lkajsdbck adjfv', status: 'done' },
  // { title: '6', content: 'ljasdbvljbadsv', status: 'todo' },
  // { title: '7', content: 'ljasdbvljbadsv', status: 'done' }

  addOrEditNote = (mode, index) => {
    mode === 'add'
      ? this.setState({
          addOrEditNoteModalData: GetRawObject(this.createNoteDefaultData)
        })
      : mode === 'edit'
      ? this.setState({
          addOrEditNoteModalData: {
            noteForm: GetRawObject(this.state.notes[index]),
            mode: mode,
            index: index
          }
        })
      : alert('Something went wrong');
    $('#createNoteModal').modal('show');
  };

  confirmAddOrEditNote = addOrEditNoteModalData => {
    const notes = this.state.notes;
    addOrEditNoteModalData.mode === 'add'
      ? notes.push(addOrEditNoteModalData.noteForm)
      : addOrEditNoteModalData.mode === 'edit'
      ? (notes[addOrEditNoteModalData.index] = addOrEditNoteModalData.noteForm)
      : alert('Mode mismatch');
    this.setState({ notes });
  };

  clearAllNotes = () => {
    this.setState({ notes: [] });
  };

  deleteNote = index => {
    const notes = this.state.notes.filter(
      (note, noteIndex) => noteIndex !== index
    );
    this.setState({ notes });
  };

  render() {
    return (
      <div className="main-container">
        <button
          id="take-note-button"
          type="button"
          className="btn btn-warning m-2"
          onClick={() => this.addOrEditNote('add', 0)}
        >
          Take Note
        </button>
        <button
          type="button"
          className="btn btn-danger m-2"
          onClick={this.clearAllNotes}
          disabled={this.state.notes.length <= 0}
        >
          Clear All Notes
        </button>
        <div className="notes-container">
          {this.state.notes.map((note, index) => (
            <NoteComponent
              note={note}
              key={index}
              onDeleteNote={() => this.deleteNote(index)}
              onEdit={() => this.addOrEditNote('edit', index)}
            />
          ))}
        </div>

        <AddOrEditNoteModalComponent
          addOrEditNoteModalData={this.state.addOrEditNoteModalData}
          onAddOrEditNote={this.confirmAddOrEditNote}
        />
      </div>
    );
  }
}

export default MainContainerComponent;
