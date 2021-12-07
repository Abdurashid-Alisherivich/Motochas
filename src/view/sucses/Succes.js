import React from "react";
import "../sucses/Succes.scss";
import { BsCheck } from "react-icons/bs";
function Succes() {
  return (
    <div>
        <div className="container toCenterSucces">
          <div className="forIcon">
            <BsCheck />
            <p className="forSucces">Поздравляйем, ваш заказ обработан</p>

            <p className="succesMiddle">
              Вы можете отследить статус заявки в личном кабинете
            </p>
            <p className="succesMiddle">
              Обратите внимание, что мы работаем только по предоплатею.
            </p>
            <p className="succesMiddle">
              Пожалуйста, оплатите заказ своевременно, чтобы получить технику на
              указанные вами дату и время.
            </p>
            <button className="succesBtn">Скачать договор</button>
            <hr className="mySuccesHr" />
            <button className="succesBtn2">Вернутьця на главную страницу</button>
          </div>
        </div>
    </div>
  );
}

export default Succes;
