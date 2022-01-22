import logo from '../../assets/logo.png'
import login from '../../assets/icon-login.png'
import {Button} from 'carbon-components-react'
import '../../stylesheets/Home/header.scss'

function Header(){
    return(<header>
     <img src={logo} alt="dreadful tomatoes logo"/>
     <div className="images">
     <div className="login">    
     <Button>Login <img alt="login logo" src={login}/></Button>
     </div>
     <div className="free-trial">
     <Button>Start your free trial</Button>
     </div>
     </div>
    </header>)
}

export default Header