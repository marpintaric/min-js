var niz = [2, 3, 12, 15, 50,'a', 'b'];
var regex = new RegExp("\d");
var regexJedan = new RegExp("[abc]+");


const result = brojevi.filter (niz => regex.test(niz));

console.log(Math.min(...result));


/*
if (regex.test(niz)){
console.log(Math.min(...niz));
}
else if (regexJedan.test(niz)){
  console.log("false");
}*/



/*
const result = brojevi.filter (niz =>{
  if (regex.test(niz)){
  console.log(Math.min(...niz));
  }
  else {
    console.log("false");
})
console.log(result);
*/
