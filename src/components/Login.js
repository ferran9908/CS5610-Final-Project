import '../css/AuthModal.css'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useDispatch } from 'react-redux'
import { signUp, signIn } from '../store/slices/authSlice'
import { useNavigate } from 'react-router'

const Login = () => {
    const dispatch = useDispatch()
    const navigateTo = useNavigate()
    const [isSignUp, setIsSignUp] = useState(false)
    const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'BUYER' })
    const handleAuth = () => {
        if (isSignUp) {
            dispatch(signUp(formData))
        } else {
            dispatch(signIn({ email: formData.email, password: formData.password }))
        }
        navigateTo("/")
    }
    return (
        <div className="authbody">
            <div>
                <h3>{isSignUp ? 'Sign up' : 'Sign in'}</h3>
                {isSignUp && <input value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} type="text" className="display-block auth-input w-full mb-3" aria-describedby="nameHelp" placeholder="Enter Name" />}
                <input value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} type="email" className="display-block auth-input w-full mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <input value={formData.password} onChange={e => setFormData({ ...formData, password: e.target.value })} type="password" className="auth-input display-block w-full mb-3" id="exampleInputPassword1" placeholder="Password" />
                {isSignUp && <div>
                    <Form.Select onChange={e => setFormData({ ...formData, role: e.target.value })} aria-label="Default select example">
                        <option value="BUYER" selected>Buyer</option>
                        <option value="SELLER">Seller</option>
                        <option value="ADMIN">Admin</option>
                    </Form.Select>
                </div>}
                <small className='change-signup' onClick={() => setIsSignUp(!isSignUp)}>New to our app? Sign Up!</small>
                <Button onClick={handleAuth} className="display-block w-full mt-3">{isSignUp ? 'Sign Up!' : 'Sign In!'}</Button>
            </div>
        </div>
    )
}

export default Login