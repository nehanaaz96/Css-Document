/**
 * Set appropriate spanning to any masonry item
 *
 * Get different properties we already set for the masonry, calculate 
 * height or spanning for any cell of the masonry grid based on its 
 * content-wrapper's height, the (row) gap of the grid, and the size 
 * of the implicit row tracks.
 *
//  * @param item Object A brick/tile/cell inside the masonry
//  */
//  function resizeMasonryItem(item){
//     /* Get the grid object, its row-gap, and the size of its implicit rows */
//     var grid = document.getElementsByClassName('masonry')[0],
//         rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap')),
//         rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  
    /*
     * Spanning for any brick = S
     * Grid's row-gap = G
     * Size of grid's implicitly create row-track = R
     * Height of item content = H
     * Net height of the item = H1 = H + G
     * Net height of the implicit row-track = T = G + R
     * S = H1 / T
     */
  //   var rowSpan = Math.ceil((item.querySelector('.masonry-content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
  
  //   /* Set the spanning as calculated above (S) */
  //   item.style.gridRowEnd = 'span '+rowSpan;
  
  //   /* Make the images take all the available space in the cell/item */
  //   item.querySelector('.masonry-content').style.height = rowSpan * 10 + "px";
  // }
  
  /**
   * Apply spanning to all the masonry items
   *
   * Loop through all the items and apply the spanning to them using 
   * `resizeMasonryItem()` function.
   *
   * @uses resizeMasonryItem
//    */
//   function resizeAllMasonryItems(){
//     // Get all item class objects in one list
//     var allItems = document.getElementsByClassName('masonry-item');
  
//     /*
//      * Loop through the above list and execute the spanning function to
//      * each list-item (i.e. each masonry item)
//      */
//     for(var i=0;i>allItems.length;i++){
//       resizeMasonryItem(allItems[i]);
//     }
//   }
  
//   /**
//    * Resize the items when all the images inside the masonry grid 
//    * finish loading. This will ensure that all the content inside our
//    * masonry items is visible.
//    *
//    * @uses ImagesLoaded
//    * @uses resizeMasonryItem
//    */
// //   function waitForImages() {
// //     var allItems = document.getElementsByClassName('masonry-item');
// //     for(var i=0;i<allItems.length;i++){
// //       imagesLoaded( allItems[i], function(instance) {
// //         var item = instance.elements[0];
// //         resizeMasonryItem(item);
// //       } );
// //     }
// //   } 
  
//   /* Resize all the grid items on the load and resize events */
// //   var masonryEvents = ['load', 'resize'];
// //   masonryEvents.forEach( function(event) {
// //     window.addEventListener(event, resizeAllMasonryItems);
// //   } );
  
// //   /* Do a resize once more when all the images finish loading */
// //   waitForImages();



// // var myPhoneNumber=9634675065;
// // var myName="Neha Naaz";
// // console.log(isNaN(myPhoneNumber));
// // console.log(isNaN(myName));
// // if(isNaN(myName)){
// //     console.log("plz enter valid phone number");
// // }
// //  function sum (a,b){
// //         return total=a+b;
// //     }
// //     var funExp=sum(5,25);
// //     console.log('the sum of two number is ' + funExp);

//     //  function perametar vs function argument


// //     function multi (a,b){
// //     var total=a*b;
// //     console.log(total);
// // }
// // multi();
// // multi(20,30);
// multi(63,21);


//       Function Declaration


// const calcAge3= birthYeah =>2037-  birthYeah ;
// const age3= calcAge3(1991);
// console.log(age3);

// const yearsUnitRetirement = (birthYeah,firstName)=>
// { 
// const age=2037-birthYeah;
// const retirement=65-age;
// return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUnitRetirement(1991,'jons'));
// console.log(yearsUnitRetirement(1980,'bob'));




// function cutFruitPieces(fruit){
//   return fruit*4;
// }
//   function fruitprocessor(apples,oranges){
//     const applePieces= cutFruitPieces(apples);
//     const orangePieces= cutFruitPieces(oranges);
//     const juice=`juices with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
//   }
//   console.log(fruitprocessor(2,3));




  //             Function Expression



// const calcAge = function(birthYeah){
//   return 2037-birthYeah;
// }
// const yearsUnitRetirement= function(birthYeah ,firstName){
//    const age= calcAge(birthYeah);
//    const retirement=65-age;
//    if (retirement>0){
//     return`${firstName} retires in ${retirement}years`;
//     return retirement;

