package com.book.backend.Service.Service_Interface;

import com.book.backend.Serializer_DTO.User_DTO;
import org.mapstruct.Mapper;

import java.util.List;
public interface UserServ_Interface {
    User_DTO addUser(User_DTO user_dto);
    List<User_DTO> getAllUser();

    String login(String user, String pass);
}
