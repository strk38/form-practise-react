import useInputState from "../../Hooks/useInputState";

const HookForm = () => {
    const [name, handleNameChange] = useInputState('Rajni');
    // const [email, handleEmailChange] = useInputState('Rajni@gmail');
    // const [password, handlePasswordChange] = useInputState('Rajni123');


    const handleSubmit = e => {
        e.preventDefault();
        console.log(name);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type='text' name="name" />
                <br />
                <input type='email' name="email" />
                <br />
                <input type='submit' value='Submit' />

            </form>
        </div>
    );
};

export default HookForm;