import {Link} from "react-router-dom"
import ConnectedAccount from "./ConnectedAccount";

import "./Navigation.css"


const Navigation =({account})=>{
    
    return(<>
    <header>
        <nav>
            <div className="connected-account">
                <ConnectedAccount account={account}/>
            </div>
            <ul>
                <li>
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/assignDigitalIdentity">Get Digital ID</Link>
                </li>
                 <li>
                    <Link className="nav-link" to="/getpersoninfo">Get ID Info </Link>
                </li>
                <li>
                    <Link className="nav-link" to="/prohibitedarea">Enter Prohibited Area</Link>
                </li> 
            </ul>
        </nav>
    </header>
    </>)

}
export default Navigation;