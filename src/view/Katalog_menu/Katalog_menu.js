import React from 'react';
import {Link} from 'react-router-dom';
import './Katalog_menu.scss';
// import ekskavator from '../../Baza/Assesit/АвтокраныUSaubers2.jpg'
import { RiSunFill} from 'react-icons/ri';
import { IoIosMoon } from 'react-icons/io';
import Baza from '../../Baza/db'
// import excavator28 from '../../Baza/Assesit/excavator28.png'
// import buldozer from '../../Baza/Assesit/bulldozer.png'
// import autoladder from '../../Baza/Assesit/autoladder.png'


const Katalog_menu = () => {

    return (
        <div>
            <div className="catalog_menu catalog_pt katalog_left_right_pd">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="catalog_menu_bloc">
                                <div className="catalog_menu_header">
                                    <p>каталог техники</p>
                                    <h4>
                                        Автокраны
                                    </h4>
                                </div>
                                <ul className="catalog_ul" >
                                    <li>
                                        <Link to="/" className="catalog_ul_link" >Экскаваторы</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="catalog_ul_link">Автовышки</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="catalog_ul_link">Манипуляторы</Link>
                                    </li>
                                    <li>
                                        <Link className="catalog_ul_link" to="/katalogcard">Автокраны</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="catalog_ul_link">Бульдозеры</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="catalog_ul_link">Самосвалы</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="catalog_ul_link">Фронтальные погрузчики</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="catalog_ul_link">Экскаваторы</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="catalog_ul_link">Автовышки</Link>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                        <div className="col-md-9 catalogBasicCardSectionFirst">
                            <div className="row">
                                {Baza.map((elem) => {
                                    return (
                                        <div className="col-md-4" key={elem.id}>
                                            <img src={process.env.PUBLIC_URL + `${elem.imagePath}`} className="img-thumbnail catalogBasicImages" alt="..."></img>

                                            <p className="text-start KatalogTextName">{elem.title}</p>
                                            <span className="katalogTip">{elem.typeOf}</span> <span className="katalogКолесный">{elem.wheeled}</span> <br />
                                            <span className="katalogTip">{elem.carryingCapacity}</span> <span className="catalogCapacity">{elem.carryingCapacityKg}</span>
                                            <br /> <br />
                                            <span className="katalogTip">{elem.daytimePrice}</span>
                                            <span className="katalogTip catalogTipFirstStyle">{elem.priceAtNight}</span><br />
                                            <span><RiSunFill className="katalogSunIcon" /></span> <span className="catalogSunNum">700 000</span> <span className="catalogSunChas">/ час</span>
                                            <span className="catalogMoonBasicStyle"><span><IoIosMoon className="katalogMoonIcon" /></span> <span className="catalogSunNum">1 300 000</span> <span className="catalogSunChas">/ час</span></span>

                                            <br /><br /><br />
                                        </div>

                                    )
                                })}
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
            <div className="katalog-div-free"></div>
        </div >
    );
};


export default Katalog_menu;