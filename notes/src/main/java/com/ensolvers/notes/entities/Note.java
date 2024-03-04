package com.ensolvers.notes.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@AllArgsConstructor
@Data
@NoArgsConstructor
@Builder
@Table(name = "notes")
public class Note {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column(length = 30)

    private String title;

    @Column(length = 200)
    private String content;

    private Boolean isArchived;

    private LocalDateTime creationDate;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.PERSIST)
    private Category category;




}
