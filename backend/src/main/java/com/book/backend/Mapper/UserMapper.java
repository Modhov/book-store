package com.book.backend.Mapper;

import com.book.backend.Models.User;
import com.book.backend.Serializer_DTO.User_DTO;
import org.xmlunit.util.Mapper;

import java.util.List;

public class UserMapper {
    //converting User Model into User_DTO Serializer

    public static User_DTO convertToUser_Dto(User user) {
        //ASSIGN THE VALUES based on our control
        return new User_DTO(
                user.getId(),
                user.getUser(),
                user.getEmail(),
                user.getPassword()
        );
    }


    // Converting User_dto into User Model

    public static User convertToUser(User_DTO user_dto) {
        return new User(
                user_dto.getId(),
                user_dto.getUser(),
                user_dto.getEmail(),
                user_dto.getPassword()
        );
    }


}
