package com.book.spring.Services;

import com.book.spring.Models.FileUpload;
import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import com.mongodb.client.gridfs.model.GridFSFile;
import org.apache.commons.io.IOUtils;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class FileUploadServ {
    @Autowired
    private GridFsTemplate template;

    @Autowired
    private GridFsOperations operations;
    public String addFile(MultipartFile uploadFile) throws IOException {
        DBObject metadata=new BasicDBObject();
        metadata.put("filesize", uploadFile.getSize()); // i add file size as extra column


        Object fileId=template.store(uploadFile.getInputStream(),uploadFile.getOriginalFilename(),uploadFile.getContentType(),metadata);
        return fileId.toString();
    }

    public FileUpload downloadFile(String id) throws IOException {

        GridFSFile gridFSFile = template.findOne( new Query(Criteria.where("_id").is(id)) );

        FileUpload fileUpload = new FileUpload();

        if (gridFSFile != null && gridFSFile.getMetadata() != null) {
            fileUpload.setFilename(gridFSFile.getFilename());

            Object contentType = gridFSFile.getMetadata().get("_contentType");
            fileUpload.setFileType(contentType != null ? contentType.toString() : "unknown");

            Object fileSize = gridFSFile.getMetadata().get("fileSize");
            fileUpload.setFilesize(fileSize != null ? fileSize.toString() : "0");

            fileUpload.setFile_src(IOUtils.toByteArray(operations.getResource(gridFSFile).getInputStream()));
        }
        else {
            System.out.println("errrrr");
        }
    return fileUpload;
    }
}
