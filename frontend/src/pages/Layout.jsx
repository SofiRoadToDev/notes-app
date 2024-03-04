
import NoteNavBar from '../components/NoteNavbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'



const Layout = () => {


  return (
   <>
      
     <NoteNavBar/>
     <div className="container d-flex justify-around ">
        <div className='row justify-between'>
          <Outlet/>
        </div>
        
     </div>
     <Footer/>
   </>
  )
}

export default Layout