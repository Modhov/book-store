package com.book.backend.Service.Service_Class;

import com.book.backend.Exception.ResourceNotFoundException;
import com.book.backend.Mapper.UserMapper;
import com.book.backend.Models.User;
import com.book.backend.Repo.UserRepo;
import com.book.backend.Serializer_DTO.User_DTO;
import com.book.backend.Service.Service_Interface.UserServ_Interface;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
@Service
public class UserServ implements UserServ_Interface {
    @Autowired
    private UserRepo r;


    public User_DTO addUser(User_DTO user_dto){
        User user= UserMapper.convertToUser(user_dto);
        User savedUser=r.save(user);
        return UserMapper.convertToUser_Dto(savedUser);
    }

    public List<User_DTO> getAllUser(){
        List<User> allUsers=r.findAll();
        return allUsers.stream().map((user) -> UserMapper.convertToUser_Dto(user))
                .collect(Collectors.toList());
    }

    public String login(String user,String pass){
        User u=r.login(user);
        if(u==null)
            return "denied";

        User_DTO user_dto=UserMapper.convertToUser_Dto(u);

        if(user_dto.getPassword().equals(pass))
            return "granted";
        else
            return "pass wrong";


    }
}
