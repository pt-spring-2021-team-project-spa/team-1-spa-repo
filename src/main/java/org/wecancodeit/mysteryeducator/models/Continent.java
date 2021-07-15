package org.wecancodeit.mysteryeducator.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Continent {

    @Id
    @GeneratedValue
    private Long id;

    private String continentName;

    @OneToMany(mappedBy = "continent")
    private Collection<Animal> animals;

    public Continent(){}

    public Continent(String continentName){
        this.continentName = continentName;
    }

    public Long getId(){
        return id;
    }

    public String getContinentName(){
        return continentName;
    }

    public Collection<Animal> getAnimals(){
        return animals;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Continent continent = (Continent) o;
        return Objects.equals(id, continent.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
