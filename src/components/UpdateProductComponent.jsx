import React, { Component } from 'react'
import ProductService from '../services/ProductService';

class UpdateProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            nama: '',
            harga: '',
            deskripsi: ''
        }
        this.changenamaHandler = this.changenamaHandler.bind(this);
        this.changehargaHandler = this.changehargaHandler.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
    }

    componentDidMount(){
        ProductService.getProductById(this.state.id).then( (res) =>{
            let Product = res.data;
            this.setState({nama: Product.nama,
                harga: Product.harga,
                deskripsi : Product.deskripsi
            });
        });
    }

    updateProduct = (e) => {
        e.preventDefault();
        let Product = {nama: this.state.nama, harga: this.state.harga, deskripsi: this.state.deskripsi};
        console.log('Product => ' + JSON.stringify(Product));
        console.log('id => ' + JSON.stringify(this.state.id));
        ProductService.updateProduct(Product, this.state.id).then( res => {
            this.props.history.push('/Product');
        });
    }
    
    changenamaHandler= (event) => {
        this.setState({nama: event.target.value});
    }

    changehargaHandler= (event) => {
        this.setState({harga: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({deskripsi: event.target.value});
    }

    cancel(){
        this.props.history.push('/Product');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Product</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Nama Product: </label>
                                            <input placeholder="Nama Product" name="nama" className="form-control" 
                                                value={this.state.nama} onChange={this.changenamaHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Harga: </label>
                                            <input placeholder="Harga" name="harga" className="form-control" 
                                                value={this.state.harga} onChange={this.changehargaHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Deskripsi: </label>
                                            <input placeholder="Deskripsi" name="deskripsi" className="form-control" 
                                                value={this.state.deskripsi} onChange={this.changeEmailHandler}/>
                                        </div>
<br></br>
                                        <button className="btn btn-success" onClick={this.updateProduct}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateProductComponent
