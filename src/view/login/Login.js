import "./Login.scss";
import { AiTwotonePhone } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import {AiFillEye ,AiFillEyeInvisible} from 'react-icons/ai'
import {useState} from 'react'
import { Link } from 'react-router-dom';
function Login() {

  const [hide , setHide] = useState(true)

  function Hide(){
    if(hide === false){
      setHide(true)
    } else {
      setHide(false)
    }
  }

  return (
    <>
      <div className="container main-card-login">
        <h1 className="loginEnter">ВХОД</h1>
        <br />
        <hr  className="loginHr"/>
        <br />
        <div className="row wrapper-login">
          <form>
            <div className="forLoginIcons">
              <div className="forLoginIcon1">
                <AiTwotonePhone  className="loginIcon1"/>
                <input
                  type="number"
                  className="form-control loginInput"
                  placeholder="+998 ** *** ** **"
                />
              </div>
              <br />
              <div className="forLoginIcon2">
                <FaLock className="loginIcon2"/>
                <input
                  type={hide? 'password': 'text'}
                  className="form-control loginInput"
                  placeholder="Введите пароль"
                />
                <AiFillEye onClick={Hide} className="eyes" style={{display : `${hide?'inline' : 'none'}`}} />
                <AiFillEyeInvisible onClick={Hide} className="eyes" style={{display : `${hide?'none' : 'inline'}`}} />
              </div>
            </div>
          </form>
        </div>
        <Link to='' className="loginParol">Забыли пароль?</Link>
        <br />
        <br />
        <hr />
        <br />
        <div className="row  loginFooterButtons">
            <div className="col-4 btn_rows">
              <button className="btn my_order_btn">
                {" "}
                Зарегистроваться
              </button>
            </div>
            <div className="col-4 btn_rows">
              <button  className="btn my_order_btn2">
                Войти 
              </button>
            </div>
          </div>
      </div>
    </>
  );
}
export default Login;
