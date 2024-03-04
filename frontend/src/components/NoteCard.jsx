
import { useContext } from 'react';
import {Col,Row,Button,Card, CardFooter, CardHeader} from 'react-bootstrap'
import NoteContext from '../context-data/NoteContext';
import { useNavigate } from "react-router-dom";

function NoteCard({note}) {
  const{deleteNote,setFormEditable,getNoteById}=useContext(NoteContext)

  const navigate = useNavigate();
  const date=new Date(note.creationDate)
  const dateFormatted= `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`


  const handleDelete=()=>{
    deleteNote(note.id);
    window.alert("deleted")
    window.location.href("/")
  }

  const handleEdit=()=>{
    setFormEditable(true);
    getNoteById(note.id);
    navigate("/newNote")
  }

  return (
    <Card style={{ width: '18rem' }} className='m-3  col-sm-12'>
      <CardHeader >
      <Card.Title className='text-center '>{note.title}</Card.Title>
      <span className={note.isArchived? " badge bg-secondary":" badge bg-success"}>{note.isArchived?"Archived":"Active"}</span>
      </CardHeader>
      <Card.Body>     
        <Card.Text>
          <div className=' flex-col justify-content-around'>
           <p> {note.content}</p>
            <small className='text-muted '>Date: { dateFormatted}</small>
          </div>          
        </Card.Text>

      </Card.Body>
      <CardFooter>
      <Row  >
          <Col>
            <Button variant="dark" className='mb-2 ' onClick={handleEdit}>edit</Button>
          </Col>
          <Col>
            <Button variant="danger" onClick={handleDelete}>delete</Button>
          </Col>
        </Row>
       
      </CardFooter>
    </Card>
  );
}

export default NoteCard;