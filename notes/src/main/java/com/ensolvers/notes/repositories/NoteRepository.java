package com.ensolvers.notes.repositories;

import com.ensolvers.notes.entities.Note;
import org.springframework.data.repository.CrudRepository;

import java.time.LocalDateTime;
import java.util.Optional;

public interface NoteRepository extends CrudRepository<Note,Long> {

    Optional<Note> findByTitle(String title);
    Iterable<Note> findByCreationDate(LocalDateTime dateTime);
    Iterable<Note> findByIsArchived(boolean isArchived);
    Iterable<Note>findByCategoryId(Long id);
}
