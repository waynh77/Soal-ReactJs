import React, { Component } from 'react'
import ProductService from '../services/ProductService'

class ViewProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            Product: {}
        }
    }

    componentDidMount(){
        ProductService.getProductById(this.state.id).then( res => {
            this.setState({Product: res.data});
        })
    }
    
    cancel(){
        this.props.history.push('/Product');
    }
    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Product Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Nama Product: </label>
                            <div> { this.state.Product.nama }</div>
                        </div>
                        <div className = "row">
                            <label> Harga: </label>
                            <div> { this.state.Product.harga }</div>
                        </div>
                        <div className = "row">
                            <label> Deskripsi: </label>
                            <div> { this.state.Product.deskripsi }</div>
                        </div>
                    </div>
                    <br></br>
                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Kembali</button>
                </div>
            </div>
        )
    }
}

export default ViewProductComponent
