import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { doc, getDoc } from "firebase/firestore"; 
import { db } from './firebaseinit';
import styles from './profile.module.css';
import user from './user.png';
function Profile() {
  const location = useLocation();
  const { id } = location.state || {};
  const [profile, setProfile] = useState(null);


  useEffect(() => {
    const fetchInvestor = async () => {
      if (!id) {
        
        return;
      }

      try {
        const docRef = doc(db, 'Investors', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProfile(docSnap.data());
        } else {
          console.error("No such document!");
        }
      } catch (e) {
        console.error("Error fetching document: ", e);
      } 
    };

    fetchInvestor();
  }, [id]);

  return (
    <>
      {profile ? (
        <>
          <header className={styles.header1}>
                <h1>Profile Information</h1>
          </header>
          <div className={styles.container}>
            <img src={user} />
            <div className={styles.details}>
                <div>
                    <h1 className={styles.h1}><b>Name</b> : {profile.name}</h1>
                    <h1 className={styles.h1}><b>Email</b> : {profile.email}</h1>
                    <h1 className={styles.h1}><b>Role</b> : {profile.role}</h1>
                    <h1 className={styles.h1}><b>Mobile No</b> : {profile.mobile}</h1>
                    <h1 className={styles.h1}><b>Domain</b> : {profile.domain}</h1>
                    <h1 className={styles.h1}><b>Budjet </b>: {profile.budjet}</h1>
                    <h1 className={styles.h1}><b>Experience </b>: {profile.experience}</h1>
                    <h1 className={styles.h1}><b>Requirement</b> : {profile.requirements}</h1>
                    
                </div>
            </div>
          </div>
        </>
      ) : (
        <p>No profile found</p>
      )}
    </>
  );
}

export default Profile;
