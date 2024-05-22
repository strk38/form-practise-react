// import { useState } from 'react'

import './App.css'
import Grandpa from './Components/Grandpa/Grandpa';
// import SimpleForm from './Components/SimpleForm/SimpleForm'
// import StatefulForm from './Components/StatefulForm/StatefulForm'
// import RefForm from './Components/RefForm/RefForm'
// import HookForm from './Components/HookForm/HookForm'
// import ReuseableForm from './Components/ReuseableForm/ReuseableForm'

function App() {
  // const [count, setCount] = useState(0)

  // const handleSignupSubmit = data => {
  //   console.log('sign up data', data);

  // }

  // const handleSUpdateProfile = data => {
  //   console.log('Update Profile', data);

  // }

  return (
    <>
      <h1>Vite + React</h1>

      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}

      {/* <ReuseableForm formTitle={'Sign Up'} handleSubmit={handleSignupSubmit}>
        <div>
          <p>Please Sign up</p>
        </div>
      </ReuseableForm>
      <ReuseableForm formTitle={'Profile Update'} handleSubmit={handleSUpdateProfile} submitBtnText='Update'></ReuseableForm> */}

      <Grandpa></Grandpa>
    </>
  )
}

export default App
