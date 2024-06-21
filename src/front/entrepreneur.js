import styles from './enterpreneur.module.css';
import restaurant from './css/foodbusiness.webp';
import furniture from './css/furniture.jpg';
import mobile from './css/mobile.avif';
import electronics from './css/elecronics.avif';
import footwear from './css/footwear.avif';
import medical from './css/medical.jpg';
import fashionmall from './css/fashion-mall.avif';
import supermarkets from './css/supermarkets.jpg';
import garage from './css/garage.jpg';
import transport from './css/transport.jpg';
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function Entrepreneur(){
    // const domain ="Food Business";
    const location = useLocation();
    const { role} = location.state || {};
   
    return(
        <>
            <header className={styles.header1}>
                <h1>Seeking {role} for  Business Development </h1>
           </header>
           <main className={styles.container}>
                <Link to="restaurant" state={{domain:"Food Business",role}}>
                <div className={styles.domains}>
                    <div className={styles.images}>
                        <img src={restaurant}/>
                    </div>
                </div>
                </Link>
                <Link to="furniture" state={{domain:"Furniture Business",role}}>
                <div className={styles.domains}>
                    <div className={styles.images}>
                        <img src={furniture}/>
                    </div>
                </div>
                </Link>
                <Link to="mobilestore" state={{domain:"Mobile Store Business",role}}>
                <div className={styles.domains}>
                    <div className={styles.images}>
                        <img src={mobile}/>
                    </div>
                </div>
                </Link>
                <Link to="electronics" state={{domain:"Electronics Business",role}}>
                <div className={styles.domains}>
                    <div className={styles.images}>
                        <img src={electronics}/>
                    </div>
                </div>
                </Link>
                <Link to="footwear" state={{domain:"Footwear Business",role}}>
                <div className={styles.domains}>
                    <div className={styles.images}>
                        <img src={footwear}/>
                    </div>
                </div>
                </Link>
                <Link to="medical" state={{domain:"Medical Business",role}}>
                <div className={styles.domains}>
                    <div className={styles.images}>
                        <img src={medical}/>
                    </div>
                </div>
                </Link>
                <Link to="fashionmall" state={{domain:"Fashon Mall Business",role}}>
                <div className={styles.domains}>
                    <div className={styles.images}>
                        <img src={fashionmall}/>
                    </div>
                </div>
                </Link>
                <Link to="supermarkets" state={{domain:"Super Market Business",role}}>
                <div className={styles.domains}>
                    <div className={styles.images}>
                        <img src={supermarkets}/>
                    </div>
                </div>
                </Link>
                <Link to="garage" state={{domain:"Garage Business",role}}>
                <div className={styles.domains}>
                    <div className={styles.images}>
                        <img src={garage}/>
                    </div>
                </div>
                </Link>
                <Link to="restaurant" state={{domain:"Food Business",role}}>
                <div className={styles.domains}>
                    <div className={styles.images}>
                        <img src={restaurant}/>
                    </div>
                </div>
                </Link>
                <Link to="fashionmall" state={{domain:"Fashion Mall Business",role}}>
                <div className={styles.domains}>
                    <div className={styles.images}>
                        <img src={fashionmall}/>
                    </div>
                </div>
                </Link>
                <Link to="transport" state={{domain:"Transport Business",role}}>
                <div className={styles.domains}>
                    <div className={styles.images}>
                        <img src={transport}/>
                    </div>
                </div>
                </Link>
                
           </main>
           <footer className={styles.footer1}></footer>
        </>
    )
}
// rgb(222, 210, 210)
export default Entrepreneur;