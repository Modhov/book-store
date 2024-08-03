package com.book.backend.Serializer_DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PublicReview_DTO {
    private String id;
    private String name;
    private Integer stars;
    private String comment;

}
