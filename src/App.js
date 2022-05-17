import React, { Component } from 'react'
import './App.css'
import Head from './head'
import Main from './main'
import Footer from './footer'

export default class App extends Component {
    render() {
        return (
            <div>
                <Head />
                <Main />
                <Footer />
            </div>
        )
    }
}
