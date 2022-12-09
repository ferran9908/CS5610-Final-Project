import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { editProfile } from '../../store/slices/profileSlice'

const MyProfile = () => {
    const [isEdit, setIsEdit] = useState(false)
    const profile = useSelector(state => state.auth.user)
    const jwt = useSelector(state => state.auth.jwt)
    const [formData, setFormData] = useState({ name: profile.name, email: profile.email, role: profile.role })
    const dispatch = useDispatch()
    const handleEditProfile = () => {
        dispatch(editProfile({ ...formData, jwt }))
        setIsEdit(false)
    }
    return (
        <div style={{ display: 'grid', placeItems: 'center', height: '80vh', color: 'white' }}>
            {profile && !isEdit && <div style={{ border: '3px solid gray', borderRadius: '10px', paddingTop: '2rem', paddingBottom: '2rem', paddingLeft: '4rem', paddingRight: '4rem' }}>
                <p>Name: {formData.name}</p>
                <p>Email: {formData.email}</p>
                <p>Role: {formData.role}</p>
                <Button variant="primary" onClick={() => {
                    setIsEdit(true)
                }}>Edit Profile</Button>
            </div>}
            {profile && isEdit && <div style={{ border: '3px solid gray', borderRadius: '10px', paddingTop: '2rem', paddingBottom: '2rem', paddingLeft: '4rem', paddingRight: '4rem' }}>
                <p>Name: <input type="text" value={formData.name} onChange={e => {
                    setFormData({ ...formData, name: e.target.value })
                }} /></p>
                <p>Email: <input type="text" value={formData.email} onChange={e => {
                    setFormData({ ...formData, email: e.target.value })
                }} /></p>
                <Form.Select onChange={e => setFormData({ ...formData, role: e.target.value })} aria-label="Default select example">
                    <option value="BUYER" selected>Buyer</option>
                    <option value="SELLER">Seller</option>
                    <option value="ADMIN">Admin</option>
                </Form.Select>
                <Button variant="danger" className="w-full" onClick={() => {
                    handleEditProfile()
                }}>Update Profile</Button>
            </div>

            }
        </div>
    )
}

export default MyProfile