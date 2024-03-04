
import { NoteReducer,initialNoteState } from './TodoReducer'
import { fetchData } from '../utils/FetchData'
import { TYPES } from './ActionTypes'
import { createContext,useReducer } from 'react'

const NoteContext=createContext()

// eslint-disable-next-line react/prop-types
const NoteProvider = ({children}) => {

    const [state,dispatch]=useReducer(NoteReducer,initialNoteState)
    
    const {notesList,filteredList,error,categories,noteToEdit,isFormEditable}=state

    const url="http://localhost:8000/api/v1/notes"
    const CATEGORIES_URL="http://localhost:8000/api/v1/categories"

   

    const fetchNotes=async()=>{
        try {
            const data= await fetchData(url,null)
            dispatch({type:TYPES.GET_NOTES,payload:data})
        } catch (error) {
            console.error(error)
            dispatch({type:TYPES.SET_ERROR,payload:error})
        }          
    }

    const createNote=(note)=>{
        const options={
            method:"POST",
            mode:"cors",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(note)
        }
       
            fetchData(url,options)
                .then(res=>dispatch({type:TYPES.ADD_NOTE,payload:res}))// ASi la agregara sin id y complicara la eliminacion
                .catch(error=> dispatch({type:TYPES.SET_ERROR,payload:error}))
            
    }

    const deleteNote=(id)=>{
        const options={
            method:'DELETE',
            mode:"cors"
        }
        const delUrl=`${url}/${id}`
       
        fetchData(delUrl,options)
            .then(()=>dispatch({type:TYPES.DELETE_NOTE,payload:id}))
            .catch(error=>dispatch({type:TYPES.SET_ERROR,payload:error}))  
    }

    const getArchived=async()=>{
        try {
            const data= await fetchData(`${url}/archived/true`,null)
            dispatch({type:TYPES.FILTER_ARCHIVED,payload:data})
        } catch (error) {
            console.error(error)
            dispatch({type:TYPES.SET_ERROR,payload:error})
        }          
    }

    const getActive=async()=>{
        try {
            const data= await fetchData(`${url}/archived/false`,null)
            dispatch({type:TYPES.FILTER_ACTIVE,payload:data})
        } catch (error) {
            console.error(error)
            dispatch({type:TYPES.SET_ERROR,payload:error})
        }          
    }

    const filterByCategory=(id)=>{
        console.log(`${url}/category/${id}`)
        fetchData(`${url}/category/${id}`,null)
                .then(r=>dispatch({type:TYPES.FILTER_CATEGORY,payload:r}))
                .catch(e=>{
                    console.log(e)
                    dispatch({type:TYPES.SET_ERROR,payload:e})
                })
    }

    const getCategories=()=>{
        fetchData(CATEGORIES_URL,null)
        .then(data=>dispatch({type:TYPES.GET_CATEGORIES,payload:data}))
        .catch(e=>console.error(e))
    }

    const getNoteById=(id)=>{
        fetchData(`${url}/${id}`,null)
            .then(n=>{dispatch({type:TYPES.SET_EDIT_NOTE,payload:n})})
            .catch(e=>console.error(e))        
    }

    const refreshFormVars=()=>{
        dispatch({type:TYPES.RESET_FORM})
    }

    const updateNote=(id,note)=>{
        const opt={
            method:'PUT',
            mode :'cors',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(note)
        }
        fetchData(`${url}/${id}`,opt)
            .then(n=>dispatch({type:TYPES.SET_EDIT_NOTE,payload:n}))
            .catch(e=>console.log(e)) 
    }

    const setFormEditable=(isEditable)=>{
        dispatch({type:TYPES.SET_FORM_EDITABLE,payload:isEditable})
    }
    
    const resetFilteredList=()=>{
        dispatch({type:TYPES.RESET_FILTER_LIST})
    }
    const data={
        notesList,
        fetchNotes,
        isFormEditable,
        createNote,
        filterByCategory,
        deleteNote,
        getNoteById,
        filteredList,
        resetFilteredList,
        refreshFormVars,
        updateNote,
        getCategories,
        getArchived,
        setFormEditable,
        getActive,
        noteToEdit,
        categories,
        error
    }
    return (
    <NoteContext.Provider value={data}> 
        {children}
    </NoteContext.Provider>
  )
}

export default NoteContext;
export {NoteProvider}
    