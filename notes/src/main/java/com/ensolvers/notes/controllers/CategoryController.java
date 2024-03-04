package com.ensolvers.notes.controllers;

import com.ensolvers.notes.entities.Category;
import com.ensolvers.notes.services.CategoryService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/categories")
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class CategoryController {

    private CategoryService categoryService;

    @GetMapping()
    public ResponseEntity getAllCategories(){
        return ResponseEntity.ok(categoryService.getAllCategories());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteCategory(@PathVariable Long id){
        categoryService.deleteCategory(id);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    @PostMapping()
    public ResponseEntity createCategory(@RequestBody Category category){
         return new ResponseEntity(categoryService.createCategory(category),HttpStatus.CREATED);
    }
}
