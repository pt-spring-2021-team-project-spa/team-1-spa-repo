package org.wecancodeit.mysteryeducator.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.wecancodeit.mysteryeducator.models.Continent;
import org.wecancodeit.mysteryeducator.repos.ContinentRepository;

import javax.annotation.Resource;

@Controller
public class ContinentController {

    @Resource
    private ContinentRepository continentRepo;

    @RequestMapping({"/continents"})
    public String displayContinents(Model model) {
        model.addAttribute("continents", continentRepo.findAll());
        return "continentsView";
    }

    @GetMapping("/continents/{location}")
    public String displaySingleContinent(@PathVariable String location, Model model) {
        Continent retrievedContinent = continentRepo.findContinentByLocation(location);
        model.addAttribute("campus", retrievedContinent);
        return "continentView";
    }
}
