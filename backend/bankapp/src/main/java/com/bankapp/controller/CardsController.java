package com.bankapp.controller;

import com.bankapp.model.AccountTransactions;
import com.bankapp.model.Cards;
import com.bankapp.repository.CardsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CardsController {

    @Autowired
    CardsRepository cardsRepository;

    @GetMapping("/myCards")
    public ResponseEntity<List<Cards>> getCards(@RequestParam int id) {
        ResponseEntity response = null;
        try{
            List<Cards> cards = cardsRepository.findByCustomerId(id);
            if(cards!= null) {
                response = ResponseEntity
                        .status(HttpStatus.FOUND)
                        .body(cards);
            }
        } catch(Exception e) {
            response = ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("An exception occured due to "+ e.getMessage());
        }

        return response;

    }
}
