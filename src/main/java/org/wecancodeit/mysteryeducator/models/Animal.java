package org.wecancodeit.mysteryeducator.models;



import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class Animal {

    @Id
    @GeneratedValue
    private Long id;

    private String animalName;
    @Lob
    private String description;
    private String yearWentExtinct;
    private String image;


    @ManyToOne
    @JsonIgnore
    private Continent continent;

    @ManyToOne
    private Classification classification;

    public Animal(){}

    public Animal(String animalName, String description, String yearWentExtinct, String image, Continent continent, Classification classification) {
        this.animalName = animalName;
        this.description = description;
        this.yearWentExtinct = yearWentExtinct;
        this.image = image;
        this.continent = continent;
        this.classification = classification;
    }

    public Long getId(){
        return id;
    }

    public String getAnimalName(){
        return animalName;
    }

    public String getDescription(){
        return description;
    }

    public String getYearWentExtinct(){
        return yearWentExtinct;
    }

    public String getImage(){
        return image;
    }

    public Continent getContinent(){
        return continent;
    }

    public Classification getClassification(){
        return classification;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Animal animal = (Animal) o;
        return Objects.equals(id, animal.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}
