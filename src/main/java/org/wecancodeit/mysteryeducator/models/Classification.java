package org.wecancodeit.mysteryeducator.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Classification {

    @Id
    @GeneratedValue
    private Long id;

    private String animalClassification;

    @OneToMany(mappedBy = "classification")
    private Collection<Animal> animals;

    public Classification(){}

    public Classification(String animalClassification){
        this.animalClassification = animalClassification;
    }

    public Long getId(){
        return id;
    }

    public String getAnimalClassification(){
        return animalClassification;
    }

    public Collection<Animal> getAnimals(){
        return animals;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Classification that = (Classification) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
