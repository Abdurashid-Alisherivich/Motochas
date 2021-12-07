import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cartsPage.scss'
import image1 from '../../Baza/Assesit/самосвалА264.png'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { AiOutlineArrowRight } from 'react-icons/ai';
const CartsPage = () => {

    const [counter, setCounter] = useState(1)

    const handleClick1 = () => {
        setCounter(counter + 1)
    }

    const handleClick2 = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    return (
        <div className="container">
            <div className="addedCarts">
                {/* Cart */}
                <div className="card mb-3 flex-nowrap roboto500 cardSize" style={{ borderRadius: '10px 10px 50px 10px' }}>
                    <div className="p-4 pt-4">
                        <div className="row forFlexMdNowrap">
                            <div className="col-sm-6 forFlexWrap">
                                <img src={image1} className="img-fluid rounded-start" style={{}} alt="..." />
                                <button className="deleteCart d-flex mt-5 rounded roboto500"><RiDeleteBin5Line className="me-1" /><b>УБРАТЬ ИЗ КОРЗИНЫ</b></button>
                            </div>
                            <div className="col-sm-6 forFlexWrap">
                                <div className="card-body">
                                    <h5 className="card-title titleCard"><b>Автокраны USaubers 12 тонн / 14 м</b></h5>
                                    <div className="mt-xl-5 mt-md-4 respMargin fSize-8">
                                        <p className="card-text fw-bold m-0">
                                            <small>
                                                <span className="grayText">С:</span> <span>27.06.2019, 09:00</span>
                                            </small>
                                        </p>
                                        <p className="card-text fw-bold">
                                            <small>
                                                <span className="grayText">До:</span> <span>27.06.2019, 09:00</span>
                                            </small>
                                        </p>
                                    </div>
                                    <div className="mt-xl-4 mt-md-2 fSize-8 respMargin">
                                        <p className="card-text fw-bold m-0">
                                            <small>
                                                <span className="grayText">Длина вылета стрелы:</span> <span>14 м</span>
                                            </small>
                                        </p>
                                        <p className="card-text fw-bold">
                                            <small>
                                                <span className="grayText">Грузоподъемность:</span> <span>12 тонн</span>
                                            </small>
                                        </p>
                                    </div>
                                    <div className="addAndDec d-flex mt-xl-5 respMargin mt-md-4 text-muted">
                                        <div className="border p-2" style={{ width: '30%', borderRadius: '5px 0px 0px 5px' }} onClick={handleClick2}>-</div>
                                        <p className="m-0 border p-2" style={{ width: '40%' }}>{counter}</p>
                                        <div className="border p-2" style={{ width: '30%', borderRadius: '0px 5px 5px 0px' }} onClick={handleClick1}>+</div>
                                    </div>
                                    <div className="cartPrice mt-4">
                                        <p className="card-text fw-bold">
                                            <small>
                                                <span className="grayText">Цена:</span> <span>6 240 000 сум</span>
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3 flex-nowrap roboto500 cardSize" style={{ borderRadius: '10px 10px 50px 10px' }}>
                    <div className="p-4 pt-4">
                        <div className="row forFlexMdNowrap">
                            <div className="col-sm-6 forFlexWrap">
                                <img src={image1} className="img-fluid rounded-start" style={{}} alt="..." />
                                <button className="deleteCart d-flex mt-5 rounded roboto500"><RiDeleteBin5Line className="me-1" /><b>УБРАТЬ ИЗ КОРЗИНЫ</b></button>
                            </div>
                            <div className="col-sm-6 forFlexWrap">
                                <div className="card-body">
                                    <h5 className="card-title titleCard"><b>Автокраны USaubers 12 тонн / 14 м</b></h5>
                                    <div className="mt-xl-5 mt-md-4 respMargin fSize-8">
                                        <p className="card-text fw-bold m-0">
                                            <small>
                                                <span className="grayText">С:</span> <span>27.06.2019, 09:00</span>
                                            </small>
                                        </p>
                                        <p className="card-text fw-bold">
                                            <small>
                                                <span className="grayText">До:</span> <span>27.06.2019, 09:00</span>
                                            </small>
                                        </p>
                                    </div>
                                    <div className="mt-xl-4 mt-md-2 fSize-8 respMargin">
                                        <p className="card-text fw-bold m-0">
                                            <small>
                                                <span className="grayText">Длина вылета стрелы:</span> <span>14 м</span>
                                            </small>
                                        </p>
                                        <p className="card-text fw-bold">
                                            <small>
                                                <span className="grayText">Грузоподъемность:</span> <span>12 тонн</span>
                                            </small>
                                        </p>
                                    </div>
                                    <div className="addAndDec d-flex mt-xl-5 respMargin mt-md-4 text-muted">
                                        <div className="border p-2" style={{ width: '30%', borderRadius: '5px 0px 0px 5px' }} onClick={handleClick2}>-</div>
                                        <p className="m-0 border p-2" style={{ width: '40%' }}>{counter}</p>
                                        <div className="border p-2" style={{ width: '30%', borderRadius: '0px 5px 5px 0px' }} onClick={handleClick1}>+</div>
                                    </div>
                                    <div className="cartPrice mt-4">
                                        <p className="card-text fw-bold">
                                            <small>
                                                <span className="grayText">Цена:</span> <span>6 240 000 сум</span>
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 flex-nowrap roboto500 cardSize" style={{ borderRadius: '10px 10px 50px 10px' }}>
                    <div className="p-4 pt-4">
                        <div className="row forFlexMdNowrap">
                            <div className="col-sm-6 forFlexWrap">
                                <img src={image1} className="img-fluid rounded-start" style={{}} alt="..." />
                                <button className="deleteCart d-flex mt-5 rounded roboto500"><RiDeleteBin5Line className="me-1" /><b>УБРАТЬ ИЗ КОРЗИНЫ</b></button>
                            </div>
                            <div className="col-sm-6 forFlexWrap">
                                <div className="card-body">
                                    <h5 className="card-title titleCard"><b>Автокраны USaubers 12 тонн / 14 м</b></h5>
                                    <div className="mt-xl-5 mt-md-4 respMargin fSize-8">
                                        <p className="card-text fw-bold m-0">
                                            <small>
                                                <span className="grayText">С:</span> <span>27.06.2019, 09:00</span>
                                            </small>
                                        </p>
                                        <p className="card-text fw-bold">
                                            <small>
                                                <span className="grayText">До:</span> <span>27.06.2019, 09:00</span>
                                            </small>
                                        </p>
                                    </div>
                                    <div className="mt-xl-4 mt-md-2 fSize-8 respMargin">
                                        <p className="card-text fw-bold m-0">
                                            <small>
                                                <span className="grayText">Длина вылета стрелы:</span> <span>14 м</span>
                                            </small>
                                        </p>
                                        <p className="card-text fw-bold">
                                            <small>
                                                <span className="grayText">Грузоподъемность:</span> <span>12 тонн</span>
                                            </small>
                                        </p>
                                    </div>
                                    <div className="addAndDec d-flex mt-xl-5 respMargin mt-md-4 text-muted">
                                        <div className="border p-2" style={{ width: '30%', borderRadius: '5px 0px 0px 5px' }} onClick={handleClick2}>-</div>
                                        <p className="m-0 border p-2" style={{ width: '40%' }}>{counter}</p>
                                        <div className="border p-2" style={{ width: '30%', borderRadius: '0px 5px 5px 0px' }} onClick={handleClick1}>+</div>
                                    </div>
                                    <div className="cartPrice mt-4">
                                        <p className="card-text fw-bold">
                                            <small>
                                                <span className="grayText">Цена:</span> <span>6 240 000 сум</span>
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end of cart */}
            </div>
            <div className="totalTextBtn">
                <h5 className="totalPrice">
                    <span>Итоговая цена:</span>
                    <span className="priceNum">6 240 000 сум</span>
                </h5>
                <div className="footerLine"></div>
                <div className="confirBtn">
                    <button className="yellowBtnMin roboto-500 border-0 fw-bold">Оформление заказа <AiOutlineArrowRight /></button>
                </div>
            </div>

        </div>
    );
};

export default CartsPage;   