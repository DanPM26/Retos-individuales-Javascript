for ( let i=2; i<10; i++){
  if (i%2!=0) {
    console.log(i);
  }
}

//segundo ejercicio
for( let i=1;i<=10;i++){
  {
    console.log( i + "x5=" + (i*5))
  }
}

for( let i=1;i<=10;i++){
  {
    console.log( i + "x9=" + (i*9))
  }
}

//tercer ejercio 
let numeros=[1,2,45,5,6,3,1];
numeros.sort();


let a= [100,5,5,8,3,7,8];
let b=0;
for (let i=0; i<a.length;i++){
  for(let x=1;x<(a.length - i); x++){
    if(a[x -1] > a[x]){
      b= a[x-1];
      a[x-1] = a[x];
      a[x] = b;
    }
    console.log(a)
  }
}

//cuarto ejercicio

