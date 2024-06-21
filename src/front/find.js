import styles from './find.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import enterprener from './css/enterprener.png';
import investor from './css/invester.png';
import {Link} from 'react-router-dom';
function Find(){
    // const role="Investor";
    
    return(
        <>
           <header className={styles.header1}>
                <FontAwesomeIcon icon={faBusinessTime }  size="3x" color='white' style={{margin:'10px'}}/>
                <h1>Discover Your Ideal Business Partner for Starting Your Own Startup</h1>
           </header>
           <main className={styles.main1}>
                <Link className={styles.button} state={{role:"Investor"}} to="investor">
                    <div className={styles.border}>
                        <h1>Investor</h1>
                        <img src={investor} />
                    </div>
                </Link>
                <Link className={styles.button} state={{role:"Entrepreneur"}} to="enterprener">
                    <div className={styles.border}>
                        <h1>Entrepreneur</h1>

                        <img src={enterprener} />
                    </div>
                </Link>
           </main>
        </>
    )
}

export default Find;