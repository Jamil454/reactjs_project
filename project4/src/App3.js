import React, { useState } from 'react'

export default function App3() {
    const [profile, setProfile] = useState({
        name: "",
        email: "",
        address: "",
        contact: "",
        
    });

    const handleChange = (event) => {
        setProfile(profileinfo => {
            return {...profileinfo, [event.target.name]: event.target.value}
        })
    }
    console.log(profile);

    const handleSubmit = (event) => {
        event.preventDefault();
        let output = profile.name + '\n';
            output += profile.email + '\n';
            output += profile.address + '\n';
            output += profile.contact + '\n'
        alert(output);
      }
    
  return (
    <>
        <h1>Student Entry Form</h1>
        <form onSubmit={handleSubmit}>

           Name: <input type="text" name="name" value={profile.name} onChange={handleChange} placeholder='Enter Name'/> <br />

            Email:<input type="email" name="email" value={profile.email} onChange={handleChange} placeholder='Enter Email'/><br />

           Address: <textarea name="address" value={profile.address} onChange={handleChange} placeholder='Enter Address'></textarea><br />

           Contact: <input type="text" name="contact" value={profile.contact} onChange={handleChange} placeholder='Enter Contact Number'/><br />



            <button type='submit'>Submit</button>
        </form>
    </>
  )
}
