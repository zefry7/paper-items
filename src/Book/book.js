import book from "./img/book.webp"
import logo from "./img/logo.svg"
import m1 from "./img/m1.svg"
import m2 from "./img/m2.svg"
import m3 from "./img/m3.svg"
import m4 from "./img/m4.svg"

function Book() {
    const mess = [
        {
            img: m1
        },
        {
            img: m2
        },
        {
            img: m3
        },
        {
            img: m4
        },
    ]

    return (
        <section class="book">
            <div class="book__main">
                <div class="book__img">
                    <img src={book} alt="Скетчбук" />
                </div>
                <h2 class="book__title">Simple скетчбук</h2>
                <p class="book__text">80 листов, твердая обложка, бумага  Fabriano 200 г/м2. Подойдет и для графики и для акварели. Для самых смелых творческих замыслов!</p>
                <button class="book__button">Купить</button>
            </div>
            <div class="book__line">
                <div class="book__name">
                    <a href="">
                        <img src={logo} alt="Логотип" />
                    </a>
                </div>
                <ul class="book__messages">
                    {mess.map(value => (
                        <li class="book__mes-item">
                            <img src={value.img} alt="" />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Book;