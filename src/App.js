import Video from './components/Video'
import Login from './components/Login'
import { Link } from 'react-router-dom'


const App=({loggedIn})=>{
  if (loggedIn){
  return(
<div>
  <nav className='menu'>
    <Link to='/login' className='menuLink'>Login</Link>
    <Link to='/video' className='menuLink'>Video</Link>
  </nav>
<Video name='Kevin'/>
</div>
)}

else {
  return (
    <div>

      <Login />
    </div>
  )
}
}


export default App