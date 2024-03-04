package com.ensolvers.notes.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NoteDto {

    private Long id;

    private Long categoryId;

    @NotBlank(message = "The title is mandatory, it can't be blank")
    @NotNull(message = "The title must be provided")
    private String title;

    private LocalDateTime dateTime;

    private String content;

    private Boolean isArchived;
}
