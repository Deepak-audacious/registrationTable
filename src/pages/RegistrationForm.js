import React, { useState } from 'react'
import style from './style.module.css'
import RegistrationTable from '../pages/RegistrationTable'


const RegistrationForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [formData, setFormData] = useState([])

    const handleSubmit = (e) =>{
        e.preventDefault();

        const data = {
            name:name,
            email:email,
            phone:phone
        }
        setFormData([...formData,data])
    }
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <label className={style.label}>UserName: 
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={style.input} />
                        </label>




                    <label className={style.label}>Email
                    <input
                        type="text"
                        value={email}
                        onChange={(e) =>setEmail(e.target.value)}
                        className={style.input} />
                        </label>






                    <label className={style.label}>Phone
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={style.input} />
                        </label>

                    <button type='submit'>Submit</button>
                </form>
     <RegistrationTable  data={formData}/>

            </div>

        </>
    )
}

export default RegistrationForm
