import React, { useState } from "react";
import './Order_step2.scss'
import avtokran from '../../Baza/Assesit/автокранUsauber.jpg'

// import { IoMdArrowRoundBack } from "react-icons/io";
// import { AiOutlineArrowRight } from "react-icons/ai";

function Order_step2() {
  //  Counter is a state initialized to 0
  const [counter, setCounter] = useState(0);

  // Function is called everytime increment button is clicked
  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1);
  };

  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    // Counter state is decremented
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <div>
      <div className="container order_step_center">
        <h4 className="hero_text_order_step">Оформление заказа</h4>
        <div className="row order_step_cols">
          <div className="col-md-7">
            {" "}
            <div className="row">
              <div className="col-md-4">
                <div>
                  <p className="order_shags">Шаг 1</p>
                  <div className="order_titles">
                    <p>Корзина</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <p className="order_shags">Шаг 2</p>
                  <p className="order_titles">Регистрация</p>
                </div>
              </div>
              <div className="col-4">
                <div>
                  <p className="order_shags">Шаг 2</p>
                  <p className="order_titles">Подтверждение</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="col-6 col-md-4">
              <div className="card orderCard">
                <div className="card-body">
                  <img
                    src={avtokran}
                    className="img-thumbnail heroOrderCard"
                    alt="..."
                  />
                  <p className="heroCardName">Экскаватор R140W-9S</p>
                  <span className="orderCardTitle">Грузоподъемность:</span>{" "}
                  <span className="orderCardTitle2">до 35тонн</span> <br />
                  <span className="orderCardTitle">Цена :</span>{" "}
                  <span className="orderCardFooter">
                    850 сум / т.км
                  </span>{" "}
                  <br />
                  <hr />
                  <span className="orderCardmiddle">Тонны</span>{" "}
                  <span className="orderCardmiddle2">Тоннаж прицепа</span>
                  <span>
                    <div className="row">
                      <div className="col">
                        <select
                          className="form-select form-select-lg mb-3"
                          aria-label=".form-select-lg example"
                        >
                          <option>25</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div className="col">
                        <select
                          className="form-select form-select-lg mb-3"
                          aria-label=".form-select-lg example"
                        >
                          <option>16</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                  </span>
                  <div className="col">
                    <span className="Cals_sun_chas">Тип топлива</span>
                    <select
                      className="form-select form-select-lg mb-3"
                      aria-label=".form-select-lg example"
                    >
                      <option>Выберите из списка</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="col">
                    <span className="Cals_sun_chas">Количество техники:</span>
                    <span>
                      <div className="orderAllcounter">
                        <button
                          className="orderMinusButton"
                          onClick={handleClick2}
                        >
                          -
                        </button>
                        <h1 className="orderCounterButtons">{counter}</h1>
                        <button
                          className="orderPlusButton"
                          onClick={handleClick1}
                        >
                          +
                        </button>
                      </div>
                    </span>
                  </div>
                  <div className="heroOrderSection">
                    <span className="orderAllPrice align-center">Всего:</span>{" "}
                    <span className="orderAllCounts align-center">15 000 000</span>{" "}
                    <span className="orderAllsum align-center">сум</span>
                  </div>
                  <button type="button" className="btn btn-warning orderCallsButton">
                    Оформить заказ
                  </button>
                </div>
              </div>
              <br />
            <button className="form-control orderFooterButton"> + Добавить к заказу</button>
            <br /><br />
              <p className="orderFooterText">
                Отправить этот заказ в корзину и перейти к добавлению следущего
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order_step2;
