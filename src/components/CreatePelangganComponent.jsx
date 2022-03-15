import React, { Component } from 'react'
import PelangganService from '../services/PelangganService';

class CreatePelangganComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            nama: '',
            alamat: '',
            noTelp: ''
        }
        this.changenamaHandler = this.changenamaHandler.bind(this);
        this.changealamatHandler = this.changealamatHandler.bind(this);
        this.saveOrUpdatePelanggan = this.saveOrUpdatePelanggan.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            PelangganService.getPelangganById(this.state.id).then( (res) =>{
                let Pelanggan = res.data;
                this.setState({nama: Pelanggan.nama,
                    alamat: Pelanggan.alamat,
                    noTelp : Pelanggan.noTelp
                });
            });
        }        
    }
    saveOrUpdatePelanggan = (e) => {
        e.preventDefault();
        let Pelanggan = {nama: this.state.nama, alamat: this.state.alamat, noTelp: this.state.noTelp};
        console.log('Pelanggan => ' + JSON.stringify(Pelanggan));

        // step 5
        if(this.state.id === '_add'){
            PelangganService.createPelanggan(Pelanggan).then(res =>{
                this.props.history.push('/Pelanggan');
            });
        }else{
            PelangganService.updatePelanggan(Pelanggan, this.state.id).then( res => {
                this.props.history.push('/Pelanggan');
            });
        }
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

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Pelanggan</h3>
        }else{
            return <h3 className="text-center">Update Pelanggan</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Nama Pelanggan: </label>
                                            <input placeholder="Nama Pelanggan" name="nama" className="form-control" 
                                                value={this.state.nama} onChange={this.changenamaHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Alamat: </label>
                                            <input placeholder="Alamat" name="alamat" className="form-control" 
                                                value={this.state.alamat} onChange={this.changealamatHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Nomor Telepon: </label>
                                            <input placeholder="Nomor Telepon" name="noTelp" className="form-control" 
                                                value={this.state.noTelp} onChange={this.changeEmailHandler}/>
                                        </div>
<br></br>
                                        <button className="btn btn-success" onClick={this.saveOrUpdatePelanggan}>Save</button>
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

export default CreatePelangganComponent
