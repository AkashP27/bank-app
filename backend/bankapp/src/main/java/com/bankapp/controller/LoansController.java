package com.bankapp.controller;

import com.bankapp.model.Cards;
import com.bankapp.model.Loans;
import com.bankapp.repository.LoanRepository;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LoansController {

    @Autowired
    LoanRepository loanRepository;

    @GetMapping("/myLoans")
    public ResponseEntity<List<Loans>> getLoans(@RequestParam int id){

        ResponseEntity response = null;
        try{
            List<Loans> loans = loanRepository.findByCustomerIdOrderByStartDtDesc(id);
            if(loans!= null) {
                response = ResponseEntity
                        .status(HttpStatus.OK)
                        .body(loans);
            }
        } catch(Exception e) {
            response = ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("An exception occured due to "+ e.getMessage());
        }

        return response;

    }
}
