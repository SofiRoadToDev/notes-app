package com.ensolvers.notes.controllers.exceptionhandler;

import com.ensolvers.notes.dto.ResponseDTO;
import com.ensolvers.notes.entities.Category;
import com.ensolvers.notes.exceptions.CategoryNotFoundException;
import com.ensolvers.notes.exceptions.NoteNotFoundException;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@ControllerAdvice(annotations = RestController.class)
@Log4j2
public class ExceptionsHandlerController {


    @ExceptionHandler
    @ResponseBody
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public List<ResponseDTO> validationsHandler(MethodArgumentNotValidException ex){
        List<ResponseDTO>errors=new ArrayList<>();
        ex.getBindingResult().getAllErrors()
                .forEach(e->{
                    errors.add(new ResponseDTO(e.getDefaultMessage(),HttpStatus.BAD_REQUEST.value()));
                    log.info(e.getDefaultMessage());
                });

        return errors;
    }


    @ExceptionHandler
    @ResponseBody
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseDTO handleNoteNotFoundException(NoteNotFoundException ex){
        log.info(ex.getMessage());
        return new ResponseDTO(ex.getMessage(),HttpStatus.BAD_REQUEST.value());
    }


    @ExceptionHandler
    @ResponseBody
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseDTO handleCategoryNotFoundException(CategoryNotFoundException ex){
        log.info(ex.getMessage());
        return new ResponseDTO(ex.getMessage(),HttpStatus.BAD_REQUEST.value());
    }


}
