
//                              TERNARNYI OPERATOR
// const myAge = 20
// const minAge = 18
// const isAgeValid = myAge >= minAge ? "alyndy" : "alynbady";
// console.log(isAgeValid);

// const beka = prompt('hello Beka')
// console.log(beka)
//  alert('hello')
///////////////////////////////////////////////////////////////////////////////////

// 1. Вам дана переменная str = 'Nevis ITDB TECH'. Выведите в консоль длину первого слова.
// let str = 'Nevis ITDB TECH'
// console.log(str.slice(0,5).length)
// function task(str){
//     console.log(str.slice(0,5).length)
// }
// task('Nevis ITDB TECH')
                                                   // ФУНКЦИЯ
// function chekTask (a,b){
//     console.log(chekTask.slice(0,5).length)
// }
// chekTask()
// 2. Вам дана переменная str = 'Максимально УЖАСНО'. Выведите в консоль слово УЖАСНО,
// let str = 'Максимально УЖАСНО'
// console.log(str.slice(-6))
                                                     // ФУНКЦИЯ
// function task1(str){
//     console.log(str.slice(-6))
// }
// task1('Максимально УЖАСНО')
// 3. Вам дана переменная str = 'максимально УЖАСНО'. Выведите в консоль слово максимально,
// только верхним регистром.
// let str = 'максимально УЖАСНО'
// console.log(str.slice(0,11).toUpperCase())
                                                     // ФУНКЦИЯ
// function task2(str){
//     console.log(str.slice(0,11).toUpperCase())
// }
// task2('максимально УЖАСНО')
// 6. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль 'мально Ужасно',
// используя метод slice.
// let str = 'Максимально Ужасно'
// console.log(str.slice(5))
                                                     // ФУНКЦИЯ
// function task3(str){
//     console.log(str.slice(5))
// }
// task3('Максимально Ужасно')
///////////////////////////////////////////////
// 7. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль букву У, использую метод
// charAt.-indexin korsotup beret
// let str = 'Максимально Ужасно'
// console.log(str.charAt(12))
                                                     // ФУНКЦИЯ
// function task4(str){
//     console.log(str.charAt(12))
// }
// task4('Максимально Ужасно')
///////////////////////////////////////
// 8. Вам даны переменные str = 'Максимально', str2 = 'Ужасно'. Выведите в консоль соединенные
// строки, используя метод concat.
// let str = 'Максимально', str2 = 'Ужасно'
// console.log(str.concat(str2))
                                                   // ФУНКЦИЯ
// function task5(str,str2){
//     console.log(str.concat(str2))
// }
// task5('Максимально','Ужасно')
//////////////////////////////////////////////////////
// 10. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль "встречается более 1
// раза", если букв 'a' встречается более 1 раза, иначе "встречается менее одного раза"
// let str = 'Максимально Ужасно'
// if (str.includes('а')){
//     console.log('встречается более 1 раза')
// }else{
//     console.log('встречается менее одного раза')
// }
                                                   // ФУНКЦИЯ
// function task6(str){
//     if(str.includes('а')){
//         console.log(' встречается более 1 раза')
//     }else{
//         console.log('встречается менее одного раза')
//     }
// }
// task6('Максимально Ужасно')
/////////////////////////////////////////////////////////////
// 11. Вам дана переменная str = 'макСИМАЛЬНО ужаСНО'. Выведите в консоль первую букву
//  в верхний регистр.
// let str = 'макСИМАЛЬНО ужаСНО'
// console.log(str[0].toUpperCase())
                                                   // ФУНКЦИЯ
// function task7(str){
//     console.log(str[0].toUpperCase())
// }
// task7('макСИМАЛЬНО ужаСНО')
////////////////////////////////////////////////////////////
// 12. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого вхождения
// буквы а.
// let str = 'Максимально Ужасно'
// console.log(str.indexOf('а'))
                                                   // ФУНКЦИЯ
// function task8(str){
//     console.log(str.indexOf('а'))
// }
// task8('Максимально Ужасно')
///////////////////////////////////////////////////////
// 13. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого последнего
// буквы о.
// let str = 'Максимально Ужасно'
// console.log(str[str.length -8])
                                             // ФУНКЦИЯ
// function task9(str){
//     console.log(str[str.length -8])
// }
// task9('Максимально Ужасно')
//////////////////////////////////////////////////////////
// 14. Вам дана переменная str = 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами
// (через substr, substring, slice) и выведите в консоль.
// let str = 'aaa bbb ccc'
// console.log(str.slice(4,7))
// console.log(str.slice(0,4))
// console.log(str.slice(7,11).trim(str))
                                                    // ФУНКЦИЯ
// function task10(str){
//     console.log(str.slice(4,7))
//     console.log(str.slice(0,4))
//     console.log(str.slice(7,11).trim())
// }
// task10('aaa bbb ccc')

// let str = '2003'
// if(str >= 1997 && str < 1998){
//     console.log('Bakyt')
// }else if(str >= 2003 && str < 2004){
//     console.log('Byky')
// }else if(str >= 2001 && str < 2002){
//     console.log('Bekbolsun')
// }else{
//     console.log('404')
// }
// function task(str){
//     if(str === 'bakyt'){
//         console.log('hello')
//     }else if(str === 'beka'){
//         console.log('hi baibe')
//     }else if(str === 'askat'){
//         console.log('hi')
//     }else{
//         console.log('404')
//     }
// }
// task('bakyt')
// let arrName = ['azamat','azamat',['beka','azamat'],'azamat']
// console.log(arrName[2])
// let str = 54678
// console.log(str[Math.floor(str.length / 2)]) ortosun tababyz
// console.log(str.slice(-1)) arkasyn alabyz
// console.log(str.includes(78))
// console.log(str.indexOf('j'))
// console.log(str.lastIndexOf('j')) arkasynan bashtap chygarat
// console.log(Math.pow(8,3))
// console.log(Math.floor(1.2))
// console.log(Math.ceil(1.2))
// console.log(Math.round(Math.random()*10))
// console.log(Math.trunc(2.9896734))
// console.log(number(str))
// console.log(parseInt(str)) strakanyn ichindegi sandardy gana almashtyryp beret
// console.log(string(str))
// let num = '123445'
// console.log(num.toString()) namberge ailandyru
// console.log(num+'')
// console.log(typeof num)
// console.log(num.charAt())

// let arr = 120
// let arr3 = 32
// const isAgeValid = arr >= arr3 ? 'xorosho':'net ';
// console.log(isAgeValid);
