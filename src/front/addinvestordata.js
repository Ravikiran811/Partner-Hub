import styles from './addinvestordata.module.css';
import {useState} from 'react';
import { collection, addDoc } from "firebase/firestore"; 
import {db} from './firebaseinit';
import { useLocation } from 'react-router-dom';

function AddInvestor(){
    const location = useLocation();
    const { role} = location.state || {};
    const Role =role;
    const [formData , setFormData] = useState({
        name :"",
        email:"",
        password:"",
        mobile:"",
        domain:"",
        budjet:0,
        share:"",
        experience:"",
        role:Role,
        requirements:""
    })

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await addDoc(collection(db, "Investors"), {
                name : formData.name,
                email: formData.email,
                password:formData.password,
                mobile:formData.mobile,
                domain:formData.domain,
                budjet:formData.budjet,
                share:formData.share,
                experience:formData.experience,
                role:Role,
                requirements:formData.requirements,
                

            });
            // Reset form data after submission
            setFormData({
                name :"",
                email:"",
                password:"",
                mobile:"",
                domain:"",
                budjet:0,
                share:"",
                experience:"",
                role:{Role},
                requirements:""
                
            });
            alert("Document successfully added!");
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    }

    return(
        <>
            <header className={styles.header1}>
                <h1>Enter your details for your Business</h1>
            </header>
            <div className={styles.container}>
                <form className={styles.section} onSubmit={handleSubmit} >
                    <div>
                        <h1>Name</h1>
                        <input name="name" value={formData.name} onChange={handleChange} placeholder="Enter your Name" />
                    </div>
                    <div>
                        <h1>Email</h1>
                        <input name="email" value={formData.email} onChange={handleChange} placeholder="Enter your Email" />
                    </div>
                    <div>
                        <h1>Password</h1>
                        <input name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" />
                    </div>
                    <div>
                        <h1>Domain</h1>
                        <input name="domain" value={formData.domain} onChange={handleChange} placeholder="Enter your Name" />
                    </div>
                    <div>
                        <h1>Budjet</h1>
                        <input name="budjet" value={formData.budjet} onChange={handleChange} placeholder="Enter your Budjet" />
                    </div>
                    <div>
                        <h1>Share</h1>
                        <input name="share" value={formData.share} onChange={handleChange} placeholder="Enter your Share" />
                    </div>
                    <div>
                        <h1>Mobile no</h1>
                        <input name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter your Mobile" />
                    </div>
                    <div>
                        <h1>Experience</h1>
                        <input name="experience" value={formData.experience} onChange={handleChange} placeholder="Enter your Experience" />
                    </div>
                    <div>
                        <h1>Role</h1>
                        <input name="role" value={formData.role} onChange={handleChange} placeholder="Enter your Timings" />
                    </div>
                    <div>
                        <h1>Experience</h1>
                        <input name="experience" value={formData.experience}  onChange={handleChange} placeholder="Enter your Experience" />
                    </div>
                    <div>
                        <h1>Requirements</h1>
                        <textarea name="requirements" onChange={handleChange} value={formData.requirements} placeholder='Enter your requirements'></textarea>
                    </div>
                    
                    
                    
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default AddInvestor;