import axios from 'axios';

const API_URL = 'http://localhost:2020/api/customer';

class ApiService {

    
    AddCustomer = (Customer) => { return axios.post("" + API_URL, Customer) }
    
    ViewAllCustomers = async ()  => { return await axios.get(API_URL) }
    
    ViewSingleCustomer = async (user) => { return await axios.get(API_URL + '/' + user) }

    UpdateCustomer = (user) => { return axios.put(API_URL + '/' + user) }

    DeleteCustomer = (user) => { return axios.delete(API_URL + '/' + user) }
    
}
export default new ApiService();