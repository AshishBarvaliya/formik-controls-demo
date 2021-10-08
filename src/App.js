import React from 'react'
import './App.css'
import FormikContainer from './React/components/FormikContainer'
import LoginForm from './React/components/LoginForm'
import RegistrationForm from './React/components/RegistrationForm'
import EnrollmentForm from './React/components/EnrollmentForm'

function App () {
  return (
      <div className='App'>
        {/* <FormikContainer /> */}
        <LoginForm />
        {/* <RegistrationForm /> */}
        {/* <EnrollmentForm /> */}
      </div>
  )
}

export default App
