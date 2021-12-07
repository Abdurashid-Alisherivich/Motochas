import React from 'react';
import './calcdata.scss'
import { GoLocation } from 'react-icons/go';
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars"


const CalcData = () => {

    return (
        <>

        <div className="calcDate_basic">


                <div className="container_wrapper">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <div className="calcLocation_text_first">
                                <label className="calsDataTextdate">дата прибытия</label>
                            <DatePickerComponent placeholder="введите дату"
                                format="dd-MMM-yyyy"
                            ></DatePickerComponent> <hr className="CalcDate_hr" />
                            </div>
                        </div>
                        
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <label className="calsDataTextdate">Время прибытия</label>
                            <div className="timePickerComponent-file calcLocationText_two">
                                <DatePickerComponent placeholder="введите дату"
                                    format=""
                                ></DatePickerComponent>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <label className="calsDataTextdate">пункт загрузки</label>
                            <div className="calcLocaion">
                                <p className="calcLocationTxt difCounTextpst">ул. С.Рахимова, 25-45 <GoLocation className="calcLocation_icon"/></p>
                            </div>
                        </div>
                    </div>
                </div>

              


               
                

               
            
        </div>
            
        </>
    )
    
}


export default CalcData