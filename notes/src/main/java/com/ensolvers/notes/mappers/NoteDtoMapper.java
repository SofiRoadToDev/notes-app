package com.ensolvers.notes.mappers;

import com.ensolvers.notes.dto.NoteDto;
import com.ensolvers.notes.entities.Note;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface NoteDtoMapper {

    @Mapping(target = "category",ignore = true)
    public Note toNote(NoteDto noteDTO);

    public NoteDto toNoteDto(Note note);





}
