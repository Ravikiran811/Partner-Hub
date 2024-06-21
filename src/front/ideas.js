import {Link,useParams} from 'react-router-dom';
import styles from './ideas.module.css';
import user from './user.png';
import {db} from './firebaseinit';
import { collection, query, orderBy, onSnapshot, updateDoc, doc, where } from "firebase/firestore";
import {useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';

function Ideas(){
    const location = useLocation();
    const {domain,role} = location.state || {};
    const {name} = useParams();
    const [investors,setInvestors] = useState([]);

    useEffect(()=>{
        function fetchInvestors(){
            if (!domain || !role) {
                console.log("Problem parameter is undefined.");
                return;
              }
            const q = query(collection(db,'Investors'),where("domain","==",domain ),where( "role","==",role));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const allInvestors = querySnapshot.docs.map(doc => ({
                  id: doc.id,
                  ...doc.data()
                }));
                setInvestors(allInvestors);
            });
        }
        fetchInvestors();
    },[]);


    return(
        <>
            <header className={styles.header1}>
                <h1>Search for {name}   Business {role} </h1>
            </header>
            <main className={styles.main1}>
                <div className={styles.container}>
                    <h1 className={styles.h1}>{role} Details</h1>
                    {investors.map((item,i)=>(
                    <div className={styles.investor}>
                        <Link state={{id:item.id}} to="profile"><img src={user} /></Link>
                        <div>
                            <p><b>Name</b> : {item.name}</p>
                            <p><b>Domain</b> : {item.domain}</p>
                            <p><b>Budjet</b> : {item.budjet} /-</p>
                            <p><b>Requirement</b> : {item.experience}</p>
                            <p><b>Profit Share</b> : {item.share}</p>
                        </div>
                    </div>
                    ))
                    }
                    
                    
                    
                </div>
                <Link to="addinvestordata" state={{role}}><button className={styles.btn}>Add Your Details</button></Link>
            </main>
        </>
    )
}
export default Ideas;