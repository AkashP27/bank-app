package com.bankapp.controller;

import com.bankapp.model.AccountTransactions;
import com.bankapp.model.Accounts;
import com.bankapp.repository.AccountTransactionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BalanceController {

    @Autowired
    AccountTransactionsRepository accountTransactionsRepository;

    @GetMapping("/myBalance")
    public ResponseEntity<List<AccountTransactions>> getBalance(@RequestParam int id) {

        ResponseEntity response = null;
        try{
            List<AccountTransactions> accountTransactions = accountTransactionsRepository.findByCustomerIdOrderByTransactionDtDesc(id);
            if(accountTransactions != null) {
                response = ResponseEntity
                        .status(HttpStatus.FOUND)
                        .body(accountTransactions);
            }
        } catch(Exception e) {
            response = ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("An exception occured due to "+ e.getMessage());
        }

        return response;

    }
}
