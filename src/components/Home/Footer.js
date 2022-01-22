import logo from '../../assets/logo.png'
import app_store from '../../assets/app store.png'
import google_play from '../../assets/google-play.png'
import '../../stylesheets/Home/footer.scss'

function Footer(){
    return(<footer>
    <div className="footer-img">
    <img src={logo} alt="dreadful tomatoes logo"/>
    </div>
    <span>
        <p>Home</p>
        <p>Terms of use</p>
        <p>Legal Notices</p>
        <p>Help</p>
        <p>Manage account</p>
    </span>
    <div className="store-icons">
    <img src={app_store} alt="apple app store icon"/>
    <img src={google_play} alt="google play store icon"/>
    </div>
    <div className="copyright">
    <p>Copyright 2020 Dreadful Tomato Streaming All Rights Reserved</p>
    </div>
    </footer>)
}
export default Footer