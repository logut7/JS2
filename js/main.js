const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];
//Функция для формирования верстки каждого товара
const renderProduct = (title, price, img='https://placehold.it/200x150') => {
    return `<div class="product-item">
                <img src="${img}">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);

 // Урок2 Задание 1. Добавьте пустые классы для корзины товаров и элемента корзины товаров. Продумайте, какие методы понадобятся для работы с этими сущностями.
 addToBasket(); //пустой метод добавить в корзину
 delFromBasket();//пустой метод удалить из корзины


 class Basket {
    addGoods() {

    }
    removeGoods() {

    }
    changeGoods() {

    }
}

// Тройки мне будет достаточно, т.к. понимаю я не много, а режим обучения для меня в данный момент достаточно интенсивный.
