// let num = "rr"
// if (num === "green") {
//     console.log("ot")
// }
// else if ( num === "red"){
//     console.log("tokto")
// }
// else if ( num === "yellow"){
//     console.log("dayar")
// }
// else {
//     console.log("koiem")
// }


// let num = 11
// if (num > 13){
//     console.log("tuura")
// }
// else if (num === 13){
//     console.log("tuura emes")
// }
// else {
//     console.log("kichine")
// }

// Так сан, жуп сан аныкто
// let num = 1221
// if (num % 2 ){
//     console.log("tak")
// }
// else {
//     console.log("jup")
// }

// console.log(true || true || true || true)
// console.log(true && true && true && true || true)

// let num = 20
// if (num >= 30 && num <= 20){
//     console.log(true)
// }
// else  {
//     console.log(false)
// }


// let age = 19
// let prava = true
// if (age >= 17 && prava === true){
//     console.log("bolot")
// }
// else {
//     console.log("bolboit")
// }

// let kalem = false
// let albom = false
// let ochur = false
// if (kalem === true && albom === true && ochur === true) {
//     console.log("tarta alam")
// }
// else if (kalem === true || albom === true || ochur === true){
//     console.log("eptese bolot")
// }
// else{
//     console.log("tarta albaisyn")
// }


// 1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.
// let a = 10
// if (a === 10){
//     console.log("verno")
// }
// else{
//     console.log("ne verno")
// }
// function task (a){
//     if (a === 10){
//         console.log('verno')
//     }else{
//         console.log('ne verno')
//     }
// }
// task(10)
/////////////////////////////////////////////////////////////////
// 2. Вам даны две переменные a=50, b=100. Составьте условие, по которому в консоль будет выводиться
// 'a больше b', 'a меньше b'.
// let a = 50, b = 100
// if (a > b){
//     console.log('a больше b')
// }
// else {
//     console.log('a меньше b')
// }
// function task2(a,b){
//     if (a < b){
//         console.log('a меньше b')
//     }else{
//         console.log('a больше b')
//     }
// }
// task2(50, 100)
// 3. Вам дана переменная a=-2. Составьте условие, по которому в консоль будет выводиться 'positive'
// - если число больше 0, 'равно' если число равно 0, "negative" если число меньше 0.
// let a = -2
//     if (a > 0){
//         console.log('positive')
//     }
//     else if (a === 0){
//         console.log('равно')
//     }
//     else {
//         console.log("negative")
//     }
// function task3(a){
//     if (a < 0){
//         console.log("negative")
//     }else if (a === 0){
//         console.log('равно')
//     }else if (a > 0){
//         console.log('positive')
//     }else{
//         console.log('404')
//     }
// }
// task3(2)
/////////////////////////////////////////////////////////
// 4. Вам дана переменная number=45. Составьте условие, по которому будет выводиться в консоль
// "Четное число", "Нечетное число".
// let number = 45
// if (number % 2 === 0){
//     console.log("Четное число")
// }
// else {
//     console.log("Нечетное число")
// }
// let task4 = function (number){
//     if(number % 2 === 0){
//         console.log('Четное число')
//     }else{
//         console.log('Нечетное число')
//     }
// }
// task4(46)
///////////////////////////////////////////////////////////////
// 5. Вам даны две переменные a=10, b=2. Составьте условие, по которому, остаток деления a на b,
// будет выводиться консоль "Четное число", "Нечетное число".
// let a = 10, b = 2
// if (a % b === 0){
//     console.log("Нечетное число")
// }
// else{
//     console.log("Четное число")
// }
// function task5(a,b){
//     if(a % b === 0){
//         console.log("Четное число")
//     }else{
//         console.log("Нечетное число")
//     }
// }
// task5(10,3)
/////////////////////////////////////////////////////////////////
// 6. Вам дана переменная s. Составьте условие, по которому в консоль будет выводится тип этой
// переменной - "boolean", "number", "string".
// let s = 3
// console.log(typeof s)
// function task6(s){
//     console.log(typeof s)
// }
// task6(3456)
/////////////////////////////////////////////////////////////
// 10. Вам даны переменные a , b. Если переменная a больше 4-х и меньше 10-ти,
// или переменная b больше или равна 7-ми и меньше 17-ти, то выведите 'Верно',
// в противном случае выведите 'Неверно'
// let a = 6 , b = 10
// if (a > 4 && 10 > a || b >= 7 && b < 17){
//     console.log('verno')
// }
// else{
//     console.log('ne verno')
// }
// function task7(a,b){
//     if(a > 4 && a < 10 || b > 7 && b < 17){
//         console.log('verno')
//     }else{
//         console.log('ne verno')
//     }
// }
// task7(10,3)
////////////////////////////////////////////////////////////
// 11. Вам дана переменная month. В ней лежит какое-то число из интервала от
// 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето,
// весна, осень).
// let month = 13
// if (month === 12 || month <= 2){
//     console.log('kysh')
// }
// else if (month >= 3 && month <= 5){
//     console.log('zim')
// }
// else if (month >= 6 && month <= 8){
//     console.log('leto')
// }
// else if (month >= 9 && month <= 12){
//     console.log('osen')
// }
// else{
//     console.log('404')
// }
// function task8(month){
//     if(month === 12 || month <= 2){
//         console.log('kysh')
//     }else if(month >= 3 && month <= 5){
//         console.log('zim')
//     }else if(month >= 6 && month <= 8){
//         console.log('leto')
//     }else if(month >= 9 && month <= 12){
//         console.log('osen')
//     }else{
//         console.log('404')
//     }
// }
// task8(11)
// 12. Вам дана переменная day. В ней лежит какое-то число из интервала от 1
// до 31. Определите в какую декаду месяца попадает это число (в первую, вторую
// или третью).
// let day = 31
// if ( day > 0 && day < 11){
//     console.log(1)
// }
// else if ( day > 10 && day < 21){
//     console.log(2)
// }
// else if (day > 20 && day < 32){
//     console.log(3)
// }else{
//     console.log(404)
// }
// function task9(day){
//     if(day > 0 && day < 11){
//         console.log('1')
//     }else if(day > 10 && day < 21){
//         console.log('2')
//     }else if(day > 20 && day < 32){
//         console.log('3')
//     }else{
//         console.log('404')
//     }
// }
// task9(3)
// 13. Вам дана переменная a='12345'. Проверьте, что первым символом этой
// переменной является цифра 1, 2 или 3. Если это так – выведите ‘да’, в
// противном случае выведите ‘нет’.
// let a = '12345'
// if (a [0] === "1" || a [0] === "2" || a [0] === "3"){
//     console.log("da")
// } else{
//     console.log("net")
// }
// let a = function (a){
//     if(a [0] === '1' || a [0] === '2' || a [0] === '3'){
//         console.log('da')
//     }else{
//         console.log('net')
//     }
// }
// a('123456')
///////////////////////////////////////////////////////
// let jelaya = true
// let noutbuk = false
// let akcha = true
// if (jelanya === true && noutbuk === true && akcha === true) {
//     console.log("aitige okuim")
// }
// else if (jelane === true && noutbuk === false && akcha === true){
//     console.log("2 aidan kin ")
// }
// else if (jelanya === false && noutbuk === true && akcha === true){
//     console.log("okup kalarmyn")
// }
// else{
//     console.log("404")
// }

