import i1 from "./img/item-1.webp"
import i2 from "./img/item-2.webp"
import i3 from "./img/item-3.webp"
import i4 from "./img/item-4.webp"

import ic1 from "./img/icon-1.svg"
import ic2 from "./img/icon-2.svg"
import ic3 from "./img/icon-3.svg"
import ic4 from "./img/icon-4.svg"

function Material() {
    const mass = [
        {
            img: i1,
            name: "Упаковка",
            count: "Тираж: от 50 штук",
            desc: "Сделано из крафт-бумаги или плотного картона. Упаковки имеют различные формы и расцветки, изготовим форму под заказ."
        },
        {
            img: i2,
            name: "Пакеты",
            count: "Тираж: от 200 штук",
            desc: "С прямоугольным дном. От 10 см до 60 см по высоте. Материалы: картон, крафт-бумага. Различные расцветки и дизайн."
        },
        {
            img: i3,
            name: "Кейсы",
            count: "Тираж: от 30 штук",
            desc: "Подойдет для документов и других бумаг. Различные расцветки, размеры и плотность. Материал: прессованная бумага."
        },
        {
            img: i4,
            name: "Другие изделия ",
            count: "Тираж: от 100 штук",
            desc: "Нестандартные упаковки, кейсы и другие изделия различных размеров и конфигураций. Изготовим в кратчайшие сроки."
        },
    ]

    const icons = [ic1, ic2, ic3, ic4]

    return (
        <seciton class="material">
            <div class="material__content">
                {mass.map(value => (
                    <div class="material__item">
                        <div class="material__img">
                            <img src={value.img} alt="Типы изделий" />
                        </div>
                        <div className="material__text">
                            <h5 class="material__name">{value.name}</h5>
                            <p class="material__type">{value.count}</p>
                            <p class="material__description">{value.desc}</p>
                            <a href="" class="material__more">Подробнее</a>
                        </div>
                    </div>
                ))}
            </div>
            <div class="material__icons">
                {icons.map(value => (
                    <div class="material__icons-item">
                        <img src={value} alt="Фирма" />
                    </div>
                ))}
            </div>
        </seciton>
    );
}

export default Material;