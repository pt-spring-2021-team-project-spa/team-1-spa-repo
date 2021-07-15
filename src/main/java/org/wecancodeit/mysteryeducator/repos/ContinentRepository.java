package org.wecancodeit.mysteryeducator.repos;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.mysteryeducator.models.Continent;

public interface ContinentRepository extends CrudRepository<Continent, Long> {
}
