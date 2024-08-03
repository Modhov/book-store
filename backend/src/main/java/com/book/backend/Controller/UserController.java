package com.book.backend.Controller;

import com.book.backend.Serializer_DTO.User_DTO;
import com.book.backend.Service.Service_Class.UserServ;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserServ s;


    //Add one user
    @PostMapping("/add")
    public ResponseEntity<User_DTO>addUser(@RequestBody User_DTO user_dto){

        User_DTO Temp=s.addUser(user_dto);
        return new ResponseEntity<>(Temp, HttpStatus.CREATED);
    }
    @GetMapping("/get-all")
    public ResponseEntity<List<User_DTO>>getAllUser(){
        return new ResponseEntity<>(s.getAllUser(),HttpStatus.FOUND);
    }

    @PostMapping("/login")
    public ResponseEntity<String>login(@RequestParam String user,@RequestParam String pass){
        return new ResponseEntity<>(s.login(user,pass),HttpStatus.FOUND);
    }
}
