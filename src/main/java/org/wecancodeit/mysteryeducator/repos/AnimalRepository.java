package org.wecancodeit.mysteryeducator.repos;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.mysteryeducator.models.Animal;

public interface AnimalRepository extends CrudRepository{


    public Animal findAnimalByContinent(String continent) {
        return continent;
    }
}
