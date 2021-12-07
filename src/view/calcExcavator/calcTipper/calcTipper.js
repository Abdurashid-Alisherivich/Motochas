import React, {useState} from "react";
import './calcTipper.scss'
import CalcData from "./calcData/calcTipper";

// images import sextion
import image1 from "./images/excavator.png"


const CalsTipper = () => {
    const [counter, setCounter] = useState(0)

    // Function is called everytime increment button is clicked
    const handleClick1 = () => {
        // Counter state is incremented
        setCounter(counter + 1)
    }

    // Function is called everytime decrement button is clicked
    const handleClick2 = () => {
        // Counter state is decremented
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

//   Counter 2
    const [counter1, setCounter1] = useState(0)

    // Function is called everytime increment button is clicked
    const handleClick3 = () => {
        // Counter state is incremented
        setCounter1(counter1 + 1)
    }

    // Function is called everytime decrement button is clicked
    const handleClick4 = () => {
        // Counter state is decremented
        if (counter1 > 0) {
            setCounter1(counter1 - 1)
        }
    }

    //   Counter 3
    const [counter2, setCounter2] = useState(0)

    // Function is called everytime increment button is clicked
    const handleClick5 = () => {
        // Counter state is incremented
        setCounter2(counter2 + 1)
    }

    // Function is called everytime decrement button is clicked
    const handleClick6 = () => {
        // Counter state is decremented
        if (counter2 > 0) {
            setCounter2(counter2 - 1)
        }
    }
    return (
        <>
        <div className="calcTipperWrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <span className="tipperOformlena">Оформление заказа</span> <br />
                        <span className="tipperRaschet">Расчет стоимости аренды</span>
                        <div className="tipperCalsData">
                            <CalcData />
                        </div>
                        <div className="tipper_calsData2">
                            <CalcData />
                        </div>
                        <div className="row tipperBasicRow">
                            <div className="col-md-5">
                                    <select className="form-select form-select-lg mb-3 tipperSpuchie" aria-label=".form-select-lg example">
                                    <option>Сыпучие материалы (песок, щебень)</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                    <span>
                                        <div className="tipperCount2">
                                        <div className="row Cals_counterStyle7">
                                            <div className="col CalsItemsStyle7">
                                                <p className="CalsCounterPlus7" onClick={handleClick6}><p className="CalsCounterPlusMain">-</p></p>
                                            </div>
                                            <div className="col CalsItemsStyle7">
                                                <div className="CalsCounterResult7">
                                                    {counter2}
                                                </div>
                                            </div>
                                            <div className="col CalsItemsStyle7">
                                                <p className="CalsCounterPlus" onClick={handleClick5}><span>+</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    </span>
                            </div>
                            <div className="col-md-3">
                                    <span>
                                        <div className="tipperCount3">
                                            <div className="row Cals_counterStyle7">
                                                <div className="col CalsItemsStyle7">
                                                    <p className="CalsCounterPlus7" onClick={handleClick4}><p className="CalsCounterPlusMain">-</p></p>
                                                </div>
                                                <div className="col CalsItemsStyle7">
                                                    <div className="CalsCounterResult7">
                                                        {counter1}
                                                    </div>
                                                </div>
                                                <div className="col CalsItemsStyle7">
                                                    <p className="CalsCounterPlus" onClick={handleClick3}><span>+</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                            <div className="card CalsCardStyleNew">
                                <div className="card-body">
                                    <img src={image1} className="img-thumbnail CalsImages" alt="..." />
                                    <p className="CalsEkskavatorR14">самосвал А264</p>
                                    <span className="CalsTip">Грузоподъемность:</span>   <span className="CalsKolesniy77">до 35 тонн</span> <br />
                                    <span className="CalsTip">Цена :</span>  <span className="CalsKolesniyBottomTxt77">850</span> <span className="CalsTip">сум / т.км</span> <br /> 
                                   
                                    <hr />

                                    <span className="CalsSunChas">Тонны</span> <span className="CalsTsenaNochno77">Тоннаж прицепа</span>
                                    <span>
                                        <div className="row">
                                            <div className="col">
                                                <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                                    <option>25</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div className="col">
                                                <div className="col">
                                                    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                                        <option>16</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </span>

                                    <div className="col">
                                        <label className="Cals_Tip">Тип топлива</label>
                                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                            <option>Выберите из списка</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>

                                    <span>
                                        <label className="Cals_Tip">Количество техники:</label>
                                        <div className="tipperCountLatest">
                                            <div className="row Cals_counterStyle7">
                                                <div className="col CalsItemsStyle7">
                                                    <p className="CalsCounterPlus7" onClick={handleClick2}><p className="CalsCounterPlusMainLatest">-</p></p>
                                                </div>
                                                <div className="col CalsItemsStyle7">
                                                    <div className="CalsCounterResultLatest">
                                                        {counter}
                                                    </div>
                                                </div>
                                                <div className="col CalsItemsStyle7">
                                                    <p className="CalsCounterPlus" onClick={handleClick1}><span>+</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </span> 

                                    <div className="CalsSummarniSectionNew">

                                      
                                    <span className="CalsVsego">Всего:</span> <span className="CalsVsego15">15 000 000</span> <span className="CalsVsegoSum">сум</span>
                                    </div>
                                    <button type="button" className="btn btn-warning calsButton">Оформить заказ</button>
                                </div>
                            </div>
                            <button type="button" className="btn CalsWhiteBtn"><span className="CalsButtonPlus">+</span> <span>Добавить к заказу</span> </button>
                            <p className="CalsLatestTxt">Отправить этот заказ в корзину и перейти к добавлению следущего</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CalsTipper