import { useContext, useEffect, useState } from "react";
import NoteContext from '../context-data/NoteContext'
import { useNavigate } from "react-router-dom";
const emptyNote = {
    title: '',
    content: '',
    isArchived: false,
    categoryId:1
}


const NoteForm = () => {
    const{createNote,noteToEdit,refreshFormVars,isFormEditable,updateNote,categories,getCategories}=useContext(NoteContext)
    const [note, setNote] = useState(emptyNote)
    const [isChecked,setIsChecked]=useState(true)
    const navigate = useNavigate();
    
   useEffect(()=>{     
    if(isFormEditable){
        setNote(noteToEdit)       
    }else{
        setNote(emptyNote)
    }
    
   },[noteToEdit])

 
    useEffect(()=>{
        getCategories()
    },[])
  

  

    const handleSubmit = (e) => {
        e.preventDefault();
       if(isFormEditable){
            updateNote(noteToEdit.id,note)          
           
            
            window.alert("note created successfully")
       }else{
            createNote(note)
           
            window.alert("note updated successfully")
       }
        refreshFormVars()
        navigate("/")   
    }

   
    const handleChange = (e) => {
        const {target:{name,value}}=e
           setNote({
            ...note,
            [name]:value
           })

           if(name==="isArchived"){
            setIsChecked(!isChecked)
            setNote({
                ...note,
                isArchived:isChecked
            })
           }        
    }


    return (
        <form className="col-12 sm-col-12  mx-auto bg-light p-4 my-4">
            <p className="h3 text-center">Create a new Note</p>
            <label htmlFor="title" className="form-label  pt-2">Note title</label>
            <input type="text" name="title" id="title" className="form-control " onChange={handleChange} value={note.title} />

            <label htmlFor="desc" className='form-label '>Content</label>
            <textarea id="desc" name="content" className='form-control' rows="6" onChange={handleChange} value={note.content} />

            <div className="form-check form-switch my-3">
                <input name="isArchived"className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={isChecked} onChange={handleChange} />
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{isChecked ? "Active" : "Archived"}</label>
            </div>
            <select name="categoryId"className="form-select" onChange={handleChange}aria-label="Categories" value={note.categoryId}>
                { categories && categories.map(c=>(
                    <option key={c.id}value={c.id}>{c.name}</option>
                ))}
            </select>

            <button type="submit" onClick={handleSubmit} className="btn m-4 w-100 mx-auto btn-dark text-light" >{isFormEditable?"Edit":"Create"}</button>

        </form>

    );
}

export default NoteForm;