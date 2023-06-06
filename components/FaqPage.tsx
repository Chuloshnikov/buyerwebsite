import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const FaqPage = () => {
    return (
        <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Як зробити замовлення?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Для оформлення замовлення – напишіть у будь-який месенджер
                        із зазначенням посилання, кольору, розміру, кількості.
                        Якщо немає посилання – для пошуку можна надіслати фото.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Як оплатити?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Після розрахунку вартості замовлення - передоплата у розмірі 100% на рахунок ФОП по реквізитам.      
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Скільки чекати?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Після викупу замовлення терміни доставки авіа 10-14 робочих днів, море 20-30 робочих днів
                        (у період розпродажів/свят, або завантаженість магазину - терміни доставки можуть збільшуватися).                                   
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Чи можна прискорити час очікування?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Терміни можна прискорити, замовив експрес доставку (ціна доставки залежить від магазину).   
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Що поже впливати на терміни доставки?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        На терміни доставки також впливає швидкість проходження замовлень на митниці.   
                    </p>
                   
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Яка вартість доставки?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <ol>
                        <li>
                            США - 15$ 1 кг
                        </li>
                        <li>
                            Італія, Іспанія, Португалія, Франція - 7,5€ 1 кг
                        </li>
                        <li>
                            Польща - 5,5€ 1 кг
                        </li>
                        <li>
                            Британія - 7£ 1 кг
                        </li>
                    </ol>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Перевірка замовлення.
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Додатково можна замовити перевірку замовлення (рекомендується): Америка 6$, Європа 5€, Британія 5£.   
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Відправка та отримання.
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Коли замовлення вже в Україні - я уточнюю у Вас потрібні для відправки дані 
                    (відправка новою поштою), а саме - ПІБ, моб номер, місто, номер відділення.    
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Cтрахування посилки при відправці Новою Поштою.
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        При відправці, оціночна вартість посилки вказується на ту сумму, на яку було оформлене замовлення.         
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Перевірка товару при отриманні.
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        При отриманні на пошті оглядайте вашу посылку, і, 
                        якщо в ній чогось не вистачає/побачили дефект чи це не ваша посилка одразу складайте акт-претензію.           
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Умови обміну/повернення   
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        При умові якщо Вам не підійшов розмір - обмін можливий за ваш рахунок 
                        якщо ми встигаємо зробити обмін у строки  
                        (звичайно це від 14 до 30 днів з моменту отримання замовлення),
                        чи, як варіант, допомагаю з продажем товару.
                        Вартість послуги повернення 25$, доставка оплачується окремо.
                        Строки повернення 10-20 робочих днів.
                        Враховуйте, що нове замовлення буде оформлене коли магазин отримає повернення та обробить обмін, це + до строків.           
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Відповідальність постачальника.  
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Якщо розмір/стиль/колір був замовлений невірно з моєї провини, я обмінюю товар за свій рахунок.             
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Правила повернення при виявенні браку або дефакті товару. (якщо не була замовлена послуга перевірки товару). 
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Якщо ваше замовлення прибуло з дефектами або ви отримали не те що замовляли, наприклад магазин надіслав не той колір чи розмір (і не була замовлена послуга перевірки замовлення) - я веду листування з магазином і ми вирішуємо це питання та або у разі дефекту обмінюємо товар на такий же, але без дефектів (якщо це вдається), 
                        якщо ні - для обміну інколи потребується фізичне повернення товару з дефектом, відправлення у такому разі сплачуєте Ви, або ж обмінюємо на потрібний розмір чи колір у випадку невірного кольору/розміру.
                        Доставку також сплачуєте Ви.             
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Якщо товар був втрачений до приїзду в Україну. 
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        У випадку, якщо замовлення було втрачене до моменту відправки Вам новою  
                        поштою (окрім ситуацій які не підлягають моєму контролю, такі як війна, 
                        стихійне лихо..) - ми вирішуємо це питання особисто, якщо можливо 
                        перезамовити - я перезамовляю, якщо ні - я повертаю повну суму замовлення Вам на картку.       
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Податки та мито при проходженні товару митницею. 
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        UPD Якщо Ваше замовлення перевищує суму 150€ і підпадає під  
                        перевірку митницею, Ви зобов’язані  сплатити рахунок, який виставить митниця.      
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Якщо замовлення було скасоване магазином?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        У випадку, якщо магазин скасовує ваше замовлення більш ніж через 11 днів після його оформлення, 
                        або ж відбулася втрата вашого замовлення  та магазин повернув кошти за нього, 
                        у обох випадках повернення відбувається по курсу покупки (тобто той курс, що нижче), 
                        тому будь ласка враховуйте це, повернення відбуватиметься саме по цьому курсу.      
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Вртість послуг.
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Комісія за викуп складає 10%, але не менше 5$
                        Для замовлень понад 300$ діє знижена комісія 8%      
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Магазини, замовлення в яких може впривати на збільшення комісії.
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Комісія за викуп складних магазинів складає 15%, наприклад, Ralph Lauren, 
                        Tiffany & Co, Adidas US, Net-a-Porter US, Uniqlo US      
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Податки країни постачальника.
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Також для деяких магазинів нараховується податок штату до 9%    
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>

    );
}

export default FaqPage;