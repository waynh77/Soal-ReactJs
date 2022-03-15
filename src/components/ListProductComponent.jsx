import React, { Component } from 'react'
import ProductService from '../services/ProductService'

class ListProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                Products: []
        }
        this.addProduct = this.addProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct(id){
        ProductService.deleteProduct(id).then( res => {
            this.setState({Products: this.state.Products.filter(Product => Product.id !== id)});
        });
    }
    viewProduct(id){
        this.props.history.push(`/view-Product/${id}`);
    }
    editProduct(id){
        this.props.history.push(`/add-Product/${id}`);
    }

    componentDidMount(){
        ProductService.getProducts().then((res) => {
            this.setState({ Products: res.data});
        });
    }

    addProduct(){
        this.props.history.push('/add-Product/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Master Product</h2>
                    <button className="btn btn-primary" onClick={this.addProduct}> Add Product</button>
                 <br></br><br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Nama Product</th>
                                    <th> Harga</th>
                                    <th> Deskripsi</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.Products.map(
                                        Product => 
                                        <tr key = {Product.id}>
                                             <td> { Product.nama} </td>   
                                             <td> {Product.harga}</td>
                                             <td> {Product.deskripsi}</td>
                                             <td>
                                                 <button onClick={ () => this.editProduct(Product.id)} className="btn btn-info">Edit </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProduct(Product.id)} className="btn btn-danger">Hapus </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewProduct(Product.id)} className="btn btn-secondary">Detail </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListProductComponent
