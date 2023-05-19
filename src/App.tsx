import React, { useContext } from 'react'
import { AuthContext } from './context/auth'
import HomeLayout from './layout/home'
import LoginFormLayout from './layout/login'

export default function App() {
  const { isAuthenticated } = useContext(AuthContext)

  if (isAuthenticated) {
    return <HomeLayout />
  }

  return (<LoginFormLayout />)
}
