import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

export default function BookDetails() {
    const id = useLocation().pathname.split("/")[2]
    const book = useSelector(state => state.books.books.find(book => book.id === id))
    return (
        <h1>{book.name}</h1>
    )
}
