import { useState,useContext } from "react";
import { WalletContext } from "../../components/wallet/Wallet";
import Navigation from "../../components/navigation/Navigation";
import {toast} from "react-hot-toast";
import "./ProhibitedArea.css"

const ProhibitedArea = ({account}) => {
   const {contract} =useContext(WalletContext)
   const[access,setAccess] = useState("You are not allowed to access")

   const prohibitedArea =async(e)=>{
     e.preventDefault()
     const address =document.querySelector("#address").value;
     try {
        const result = await contract.methods.prohibitedArea(address).call({ from: account });
        setAccess(result); // This will set "You are ready to enter XYZ area" if access is granted
        toast.success("Access granted!");
     } catch (error) {
        console.error(error);
        setAccess("You are not allowed to access");
        toast.error("Access denied!");
     }
         
     
       
       
   }
    return (<>
       <Navigation account={account}/>
           <div className="table-container">
           <h3>Get Personal Info</h3>
            <label htmlFor="address">Address</label>
            <input type="text" id="address"></input>
            <h2> {access}<br />
            </h2>
            <button onClick={prohibitedArea}>Get Entry</button>
          

    </div>
    </>  );
}
 
export default ProhibitedArea;