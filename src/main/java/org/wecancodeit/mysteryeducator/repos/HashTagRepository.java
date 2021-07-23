package org.wecancodeit.mysteryeducator.repos;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.librarydemo.models.HashTag;

import java.util.Optional;

public interface HashTagRepository extends CrudRepository<HashTag, Long> {
    Optional<HashTag> findByName(String hashTagName);
}
