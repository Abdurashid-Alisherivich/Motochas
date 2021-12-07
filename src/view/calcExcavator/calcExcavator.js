import React, {useState} from "react";
import "./calcExcavator.scss"
import CalcData from "./calcData/calcTipper";
import CalcExkavatorLine from "./CalcExkavator_line/CalcExkavatorLine";

// satart icons page
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

// images import sextion
import image1 from "./images/excavator.png"

const CalcExcavator = () => {
         //  Counter is a state initialized to 0
    const [counter, setCounter] = useState(0)

    // Function is called everytime increment button is clicked
    const handleClick1 = () => {
        // Counter state is incremented
        setCounter(counter + 1)
    }

    // Function is called everytime decrement button is clicked
    const handleClick2 = () => {
        // Counter state is decremented
        if(counter>0){
            setCounter(counter - 1)
        }
    }
    return(
        <>
        <div className="calcExcavatorWrapper">
            {/* Start calacExcavator */}
            <div className="container">
                 <div className="row">
                    <div className="col-md-8">
                        <p className="CalsOformlenaZakaz">Оформление заказа</p>
                        <p className="CalsRaschetArenda">Расчет стоимости аренды</p>
                        <CalcData/>
                        <p className="calsVremiya">Время</p>
                        <p className="CalsTotalLittleTxt">Укажите часы, в которые техника будет работать на вашем объекте. <br />
                        Обратите внимание, что при аренде в ночное время добавляется наценка
                        в размере 30% от стоимости за час.</p>
                        <CalcExkavatorLine />
                        <CalcExkavatorLine />
                        <CalcExkavatorLine />
                        <CalcExkavatorLine />
                        <CalcExkavatorLine />
                        <CalcExkavatorLine />
                    </div>

                    <div className="col-6 col-md-4">
                        <div className="card CalsCardStyle">
                            <div className="card-body">
                                <img src={image1} className="img-thumbnail CalsImages" alt="..."/>
                                <p className="CalsEkskavatorR14">Экскаватор R140W-9S</p>
                                <span className="CalsTip">Тип:</span>   <span className="CalsKolesniy">Колесный</span> <br />
                                <span className="CalsTip">Грузоподъемность:</span>  <span className="CalsKolesniyBottomTxt">750 кг</span> <br /> <br />
                                <span className="CalsTip">Цена днем:</span> <span className="CalsTsenaNochno">Цена ночью:</span> <br />
                                <span className="CalsSunIcon"><BsFillSunFill /></span> <span className="CalsSun70">700 000</span> <span className="CalsSunChas">/ час</span> <span className="CalsMoon"><BsFillMoonFill /> <span className="CalsSun70">1 300 000</span> <span className="CalsSunChas">/ час</span></span>
                                    <hr />

                                <span className="CalsSunChas">Объем ковша:</span> <span>Количество техники:</span>
                                    <span>
                                        <div className="row">
                                            <div className="col">
                                                <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                                    <option>1,25 куб/м</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div className="col">
                                                <span>
                                                    <div className="row CalsCounterStyle">
                                                        <div className="col CalsItemsStyle">
                                                            <p className="CalsCounterPlus" onClick={handleClick2}><span>-</span></p>
                                                        </div>
                                                        <div className="col CalsItemsStyle">
                                                            <div className="CalsCounterResult">
                                                                {counter}
                                                            </div>
                                                            </div>
                                                        <div className="col CalsItemsStyle">
                                                            <p className="CalsCounterPlus" onClick={handleClick1}><span>+</span></p>
                                                        </div>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </span>

                                    <span className="CalsGidromolot">Гидромолот:   <input className="form-check-input calsInputCheck" type="checkbox" value="" id="flexCheckChecked" /></span>
                                   
                                   <div className="CalsSummarniSection">
                                       <p className="CalsSummarno">Суммарно:</p>
                                       <span className="CalsTwoDnevniy">Дневных:</span> <span className="CalsTwoNochno">Ночных:</span> <br />
                                       <span className="CalsSunIcon CalsSunIcon2"><BsFillSunFill /></span> <span className="CalsSun70">140</span> <span className="CalsSunChas2">часов</span> <span className="CalsMoon"><BsFillMoonFill /> <span className="CalsSun70">129</span> <span className="CalsSunChas2">часов</span></span>
                                          
                                          <hr className="CalsHr" />
                                        <span className="CalsVsego">Всего:</span> <span className="CalsVsego15">15 000 000</span> <span className="CalsVsegoSum">сум</span>
                                   </div>
                                    <button type="button" className="btn btn-warning calsButton">Оформить заказ</button>
                            </div>
                        </div>
                            <button type="button" className="btn CalsWhiteBtn CalsWhiteBtnPhoneStyle"><span className="CalsButtonPlus">+</span> <span>Добавить к заказу</span> </button>
                            <p className="CalsLatestTxt">Отправить этот заказ в корзину и перейти к добавлению следущего</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CalcExcavator