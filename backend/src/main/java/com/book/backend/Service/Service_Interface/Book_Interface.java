package com.book.backend.Service.Service_Interface;

import com.book.backend.Serializer_DTO.Book_DTO;

import java.util.List;

public interface Book_Interface {
    public Book_DTO add(Book_DTO book_dto);
    public List<Book_DTO> getAll();

    public Book_DTO updateBook(String id, Book_DTO bookDto);

    public Book_DTO deleteOneBook(String id);
    public List<Book_DTO> searchBooks(String word);
    public List<String> getAllGenre();
    public List<Book_DTO> getByBestSeller();
    public List<Book_DTO> customGet(String sort, Boolean order, String genre);
    public Book_DTO addImageIdList(List<String> newImgIds,String id);

}
