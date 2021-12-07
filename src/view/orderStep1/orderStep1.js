import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './orderStep1.scss'
import samAsval from '../../Baza/Assesit/самосвалА264.png'
import { GrAdd } from 'react-icons/gr';

const OrderStep1 = () => {
    return (
        <div>
            <div className="container">
                <div className="heroPlace d-flex">
                    <div className="main roboto500">
                        <h3 className="pageTitle mt-5"><b>Оформление заказа</b></h3>
                        <div className="step1-3 d-flex justify-content-between mt-5">
                            <h6 className="stepsTitle me-3">
                                <p className="stepsName m-0 roboto400">Шаг 1</p>
                                <b>Корзина</b>
                            </h6>
                            <h6 className="stepsTitle me-3">
                                <p className="stepsName m-0 roboto400">Шаг 2</p>
                                <b>Регистрация</b>
                            </h6>
                            <h6 className="stepsTitle me-3">
                                <p className="stepsName m-0 roboto400">Шаг 3</p>
                                <b>Подтверждение</b>
                            </h6>
                        </div>
                        <div className="heroElem">
                            <div class="card cardCenter border-0" style={{ width: '300px' }}>
                                <img src={samAsval} class="card-img-top" style={{ width: '103px', height: '100px' }} alt="..." />
                                <div class="card-body p-0 mt-2">
                                    <h5 class="card-title roboto500"><b>САМОСВАЛ А264</b></h5>
                                    <div class="card-text roboto400 d-flex">
                                        <p className="grayText m-0 fs-12" style={{ width: '60%' }}>Грузоподъемность:</p>
                                        <p className="m-0 fs-13">до 35 тонн</p>
                                    </div>
                                    <div class="card-text roboto400 d-flex">
                                        <p className="grayText d-flex fs-12" style={{ width: '60%', alignItems: 'center' }}>Цена :</p>
                                        <p>
                                            <span className="fs-5 fw-bold">850</span>
                                            <span className="grayText fs-12"> сум / т.км</span>
                                        </p>
                                    </div>
                                    <div className="footerLine"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="side">
                        <div className="card1 mt-4 border rounded">
                            <div className="cardMainElem w-100">

                            </div>
                            <div className="totalPrice d-flex justify-content-center w-100">
                                <span>ИТОГОВАЯ ЦЕНА:</span>
                                <span className="priceNum">6 240 000</span>
                                <span className="priceCur">сум</span>
                            </div>
                            <button className="yellowBtnOrder1 w-100 fw-bold roboto500">ОФОРМИТЬ ЗАКАЗ</button>
                        </div>
                        <div className="addCartBtn mt-4">
                            <button className="whiteBtnOrder1 text-muted roboto400 position-relative"><GrAdd className="position-absolute" style={{ left: '30px', top: '15px' }} /> Добавить к заказу</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderStep1;
