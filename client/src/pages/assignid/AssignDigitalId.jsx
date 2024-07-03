import { useContext } from "react";
import Navigation from "../../components/navigation/Navigation";
import PropTypes from 'prop-types'
import { WalletContext } from "../../components/wallet/Wallet";
import {toast} from "react-hot-toast"
import "./AssignDigitalId.css"

const AssignDigitalId = ({account}) => {
    const {contract} =useContext(WalletContext)

    const assignDigitalId = async (e) => {
        e.preventDefault();
        const address =document.querySelector("#address").value;
        const name =document.querySelector("#name").value;

        
        const personData={
            address
        }

        try{
            const res = await fetch("http://localhost:3000/api/person-verification",{
        method:"POST",
        headers:{
           "content-type":"application/json"
        },
        body: JSON.stringify(personData )
       });
       const data = await res.json()
       if(data.message === "person can register identity"){
           await contract.methods.assignDigitalIdentity(address,name).send({from:account,gas:480000});
            toast.success("Registration Succesfull")
       }else{
           toast.error("Registration Unsuccesfull")
       }
       }catch(error){
           console.error(error)
       }
      


    }
    return ( <>
          <Navigation account={account}/>
          <div className="reg-cand-wrapper">
        
           <div className="reg-img-wrapper">
            <h1>Welcome to Digital Id Registration</h1>
            
            {/* <p>Make your votes count towards the voter you like</p> */}
            <img src="/idregister.jpg" width={400}></img>

          </div>
          <form className="can-reg-form" onSubmit={assignDigitalId}>
            <h3>Register</h3>
            <label htmlFor="address">Address</label>
            <input type="text" id="address"></input>

            <label className="label1" htmlFor="name">Name</label>
            <input type="text" id="name"></input>

        

            <button className="regBtn" type="submit">Register You Id</button>

        </form>
          </div>
    </>);

}
AssignDigitalId.propTypes = {
    account: PropTypes.node.isRequired,
  }
export default AssignDigitalId;