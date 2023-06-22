
// let arr = [10,20,33,60,32 -34,0,-22,-6,45]
// arr = arr.filter((el)=> el > 0 ).sort((a,b)=> a - b).slice(0,5).splice(2,0,'a,b,c')
//     .map((el,index,array)=>{
//     if(index % 2 !== 0){
//         return el * 2
//     }else{
//         return el
//     }
// })
// console.log(arr)
//
// 1. Вам дан массив с числами [5,15,315,2,13,20,9]. Найдите сумму этих чисел.
// let arr = [5,15,315,2,13,20,9]
// arr = arr.reduce((acc,el)=> acc+el)
// console.log(arr)
// 2. Вам дан массив с числами [5,12,314,2,13,20,9]. Найдите сумму всех четных чисел.
// let arr = [5,12,314,2,13,20,9]
// console.log(arr.filter((el)=>{
//     if(el % 2 === 0){
//         return el
//     }
// }).reduce((acc,el)=> acc + el ))

// 3. Вам дан массив с числами [5,15,315,2,13,20,9]. Найдите сумму чисел, которые больше 10.

// let arr = [5,15,315,2,13,20,9]
// arr = arr.filter((el,)=> el > 10).reduce((acc,el)=> acc + el)
// console.log(arr)

// 4. Вам дан массив с числами [3,13,54,15,335, 39]. Найдите разность чисел, которые больше 10.
// let arr = [3,13,54,15,335, 39]
// console.log(arr.filter((el)=> el > 10).reduce((acc,el)=>{
// return acc - el
// },0))
// 5. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Сложите все строки и выведите длину результата.
// const arr = ['Аскар', 'Баяман', 'Калмамат']
// const str1 = arr.reduce((acc,el)=> acc + el).length
// console.log(str1)
// 6. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Выведите
// все строки в верхнем регистре, используя map.
// let arr = ['Аскар', 'Баяман', 'Калмамат']
// let arr1 = arr.map((el)=>{
//     return el.toUpperCase()
// })
// console.log(arr1)
// 7. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат', 'Ben'].
// Выведите все вторые строки в верхнем регистре.
// let arr = ['Аскар', 'Баяман', 'Калмамат', 'Ben']
//     arr = arr.map((el,index)=>{
//       if(index % 2 !== 0){
//           return el.toUpperCase()
//       }else{
//           return el
//       }
//  })
// console.log(arr)
// 9. Вам дан массив с строками ['асКар', 'бЯман', 'калМамат']. Используйте заглавные буквы в каждом массиве имен.
//     Пример: (["john", "JACOB", "jinGleHeimer", "schmidt"])), => ["John", "Jacob", "Jingleheimer", "Schmidt"]
// let arr = ['асКар', 'баяман', 'калМамат']
// console.log(arr.map((el)=>{
//     return el[0].toUpperCase() + el.slice(1).toLowerCase()
// }))
// Начиная с массива, содержащего числа от 1 до 10, используйте filter, map и reduce, чтобы получить следующее
// . Используйте console.log для отображения результатов. Массив нечетных чисел. Массив чисел, делящихся на 2 или 5.
// Массив чисел, делящихся на 3, а затем возведенных в квадрат этих чисел.
// let arr = [1,2,3,4,5,6,7,8,9]
// console.log(arr.filter((el,index)=> {
//     return el % 2 !== 0
// }))
// console.log(arr.filter((el,index)=> el % 2 === 0 || el % 5 === 0))
// console.log(arr.filter((el)=> el % 3 === 0).map((el)=> Math.pow(el, 2)))