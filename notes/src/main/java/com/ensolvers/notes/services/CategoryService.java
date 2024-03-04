package com.ensolvers.notes.services;

import com.ensolvers.notes.entities.Category;
import com.ensolvers.notes.exceptions.CategoryNotFoundException;

import java.util.Optional;
import java.util.Set;

public interface CategoryService {

    public Category createCategory(Category category);

    Set<Category> getAllCategories();

    Optional<Category> findById(Long id) throws CategoryNotFoundException;
    public void deleteCategory(Long id) throws CategoryNotFoundException;
}
