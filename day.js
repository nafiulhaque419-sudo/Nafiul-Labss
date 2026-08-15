const find=document.querySelector("#find");
const display=document.querySelector("#day");

function getValues(date, year, month){
  let k=parseFloat(date);
  let m=parseFloat(month);

  if(m===11 || m===12){
    year=parseFloat(year);
    year--;
    year=String(year);
  }
  
  let d=parseFloat(year.slice(year.length-2));
  let c;
  
  if(year.length<3){
    c=0;
  }else{
    c=parseFloat(year.slice(0, 2));
  }
  
  if(c<0 || k>31 || k<0 || (k>30 && (m===12 || m===2 || m===4 || m===7 || m===9)) || (k>29 && m===12) || (k>28 && m===12 && d%4!==0)){
    display.innerText="invalid date";
    return;
  }
  
  let values= {
    k,
    m,
    d,
    c
  };
  
  return values;
}

function getDay(values){
  let s=values.k+Math.floor((13*values.m-1)/5)+values.d+Math.floor(values.d/4)+Math.floor(values.c/4)-2*values.c;
  s=s%7;
  
  switch (s) {
    case 1:
        return "Monday";

    case 2:
        return "Tuesday";

    case 3:
        return "Wednesday";

    case 4:
        return "Thursday";

    case 5:
        return "Friday";

    case 6:
        return "Saturday";

    case 0:
        return "Sunday";

    default:
        return "Invalid day";
  }
}

find.addEventListener("click", ()=>{
  let date=document.querySelector("#date").value;
  let year=document.querySelector("#year").value;
  let month=document.querySelector("#month").value;
  let values=getValues(date, year, month);
  let day=getDay(values);
  display.innerText=day;
});

clear.addEventListener("click", ()=>{
  display.innerText="---";
  document.querySelector("#date").value="";
  document.querySelector("#month").value="";
  document.querySelector("#year").value="";
})
