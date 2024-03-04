
import { useContext } from 'react'
import SideMenu from '../components/SideMenu'
import NoteContext from '../context-data/NoteContext'
import NoteCard from '../components/NoteCard'

const FiltersPage = () => {

    
    const {filteredList}=useContext(NoteContext)
   

   

    const list=filteredList.map(n=>(
        <NoteCard key={n.id}note={n}/>
    ))
    return (
        <>
            <SideMenu />
            <div className="flex d-flex">
            {list}

            </div>
        </>
            )
        
}

export default FiltersPage