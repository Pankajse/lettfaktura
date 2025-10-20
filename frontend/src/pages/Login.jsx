
import { useState } from 'react';
import Navbar from '../components/Navbar'
import '../styles/login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../components/ui/CustomButton';

const Login = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLoginHandler = async (e) => {
        e.preventDefault();
        console.log(import.meta.env.VITE_BASE_URL)
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/signin`, {
                email,
                password
            });
            if (response.status === 400) {
                localStorage.setItem("token",response.data.token);
                navigate("/pricelist");
                setEmail("");
                setPassword("");
            } else {
                setMessage(response.data.message || "Login failed");
            }

        } catch (error) {
            if (axios.isAxiosError(error)) {
                const msg = error.response?.data?.message;
                setMessage(msg || "Invalid credentials or server error");
            } else {
                setMessage("Network error. Please try again.");
            }
        }

    }
    return (
        <div className='login-container'>
            <Navbar />
            <form className='login-form' onSubmit={onLoginHandler}>
                <h2 className='heading'>Log in</h2>
                <div className='field-container'>
                    <label className='input-label' htmlFor="email">Enter your email address</label>
                    <input className='input' id='email' type="text"
                        placeholder='Email address' value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                </div>
                <div className='field-container'>
                    <label className='input-label' htmlFor="password">Enter your password</label>
                    <input className='input' id='password' type='password'
                        placeholder='Password' value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                </div>
                <p className='message'>{message}</p>
                <CustomButton variant="primary" text="Login" type='submit' />
                {/* buttons below login  */}
                <div className='sec-buttons-container'>
                    <CustomButton variant="ghost" type='button' text="Register" />
                    <CustomButton variant="ghost" type='button' text="Forgotten password?" />
                </div>
            </form>
            {/* footer  */}
            <footer className='footer'>
                <div className='footer-header-button'>
                    <h2>123 Fakturera</h2>
                    <div className='sec-buttons-container'>
                        <CustomButton variant="ghost" text="Home" />
                        <CustomButton variant="ghost" text="Order" />
                        <CustomButton variant="ghost" text="Contact us" />
                    </div>
                </div>
                <hr />
                <p>© Lättfaktura, CRO no. 638537, 2025. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Login