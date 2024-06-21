import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import styles from './firstpage.module.css';
import {Link,useParams} from 'react-router-dom';

function FirstPage() {
    const name = useParams();
    console.log(name);
    return (
        <>
            <header className={styles.header1}>
                
                <FontAwesomeIcon icon={faBusinessTime }  size="3x" color='white' style={{margin:'10px',marginLeft:'40px'}}/>
                <h1>Startup Partner</h1>
                <Link to="find"><button style={{marginLeft:'300px'}}>Home</button></Link>
                <button>About</button>
                <button>Contact</button>
                <button>Services</button>
                <button>Sign-in</button>
                <button>Sign-out</button>
            </header>
            <div className={styles.body}>
                <div className={styles.border}>
                {/* <FontAwesomeIcon icon={ faHandshake} size="3x" />
                    <h1>Discover Your Ideal Business Partner for Starting Your Own Startup.</h1> */}
                    
                    
                </div>
                <Link to="find"><button>Home</button></Link>
            </div>
        </>
    );
}

export default FirstPage;
