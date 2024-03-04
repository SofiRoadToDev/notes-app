import { useContext, useEffect } from 'react'
import NoteContext from '../context-data/NoteContext'
import NoteCard from '../components/NoteCard'

const NoteHome = () => {

  
  const {notesList,fetchNotes}=useContext(NoteContext)
 

  useEffect(()=>{
   fetchNotes()
  },[])

  const noteCards=notesList?notesList.map(n=>(<NoteCard key={n.id}note={n}/>)):[];
 

  return (
    <>
       {noteCards}
    </>  
  )
}

export default NoteHome