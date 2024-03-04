package com.ensolvers.notes.services;

import com.ensolvers.notes.entities.Category;
import com.ensolvers.notes.exceptions.CategoryNotFoundException;
import com.ensolvers.notes.repositories.CategoryRepository;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
@Log4j2
@AllArgsConstructor
public class CategoryServiceImpl implements CategoryService{

    private CategoryRepository categoryRepository;
    @Override
    public Category createCategory(Category category) {
        return categoryRepository.save(category);
    }

    @Override
    public Set<Category> getAllCategories() {
        Set<Category>categories=new HashSet<>();
        categoryRepository.findAll().forEach(categories::add);
        return categories;
    }

    @Override
    public Optional<Category> findById(Long id) throws CategoryNotFoundException {
        return categoryRepository.findById(id);
    }

    @Override
    public void deleteCategory(Long id) throws CategoryNotFoundException {
        Category cat=categoryRepository.findById(id)
                .orElseThrow(()->new CategoryNotFoundException(String.format(" category id:  %s  doesn't exist",id)));
        categoryRepository.deleteById(id);
    }
}
