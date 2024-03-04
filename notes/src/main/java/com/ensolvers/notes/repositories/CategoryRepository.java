package com.ensolvers.notes.repositories;

import com.ensolvers.notes.entities.Category;
import org.springframework.data.repository.CrudRepository;

public interface CategoryRepository extends CrudRepository<Category,Long> {


}
