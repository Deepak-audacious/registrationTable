import React from 'react'

const RegistrationTable = ({ data }) => {
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
                    {data.map((item, index) => (
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
