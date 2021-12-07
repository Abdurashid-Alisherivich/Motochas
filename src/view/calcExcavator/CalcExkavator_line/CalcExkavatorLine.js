import React, { Component } from 'react'
import './CalcExkavatorLIne.scss'
import { Range } from 'rc-slider';
import { IoIosArrowDown} from 'react-icons/io';
import 'rc-slider/assets/index.css';

export default class CalcExkavatorLine extends Component {
    render() {
        return (
            <div>
                <div className="asssosiyBAsic">

                
                <label><span className="calcExcavator25">25</span> <span className="clacExcavatorLineMaya">мая</span></label>

                <div className="calcExcavatorLineBasicRange">
                    <Range />
                    <span className="calcExcavatorLineNumber">08 09 11 12 13 14 15 16 17 18 19 20 21 22 23 00 01 03 04 05 06 07</span>
                </div>
                
                </div>

                <div className="calcExcavatorPhone">
                    <p className="phoneFprmat25">25</p> <p className="phoneFormatMaya">мая</p>
                    <p className="verticalLine"></p>
                    <p className="PhoneFormtaC">C</p>
                    <p className="PhoneFormat10">10:00 <IoIosArrowDown className="PhoneFormtaIo" /></p>
                    <p className="verticalLine2"></p>
                    <p className="PhoneFormatDo">До</p>
                    <p className="PhoneFormat16">16:00 <IoIosArrowDown className="PhoneFormtaIo" /></p>
                </div>
            
            
            </div>

        )
    }
}
