import React, { useState } from 'react'

const RegistrationTable = ({ data }) => {
    const [formData ,setFormData] = useState(data)
    return (
        <div>
            <table style={{border:"1px solid black"}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {formData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    )
}

export default RegistrationTable
