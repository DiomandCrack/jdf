import React, { Component } from 'react'
import Panel from '../../../core/Panel/Panel'
import './Download.css'
export default class Download extends Component {
    render() {
        return (
            <div className='download'>
                <Panel>
                    <section className='content'>
                        <div className="item">
                        </div>
                        <div className='btn-con'>
                            <p>立即下载</p>
                        </div>
                        <p className="text">
                            copyright
                        </p>
                    </section>
                </Panel>
            </div>
        )
    }
}
