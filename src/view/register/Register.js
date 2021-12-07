import React from "react";
import "../register/Register.scss";
import { IoMdArrowRoundBack } from "react-icons/io";
import { AiOutlineArrowRight } from "react-icons/ai";

function Register() {
  return (
    <div>
      <div className="toFlex">
        <form>
          <div className="row ">
            <div className="col-sm first-inputs">
              <h4 className="hero-text">Название компании</h4>
              <input
                className="form-control first-input"
                type="text"
                placeholder="Введите название компании"
              />
            </div>
            <div className="col-sm option-inputs">
              <h4 className="hero-text">Город</h4>
              <select
                className="form-select my-form"
                aria-label="Default select example"
              >
                <option>Ташкент</option>
                <option value="1">Республика Каракалпакстан</option>
                <option value="2">Андижанская область</option>
                <option value="3">Джизакская область</option>
                <option value="4">Кашкадарьинская область</option>
                <option value="5">Навоийская область</option>
                <option value="6">Наманганская область</option>
                <option value="7">Самаркандская область</option>
                <option value="8">Сурхандарьинская область</option>
                <option value="9">Сырдарьинская область</option>
                <option value="10">Ташкентская область</option>
                <option value="11">Ферганская область</option>
                <option value="12">Хорезмская область</option>
              </select>
            </div>
            <div className="col-sm btn-inputs">
              <h4 className="hero-text">Я уже зарегистрирован(а)</h4>
              <button className="my-yellow-btn">Войти в систему</button>
            </div>
          </div>
          <div className="my-midle">
            <h4 className="hero-text">Контактное лицо</h4>
            <input
              className="form-control long-input"
              type="text"
              placeholder="Введите ваше имя"
            />
            <div className="row row-width">
              <div className="col-sm for-input-position">
                <h4 className="hero-text">Номер телефона</h4>
                <input
                  className="form-control first-input "
                  type="text"
                  placeholder="+998 ** *** ** **"
                />
              </div>
              <div className="col-sm for-input-position">
                <h4 className="hero-text">E-mail</h4>
                <input
                  className="form-control first-input "
                  type="text"
                  placeholder="Введите почту (не обязательно)"
                />
              </div>
            </div>
            <div className="input-comment">
              <h4 className="hero-text">Комментарий</h4>
              <textarea
                className="form-control message-input"
                placeholder="Комментарий"
              ></textarea>
            </div>
          </div>
          <hr className="my-hr" />
          <div className="row ">
            <div className="col-6 btn_rows">
              <button className="btn my_order_btn">
                {" "}
                <IoMdArrowRoundBack /> Корзина
              </button>
            </div>
            <div className="col-6 btn_rows">
              <button  className="btn my_order_btn2">
                Подтвердить <AiOutlineArrowRight />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
