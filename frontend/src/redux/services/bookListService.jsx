import { API_URL } from '../store'
import axios from 'axios'

class bookListService {
    postBook(data) {
        return axios.post(API_URL + '/post-book',
            data,
        )
    }

    getBooks(page) {
        return page
    }
}

export default new bookListService();