import React, { Component } from 'react'

class AddOrEditNoteModalComponent extends Component {
    state = {
        noteForm: { title: '', content: '', status: 'todo' },
        mode: 'add',
        index: 0,
    }

    componentDidMount(props) {
        if (props) {
            this.setState({
                noteForm: props.addOrEditNoteModalData.noteForm,
                mode: props.addOrEditNoteModalData.mode,
                index: props.addOrEditNoteModalData.index,
            })
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({
                noteForm: this.props.addOrEditNoteModalData.noteForm,
                mode: this.props.addOrEditNoteModalData.mode,
                index: this.props.addOrEditNoteModalData.index,
            })
        }
    }

    createNote = () => {
        if (
            this.state.noteForm.title === '' &&
            this.state.noteForm.content === ''
        ) {
            alert('Please enter valid title and content for the note')
        } else if (this.state.noteForm.title === '') {
            alert('Please enter valid title for the note')
        } else if (this.state.noteForm.content === '') {
            alert('Please enter valid content for the note')
        } else {
            this.props.onAddOrEditNote(this.state)
        }
    }

    handleCreateNoteForm = event => {
        const noteForm = this.state.noteForm
        noteForm[event.target.name] = event.target.value
        this.setState({ noteForm })
    }

    render() {
        return (
            <div
                className="modal fade"
                id="createNoteModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="createNoteModalCenterTitle"
                aria-hidden="true">
                <div
                    className="modal-dialog modal-dialog-centered"
                    role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                                className="modal-title"
                                id="exampleModalLongTitle">
                                {this.state.mode === 'add' ? 'Add' : 'Edit'}{' '}
                                Note
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form
                                onSubmit={event => {
                                    event.preventDefault()
                                }}>
                                <div className="form-group">
                                    <label htmlFor="create-note-title">
                                        Note Title
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        className="form-control"
                                        id="create-note-title"
                                        placeholder="Enter Note Title"
                                        value={this.state.noteForm.title}
                                        onChange={this.handleCreateNoteForm}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="create-note-content">
                                        Note Content
                                    </label>
                                    <textarea
                                        type="text"
                                        name="content"
                                        className="form-control"
                                        id="create-note-content"
                                        placeholder="Enter Note Content"
                                        value={this.state.noteForm.content}
                                        onChange={this.handleCreateNoteForm}
                                    />
                                </div>

                                <div className="custom-control custom-radio">
                                    <input
                                        type="radio"
                                        name="status"
                                        id="todo"
                                        value="todo"
                                        className="custom-control-input"
                                        checked={
                                            this.state.noteForm.status ===
                                            'todo'
                                        }
                                        onChange={this.handleCreateNoteForm}
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="todo">
                                        ToDo
                                    </label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input
                                        type="radio"
                                        name="status"
                                        id="in-progress"
                                        value="in-progress"
                                        className="custom-control-input"
                                        checked={
                                            this.state.noteForm.status ===
                                            'in-progress'
                                        }
                                        onChange={this.handleCreateNoteForm}
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="in-progress">
                                        In - Progress
                                    </label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input
                                        type="radio"
                                        name="status"
                                        id="done"
                                        value="done"
                                        className="custom-control-input"
                                        checked={
                                            this.state.noteForm.status ===
                                            'done'
                                        }
                                        onChange={this.handleCreateNoteForm}
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="done">
                                        Done
                                    </label>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal">
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-dismiss="modal"
                                onClick={this.createNote}>
                                {this.state.mode === 'add' ? 'Add' : 'Save'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddOrEditNoteModalComponent
