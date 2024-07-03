import { useState,useContext } from "react";
import { WalletContext } from "../../components/wallet/Wallet";
import Navigation from "../../components/navigation/Navigation";
import "./GetPersonInfo.css"

const GetPersonInfo = ({account}) => {
   const {contract} =useContext(WalletContext)
   const[person,setPerson] = useState([])

   const personInfo =async()=>{
   const address =document.querySelector("#address").value;
      const personInfo = await contract.methods.getPersonInfo(address).call()
      setPerson(personInfo)
   }
    return (<>
       <Navigation account={account}/>
    <div className="table-container">
    <h3>Get Personal Info</h3>
            <label htmlFor="address">Address</label>
            <input type="text" id="address"></input>
            <button onClick={personInfo}>Fetch Info</button>
        <table className="person-table" >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Id</th>
                    
                </tr>
            </thead>
            <tbody>
                {person ?
                    <tr key={person.personId}>
                    <td>{person.name}</td>
                    <td>{String(person.hasDigitalIdentity)}</td>
                    
                    </tr>
                    :<p> </p>
                }

            </tbody>

        </table>

    </div>
    </>  );
}
 
export default GetPersonInfo;