package org.wecancodeit.mysteryeducator.repos;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.mysteryeducator.models.BlogType;

public interface BlogTypeRepository extends CrudRepository<BlogType, Long> {
}