package com.book.backend.Serializer_DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User_DTO {
    private String id;
    private String user;
    private String email;
    private String password;

}
