import logo from "./img/logo.svg"
import arrowUp from "./img/arrow-up.svg"
import { useState } from "react";


function Header() {
    const [wi, setWi] = useState(document.body.clientWidth)
    const [sc, setSc] = useState(0)
    const [search, setSearch] = useState(false)
    const [burger, setBurger] = useState(false)
    const [burgerButton, setBurgerButton] = useState("header__burger-button")

    window.addEventListener("resize", () => {
        setWi(document.body.clientWidth)
    })

    window.addEventListener("scroll", () => {
        setSc(window.scrollY)
    })

    const burgerMenu = () => {
        if (burger == false) {
            setBurger(true)
            setBurgerButton("header__burger-button header__burger-button_active")
            document.getElementById("body").style.overflow = "hidden"
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        } else {
            setBurger(false)
            setBurgerButton("header__burger-button")
            document.getElementById("body").style.overflow = "visible"
        }
    }

    return (
        <header class="header">
            <div class="header__top-block">
                <div class="header__logo">
                    <a href="">
                        <img src={logo} alt="Логотип" />
                    </a>
                </div>
                {wi >= 1024 && search == false &&
                    <nav class="header__links">
                        <p class="header__links-item" data-section="result" onClick={scrollSection}>Продукция</p>
                        <p class="header__links-item" data-section="material" onClick={scrollSection}>Материалы</p>
                        <p class="header__links-item" data-section="book" onClick={scrollSection}>О нас</p>
                        <p class="header__links-item" data-section="book" onClick={scrollSection}>Контакты</p>
                    </nav>
                }
                {wi >= 576 &&
                    <div class="header__icons">
                        <div class="header__search" onClick={() => setSearch(true)}></div>
                        {search == true &&
                            <>
                                <input type="text" class="header__search-line" placeholder="Найти" maxLength="40"></input>
                                <div className="header__search-close" onClick={() => setSearch(false)}></div>
                            </>
                        }
                        <div class="header__log-in">
                        </div>
                    </div>
                }
            </div>
            {wi < 1024 &&
                <div class="header__bottom-block">
                    {wi >= 576 ? (
                        <nav class="header__links">
                            <p class="header__links-item" data-section="result" onClick={scrollSection}>Продукция</p>
                            <p class="header__links-item" data-section="material" onClick={scrollSection}>Материалы</p>
                            <p class="header__links-item" data-section="book" onClick={scrollSection}>О нас</p>
                            <p class="header__links-item" data-section="book" onClick={scrollSection}>Контакты</p>
                        </nav>
                    ) : (
                        <>
                            <div class={burgerButton} onClick={burgerMenu}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            {burger == true &&
                                <div class="header__burger-content">
                                    <p class="header__links-item" data-section="result" onClick={(event) => { scrollSection(event); burgerMenu() }}>Продукция</p>
                                    <p class="header__links-item" data-section="material" onClick={(event) => { scrollSection(event); burgerMenu() }}>Материалы</p>
                                    <p class="header__links-item" data-section="book" onClick={(event) => { scrollSection(event); burgerMenu() }}>О нас</p>
                                    <p class="header__links-item" data-section="book" onClick={(event) => { scrollSection(event); burgerMenu() }}>Контакты</p>
                                </div>
                            }
                            <div class="header__icons">
                                <div class="header__search" onClick={() => setSearch(true)}></div>
                                {search == true &&
                                    <>
                                        <input type="text" class="header__search-line" placeholder="Найти" maxLength="40"></input>
                                        <div className="header__search-close" onClick={() => setSearch(false)}></div>
                                    </>
                                }
                                <div class="header__log-in">
                                </div>
                            </div>
                        </>
                    )}
                </div>
            }
            {sc >= 300 &&
                <div class="header__arrow-up" onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    })
                }}>
                    <img src={arrowUp}></img>
                </div>
            }
        </header>
    );
}

function scrollSection(e) {
    e.preventDefault();
    let att = e.target.getAttribute("data-section")
    let sect = document.getElementsByClassName(att)[0]

    let scroll = sect.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
        top: scroll,
        behavior: "smooth"
    })
}



export default Header;
