import './s4.css';
import { Link } from 'react-router-dom';
function Screen4(){
    return(
        <>
        <div className='body'>
        
        <header>
        <Link to='/'><img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/arrow-1521462-1289083.png?f=webp&w=256" alt=""/></Link>
        <h3>Sign in</h3>
        </header>
    
        <div className='inp'>
        <p>Enter your email address</p>
        <div>
            <input type="email" placeholder="Email"/><br />
            <input type="text" placeholder="Password"/>
        </div>
        <button className='bt1'><h4>Sign in</h4></button>
        <p className='p'>Forgot Password?</p>
        </div>
        <div className='inp'>
        <p>Other sign in methods</p>
        <button className='bt'>
            <i class="fa-brands fa-google"></i>
            <p>Continue with Google</p>
            
        </button><br />
        <button className='bt'>
            <i class="fa-brands fa-apple"></i>
            <p>Continue with Apple</p>
            
            
        </button><br />
        <button className='bt'>
            <i class="fa-brands fa-facebook"></i>
            <p>Continue with Facebook</p>
            
            
        </button><br />
        <button className='bt'>
            <i class="fa-solid fa-key"></i>
            <p>Continue with SSO</p>
            
            
        </button>
        </div>
        </div>
        </>
    )
}
export default Screen4