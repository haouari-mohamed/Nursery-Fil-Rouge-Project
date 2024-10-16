package com.example.nurseryFilrouge.mappers;


import com.example.nurseryFilrouge.dtos.ChildDTO;
import com.example.nurseryFilrouge.model.Child;
import org.springframework.stereotype.Component;

@Component
public class ChildMapper {
    public ChildDTO toChildDTO(Child child) {
        ChildDTO childDTO = new ChildDTO();
        childDTO.setId(child.getId());
        childDTO.setNom(child.getNom());
        childDTO.setPrenom(child.getPrenom());
        childDTO.setAge(child.getAge());


        if (child.getParent() != null) {
            childDTO.setParentId(child.getParent().getId());
        }
        if (child.getCreche() != null) {
            childDTO.setCrecheId(child.getCreche().getId());
        }

        return childDTO;
    }

    public Child toChild(ChildDTO childDTO) {
        Child child = new Child();
        child.setNom(childDTO.getNom());
        child.setPrenom(childDTO.getPrenom());
        child.setAge(childDTO.getAge());
        return child;
    }
}