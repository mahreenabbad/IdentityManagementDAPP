import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Wallet from "./components/wallet/Wallet"
import AccountList from "./pages/accountList/AccountList"
import AssignDigitalId from './pages/assignid/AssignDigitalId'
import GetPersonInfo from './pages/personalInfo/GetPersonInfo'
import ProhibitedArea from './pages/prohibit/ProhibitedArea'
import "./App.css"



function App() {
  const [account, setAccount] = useState("")

  const saveAccount=(address)=>{
  setAccount(address)
  }
  const router= createBrowserRouter([
    {path:"/",element:<AccountList saveAccount={saveAccount}/>},
     {path:"/assignDigitalIdentity",element: <AssignDigitalId account={account}/>},
    {path:"/getpersoninfo",element:<GetPersonInfo account={account}/>},
     {path:"/prohibitedarea",element:<ProhibitedArea account={account}/>}
  ]);

  return (
    <>
      <Wallet>
        <RouterProvider router={router}></RouterProvider>
      </Wallet>
    </>
  )
};

export default App