// let num = 0;
// for(let num = 0; num <=5; num++){
//     console.log(num)
// } 

// odd ----- even

// for(let i = 0; i <=10; i=i+2){
//     console.log(i);
// }
// for(let i = 1; i <=10; i=i+2){
//     console.log(i);
// }
// sum
// let sum = 0;
// for(let i = 1; i <=10; i++){
    //     sum = sum + i;
    
    // }
    // console.log('the sum is',sum);

let total = 0;
    for(let i = 1; i <= 20; i++){
        if(i%5 ===0 || i%3 ===0){
            console.log(i);
            total = total + i;
           
        }
    }
     console.log('total:',total)