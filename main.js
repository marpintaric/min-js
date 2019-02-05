var niz = [2, 3, 12, 15, 50,'a', 'b'];
var regex = new RegExp("\d");
var regexJedan = new RegExp("[abc]+");


const result = brojevi.filter (niz => regex.test(niz));

console.log(Math.min(...result));

let samoBrojevi = niz.filter(n => !Number.isNaN(n));

let jednoznamenkastiBrojevi = niz.filter(n => n.toString().match(regex).length > 0);

/*
if (regex.test(niz))c
console.log(Math.min(...niz));
}
else if (regexJedan.test(niz))
  console.log("false");
}*/



/*
const result = brojevi.filter (niz =>ç
  if (regex.test(niz))c
  console.log(Math.min(...niz));
  }
  else {
    console.log("false");
})
console.log(result);
*/
