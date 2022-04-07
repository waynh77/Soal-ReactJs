import React, { Component } from 'react'
import PelangganService from '../services/PelangganService';

class UpdatePelangganComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            nama: '',
            alamat: '',
            noTelp: ''
        }
        this.changenamaHandler = this.changenamaHandler.bind(this);
        this.changealamatHandler = this.changealamatHandler.bind(this);
        this.updatePelanggan = this.updatePelanggan.bind(this);
    }

    componentDidMount(){
        PelangganService.getPelangganById(this.state.id).then( (res) =>{
            let Pelanggan = res.data;
            this.setState({
                nama: Pelanggan.nama,
                alamat: Pelanggan.alamat,
                noTelp : Pelanggan.noTelp
            });
        });
    }

    updatePelanggan = (e) => {
        e.preventDefault();
        let Pelanggan = { nama: this.state.nama, alamat: this.state.alamat, noTelp: this.state.noTelp};
        console.log('Pelanggan => ' + JSON.stringify(Pelanggan));
        console.log('id => ' + JSON.stringify(this.state.id));
        PelangganService.updatePelanggan(Pelanggan, this.state.id).then( res => {
            this.props.history.push('/Pelanggan');
        });
    }
    
    changenamaHandler= (event) => {
        this.setState({nama: event.target.value});
    }

    changealamatHandler= (event) => {
        this.setState({alamat: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({noTelp: event.target.value});
    }

    cancel(){
        this.props.history.push('/Pelanggan');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Pelanggan</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Nama Pelanggan: </label>
                                            <input placeholder="Nama Pelanggan" name="nama" className="form-control" 
                                                value={this.state.nama} onChange={this.changenamaHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Alamat: </label>
                                            <input placeholder="Last Name" name="alamat" className="form-control" 
                                                value={this.state.alamat} onChange={this.changealamatHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="noTelp" className="form-control" 
                                                value={this.state.noTelp} onChange={this.changeEmailHandler}/>
                                        </div>
<br></br>
                                        <button className="btn btn-success" onClick={this.updatePelanggan}>Save</button>
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

export default UpdatePelangganComponent
