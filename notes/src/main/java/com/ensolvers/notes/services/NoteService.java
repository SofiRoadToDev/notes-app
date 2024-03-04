package com.ensolvers.notes.services;

import com.ensolvers.notes.entities.Note;
import com.ensolvers.notes.exceptions.CategoryNotFoundException;
import com.ensolvers.notes.exceptions.NoteNotFoundException;
import org.aspectj.weaver.ast.Not;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Set;

public interface NoteService {

    public Set<Note> getAllNotes();
    public Set<Note> getArchivedOrActiveNotes(boolean isArchived);
    public Note createNote(Note note);
    public Note updateNote(Note note, Long id) throws NoteNotFoundException;
    public void deleteNote (Long id)throws NoteNotFoundException;
    public Note findByTitle(String title) throws NoteNotFoundException;
    public Set<Note>findByCreationDate(LocalDateTime date);
    public Note getNoteById(Long id)throws  NoteNotFoundException;
    public Set<Note>findByCategory(Long id) throws CategoryNotFoundException;
}
