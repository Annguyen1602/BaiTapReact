import React, { Component } from 'react'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'

export default class BaiTapLayoutComponent extends Component {
  render() {
    return (
      <div>
        <header className='bg-dark'>
        <div className="container">
        <Header/>
        </div>
        </header>
        <section className='body'>
            <div className="container">
                <Body/>
                
            </div>

        </section>
        <footer>
            <Footer/>
        </footer>
    

      </div>
    )
  }
}
