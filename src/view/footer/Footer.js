import './footer.scss'
import { FaFacebookF,FaTelegramPlane, FaOdnoklassniki, FaInstagram, FaWhatsapp} from 'react-icons/fa';

const Footer = () =>{

    return(
        <>
      <div className="footerr container">
        <div className="footer-line"></div>
        <div className="footer-two-page">
        <div className="footer-one">
        <p className="footer-text">Политика Конфиденциальности <br />@ 2019 Promzonarent.uz </p>
        </div>
        <div className="footer-two">
            <a href="/"> <FaFacebookF className="iconn" /></a>
            <a href="/"><FaTelegramPlane className="iconn" /></a>
            <a href="/"><FaOdnoklassniki className="iconn" /></a>
            <a href="/"><FaInstagram className="iconn" /></a>
            <a href="/"><FaWhatsapp className="iconn" /></a>
            
        </div>
        </div>
      </div>
        </>
    )
}

export default Footer