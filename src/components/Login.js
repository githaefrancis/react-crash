import React from 'react'


class Login extends React.Component{

    render(){

     return <div className='login'>

         <form>
             <h2>Sign In</h2>
             <div style={{marginBottom:'15px'}}>
             <label for='username' className='fieldLabel'>Username</label>
             <input type='text' id='username' className='textField'/>
             </div>
             <div style={{marginBottom:'15px'}}>
             <label for='username' className='fieldLabel'>Password</label>
             <input type='password' id='username' className='textField'/>  
             </div>

             <button className='button' type='submit' >Login</button>
         </form>
     </div>;
    }
}
export default Login