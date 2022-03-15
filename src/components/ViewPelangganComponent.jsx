import React, { Component } from 'react'
import PelangganService from '../services/PelangganService'

class ViewPelangganComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            Pelanggan: {}
        }
    }

    componentDidMount(){
        PelangganService.getPelangganById(this.state.id).then( res => {
            this.setState({Pelanggan: res.data});
        })
    }

    cancel(){
        this.props.history.push('/Pelanggan');
    }
    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Pelanggan Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Nama Pelanggan: </label>
                            <div> { this.state.Pelanggan.nama }</div>
                        </div>
                        <div className = "row">
                            <label> Alamat: </label>
                            <div> { this.state.Pelanggan.alamat }</div>
                        </div>
                        <div className = "row">
                            <label> Nomor Telepon: </label>
                            <div> { this.state.Pelanggan.noTelp }</div>
                        </div>
                    </div>
                    <br></br>
                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Kembali</button>
                </div>
            </div>
        )
    }
}

export default ViewPelangganComponent
