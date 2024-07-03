const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());
const {Web3} = require("web3");
const ABI = require("./ABI.json")

const API_KEY =process.env.API_KEY
const PORT = process.env.PORT || 3000;

const web3 = new Web3(`https://eth-sepolia.g.alchemy.com/v2/${API_KEY}`)
const contractAddress = "0xdE672F6D6c92E92EBC1df1Bf44AE1D296ad26C17";
const contract = new web3.eth.Contract(ABI,contractAddress);

const personStatus=async(address)=>{
       
         await contract.methods.getPersonInfo(address).call();
         
         return address.hasDigitalIdentity;
    
    
 }

 app.post("/api/person-verification",async(req,res)=>{
    const {address}=req.body;
    if (!web3.utils.isAddress(address)) {
        return res.status(400).json({ message: 'Invalid address' });
      }
    
    try {
       const hasDigitalIdentity= await personStatus(address);
        
    if(address.hasDigitalIdentity === false) {
        res.status(200).json({message:"person can register identity"})
    }else {
        res.status(403).json({message:"You already have digital identity"})
    }
    } catch (error) {
        
    }

})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
