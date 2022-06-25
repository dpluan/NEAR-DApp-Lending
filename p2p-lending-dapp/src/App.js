import 'regenerator-runtime/runtime'
import React from 'react'
import { login, logout } from './utils'
import './global.css'
import './app.css'
import Header from "./components/Header"
import Hero from "./components/Hero"
import Specs from "./components/Specs"

import getConfig from './config'
const { networkId } = getConfig(process.env.NODE_ENV || 'development')

export default function App() {

    return (
      <>
        <Header/>
        <Hero/>
        <Specs/>
      </>
    )
}

