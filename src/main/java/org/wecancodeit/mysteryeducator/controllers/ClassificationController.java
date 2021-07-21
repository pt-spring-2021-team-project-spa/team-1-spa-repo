package org.wecancodeit.mysteryeducator.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.wecancodeit.mysteryeducator.models.Classification;
import org.wecancodeit.mysteryeducator.repos.ClassificationRepository;

import javax.annotation.Resource;

@Controller
public class ClassificationController {

    @Resource
    private ClassificationRepository classificationRepo;

//    @RequestMapping({"/classifications"})
//    public String displayClassifications(Model model) {
//        model.addAttribute("classifications", classificationRepo.findAll());
//        return "classificationsView";
//    }
}
