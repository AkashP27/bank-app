package com.bankapp.controller;

import com.bankapp.model.Cards;
import com.bankapp.model.Contact;
import com.bankapp.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Date;
import java.util.List;
import java.util.Random;

@RestController
public class ContactController {

    @Autowired
    ContactRepository contactRepository;

    @PostMapping("/contact")
    public ResponseEntity<List<Contact>> saveContactDetails(@RequestBody Contact contact) {

        ResponseEntity response = null;
        try{
            contact.setContactId(generateServiceReqNumber());
            contact.setCreateDt(new Date(System.currentTimeMillis()));
            contactRepository.save(contact);

            response = ResponseEntity
                        .status(HttpStatus.CREATED)
                        .body(contact);

        } catch(Exception e) {
            response = ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An exception occurred due to "+ e.getMessage());
        }

        return response;

    }

    public String generateServiceReqNumber() {
        Random random = new Random();
        int randomNumber = random.nextInt(999999999-9999) + 9999;
        return "SR"+randomNumber;
    }
}
