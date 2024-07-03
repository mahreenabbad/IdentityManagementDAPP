import { useEffect, useContext, useState } from "react";
import PropTypes from "prop-types";
import { WalletContext } from "../../components/wallet/Wallet";
import Navigation from "../../components/navigation/Navigation";
import "./AccountList.css";

const AccountList =({saveAccount})=>{
    const {web3}= useContext(WalletContext);
    const [account,setAccount]= useState("")
    useEffect(()=>{
        const allAccounts=async()=>{
           var select = document.getElementById("selectNumber")
           var options = await web3.eth.getAccounts();

           for(let i=0; i<options.length;i++){
            var opt = options[i];
            var el= document.createElement('option');//This line creates a new option element for a dropdown list
            el.textContent =opt;//This line sets the text that will be displayed in the option element
            el.value = opt;//This line sets the value of the option element. When the user selects this option, this value (the account address) will be sent or used in your code.
            select.appendChild(el);//This line adds the newly created option element to the select dropdown menu. The select variable refers to the dropdown menu element in your HTML.
           }
        }
        web3 && allAccounts();
    },[web3])
    const selectAccount =()=>{
        const selectedAccount = document.querySelector("#selectNumber").value;
        setAccount(selectedAccount);
        if(selectedAccount && selectedAccount !== "Choose an account"){
            saveAccount(selectedAccount)
        }
    }
    return(<>
    <div className="ac-list-wrapper">
      <Navigation account={account} />
      <div className="ac-list-container">
        <img src="/id.gif" alt="voteGIF" autoPlay width={240} />
        <h1 className="ac-list-title">
          Revolutionalitised <span className="span">Digital Identity Management system</span>
          <br />
          through blockchain
        </h1>
        <form className="ac-list-form" id="myForm">
          <select
            className="innerBox"
            id="selectNumber"
            onChange={selectAccount}
            defaultValue=""
          >
            <option disabled value="">
              Choose an account
            </option>
          </select>
        </form>
        <p className="note">
          *Go to Menu: Get verified and be a digital person
        </p>
      </div>
    </div>
    </>)
}
AccountList.propTypes = {
    saveAccount: PropTypes.func.isRequired, // Change PropTypes.node to PropTypes.func
  };
export default AccountList;