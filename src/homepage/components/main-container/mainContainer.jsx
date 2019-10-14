import React, { Component } from 'react'
import ModalNoteComponent from '../examples/modalEditNote'
import SelfEditNoteComponent from '../examples/selfEditNote'

class MainContainerComponent extends Component {
    render() {
        return (
            <div className="main-container">
                <ModalNoteComponent />
                {/* <SelfEditNoteComponent /> */}
            </div>
        )
    }
}

export default MainContainerComponent
