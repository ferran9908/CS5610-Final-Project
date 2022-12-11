import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { editProfile } from '../../store/slices/profileSlice'
import './MyProfile.css'

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
        <div>
            {profile && !isEdit &&
                <div className="card-profile">
                <h1 className="card-title-profile ">My Profile</h1>


                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Name:   {formData.name}</li>
                    <li className="list-group-item">Email: {formData.email}</li>
                    <li className="list-group-item">Role: {formData.role}</li>

                </ul>
                <Button className="edit-profile-btn" variant="primary" onClick={() => {
                    setIsEdit(true)
                }}>Edit Profile</Button>
            </div>}

            <div style={{ display: 'grid', placeItems: 'center', height: '80vh', color: 'white' }}>
                {/*{profile && !isEdit && <div style={{ border: '3px solid gray', borderRadius: '10px', paddingTop: '2rem', paddingBottom: '2rem', paddingLeft: '4rem', paddingRight: '4rem' }}>*/}
                {/*    <p>Name: {formData.name}</p>*/}
                {/*    <p>Email: {formData.email}</p>*/}
                {/*    <p>Role: {formData.role}</p>*/}
                {/*    <Button variant="primary" onClick={() => {*/}
                {/*        setIsEdit(true)*/}
                {/*    }}>Edit Profile</Button>*/}
                {/*</div>}*/}
                {profile && isEdit && <div className="card-profile-edit" style={{ border: '3px solid gray', borderRadius: '10px', paddingTop: '2rem', paddingBottom: '2rem', paddingLeft: '4rem', paddingRight: '4rem' }}>
                    <p className="form-input" >Name: <input type="text" value={formData.name} onChange={e => {
                        setFormData({ ...formData, name: e.target.value })
                    }} /></p>
                    <p className="form-input" >Email: <input type="text" value={formData.email} onChange={e => {
                        setFormData({ ...formData, email: e.target.value })
                    }} /></p>
                    <Form.Select className="form-input-dd" onChange={e => setFormData({ ...formData, role: e.target.value })} aria-label="Default select example">
                        <option value="BUYER" selected>Buyer</option>
                        <option value="SELLER">Seller</option>
                        <option value="ADMIN">Admin</option>
                    </Form.Select>
                    <Button className="update-profile-btn"  onClick={() => {
                        handleEditProfile()
                    }}>Update Profile</Button>
                </div>

                }
            </div>

        </div>

    )
}

export default MyProfile