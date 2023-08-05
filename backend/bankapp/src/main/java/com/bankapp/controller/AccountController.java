package com.bankapp.controller;

import com.bankapp.model.Accounts;
import com.bankapp.model.Customer;
import com.bankapp.repository.AccountsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountController {

    @Autowired
    AccountsRepository accountsRepository;

    @GetMapping("/myAccount")
    public ResponseEntity<Accounts> getAccount(@RequestParam int id) {

        ResponseEntity response = null;
        try{
            Accounts accounts = accountsRepository.findByCustomerId(id);
            if(accounts != null) {
                response = ResponseEntity
                        .status(HttpStatus.FOUND)
                        .body(accounts);
            }
        } catch(Exception e) {
            response = ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("An exception occured due to "+ e.getMessage());
        }

        return response;

    }
}
