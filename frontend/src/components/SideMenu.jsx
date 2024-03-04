import {useContext,useEffect, useState} from 'react'
import { Button,Offcanvas } from 'react-bootstrap';
import NoteContext from '../context-data/NoteContext';

const SideMenu = () => {
    const [show, setShow] = useState(false);
    const {categories,filterByCategory,getCategories,resetFilteredList,getActive,getArchived}=useContext(NoteContext)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    const[activeChecked,setActiveChecked]=useState()
    const[archivedChecked,setArchivedChecked]=useState()
    const[selectedOption,setSelectedOption]=useState(0)

    useEffect(()=>{
        getCategories()
        if(archivedChecked){
            getArchived()
        }
        else
        if(activeChecked){
            getActive()
        }
    },[activeChecked,archivedChecked])


    useEffect(()=>{
        if(selectedOption!=0){
            filterByCategory(selectedOption)
        }
           
    },[selectedOption])

    const handleChange=(e)=>{
        resetFilteredList()
        const{target:{name,value}}=e
        if(name==="Active"){
            setActiveChecked(!activeChecked)
        }
        else if(name==="Archived"){
            setArchivedChecked(!archivedChecked)
        }

        if(name==="categoryId"){
            console.log(value)
            setSelectedOption(value)
            
        }
        
    }
    return (
        <>
            <Button variant="dark" className="d-lg-none d-md-flex" onClick={handleShow}>
                Launch
            </Button>

            <Offcanvas className="my-4 bg-light p-4" show={show} onHide={handleClose} responsive="lg">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Filters</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='d-flex flex-column justity-around'>
                        <select name="categoryId" className="form-select" aria-label="Categories" onChange={handleChange} value={selectedOption}>
                            <option value="0">Select a Category</option>
                            {categories && categories.map(c => (
                                <option key={c.id}value={c.id}>{c.name}</option>
                            ))}
                        </select>
                        <div className="form-check form-switch my-3">
                            <input name="Active" className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={activeChecked} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Active</label>
                        </div>
                        <div className="form-check form-switch my-3">
                            <input name="Archived" className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={archivedChecked} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Archived</label>
                        </div>
                       
                        <button type="submit" onClick={() => { }} className="btn m-4 w-100 mx-auto btn-dark text-light" >Clean Filters</button>
                    </div>


                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default SideMenu