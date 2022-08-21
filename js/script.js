document.getElementById ("total-count").addEventListener('click',function(){
   const food =document.getElementById('food-count');
   const netFood=parseFloat(food.value);
   //console.log(netFood);
   const rent =document.getElementById('rent-count');
   const netRent=parseFloat(rent.value);
   //console.log(netRent);
   const clothes =document.getElementById('clothes-count');
   const netincome=parseFloat(clothes.value);
   //console.log(netincome);
   const net =netFood + netRent +netincome;
   console.log(net); 
   const netvalue=document.getElementById('expence');
   //const profit =netvalue.innerText;
   //const netvalues =income - net;
   netvalue.innerText = net;
   //income

 
})
document.getElementById("total-count").addEventListener('click',function(){
   const income =document.getElementById('incomebtn');
   const profit =parseFloat(income.value);
   console.log(profit);
   const netprofit =document.getElementById('balance');
   //const netprofits = netprofit.innerText;
   //const balance =profit-net;
   netprofit.innerText=profit;
   //console.log(balance);

}) 