import React, { Component } from 'react'
import TransaksiService from '../services/TransaksiService'

class ListTransaksiComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                Transaksis: []
        }
    }

    viewTransaksi(id){
        this.props.history.push(`/view-Transaksi/${id}`);
    }

    componentDidMount(){
        TransaksiService.getTransaksis().then((res) => {
            this.setState({ Transaksis: res.data});
        });
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Transaksi</h2>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Kode Transaksi</th>
                                    <th> Tanggal</th>
                                    <th> Pelanggan</th>
                                    <th> Total</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.Transaksis.map(
                                        Transaksi => 
                                        <tr key = {Transaksi.id}>
                                             <td> { Transaksi.kodeTransaksi} </td>   
                                             <td> {Transaksi.tanggal}</td>
                                             <td> {Transaksi.pelanggan.nama}</td>
                                             <td> {Transaksi.total}</td>
                                             <td>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewTransaksi(Transaksi.id)} className="btn btn-secondary">Detail </button>
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

export default ListTransaksiComponent
