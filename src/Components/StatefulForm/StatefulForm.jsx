import { useState } from "react";


const StatefulForm = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, email, password);
    }

    const handleEmailChange = e => {
        // console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        // console.log(password);
        setPassword(e.target.value);
    }
    const handleNameChange = e => {
        // console.log(name);
        setName(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} type='text' name="name" />
                <br />
                <input onChange={handleEmailChange} type='email' name="email" />
                <br />
                <input onChange={handlePasswordChange} type='password' name="password" required />
                <br />
                <input type='submit' value='Submit' />

            </form>
        </div>
    );
};

export default StatefulForm;