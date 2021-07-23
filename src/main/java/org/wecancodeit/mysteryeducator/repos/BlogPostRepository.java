package org.wecancodeit.mysteryeducator.repos;


import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.mysteryeducator.models.BlogPost;

public interface BlogPostRepository extends CrudRepository<BlogPost, Long> {
}