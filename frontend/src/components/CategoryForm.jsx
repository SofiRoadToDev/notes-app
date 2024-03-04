
const CategoryForm = () => {
  return (
    <form className="col-3 mx-auto bg-light p-4 ">
            <p className="h3 text-center">Create a new Note</p>
            <label htmlFor="title" className="form-label  pt-2">Category name</label>
            <input type="text" name="title" id="title" className="form-control " onChange={handleChange} value={note.title} />
            
            <label htmlFor="desc" className='form-label '>Description</label>
            <textarea id="desc" name="content" className='form-control' rows="5" onChange={handleChange} value={note.content}/>

            <div className="form-check form-switch m-2  w-100">
            <label htmlFor="desc" className='form-label '>Archived</label>
            <input id="completed" type="checkbox"className='form-check-input' onChange={handleChange} name="isArchived" />
            
            </div>

            <button type="submit" onClick={handleSubmit} className="btn m-4 w-100 mx-auto btn-dark text-light" >Crear</button>
        
        </form>
  )
}

export default CategoryForm