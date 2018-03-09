import React, { Component } from 'react'
import Panel from '../../core/Panel/Panel'

import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
        <div className='footer'>
            <Panel>
                <ul className='content'>
                    <li>
                        <div>
                            <img src="//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108" alt="客户端"/>
                            <span>
                                客户端
                            </span>
                        </div>
                        <div>
                            <img src="//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108" alt="客户端"/>
                            <span>
                                触屏版
                            </span>
                        </div>
                        <div>
                            <img src="//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108" alt="客户端"/>
                            <span>
                                电脑版
                            </span>
                        </div>
                    </li>
                    <li>Copyright © 2004-2018 京东JD.com 版权所有</li>
                    <li>
                        投资有风险,购买需谨慎
                    </li>
                    <li>
                        京东金融平台服务协议
                    </li>
                    <li>
                        京东金融隐私协议
                    </li>
                </ul>
            </Panel>
        </div>
    )
  }
}
