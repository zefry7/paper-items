import i1 from "./img/item-1.webp"
import i2 from "./img/item-2.webp"
import i3 from "./img/item-3.webp"
import im from "./img/main-item.webp"

function Result() {
    const mass = [
        {
            img: i1,
            name: "V.1",
            desc: "Результат вашего обучения"
        },
        {
            img: i2,
            name: "V.2",
            desc: "Результат вашего обучения"
        },
        {
            img: i3,
            name: "V.3",
            desc: "Результат вашего обучения"
        },
    ]

    return (
        <section class="result">
            <div class="result__row-items">
                {mass.map(value => (
                    <div class="result__item">
                        <div class="result__item-img">
                            <img src={value.img} alt="Пример работы" />
                        </div>
                        <div class="result__item-text">
                            <h5 class="result__item-name">{value.name}</h5>
                            <p class="result__item-label">{value.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div class="result__main">
                <div class="result__main-img">
                    <img src={im} alt="Пример работы" />
                </div>
                <div class="result__main-text">
                    <h4 class="result__main-name">Максимальная белизна</h4>
                    <p class="result__main-description">
                        Для повышения белизны, гладкости и мягкости в состав бумажной массы вводят белые минеральные вещества: мел, тальк, каолин и др. Эта операция называется наполнением. <br /><br />
                        Отлив бумажного листа осуществляют на бумагоделательной машине, важнейшей частью которой является непрерывно движущаяся (как транспортер) металлическая или капроновая сетка.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Result;