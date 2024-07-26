import { API_URL } from '../store'
import axios from 'axios'

class bookListService {
    postBook(data) {
        return axios.post(API_URL + '/post-book',
            data,
        )
    }

    getBooks(pgnum, attribute, order) {
        return axios.get(API_URL + '/get-book-page/' + pgnum, {
            params: {
                attribute: attribute,
                order: order
            }
        })
    }

    searchBooks(search) {
        return axios.get(API_URL + '/search-book/' + search)
    }

    getGenres() {
        return axios.get(API_URL + '/genres')
    }
}

export default new bookListService();