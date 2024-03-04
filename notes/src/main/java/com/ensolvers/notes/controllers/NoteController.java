package com.ensolvers.notes.controllers;

import com.ensolvers.notes.dto.NoteDto;
import com.ensolvers.notes.entities.Category;
import com.ensolvers.notes.entities.Note;
import com.ensolvers.notes.exceptions.CategoryNotFoundException;
import com.ensolvers.notes.exceptions.NoteNotFoundException;
import com.ensolvers.notes.mappers.NoteDtoMapper;
import com.ensolvers.notes.services.CategoryService;
import com.ensolvers.notes.services.NoteService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Set;

@RestController
@RequestMapping("/api/v1/notes")
@Log4j2
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class NoteController {

    private NoteService noteService;
    private CategoryService categoryService;
    private NoteDtoMapper noteMapper;

    @GetMapping()
    public Set<Note> getAllNotes(){
        return noteService.getAllNotes();
    }

    @GetMapping("/{id}")
    public ResponseEntity getNoteById(@PathVariable Long id) throws NoteNotFoundException{
        log.info(String.format(" id %s received to retrieve Note",id));
        return ResponseEntity.ok(noteService.getNoteById(id));

    }

    @PostMapping()
    public ResponseEntity createNote(@Valid @RequestBody NoteDto noteDto){
        Category category=categoryService.findById(noteDto.getCategoryId()).orElseThrow(()->new CategoryNotFoundException("this category doesn't exist"));
        Note note=noteMapper.toNote(noteDto);
        note.setCategory(category);
        note.setIsArchived(noteDto.getIsArchived());
        noteService.createNote(note);
        return new ResponseEntity(noteMapper.toNoteDto(note),HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteNote(@PathVariable Long id)throws NoteNotFoundException{
        noteService.deleteNote(id);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateNote(@RequestBody Note note,@PathVariable Long id) throws NoteNotFoundException {
        return ResponseEntity.ok(noteService.updateNote(note,id));
    }
    @GetMapping("/date/{date}")
    public ResponseEntity findByDate(@PathVariable LocalDateTime date){
        return ResponseEntity.ok(noteService.findByCreationDate(date));
    }

    @GetMapping("/title/{title}")
    public ResponseEntity findByTitle(@PathVariable String title){
        return ResponseEntity.ok(noteService.findByTitle(title));
    }

    @GetMapping("/archived/{isArchived}")
    public ResponseEntity findByIsArchivedOrNot(@PathVariable Boolean isArchived){
        return ResponseEntity.ok(noteService.getArchivedOrActiveNotes(isArchived));
    }

    @GetMapping("/category/{id}")
    public ResponseEntity getNotesByCategory(@PathVariable Long id) throws CategoryNotFoundException {
        return ResponseEntity.ok(noteService.findByCategory(id));
    }
}
