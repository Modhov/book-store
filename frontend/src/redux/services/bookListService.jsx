import { API_URL } from '../store'
import axios from 'axios'

class bookListService {
    postBook(data) {
        return axios.post(API_URL + '/post-book',
            data,
        )
    }

    postImages(formData) {
        return axios.post(API_URL + '/upload', formData)
    }

    getBooks(pgnum, attribute, order) {
        return axios.get(API_URL + '/get-book-page/' + pgnum, {
            params: {
                attribute: attribute,
                order: order
            }
        })
    }

    getAllBooks(sort, genre, order) {
        return axios.get(API_URL + '/get-book'
            , {
                params: {
                    sort: sort,
                    genre: genre,
                    order: order
                }
            }
        )
    }

    searchBooks(search) {
        return axios.get(API_URL + '/search-book/' + search)
    }

    getGenres() {
        return axios.get(API_URL + '/genres')
    }
}

export default new bookListService();