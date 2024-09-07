package com.example.nurseryFilrouge.controller;
import com.example.nurseryFilrouge.model.Child;
import com.example.nurseryFilrouge.service.ChildService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/children")
public class ChildController {

    @Autowired
    private ChildService childService;

    @PostMapping
    public ResponseEntity<Child> registerChild(@RequestBody Child child) {
        Child registeredChild = childService.registerChild(child);
        return new ResponseEntity<>(registeredChild, HttpStatus.CREATED);
    }

    @PutMapping("/{childId}")
    public ResponseEntity<Void> updateChild(@PathVariable Long childId, @RequestBody Child updatedChild) {
        childService.updateChild(childId, updatedChild);
        return ResponseEntity.ok().build();
    }
}
