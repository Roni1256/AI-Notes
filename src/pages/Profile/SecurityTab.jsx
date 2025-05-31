import Title from '../../components/styleComponents/Title'
import Input from '../../components/Universal/Input'
import React, { useContext, useState } from 'react'
import { axiosInstance } from '../../context/axios'
import { UserContext } from '../../App'
const SecurityTab = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  })
  const [msg, setMsg] = useState(null)
  const [user]=useContext(UserContext)
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    if (formData.newPassword !== formData.confirmNewPassword) {
      alert('New passwords do not match')
      return
    }
    await axiosInstance.post('/user/update-password/'+user._id, {
      currentPassword: formData.currentPassword,
      newPassword: formData.newPassword
    })
    .then((res) => {
      setMsg(res.data.message)
      setFormData({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: ''
      })
    })
    .catch((err) => {
      setMsg(err.message)
      console.log(err);
      
    })
  }

  return (
    <div className="mt-10">
        <Title title='Change Password' />
        <form onSubmit={handleSubmit} className="mt-3 space-y-4">
            <div className="">
                <p className="text-sm text-gray-500">
                    Ensure your account is using a long, random password to stay secure.
                    <br />
                    Your password should be at least 8 characters long and include a mix of letters, numbers, and symbols.
                </p>
            </div>
            <Input 
              label="Current Password" 
              name="currentPassword"
              type="password"
              placeholder="Enter your current password"
              value={formData.currentPassword}
              onChange={handleChange}
              required
            />
            <Input 
              label="New Password" 
              name="newPassword"
              type="password"
              placeholder="Enter your new password"
              value={formData.newPassword}
              onChange={handleChange}
              required
              minLength={8}
            />
            <Input 
              label="Confirm New Password" 
              name="confirmNewPassword"
              type="password"
              placeholder="Confirm your new password"
              value={formData.confirmNewPassword}
              onChange={handleChange}
              required
              minLength={8}
            />
            {msg && <p className="text-red-500 text-sm">{msg}</p>}
            <div className="flex justify-center mt-3">
              <button
                type="submit"
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              >
                Update Password
              </button>
            </div>
        </form>
    </div>
  )
}

export default SecurityTab