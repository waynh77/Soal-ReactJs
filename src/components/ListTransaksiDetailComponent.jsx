import React, { Component } from 'react'
import TransaksiService from '../services/TransaksiService'

class ListTransaksiDetailComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            Transaksi: {}
        }
    }

    componentDidMount() {
        TransaksiService.getTransaksiById(this.state.id).then(res => {
            this.setState({ Transaksi: res.data });
        })
    }

    cancel() {
        this.props.history.push('/Transaksi');
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Detail Transaksi</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> Kode Transaksi: </label>
                            <div> { this.state.Transaksi.kodeTransaksi }</div>
                        </div>
                        <div className="row">
                            <label> Tanggal: </label>
                            <div> { this.state.Transaksi.tanggal }</div>
                        </div>
                        <div className="row">
                            <label> Nama Pelanggan: </label>
                            <div> { this.state.Transaksi.pelangganId }</div>
                        </div>
                        <div className="row">
                            <label> Nomor Telepon: </label>
                            <div> { this.state.Transaksi.pelangganId }</div>
                        </div>
                    </div>
                    <br></br>
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Nama Produk</th>
                                <th> Harga Satuan</th>
                                <th> Jumlah</th>
                                <th> Sub Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                // this.state.Transaksis.map(
                                //     Transaksi =>
                                //         <tr>
                                //             <td> {Transaksi.transaksiDetail.produk.nama} </td>
                                //             <td> {Transaksi.transaksiDetail.produk.harga}</td>
                                //             <td> {Transaksi.transaksiDetail.jumlah}</td>
                                //             <td> {Transaksi.transaksiDetail.produk.harga}*{Transaksi.transaksiDetail.jumlah}</td>
                                //         </tr>
                                // )
                            }
                        </tbody>
                    </table>
                    <br></br>
                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Kembali</button>
                </div>
            </div>
        )
    }
}

export default ListTransaksiDetailComponent
