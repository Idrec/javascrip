// let a = prompt("son kirit: ")
// let b = prompt("username: ")
// let c = prompt("parol")
// if(a>0 && b!=='admin' && c!=='parol'){
//     alert('musbat')
// }else if(a<0 && b!='admin' && c!=='parol'){
//     alert('manfiy')
// }else{
//     alert('nolga teng')
// }

// let x = 1
// let y = 1
// let z = 5
// if((x+y+z)>x*y*z){
//     alert("max")
// }else if((x*y*z)>x+y+z){
//     alert('min')
// }else{
//     alert('x=y')
// }


// let x = 1
// let y = 1
// let z = 1
// if(((x+y+z/2))>x*y*z){
//     alert("max")
// }else if(((x+y+z/2)<x*y*z)**2+1){
//     alert("min")
// }else{
//     alert("nolga teng")
// }

// let a = 5
// let b = 3
// let c = 1
// if(a >= b && a >= c){
//     alert('a')
// }else if(b <= a && b >= c){
//     alert("b")
// }else if(c < a && c <= b){
//     alert('c')
// }else{
//     alert("noto'g'ri tuzilgan")
// }

// let a = 1
// let b = 3
// let c = 1
// if((a >= b >= c)*2){
//     alert('a')
// }else if(a != b != c || a | 5){
//     alert("b")
// }else{
//     alert("noto'g'ri tuzilgan")
// }


// let x = 1
// let y = 2
// if(x>y){
//     alert("z=x-y")
// }else{
//     alert("y-x+1")
// }

// let a = 4
// let b = 2
// if(a > b){
//     alert(a)
// }else {
//     alert(a , b)
// }

// let a = 7
// let b = 2
// if(a <b || a==b){
//     alert(a)
// }else{
//     a=0
//     alert(a)
// }

// let a = 12
// let b = 9
// let c = 7
// if(a/3 && a/1 && b/3 && b/1 && c/3 && c/1){
//     alert('butun sonlar')
// }
// 10 masala
// let x = 8
// let y = 4

// if(x>y){
//     x =(x+y)/2
//     alert(x)
// }else if(x<y){
//     x = (x*2)
//     alert(x)
// }

// 11 masala

// let a = 8
// let b = 10
// let c = 4
// if(a > 0 && b > 0 && c > 0){
//     a = a**2
//     b = b**2
//     c = c**2
//     console.log (a)
//     console.log (b)
//     console.log (c)
// }else if(a < 0 && b > 0 && c > 0){
//     a = a**2
//     b = b**2
//     c = c**2
//     console.log (b)
//     console.log (c)
// }else if(a > 0 && b < 0 && c > 0){
//     a = a**2
//     b = b**2
//     c = c**2
//     console.log (a)
//     console.log (c)
// }else if(a > 0 && b > 0 && c < 0){
//     a = a**2
//     b = b**2
//     c = c**2
//     console.log (a)
//     console.log (b)
// }

// 12 masala
// let a = 1
// let b = 2
// let c = 3
// let d = 4
// if(d >= c && d>=b && d >= a){
//     d = c
//     d = b
//     d = a
//     console.log (d)
//     console.log (c)
//     console.log (b)
//     console.log (a)
// }else if(a >= b >= c >= d){
//     console.log (a)
//     console.log (b)
//     console.log (c)
//     console.log (d)
// }else if(a <= b <=c <= d){
//     a=a**2
//     b=b**2
//     c=c**2
//     d=d**2
//     console.log (a)
// }

// 13 masala
// let x = prompt("tenglama:(((a*x)**2)+(b*x)+c)**0.5 == 0, x uchun son kiriting: ")
// let a =  prompt("tenglama:(((a*x)**2)+(b*x)+c)**0.5 == 0 a uchun son kiriting: ")
// let b =  prompt("tenglama:(((a*x)**2)+(b*x)+c)**0.5 == 0 b uchun son kiriting: ")
// let c =  prompt("tenglama:(((a*x)**2)+(b*x)+c)**0.5 == 0 c uchun son kiriting: ")
// console.log((((a*x)**2)+(b*x)+c)**0.5 == 0)
    
// 14 masala
// let x = 10
// let y = 10
// let a = prompt("son kiriting; ")
// let c = prompt('son kiriting: ')
// let b = 10
// if(x==a && y == c){
//     alert('gisht sigadi')
// }else if(x > a && y > c || x < a && y < c){
//     alert("gisht sigmaydi")
// }



// let a = prompt('son kiriting: ')
// let b = prompt('son kiriting: ')
// let c = prompt('son kiriting: ')
// let d = prompt('son kiriting: ')
// let s = 0
// while(a > 0){
//     s+=a
//     console.log (s)
// }

let i =0

while(i<10){
    
    let a= prompt('son kirit: ')
    if(a%2==0){
        console.log(`juft ${a}`)
    }else{
        console.log(`toq ${a}`)
        
    }
    i++
}