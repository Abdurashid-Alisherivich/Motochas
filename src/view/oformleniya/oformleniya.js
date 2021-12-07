import './oformleniya.css'
import excavator28 from '../../Baza/Assesit/excavator28.png'
import React, { useState } from 'react'


function Oformleniya() {
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
        return (
            <>

                <div>
                    <div className="container oformleniya_center">
                        <h4 className="oformleniya_title">Оформление заказа</h4>
                        <div className="row oformleniya_cols">
                            <div className="col-md-7">
                                <div className="row">


                                    <div className="col-md-4">
                                        <div>
                                            <p className="oformleniya_shags">Шаг 1</p>
                                                <p className="oformleniya_internal-title">Корзина</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div>
                                            <p className="oformleniya_shags">Шаг 2</p>
                                            <p className="oformleniya_internal-title">Регистрация</p>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div>
                                            <p className="oformleniya_shags">Шаг 2</p>
                                            <p className="oformleniya_internal-title">Подтверждение</p>
                                        </div>
                                    </div>
                                </div>

                                            
                                <div className="reInputs">
        <form>
        <div className="row g-2">
  <div className="col firstInpTeam">
    <p className="inpText">Контактное лицо</p>
    <input type="text" className="form-control firstInp" placeholder="Ваше имя" aria-label="First name" />
  </div>
  <div className="col-sm ofmlAboutCity">
              <p className="inpText">Город</p>
              <select
                className="form-select secondInp"
                aria-label="Default select example"
              >
                <option>Ташкент</option>
                <option className="gorod" value="1">Республика Каракалпакстан</option>
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
  <div className="kompInp">
  <p className='inpText '>Название компании</p>
  <input type="text" className="form-control firstInp thirtInp" placeholder="Введите название компании" aria-label="First name" />
  </div>
  <div className="col firstInpTeam thirdInpTeam">
    <p className="inpText">номер телефона</p>
    <input type="text" className="form-control firstInp" placeholder="+998 ** *** ** **" aria-label="First name" />
  </div>
  <div className="col thirdInpTeam">
    <p className='inpText'>email</p>
    <input type="email" className="form-control firstInp secondInp" placeholder="Введите почту (необязательно)" aria-label="Last name" />
  </div>
  <div className="ofmlcomment thirdInpTeam">
  <p className="inpText">Комментарий</p>
  <textarea className="ofmlMasage" name="" id="" cols="83" rows="5" placeholder="Вы можете отправить комментарий для уточнения заказа"></textarea>
  </div>
  <div className="ofmlInpButon">
    <button className="inpBtn">Корзина</button>
  </div>
</div>
        </form>
      </div>
                            </div>
                            <div className="col-5">

                                {/* Start to big Crad */}
                            <div className="col-6 col-md-4">
                        <div className="card ofmlCard">
                            <div className="card-body">
                                <img src={excavator28} className="img-thumbnail ofmlCardImag" alt="..."/>
                                <p className="Cals_ekskavator_R14">Экскаватор R140W-9S</p>
                                <span className="Cals_Tip">Грузоподъемность:</span>   <span className="ofmlTons">до 35тонн</span> <br />
                                <span className="Cals_Tip">Цена :</span>  <span className="Cals_kolesniy_bottom_txt">850 сум / т.км</span> <br /><hr /> 
                                <span className="Cals_sun_chas">Тонны</span> <span className="Cals_tsenaNochno">Тоннаж прицепа</span>
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
                                            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
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
                                   <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                                    <option>Выберите из списка</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                   </div>
                                   <div className="col">
                                   <span className="Cals_sun_chas">Количество техники:</span>
                                   <span>

                                   <div className="count_numb_tech" >
                                    <button className="oformalenaNumbMinus" onClick={handleClick2}>-</button>
                                    <h1 className="oformalenaNumb">{counter}</h1>
                                    <button className="oformalenaNumbPlus" onClick={handleClick1}>+</button>
                                </div>
                                                </span>
                                   </div>
                                   <div className="ofmlGreyStay">
                                  
                                        
                                        <span className="CalsVsego align-center">Всего:</span> <span className="CalsVsego15 align-center">15 000 000</span> <span className="CalsVsegoSum align-center">сум</span>
                                   </div>
                                    <button type="button" className="btn btn-warning calsButton">Оформить заказ</button>
                            </div>
                        </div>
                            <button type="button" className="btn ofmlCardNextBtn"><span className="CalsButtonPlus">+</span> <span>Добавить к заказу</span> </button>
                            <p className="ofmlCardNextText">Отправить этот заказ в корзину и перейти к добавлению следущего</p>
                    </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </>
        )
    }
   
export default Oformleniya