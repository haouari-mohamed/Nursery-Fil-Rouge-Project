package com.example.nurseryFilrouge.controller;

import com.example.nurseryFilrouge.model.ContactMessage;
import com.example.nurseryFilrouge.repository.ContactMessageRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/contact")
public class ContactController {

    private final ContactMessageRepository contactMessageRepository;

    public ContactController(ContactMessageRepository contactMessageRepository) {
        this.contactMessageRepository = contactMessageRepository;
    }


    @PostMapping("/send")
    public ResponseEntity<String> sendContactMessage(@RequestBody ContactMessage contactMessage) {
        contactMessageRepository.save(contactMessage);
        return ResponseEntity.ok("Message sent successfully");
    }


    @GetMapping("/all")
    public ResponseEntity<List<ContactMessage>> getAllContactMessages() {
        List<ContactMessage> messages = contactMessageRepository.findAll();
        return ResponseEntity.ok(messages);
    }
}
