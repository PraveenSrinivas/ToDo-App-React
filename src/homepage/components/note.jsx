import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NoteComponent extends Component {
  render() {
    return (
      <div
        className={
          'card note text-white ' +
          (this.props.note.status === 'done'
            ? 'bg-success'
            : this.props.note.status === 'in-progress'
            ? 'bg-info'
            : 'bg-warning')
        }
      >
        <div className="card-header">
          <span className="card-header-title">{this.props.note.title}</span>
          <span className="card-header-actions">
            <FontAwesomeIcon
              icon="edit"
              aria-label="Edit Note"
              title="Edit Note"
              onClick={this.props.onEdit}
            />
            <FontAwesomeIcon
              icon="trash"
              aria-label="Delete Note"
              title="Delete Note"
              onClick={this.props.onDeleteNote}
            />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text note-content">{this.props.note.content}</p>
        </div>
      </div>
    );
  }
}

export default NoteComponent;