////////////////////////////////////////////////
// let myAge = 81
// let minAge = 15
// let maxAge = 60
// if (myAge >= minAge && myAge < maxAge){
//     console.log('okyi alat')
// }else if (myAge < minAge ){
//     console.log('poka net')
// }else{
//     console.log('bolboit')
// }
// let myAge =  20
// let minAge = 18
// let isAgeValid = myAge >= minAge ? "bolot" : 'bolboit';
// console.log(isAgeValid);

/////////////////////////////////////////////////////////
// 1. Вам дана переменная str = 'Nevis ITDB TECH'. Выведите в консоль длину первого слова.
// let str = 'Nevis ITDB TECH'
// console.log(str.slice(0,5).length)

// function chekTask (a,b){
//     console.log(chekTask.slice(0,5).length)
// }
// chekTask()
// 2. Вам дана переменная str = 'Максимально УЖАСНО'. Выведите в консоль слово УЖАСНО,
// let str = 'Максимально УЖАСНО'
// console.log(str.slice(-6))

// 3. Вам дана переменная str = 'максимально УЖАСНО'. Выведите в консоль слово максимально,
// только верхним регистром.
// let str = 'максимально УЖАСНО'
// console.log(str.slice(0,11).toUpperCase())

// 6. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль 'мально Ужасно',
// используя метод slice.
// let str = 'Максимально Ужасно'
// console.log(str.slice(5))

// 7. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль букву У, использую метод
// charAt.
// let str = 'Максимально Ужасно'
// console.log(str.charAt(12))

// 8. Вам даны переменные str = 'Максимально', str2 = 'Ужасно'. Выведите в консоль соединенные
// строки, используя метод concat.
// let str = 'Максимально', str2 = 'Ужасно'
// console.log(str.concat(str2))

// 10. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль "встречается более 1
// раза", если букв 'a' встречается более 1 раза, иначе "встречается менее одного раза"
// let str = "Максимально Ужасно"
// if (str.includes('а')){
//     console.log('встречается более 1 раза')
// }else{
//     console.log('встречается менее одного раза')
// }

// 11. Вам дана переменная str = 'макСИМАЛЬНО ужаСНО'. Выведите в консоль первую букву
//  в верхний регистр.
// let str = 'макСИМАЛЬНО ужаСНО'
// console.log(str[0].toUpperCase())

// 12. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого вхождения
// буквы а.
// let str = 'Максимально Ужасно'
// console.log(str.indexOf('а'))
// 13. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого последнего
// буквы о.
// let str = 'Максимально Ужасно'
// console.log(str[str.length -8])

// 14. Вам дана переменная str = 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами
// (через substr, substring, slice) и выведите в консоль.
// let str = 'aaa bbb ccc'
// console.log(str.slice(4,7))
// console.log(str.slice(0,4))
// console.log(str.slice(7,11).trim(str))

////////////////////////////////////////////////////////

//               OPERATORS - символы
// const bekaPoint = 2
// const aizaPoint = 5
// const naziPoint = 4
// let result = bekaPoint + aizaPoint + naziPoint;
// console.log(result);
//
// result = naziPoint - bekaPoint;
// console.log(result);
//
// result = bekaPoint * aizaPoint;
// console.log(result);
//
// result = naziPoint % bekaPoint;
// console.log(result);
//
// result = aizaPoint ** naziPoint;
// console.log(result)
//
// result = aizaPoint / naziPoint;
// console.log(result)
// let num = 1920
// console.log(Math.ceil(num / 100))

// x is a boolean
// let x = false;
// // y is an object
// let y = new Boolean(false);
//
// document.getElementById("demo").innerHTML = typeof x + "<br>" + typeof y;
