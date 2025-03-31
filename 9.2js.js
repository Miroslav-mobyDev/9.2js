//Задание 1
let i = 1;
while(i <= 10){
    console.log(i++)
}
//Задание 2
let j = 1;
while(j <= 10){
    if (j === 5){
        j++;
        continue;
    }
    console.log(j);

    if(j === 8){
        break
    }
    j++;
}

//Задание 3
let y = 1;
do{                    //Цикл do-while выполнится хотя бы однажды даже если условие ложное , а если использовать while то при ложном условии ничего не выведется
    console.log(y);
    y++;
}
while(y <= 5);
//Задание 4
while(true){
    t = prompt("Введите 10 ")
    if(t === "10"){
        break;
    }
}
//Задание 5
for(let v=1;v<10;v++){
console.log(v)
}
//Задание 6
b=0;
for(;;){
b++
if (b > 100){
    break;
}
console.log(b)
}
//Задание 7
let numbers = [1,2,3,4,5]
for(let c=0 ;c <= numbers.length; c++ ){
console.log(c);
}
//Задание 8
//for используется когда мы знаем сколько итераций должно быть чтобы получить результат а while для того случая когда мы не знаем сколько итераций должно быть
//Пример 1                                                            
/*while(true){
    t = prompt("Введите 10 ")
    if(t === "10"){
        break;
    }
}*/
/**Пример 2
 * for(let v=1;v<10;v++){
console.log(v)
}
 */
//Задание 9
for(let x=10;x>=1;x--){
    console.log(x);
}
//Задание 10
for(let o=1;o<=10;o++ ){
    if(o % 2 !== 0){
        continue;
    }
    console.log(o)
}