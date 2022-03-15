import React, { Component } from 'react'
import PelangganService from '../services/PelangganService'

class ListPelangganComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                Pelanggans: []
        }
        this.addPelanggan = this.addPelanggan.bind(this);
        this.editPelanggan = this.editPelanggan.bind(this);
        this.deletePelanggan = this.deletePelanggan.bind(this);
    }

    deletePelanggan(id){
        PelangganService.deletePelanggan(id).then( res => {
            this.setState({Pelanggans: this.state.Pelanggans.filter(Pelanggan => Pelanggan.id !== id)});
        });
    }
    viewPelanggan(id){
        this.props.history.push(`/view-Pelanggan/${id}`);
    }
    editPelanggan(id){
        this.props.history.push(`/add-Pelanggan/${id}`);
    }

    componentDidMount(){
        PelangganService.getPelanggans().then((res) => {
            this.setState({ Pelanggans: res.data});
        });
    }

    addPelanggan(){
        this.props.history.push('/add-Pelanggan/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Master Pelanggan</h2>
                    <button className="btn btn-primary" onClick={this.addPelanggan}> Add Pelanggan</button>
                 <br></br><br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Nama Pelanggan</th>
                                    <th> Alamat</th>
                                    <th> Nomor Telepon</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.Pelanggans.map(
                                        Pelanggan => 
                                        <tr key = {Pelanggan.id}>
                                             <td> { Pelanggan.nama} </td>   
                                             <td> {Pelanggan.alamat}</td>
                                             <td> {Pelanggan.noTelp}</td>
                                             <td>
                                                 <button onClick={ () => this.editPelanggan(Pelanggan.id)} className="btn btn-info">Edit </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deletePelanggan(Pelanggan.id)} className="btn btn-danger">Hapus </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewPelanggan(Pelanggan.id)} className="btn btn-secondary">Detail </button>
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

export default ListPelangganComponent
