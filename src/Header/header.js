import logo from "./img/logo.svg"
import search from "./img/search.svg"
import log from "./img/log-in.svg"
import { useState } from "react";

function Header() {
    const [wi, setWi] = useState(window.screen.availWidth)

    window.addEventListener("resize", () => {
        setWi(window.screen.availWidth)
    })

    return (
        <header class="header">
            <div class="header__top-block">
                <div class="header__logo">
                    <img src={logo} alt="Логотип" />
                </div>
                {wi >= 1024 &&
                    <nav class="header__links">
                        <a href="" class="header__links-item">Продукция</a>
                        <a href="" class="header__links-item">Материалы</a>
                        <a href="" class="header__links-item">О нас</a>
                        <a href="" class="header__links-item">Контакты</a>
                    </nav>
                }
                {wi >= 576 &&
                    <div class="header__icons">
                        <div class="header__search">
                            <img src={search} alt="Кнопка поиска" />
                        </div>
                        <div class="header__log-in">
                            <img src={log} alt="Кнопка входа в личный кабинет" />
                        </div>
                    </div>
                }
            </div>
            {wi < 1024 &&
                <div class="header__bottom-block">
                    {wi >= 576 ? (
                        <nav class="header__links">
                            <a href="" class="header__links-item">Продукция</a>
                            <a href="" class="header__links-item">Материалы</a>
                            <a href="" class="header__links-item">О нас</a>
                            <a href="" class="header__links-item">Контакты</a>
                        </nav>
                    ) : (
                        <>
                            <div class="header__burger">
                                <div class="header__burger-button">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <div class="header__icons">
                                <div class="header__search">
                                    <img src={search} alt="Кнопка поиска" />
                                </div>
                                <div class="header__log-in">
                                    <img src={log} alt="Кнопка входа в личный кабинет" />
                                </div>
                            </div>
                        </>
                    )}
                </div>
            }
        </header>
    );
}

export default Header;