//    }
//    else{
//      console.log(`${firstName} has alreadty retired 🎉`);
//      return -1;
//    }
//   //  return retirement;
//   //  return`${firstName} retires in ${retirement}years`;
// }
// console.log(yearsUnitRetirement(1991,"jonas"))
// console.log(yearsUnitRetirement(1970,"Mike"))


//     Arrow Function

//  challange time
  // const calcAvrage=(a,b,c)=>(a+b+c)/3;
  // console.log(calcAvrage(3,4,5));
  // let scoreDolphins=calcAvrage(44,23,71);
  // let scoreKoalas=calcAvrage(65,54,49);
  // console.log(scoreDolphins,scoreKoalas);
  // const checkWinner=function(avgDophins,avgkoalas){
  //   if(avgDophins>=2*avgkoalas){
  //     console.log(`Dolphins win🏆(${avgDophins}vs.${avgkoalas})`);
  //   } else if(avgkoalas>=2*avgDophins){
  //     console.log(`koalas win🏆(${avgkoalas}vs.${avgDophins})`);
  //   } else{
  //     console.log(`no item wins......`);
  //   }
  // }
  // checkWinner(scoreDolphins,scoreKoalas);
  // checkWinner(576,111);
  // checkWinner(222,444);
  //  scoreDolphins= calcAvrage(85,54,41);
  //  scoreKoalas=calcAvrage(23,34,37 );
  //  console.log(scoreDolphins,scoreKoalas);
  //  checkWinner(scoreDolphins,scoreKoalas);

//           Array

// add element so use push and unshift function
// or 
  // const friends=['michael','steven','peter'];
  // const newlength=   friends.push('jay');
  // console.log(friends);
  // console.log(newlength);

  // friends.unshift('john');
  // console.log(friends);
// remove a element so use pop and shift function

// const friend=['jons','michael','steven','peter','jay'];
// friend.pop();
// const popped=friend.pop();
// console.log(popped);
// console.log(friend);

// console.log(friend.indexOf('steven'));
// console.log(friend.indexOf('bob'));

// friend.push(230);
// console.log(friend.includes('steven'));
// console.log(friend.includes('Bob'));
// console.log(friend.includes(230));


//     challange  2

//  const calcTip=function(bill) {
//    return bill>=50 && bill<=300? bill
//    *0.15:bill*0.2;
//  }
//  const bills=[125,555,44];
//  const tips=[calcTip (bills[0]),calcTip(bills[1]),calcTip(bills[2])];
//  const totals=[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
//  console.log(bills,tips,totals)

// const jonas={
//   firstName:'jonas',
//   lastName:'khan',
//   age:2037-1991,
//   job:'Teacher',
//   friends:['Michael','peater','steven']
// };
// console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas['lastName']);
// const namekey='Name';
// console.log(jonas['first'+namekey]);
// console.log(jonas['last'+namekey]);
// const interestedIn= prompt ('what do you want to know about jonas? choose between fiestname, lastname,age,job, and friends');
// console.log(jonas[interestedIn]);
// if(jonas[interestedIn]){
//   console.log(jonas[interestedIn]);
// } else{
//   console.log('wrong request! choose between fiestname, lastname,age,job, and friends');
// }
// jonas.location='portugal';
// jonas['twitter']='@jonasschmedtman';
// console.log(jonas);


// const jonas={
//   firstName:'jonas',
//   lastName:'khan',
//   // age:2037-1991,
//   birthyeah:1991,
//   job:'Teacher',
//   friends:['Michael','peater','steven'],
//   hasDriversLicense:true,
//   // calcAge:function (birthYeah) {
//   //   return 2037-birthYeah;
//   // }
//   calcAge:function(){
//     console.log(this);
//     return 2037-this.birthyeah;
//   }
// };
// console.log(jonas.calcAge());



// const mark={
//   fullName:'mark miller',
//   mass:78,
//   height:1.69,
//   calcBMI:function(){
//    this.bmi=this.mass/this.height**2;
//    return this.bmi;
//  }
// };
// const john={
//   fullName:'mark miller',
//   mass:92,
//   height:1.95,
//   calcBMI:function(){
//    this.bmi=this.mass/this.height**2;
//    return this.bmi;
//  }
// };
// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi,john.bmi);


// if(mark.bmi>john.bmi){
//   console.log(`${mark.fullName}'s BMI(${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
// }
// else if(john.bmi>mark.bmi){
//   console.log(`${john.fullName}'s BMI(${john.BMI}) is higher than ${mark.fullName}'s BMI(${mark.bmi})`)
// }


