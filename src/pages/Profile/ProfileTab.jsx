import Input from '../../components/Universal/Input'
import Title from '../../components/styleComponents/Title'
import React, { useContext, useState } from 'react'
import { UserContext } from '../../App'
import { Verified } from 'lucide-react'

const ProfileTab = () => {
    const [user]=useContext(UserContext)
    const [formData, setFormData] = useState({
      username: user.name || '-',
      email: user.email || '-',
      phone: user.phone || '-',
    })

    const handleChange = (e) => {
      const { name, value } = e.target
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }

    return (
      <div>
        <Title title='Basic Information'/>
          <div className="mt-3 space-y-4">
              <Input 
                label="Username" 
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              <Input
              icon={Verified}
              isVerified={true} 
                label="Email" 
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              
              <Input 
                label="Phone Number" 
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
              />
          </div>
      </div>
    )
}

export default ProfileTab