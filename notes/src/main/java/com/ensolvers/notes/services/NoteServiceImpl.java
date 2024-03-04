package com.ensolvers.notes.services;

import com.ensolvers.notes.entities.Category;
import com.ensolvers.notes.entities.Note;
import com.ensolvers.notes.exceptions.CategoryNotFoundException;
import com.ensolvers.notes.exceptions.NoteNotFoundException;
import com.ensolvers.notes.repositories.CategoryRepository;
import com.ensolvers.notes.repositories.NoteRepository;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Service
@Log4j2
@AllArgsConstructor
public class NoteServiceImpl implements NoteService {

    private NoteRepository noteRepository;
    private CategoryRepository categoryRepository;
    @Override
    public Set<Note> getAllNotes() {
        Set<Note>notes=new HashSet<>();
        noteRepository.findAll().forEach(notes::add);
        return notes;
    }

    @Override
    public Set<Note> getArchivedOrActiveNotes(boolean isArchived) {
        Set<Note>notes=new HashSet<>();
        noteRepository.findByIsArchived(isArchived).forEach(notes::add);
        return notes;
    }

    @Override
    public Note createNote(Note note) {/*voy a recibir el id de la categoria*/
        log.info("CREATING DATETIME TO SAVE NOTE: "+LocalDateTime.now());
        note.setCreationDate(LocalDateTime.now());
        return noteRepository.save(note);
    }

    @Override
    public Note updateNote(Note note, Long id) throws NoteNotFoundException {
        Note stored=noteRepository.findById(id)
                .orElseThrow(
                        ()->new NoteNotFoundException(String.format(" Note with id s% doesn't exist: ",id))
                );
        BeanUtils.copyProperties(note,stored,"id");
        noteRepository.save(stored);
        return stored;
    }

    @Override
    public void deleteNote(Long id) throws NoteNotFoundException {
        Note note=noteRepository.findById(id)
                .orElseThrow(()->new NoteNotFoundException(
                        String.format("There is no note with id: %s, so we can't delete it",id)
                ));
        noteRepository.deleteById(id);
    }

    @Override
    public Note findByTitle(String title) throws NoteNotFoundException {
        return noteRepository.findByTitle(title).orElseThrow(
                ()->new NoteNotFoundException(String.format(" there is no note with title %s",title))
        );
    }

    @Override
    public Set<Note> findByCreationDate(LocalDateTime date){
        Set<Note>notes=new HashSet<>();
        noteRepository.findByCreationDate(date)
                .forEach(notes::add);
        return notes;
    }

    @Override
    public Note getNoteById(Long id) throws NoteNotFoundException {
        return noteRepository.findById(id)
                .orElseThrow(()->new NoteNotFoundException(String.format(" Note id %s not found",id)));
    }

    @Override
    public Set<Note> findByCategory(Long id) throws CategoryNotFoundException {
        Set<Note>notes=new HashSet<>();
        Category cat=categoryRepository.findById(id).orElse(null);
        if(cat!=null){
            noteRepository.findByCategoryId(id).forEach(notes::add);
            return notes;
        }else{
            throw  new CategoryNotFoundException(String.format(" category id %s does not exist",id));
        }
    }
}
