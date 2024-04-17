import { useState } from "react";
import { useLoginContext } from "../context/LoginContext";

function LoginForm() {

const [firstName,setName] = useState('');    
const [userEmail, setUserEmail] = useState('');
const [userPassword, setUserPassword] = useState('');
const [submitResult, setSubmitResult] = useState('');
// destructure the context values passed via UserProvider
const {currentUser, handleUpdateUser} = useLoginContext();

// alternative using the useContext hook directly, either works
//const {currentUser, handleUpdateUser} = useContext(UserContext);
const handleSubmit = (e) => {
e.preventDefault();
if (userPassword.length < 5) {
setSubmitResult('Password must be at least 5 chars long');
} else if (userPassword === userEmail) {
setSubmitResult('Password must not match email address');
} else {
setSubmitResult('Successful login.');
handleUpdateUser({ email: userEmail, name: firstName }); // context function
}
}
{/* if the user is already logged in, show msg instead of form */}
if (currentUser.email) return (

<div><p>Welcome {currentUser.name}!</p>
<button onClick={() => handleUpdateUser({})}>Log Out</button>
</div>
);

return (
    <div className="LoginForm componentBox">
    
    
    <form onSubmit={handleSubmit}>
    {/* same form code as previously, BUT now includes<form> and <button> */}
        <label>First Name: 
            <input type="text" value={firstName} name={'name'}
            onChange={(e) => setName(e.target.value)}/>
        </label>
        <div className="formRow">
        <label>Email Address:
                {/* Controlled form element needs both value and onChange.
                onChange handler uses event param e to access target value.
                Whenever user types, new value is stored in state. */}
                <input type="email" value={userEmail} name="userEmail"
                onChange={(e) => setUserEmail(e.target.value)} />
        </label>
        </div>
        <div className="formRow">
        <label>Password:
                <input type="password" value={userPassword} name="password"
                onChange={(e) => setUserPassword(e.target.value)} />
        </label>
        </div>
        <button>Log In</button>
        <p>{submitResult}</p>
    </form>
    
    </div>
    )
    }
// otherwise render same form as previously, no changes
export default LoginForm;