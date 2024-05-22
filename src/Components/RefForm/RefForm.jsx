import { useEffect, useRef } from "react";


const RefForm = () => {
    const nameRef = useRef(null);
    const EmailRef = useRef(null);
    const PasswordRef = useRef(null);

    useEffect(() => {
        nameRef.current.focus();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(EmailRef.current.value);
        console.log(PasswordRef.current.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input ref={nameRef} type='text' name="name" />
                <br />
                <input ref={EmailRef} defaultValue={'xyz@gmail.com'} type='email' name="email" />
                <br />
                <input ref={PasswordRef} type='password' name="password" required />
                <br />
                <input ref={PasswordRef} type='submit' value='Submit' />

            </form>
        </div>
    );
};

export default RefForm;