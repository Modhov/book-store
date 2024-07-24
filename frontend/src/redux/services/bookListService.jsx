import { API_URL } from '../store'

class bookListService {
    getBookList() {
        return axios.get(`${API_URL}/books`);
    }
}

export default new bookListService();