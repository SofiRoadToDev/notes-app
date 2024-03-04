
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import CategoryPage from './pages/CategoryPage'
import Layout from './pages/Layout'
import NoteHome from './pages/NoteHome'
import NoteForm from './components/NoteForm'
import { NoteProvider } from './context-data/NoteContext'
import FiltersPage from './pages/FiltersPage'


function App() {

return (
    <>
    <NoteProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="" element={<NoteHome/>}/>
            <Route path="/category" element={<CategoryPage/>}/>
            <Route path="/newNote" element={<NoteForm/>}/>
            <Route path='/filters' element={<FiltersPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </NoteProvider>
    </>
  )
}

export default App
