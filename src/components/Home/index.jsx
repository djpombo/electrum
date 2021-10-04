import { FaArrowCircleRight, FaStar, FaRegStar, FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from 'react-icons/fa';
import { useEffect } from 'react';
import Prod1 from '../../img/prod-1.jpg';
import Prod2 from '../../img/prod-2.jpg';
import Prod3 from '../../img/prod-3.jpg';
import Prod4 from '../../img/prod-4.jpg';
import Prod5 from '../../img/prod-5.jpg';
import Prod6 from '../../img/prod-6.jpg';
import Prod7 from '../../img/prod-7.jpg';
import Prod8 from '../../img/prod-8.jpg';
import { Link } from 'react-router-dom';


export const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            <div className="banners">
                <div className="banner" id="banner-1">
                    <div className="banner-cover">
                        <div className="banner-content">
                            <h2>Promoção de Notebooks</h2>
                            <Link to ='/notebooks'>Ver Mais
                                <i className="fas fa-arrow-circle-right">
                                    <FaArrowCircleRight />
                                </i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="banner" id="banner-2">
                    <div className="banner-cover">
                        <div className="banner-content">
                            <h2>Lançamento de Acessórios</h2>
                            <Link to ='/acessorios'>Ver Mais
                                <i className="fas fa-arrow-circle-right">
                                    <FaArrowCircleRight />
                                </i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="banner" id="banner-3">
                    <div className="banner-cover">
                        <div className="banner-content">
                            <h2>Celulares e Smartphones</h2>
                            <Link to ='/smartphones'>Ver Mais
                                <i className="fas fa-arrow-circle-right">
                                    <FaArrowCircleRight />
                                </i>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            {/** produtos novos */}
            <div className="products-grid">
                <h2>Produtos Novos</h2>
                <div className="products-grid-container">
                    <div className="product-grid-card">
                        <span className="label new">New</span>
                        <img src={Prod1} alt="monitor gamer" />
                        <p className="category">Categoria</p>
                        <h3 className="product-name">Monitor Gamer 4K</h3>
                        <p className="product-price">R$ 2.899,90</p>
                        <div className="rating-box">
                            <i className="fas fa-star"><FaStar /></i>
                            <i className="fas fa-star"><FaStar /></i>
                            <i className="fas fa-star"><FaStar /></i>
                            <i className="fas fa-star"><FaStar /></i>
                            <i className="fas fa-star"><FaStar /></i>
                        </div>
                        <button className="btn">Comprar</button>
                    </div>

                    <div className="product-grid-card">
                        <span className="label new">New</span>
                        <img src={Prod2} alt="Microfone youtuber" />
                        <p className="category">Categoria</p>
                        <h3 className="product-name">Microfone Pro</h3>
                        <p className="product-price">R$ 499,90</p>
                        <div className="rating-box">
                            <i className="fas fa-star"><FaStar /></i>
                            <i className="fas fa-star"><FaStar /></i>
                            <i className="fas fa-star"><FaStar /></i>
                            <i className="fas fa-star"><FaRegStar /></i>
                            <i className="fas fa-star"><FaRegStar /></i>
                        </div>
                        <button className="btn">Comprar</button>
                    </div>

                    <div className="product-grid-card">
                        <span className="label new">New</span>
                        <img src={Prod3} alt="Smart TV" />
                        <p className="category">Categoria</p>
                        <h3 className="product-name">Smart TV 55" 8k Oled</h3>
                        <p className="product-price">R$ 9.899,90</p>
                        <div className="rating-box">
                            <i className="fas fa-star"><FaStar /></i>
                            <i className="fas fa-star"><FaStar /></i>
                            <i className="fas fa-star"><FaStar /></i>
                            <i className="fas fa-star"><FaStar /></i>
                            <i className="fas fa-star"><FaStar /></i>
                        </div>
                        <button className="btn">Comprar</button>
                    </div>

                    <div className="product-grid-card">
                        <span className="label new">New</span>
                        <img src={Prod4} alt="PC Gamer" />
                        <p className="category">Categoria</p>
                        <h3 className="product-name">PC Gamer core i7</h3>
                        <p className="product-price">R$ 7.429,90</p>
                        <div className="rating-box">
                            <i className="fas fa-star"><FaStar /></i>
                            <i className="fas fa-star"><FaStar /></i>
                            <i className="fas fa-star"><FaStar /></i>
                            <i className="fas fa-star"><FaStar /></i>
                            <i className="fas fa-star"><FaStar /></i>
                        </div>
                        <button className="btn">Comprar</button>
                    </div>
                </div>
            </div>
            {/** deal */}
            <div className="deal-container">
                <div className="deal-container-content">
                    <div className="deal-container-content-timer">
                        <div className="deal-container-timer">
                            <span className="deal-container-timer-time">02</span>
                            <span className="deal-container-timer-word">Dias</span>
                        </div>

                        <div className="deal-container-timer">
                            <span className="deal-container-timer-time">12</span>
                            <span className="deal-container-timer-word">Horas</span>
                        </div>

                        <div className="deal-container-timer">
                            <span className="deal-container-timer-time">25</span>
                            <span className="deal-container-timer-word">Minutos</span>
                        </div>

                        <div className="deal-container-timer">
                            <span className="deal-container-timer-time">30</span>
                            <span className="deal-container-timer-word">Segundos</span>
                        </div>
                    </div>
                    <h2 className="deal-container-content-title">Promoção de Fone Gamer</h2>
                    <p className="deal-container-content-subtitle">Toda a linha gamer com 50% de desconto</p>
                    <button className="btn">Comprar Agora</button>
                </div>
            </div>
            {/** Mais vendidos */}
            <div className="products-grid">
                <h2>Mais Vendidos</h2>
                <div className="products-grid-container">
                    <div className="product-grid-card">
                        <span className="label hot">Hot</span>
                        <img src={Prod5} alt="joystick xbox" />
                        <p className="category">Categoria</p>
                        <h3 className="product-name">Joypad Xbox One S</h3>
                        <p className="product-price">R$ 649,90</p>
                        <div className="rating-box">
                            <i className="fas fa-star"><FaStar /></i>
                            <i className="fas fa-star"><FaStar /></i>
                            <i className="fas fa-star"><FaStar /></i>
                            <i className="fas fa-star"><FaStar /></i>
                            <i className="fas fa-star"><FaStar /></i>
                        </div>
                        <button className="btn">Comprar</button>
                    </div>

                    <div className="product-grid-card">
                        <span className="label hot">Hot</span>
                        <img src={Prod6} alt="samartphone galaxy" />
                        <p className="category">Categoria</p>
                        <h3 className="product-name">Smartphone Samasung Galaxy s21</h3>
                        <p className="product-price">R$ 5.499,90</p>
                        <div className="rating-box">
                            <i className="fas fa-star"><FaStar /></i>
                            <i className="fas fa-star"><FaStar /></i>
                            <i className="fas fa-star"><FaStar /></i>
                            <i className="fas fa-star"><FaStar /></i>
                            <i className="fas fa-star"><FaRegStar /></i>
                        </div>
                        <button className="btn">Comprar</button>
                    </div>

                    <div className="product-grid-card">
                        <span className="label hot">Hot</span>
                        <img src={Prod7} alt="notebook" />
                        <p className="category">Categoria</p>
                        <h3 className="product-name">Notebook core i3 15"</h3>
                        <p className="product-price">R$ 3.799,90</p>
                        <div className="rating-box">
                            <i className="fas fa-star"><FaStar /></i>
                            <i className="fas fa-star"><FaStar /></i>
                            <i className="fas fa-star"><FaStar /></i>
                            <i className="fas fa-star"><FaStar /></i>
                            <i className="fas fa-star"><FaRegStar /></i>
                        </div>
                        <button className="btn">Comprar</button>
                    </div>

                    <div className="product-grid-card">
                        <span className="label hot">Hot</span>
                        <img src={Prod8} alt="Mouse gamer" />
                        <p className="category">Categoria</p>
                        <h3 className="product-name">Mouser Gamer T3</h3>
                        <p className="product-price">R$ 299,49</p>
                        <div className="rating-box">
                            <i className="fas fa-star"><FaStar /></i>
                            <i className="fas fa-star"><FaStar /></i>
                            <i className="fas fa-star"><FaStar /></i>
                            <i className="fas fa-star"><FaStar /></i>
                            <i className="fas fa-star"><FaRegStar /></i>
                        </div>
                        <button className="btn">Comprar</button>
                    </div>
                </div>
            </div>
            {/** Newsletter */}
            <div className="newsletter-container">
                <h2>Assine a nossa <span>NewsLetter</span></h2>
                <form action="">
                    <input type="email" name="email" id="email" placeholder="Digite o seu e-mail" />
                    <input type="submit" className="btn btn-half" value="Assinar" />
                </form>
                <div className="social-media">
                    <i className="fab fa-facebook-f"><FaFacebookF /></i>
                    <i className="fab fa-instagram"><FaInstagram /></i>
                    <i className="fab fa-twitter"><FaTwitter /></i>
                    <i className="fab fa-pinterest-p"><FaPinterestP /></i>
                </div>
            </div>




        </>
    )
}
export default Home;