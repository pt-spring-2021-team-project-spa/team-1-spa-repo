package org.wecancodeit.mysteryeducator.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.mysteryeducator.models.Continent;
import org.wecancodeit.mysteryeducator.repos.ContinentRepository;

import javax.annotation.Resource;
import java.util.Collection;

@RestController
public class ContinentController {

    @Resource
    private ContinentRepository continentRepo;

//    @GetMapping("/api/continents")
//    public Collection<Continent> getContinents() {
//        return (Collection<Continent>) continentRepo.findAll();
//    }
//
//    @GetMapping("/api/continents/{continentId}")
//    public Continent getContinent(@PathVariable Long continentId){
//        return continentRepo.findAllById(continentId).get();
//    }

}