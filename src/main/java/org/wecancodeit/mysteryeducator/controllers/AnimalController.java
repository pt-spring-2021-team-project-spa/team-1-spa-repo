package org.wecancodeit.mysteryeducator.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.wecancodeit.mysteryeducator.models.Animal;
import org.wecancodeit.mysteryeducator.models.Continent;
import org.wecancodeit.mysteryeducator.repos.AnimalRepository;

import javax.annotation.Resource;
import java.util.Optional;

@Controller
public class AnimalController {

    @Resource
    private AnimalRepository animalRepo;

//    @RequestMapping({"/animals"})
//    public String displayAnimals(Model model) {
//        model.addAttribute("animals", animalRepo.findAll());
//        return "animalsView";
//    }

//    @GetMapping("/animals/{continent}")
//    public String displaySingleAnimal(@PathVariable String continent, Model model) {
//        Animal retrievedAnimal = animalRepo.findAnimalByContinent(continent);
//        model.addAttribute("campus", retrievedAnimal);
//        return "animalView";
//    }

//    @GetMapping("/animals/{id}")
//    public String displaySingleAnimal(@PathVariable Long id, Model model) {
//        Optional<Animal> retrievedAnimal = animalRepo.findById(id);
//        model.addAttribute("id", retrievedAnimal);
//        return "animalView";
//
//    }
}