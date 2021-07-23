package org.wecancodeit.mysteryeducator.controllers;

import org.springframework.web.bind.annotation.*;
import org.wecancodeit.mysteryeducator.models.Animal;
import org.wecancodeit.mysteryeducator.repos.AnimalRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class AnimalController {

    @Resource
    private AnimalRepository animalRepo;

    @GetMapping("/api/animals")
    public Collection<Animal> getAnimals() {
        return (Collection<Animal>) animalRepo.findAll();
    }

    @GetMapping("/api/animals/{id}")
    public Optional<Animal> getAnimal(@PathVariable Long id) {
        return animalRepo.findById(id);
    }

}