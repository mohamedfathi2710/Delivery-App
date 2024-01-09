import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faWhatsapp, faInstagram} from '@fortawesome/free-brands-svg-icons';
import './home.css'

import pharmacy from '../assets/Pharmacy.jpg'
import cafe from '../assets/cafe.jpg'
import food from '../assets/food2.jpg'
import everything from '../assets/everything.jpg'
import Slick from './slick'

function Home() {

  return (
    <>
    <section className="homepage">
      <div className="background-image"></div>
      <div className="content-overlay">
        <h1>KESH <br></br> LIVRAISON</h1>
        <h3>0601020304</h3>
        <p>Votre destination unique pour des services de livraison rapides et fiables.</p>


      </div>
      <div className="wrapper">
          <div className="button">
            <div className="icon">
            <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <span>Facebook</span>
          </div>
          <div className="button">
            <div className="icon">
            <FontAwesomeIcon icon={faWhatsapp} />
            </div>
            <span>Whatsapp</span>
          </div>
          <div className="button">
            <div className="icon">
            <FontAwesomeIcon icon={faInstagram} />
            </div>
            <span>Instagram</span>
          </div>
        </div>
    </section>

{/**---------------------------------------- Services section  ------------------------------*/}

    <div className='services-title'>
      <h1>Nos Services</h1>
    </div>
    <section id="services" className='services'>
    <div class="grid grid-cols-2 gap-4">
      <div className='grid-card'>
        <img src={pharmacy} alt="" srcset="" />
        <div className="contenu">
          <h2>Medicin Delivery</h2>
        </div>
      </div>
      <div className='grid-card2'>
        <img src={food} alt="" srcset="" />
        <div className="contenu">
          <h2>Food Delivery</h2>
        </div>
      </div>
      <div className='grid-card3'>
        <img src={cafe} alt="" srcset="" />
        <div className="contenu">
          <h2>Cafe Delivery</h2>
        </div>
      </div>
      <div className='grid-card4'>
        <img src={everything} alt="" srcset="" />
        <div className="contenu">
          <h2>Everything Delivery</h2>
        </div>
      </div>
    </div>

   
    </section>
    <div className="caroussel"><Slick/></div>
    

{/**---------------------------------------- About us section  ------------------------------*/}
    <div className='about-title'>
      <h1>À propos de Nous</h1>
    </div>
    <section id="about" className='about'>
      <div className="content1">
        <div className="content1-img"></div>
        <div className="content1-parag">
          <h2>Who we are</h2>
          <br></br>
          <p> 
              KESH LIVRASION, votre partenaire dévoué pour des services de livraison rapides, sécurisés et fiables. 
              Notre mission est de vous offrir un accès pratique à une variété de produits essentiels, garantissant ainsi votre bien-être et votre tranquillité d'esprit. 
              Chez KESH LIVRASION, nous nous efforçons d'être bien plus qu'un simple service de livraison en élargissant notre offre pour inclure tout ce dont vous pourriez avoir besoin, de la pharmacie à votre porte aux articles du quotidien.
          </p>
        </div>
      </div>
      <div className="content2">
        <div className="content2-parag">
          <h2>Notre Engagement envers Vous</h2>
          <br></br>
          <p> 
            <ul>
              <li><span className='list-point'>Livraisons Rapides et Polyvalentes :</span> Que ce soit pour des médicaments, des produits d'épicerie, des articles ménagers ou d'autres essentiels, notre équipe dédiée assure des livraisons rapides, fiables et polyvalentes. Nous comprenons que vos besoins varient, et nous sommes là pour répondre à chacune de vos exigences.</li>
              <li> <span className='list-point'>Accès Pratique :</span> Notre plateforme conviviale vous permet de commander une large gamme de produits en quelques clics. Grâce à un suivi en temps réel, vous avez l'assurance que vos articles seront livrés rapidement à l'endroit qui vous convient le mieux.</li>
              <li><span className='list-point'>Service Client Exceptionnel :</span> Chez KESH LIVRAISON, chaque client est traité avec le plus grand soin. Notre équipe de service client dévouée est disponible pour répondre à vos questions, vous fournir des informations sur vos livraisons et vous offrir une expérience personnalisée à chaque commande.</li>
            </ul>
          </p>
        </div>
        <div className="content2-img"></div>
      </div>
    </section>

    <section id="contact" className='contact'>
      <ul className='contact-us'>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Facebook</a></li>
        <li><a href="mailto:julesforrest@gmail.com">Email</a></li>
        <li><a href="#">Num Tel : 0604040404</a></li>
        <li>
          <p>👋</p>
        </li>
      </ul>
    </section>

    </>
  )
}

export default Home