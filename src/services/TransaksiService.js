import axios from 'axios';

const Transaksi_API_BASE_URL = "https://localhost:7038/api/Transaksi";

class TransaksiService {

    getTransaksis(){
        return axios.get(Transaksi_API_BASE_URL);
    }

    getTransaksiById(TransaksiId){
        return axios.get(Transaksi_API_BASE_URL + '/' + TransaksiId);
    }

}

export default new TransaksiService()