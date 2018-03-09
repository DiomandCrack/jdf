import React, { Component } from 'react'
import AdFirst from '../../container/WhiteNote/AdFirst/AdFirst'
import NoteBonus from './NoteBonus/NoteBonus'
import MoreService from './MoreService/MoreService'
import Help from '../../component/Help/Help'
import Footer from '../../component/Footer/Footer'
export default class WhiteNote extends Component {
    render() {
        return (
            <div className='white-note'>
                <AdFirst/>
                <NoteBonus/>
                <MoreService/>
                <Help/>
                <Footer/>
            </div>
        )
    }
}
