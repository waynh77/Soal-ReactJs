import axios from 'axios';

const Pelanggan_API_BASE_URL = "https://localhost:7038/api/Pelanggan";

class PelangganService {

    getPelanggans(){
        return axios.get(Pelanggan_API_BASE_URL);
    }

    createPelanggan(Pelanggan){
        return axios.post(Pelanggan_API_BASE_URL, Pelanggan);
    }

    getPelangganById(PelangganId){
        return axios.get(Pelanggan_API_BASE_URL + '/' + PelangganId);
    }

    updatePelanggan(Pelanggan, PelangganId){
        Pelanggan.id=PelangganId;
        return axios.put(Pelanggan_API_BASE_URL,Pelanggan);
        //  + '/' + PelangganId, Pelanggan);
    }

    deletePelanggan(PelangganId){
        return axios.delete(Pelanggan_API_BASE_URL + '/' + PelangganId);
    }
}

export default new PelangganService()