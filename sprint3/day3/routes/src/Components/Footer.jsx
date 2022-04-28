import React from 'react';
import styles from  './styles.module.css';
import { Button } from 'react-bootstrap';
import {AiFillFacebook,AiFillTwitterSquare,AiFillInstagram,AiFillYoutube} from 'react-icons/ai';
import {BsPinterest} from 'react-icons/bs'

const Footer = () => {
  return (
      <>
    <div className={styles.Footer}>
         <div>
            <p className={styles.heading}>The destination for tech & design</p><br />
            <p>Founded on the principal that good design should be seamless and accessible to all; PROPER creates an evolving range of solutions and accessories that deliver great technology experiences, delivered right to your doorstep.</p>

            <div className={styles.footer_Icons}>
                <AiFillFacebook className={styles.icons}/>
                <AiFillTwitterSquare className={styles.icons}/>
                <AiFillInstagram className={styles.icons}/>
                <BsPinterest className={styles.icons}/>
                <AiFillYoutube className={styles.icons}/>
            </div>
        </div>


        <div>
            <ul>
                <li className={styles.heading}>Studio Proper</li>
                <li>Proper Consulting</li>
                <li>Proper x Architects</li>
                <li>Proper X Officeworks</li>
                <li>Your Brand on Our Products</li>
                <li>Verified Customer Reviews</li>
                <li>Apple Authorised Reseller</li>
                <li>Buy Now Pay Later</li>
                <li>NDIS support available</li>
                <li>Privacy Policy</li>
            </ul>     
        </div>

        <div>
            <p className={styles.heading }>Newsletter</p>
            <p className={styles.footer_p}>Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form action="">
            <input className={styles.footer_Input} type="text" placeholder='Enter Your Email' /><br/><br />
            <Button className={styles.button} variant="primary">SUBSCRIBE</Button>{' '}
            </form>
        </div> 
    </div>
    <p className={styles.heading} style={{marginTop:"50px", float:"left"}}>© STUDIO PROPER</p>
    </>
  )
}











export default Footer