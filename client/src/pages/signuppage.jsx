import React, {useState} from 'react';

const SignUpPage = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const requestBody = JSON.stringify({
            username: inputs.username,
            age: Number(inputs.age),
            profession: inputs.profession,
        });
        await fetch(`${process.env.BACKEND_URI}/save-data`, {
            method: "POST",
            body: requestBody,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
    return (
        <div className=''>
            <h1>Hello from sign up page</h1>

            <form onSubmit={handleSubmit}>
                <label>Enter your name:
                    <input type="text"
                        name="username"
                        value={inputs.username || ""}
                        onChange={handleChange} 
                    />
                </label>

                <label>Enter your age:
                    <input type="text"
                        name="age"
                        value={inputs.age || ""}
                        onChange={handleChange} 
                    />
                </label>

                <label>Enter your profession:
                    <input type="text"
                        name="profession"
                        value={inputs.profession || ""}
                        onChange={handleChange} 
                    />
                </label>
                <input type="submit" />
            </form>
        </div>
    );
}

export default SignUpPage;