import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="./Pelanggan" className="navbar-brand"> Pelanggan </a></div>
                    <div><a href="./Product" className="navbar-brand"> Product </a></div>
                    <div><a href="./Transaksi" className="navbar-brand"> Transaksi </a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
