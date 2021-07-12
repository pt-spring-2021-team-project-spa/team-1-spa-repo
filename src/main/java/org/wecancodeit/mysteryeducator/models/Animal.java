package org.wecancodeit.mysteryeducator.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.util.Objects;

@Entity
public class Animal {

    @Id
    @GeneratedValue
    private Long id;

    private String animalName;
    private String description;
    private String avgLifeSpan;
    private String image;


    @ManyToOne
    private Continent continent;

    @ManyToOne
    private Classification classification;

    public Animal(){}

    public Animal(String animalName, String description, String avgLifeSpan, String image, Continent continent, Classification classification) {
        this.animalName = animalName;
        this.description = description;
        this.avgLifeSpan = avgLifeSpan;
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

    public String getAvgLifeSpan(){
        return avgLifeSpan;
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
