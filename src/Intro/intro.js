import img from "./img/main.webp"


function Intro() {
    return (
        <section class="intro">
            <h2 class="intro__title">
                Простые вещи.<br /> Из бумаги
            </h2>
            <p class="intro__description">
                Бума́га (предположительно от итал. bombagia, первоисточником же считается иранский) — волокнистый материал с минеральными добавками.
            </p>
            <button class="intro__button">Каталог</button>
            <div class="intro__img">
                <img src={img} alt="Элемент оформления" />
            </div>
        </section>
    );
}

export default Intro;