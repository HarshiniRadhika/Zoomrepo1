import Join from './Components/join';
import './Components/join.class'
function First(){
    return(
        <>
        <div className="main">
        
            <a href="settings.html"><img src="https://img.icons8.com/m_outlined/200/FFFFFF/settings.png" alt=""/></a>
            <h1 class="t1">zoom</h1>
            <h1 class="t2">Workplace</h1>
            
            <div class="main1">
                <h3>Welcome</h3>
                <p>Get started with your account</p>
                
            
           
                <a href="join.jsx"><button class="mb1"><b><h3>Join a meeting</h3></b></button></a><br />
                
            
                <a href="signup.html"> <button class="mb2"><b><h3>Sign up</h3></b></button></a><br />
                <a href="signin.html"><button class="mb2"><b><h3>Sign in</h3></b></button></a>
                </div>
        </div>
        
        </>
    )
}
export default First