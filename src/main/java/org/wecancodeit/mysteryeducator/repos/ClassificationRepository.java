package org.wecancodeit.mysteryeducator.repos;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.mysteryeducator.models.Classification;

public interface ClassificationRepository extends CrudRepository<Classification, Long> {

public class ClassificationRepository {
    public Object findAll() {
        return classification;
    }

}
