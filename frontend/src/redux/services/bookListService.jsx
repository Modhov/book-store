import { API_URL } from '../store'
import axios from 'axios'

class bookListService {
    postBook(data) {
        return axios.post(API_URL + '/api/book/add',
            data,
        )
    }

    postImages(formData) {
        return axios.post(API_URL + '/api/file/upload', { "file": formData })
    }

    getBooks(pgnum, attribute, order) {
        return axios.get(API_URL + '/get-book-page/' + pgnum, {
            params: {
                attribute: attribute,
                order: order
            }
        })
    }

    getAllBooks(page, sort, genre, order) {
        return axios.get(API_URL + '/api/book/custom-get'
            , {
                params: {
                    page: page,
                    sort: sort,
                    order: order,
                    genre: genre
                }
            }
        )
    }

    searchBooks(search) {
        return axios.get(API_URL + '/api/book/search-book/' + search)
    }

    getGenres() {
        return axios.get(API_URL + '/api/book/genres')
    }
}

export default new bookListService();