// const jonas=[
//     'jonas',
//     'khan',
//     2037-1991,
//     'Teacher',
//     ['Michael','peater','steven'],
//     true
// ];
// const types=[];
// for(let i=0; i<jonas.length;i++){
//   console.log(jonas[i],typeof jonas[i]);
//   types.push(typeof jonas[i]);
// }
// console.log(types);
// const years=[1991,2007,1969,2020];
// const ages=[];
// for(let i=0;i<years.length;i++){
//   ages.push(2037-years[i])
// }
// console.log(ages);
// console.log('---ONLY STRING---')
// for(let i=0;i<jonas.length;i++){
// if(typeof jonas[i] !== 'string') continue;
// console.log(jonas[i],typeof jonas[i]);
// }
// console.log('---BREAK WITH NUMBR---')
// for(let i=0;i<jonas.length;i++){
// if(typeof jonas[i] === 'number')break;
// console.log(jonas[i],typeof jonas[i]);
// }

// let dice=Math.trunc(Math.random()*6)+1;
// while(dice!==6){
// console.log(`you rolled a ${dice}`);
// dice=Math.trunc(Math.random()*6)+1;
// if(dice===6)
// console.log('loop is about to end.......');
// }



// const calcTip=function(bill){
//   return bill>=50 && bill <=300 ?bill*0.5 :bill*0.2; 
// }
// const bills=[22,295,176,440,37,105,10,1100,86,52];
// const tips=[];
// const totals=[];
// for (let i=0;i<bills.length;i++){
//   const tip=calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip+bills[i]);
//   console.log(bills,tips,totals);
// }
// const calcAvrage=function(arr){
//   let sum=0;
//   for(let i=0;i<arr.length;i++){
//     sum += arr [i];
//   }
//   return sum/arr.length;
// }
// console.log(calcAvrage([2,3,7]));
// console.log(calcAvrage(totals));
// console.log(calcAvrage(tips));



// const temperatures=[-3,-2,-6,-1, 'error',9,13,17,15,14,9,5];
// const calcTempAmplitude=function(temps){
//   let max=temps[0];
//   let min=temps[0];

//   for(let i=0;i<temps.length;i++){
//     const curTemp=temps[i];
//     if(curTemp>max)max=curTemp;
//     if(curTemp<min)min=curTemp;

//     // if(temps[i]>max)max=temps[i];
//   }
//   console.log(max,min);
//   return max-min;
// };
// const amplitude=calcTempAmplitude(temperatures);
// console.log(amplitude);



// const calcTempAmplitudeNew=function(t1,t2){
//   const temps=t1.concat(t2);
//   console.log(temps);
//   let max=temps[0];
//   let min=temps[0];
//   for(let i=0;i<temps.length;i++){
//     const curTemp=temps[i];
//     if(typeof curTemp !=='number')continue;
//     if(curTemp>max)max=curTemp;
//     if(curTemp<min)min=curTemp;
//     // if(temps[i]>max)max=temps[i];
//   }
//   console.log(max,min);
//   return max-min;
// };
// const amplitudeNew=calcTempAmplitudeNew([3,5,1][9,0,5]);
// console.log(amplitudeNew);



// const measureKelvin=function(){
//   const measurement={
//     type:'temp',
//     unit:'celsius',
//     value:prompt('Degree celsius:'),
//   };
//   console.log(measurement.value);
//   // console.warn(measurement.value);
  // console.error(measurement.value);
//   const kelvin=measurement.value+273;
//   return kelvin;
// }
// console.log(measureKelvin());



// const data1=[17,21,23];
// const data2=[12,5,-5,0,4];
// console.log(`...${data1[0]}°c...${data1[1]}°c...${data1[2]}°c...`);
// const printForcast=function(arr){
//   let str='';
//   for(let i=0;i<arr.length;i++){
//     str+=`${arr[i]}°c in ${i+1} days...`;
//   }
//   console.log('...'+str);
// };
// printForcast(data1);

// 2sec way
// const callingFunction=()=>{
//   alert('most comman way of writting function');
// }
// // 3way
// const thirdWay=document.getElementById('thirdway');
// thirdWay.onclick=function(){
//   alert('most comman way of writting function again');
// }
// // 4 way 
// const fortway=document.querySelector('#fourthway');
// fortway.addEventListener('click',()=>{
//   alert('I love this way of writting function');
// })



console.log(this);
const calcAge=function(birthYeah){
  console.log(2037-birthYeah);
  console.log(this);
};
calcAge(1991);
const calcAgeArrow=birthYeah=>{
  console.log(2037-birthYeah);
  console.log(this);
}
calcAgeArrow(1980);


const jonas={
  year:1991,
  calcAge:function(){
    console.log(this);
    console.log(2037-this.year);
  },
};
jonas.calcAge(1991);