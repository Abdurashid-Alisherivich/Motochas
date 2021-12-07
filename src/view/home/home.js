import './home.scss'
// import excavator28 from '../../Baza/Assesit/excavator28.png'
// import buldozer from '../../Baza/Assesit/bulldozer.png'
// import autoladder from '../../Baza/Assesit/autoladder.png' 
import imgHome from '../../Baza/Assesit/kamaz.jpg'   
import icon1 from "../../Baza/Assesit/icon1.jpg";
import icon2 from "../../Baza/Assesit/icon2.jpg";
import icon3 from "../../Baza/Assesit/icon3.jpg";
import icon4 from "../../Baza/Assesit/icon4.jpg";
import Baza  from '../../Baza/db'

import { FaSistrix } from "react-icons/fa";

function Home () {
  console.log(Baza)
    return(
        <>
        <div className="header-page text-center" style={{ backgroundImage: `url(${imgHome})` }}>
          <div className="header-page-two">
            <h1 className="home-title">СПЕЦТЕХНИКА В АРЕНДУ</h1>
              <div className="home-icon-input">
                <input className="home-inp" placeholder="Какую технику ищем?" type="text" />
                <div className="icon-home"><FaSistrix /></div>
              </div>
          </div>
        </div> 

        <div className="container">
          <div className="row">
            <div className="wrapper">
              {Baza.filter((prod)=>prod.imagePath.slice(-4) === '.png').slice(1).map((elem)=> {
                return(
                  <div className="wrap-card col-sm" key={elem.id}>
                    <h1 className="numbers">21</h1>
                    <h2 className="name-for-cranes">{elem.title}</h2>
                    <h5 className="text-orientation">моделей</h5>
                    <img className="image-for-card" src={elem.imagePath} alt=""/>
                  </div>
                )
              })}
              
            </div>
          </div>
    </div>
   

      <div className="DifficultCards">  
        <div className="container">
            <div className="row">
              {Baza.slice(4).map((elem)=> {
                return(
                  <div className="col" key={elem.id}>
                    <div className="littleHomeCards">
                        <img src={process.env.PUBLIC_URL + `${elem.imagePath}`} className="img-thumbnail HomeCardIMages11 changed-style "alt="..."></img>
                        <p className="littleCradText">{elem.title}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

      </div>
    
    <p className="home-center-title">Преимущества работы с нами</p>

    <div className="container toflex">
      <div className="row">
            <div className="col-md-3">
              <div className="simpleCard">
                <img className="img_position" src={icon1}  alt="" />
                <p className="simpleCard_name">Быстро и просто</p>
                <p className="simpleCard_title">Быстрый поиск и оформление аренды, простой документооборот</p>
              </div>
             </div>

             <div className="col-md-3">
              <div className="simpleCard">
                <img className="img_position" src={icon2} alt="" />
                <p className="simpleCard_name">Выгодно</p>
                <p className="simpleCard_title">Мы работаем по средним рыночным ценам</p>
              </div>
             </div>

             <div className="col-md-3">
              <div className="simpleCard">
                <img className="img_position" src={icon3} alt="" />
                <p className="simpleCard_name">Надежно</p>
                <p className="simpleCard_title">Мы всегда находимся на связи и готовы оперативно решать ваши вопросы</p>
              </div>
             </div>

             <div className="col-md-3">
              <div className="simpleCard">
                <img className="img_position" src={icon4}  alt="" />
                <p className="simpleCard_name">Индивидуальный подход</p>
                <p className="simpleCard_title">Специальные условия для крупных объектов и бонусы при долгосрочном сотрудничестве</p>
              </div>
             </div>
      </div>
    </div>
    <div className="free-div">
      
    </div>
        </>
    )
}

export default Home