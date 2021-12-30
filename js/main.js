let checkboxes = document.querySelectorAll('input'), //получаю чекбоксы
    pizzaAll = document.querySelectorAll('.current-pizza-item'),//получаю картинки пиццы
    sum = document.getElementById('total'),//получаю сумму заказа
    drunk = document.getElementById('flex-wrapper'),//получаю область с бутылками
    cost = document.querySelectorAll('.summa'),//получаю стоимость бутылок
    btnOpen = document.getElementById('btn__open'),
    btnClose = document.getElementById('close__modal'),
    modal = document.getElementById('modal-wrapper'),
    overlay = document.getElementById('shadow'),
    modalWindow = document.getElementById('window'),
    order = document.getElementById('order'),
    body = document.body;

let total = parseInt(sum.innerHTML);
const orderArr = [];
const drinksArr = [];

// Работа с ЧЕКБОКСАМИ
const deleteCheked = () => {
    for (let item of checkboxes){
        item.removeAttribute('checked');
    }
}
deleteCheked();

checkboxes.forEach(function(item){
    item.addEventListener('click',function(event){
        event.target.toggleAttribute('checked');
        if(event.target.checked){
            total += parseInt(event.target.value);
            sum.innerHTML = total;
        }else{
            total -= parseInt(event.target.value);
            sum.innerHTML = total;
        }
    });       
});
// Конец Работы С ЧЕКБОКСАМИ

// Работа с элементами Пиццы
const deletePizza = () =>{
    for(let i = 2; i < pizzaAll.length; i++){
        pizzaAll[i].classList.remove('current-pizza-item');
    }
}
deletePizza();

const giveElems = () =>{
    for(let i = 0; i < checkboxes.length; i++){
        checkboxes[i].addEventListener('click', function(){
            pizzaAll[i+2].classList.toggle('current-pizza-item');
        })
    }
}
giveElems();
// Конец работы с Элементами Пиццы 

// Работа с бутылками
drinks = drunk.children;

const deleteWater = () =>{
    for(let drink of drinks){
        drink.classList.remove('active');
    }
}
deleteWater();

const addClass = () =>{
    drunk.addEventListener('click', function(event){
        event.target.parentElement.classList.toggle('active');
        if(event.target.classList.contains('select-drink-item')){
            event.target.classList.toggle('active');
        }
        if(event.target.parentElement.classList.contains('active')&&event.target.parentElement.classList.contains('select-drink-item')){
            total += parseInt(cost[0].innerHTML);
            sum.innerHTML = total;
        }else if(event.target.parentElement.classList.contains('select-drink-item')){
            total -= parseInt(cost[0].innerHTML);
            sum.innerHTML = total;
        }
    });
}
addClass();
// Конец работы с бутылками

// Работа с МОДАЛКОЙ
btnOpen.addEventListener('click', function(){
    modal.classList.add('on');
    modalWindow.classList.add('open');
    body.classList.add('hidden');
    checkboxes.forEach(function(item){
        if(item.checked){
            orderArr.push((item.parentElement.textContent).trim());
        }
    });
    for(let drink of drinks){
        if(drink.classList.contains('active')){
            drinksArr.push(drink.dataset.name);
        }
    }
    order.innerHTML = `Пиццу с ${orderArr} и ${drinksArr}. С вас ${total}₽`;
});

overlay.addEventListener('click', function(){
    modal.classList.remove('on');
    modalWindow.classList.remove('open');
    body.classList.remove('hidden');
});

btnClose.addEventListener('click',function(){
    modal.classList.remove('on');
    modalWindow.classList.remove('open');
    body.classList.remove('hidden');
});
// Закончил работу с МОДАЛКОЙ




// let total = document.getElementById('total'); // получил общую цену

// // чекбоксы 
// let checkboxes = document.querySelectorAll('input[type = "checkbox"]'),
//     pizzaDetail = [];

// for(let checkbox of checkboxes){
//     checkbox.removeAttribute('checked');
// }

// checkboxes.forEach(item => {
//     item.addEventListener('click', () => {
//         item.toggleAttribute('checked');
//         let ingredient = item.parentNode.innerText;
//         if( item.hasAttribute( 'checked' ) ){
//             total.innerHTML = +total.innerHTML + +item.value;
//             pizzaDetail.push(ingredient);
//         }else{
//             total.innerHTML = total.innerHTML - item.value;
//             pizzaDetail.splice(pizzaDetail.indexOf(ingredient), 1);      }
//     });
// });
// // конец с чекбоксами

// // напитки
// let drinksWrap = document.getElementById('flex-wrapper'),
//     namesOfDrinks = [];

// for(let drink of drinksWrap.children){
//     drink.classList.remove('active');
// }

// drinksWrap.addEventListener('click', e =>{
//     let drink = e.target.closest('.select-drink-item');
//     drink.classList.toggle('active');
//     if( drink.classList.contains('active')){
//         namesOfDrinks.push(drink.dataset.name);
//         let sumOfDrinks = +drink.querySelector('.summa').innerHTML.slice(0, -1);
//         total.innerHTML = +total.innerHTML + +sumOfDrinks;
//     }else{
//         namesOfDrinks.splice(namesOfDrinks.indexOf(drink.dataset.name), 1);
//         total.innerHTML = total.innerHTML - 95;
//     }
// })
// // конец с напитками 

// // пицца

