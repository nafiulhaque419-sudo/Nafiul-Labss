const input=document.querySelector("#input");
const calculate=document.querySelector("#calculate");
const clear=document.querySelector("#clear");
const display=document.querySelector("#display");

function calculateMean(list){
  let total=0;
  for(let s of list){
    total+=s;
  }
  
  return (total/list.length).toFixed(2);
}

function calculateMedian(list){
  list.sort((a, b)=> a-b);
  console.log(list);
  
  if(list.length%2!==0){
    return list[Math.floor(list.length/2)];
  }else{
    const m1=list[(list.length/2)-1];
    console.log(m1);
    const m2=list[list.length/2];
    console.log(m2);
    console.log((m1+m2)/2);
    return (m1 + m2)/2;
  }
}

function calculateMode(list){
  const unique=[...new Set(list)];
  
  let highest=0;
  let highestVal;
  unique.forEach(value=>{
    let high=0;
    for(let i=0; i<list.length; i++){
      if(value===list[i]){
        high++;
      }
      if(high>highest){
      highest=high;
      highestVal=list[i];
      }
    }
  });
  
  return{
    highestVal,
    highest
  };
}

function calculateMin(list){
  return Math.min(...list);
}

function calculateMax(list){
  return Math.max(...list);
}

function calculateRange(list){
  return Math.max(...list) - Math.min(...list);
}

function calculateSum(list){
  let total=0;
  for(let s of list){
    total+=s;
  }
  
  return total;
}

function calculateVariance(list){
  let variance=calculateMean(list);
  let total=0;
  for(let value of list){
    const s=(value-variance)**2;
    total+=s;
  }
  
  return (variance/list.length).toFixed(2);
}

function calculateSD(list){
  const variance=calculateVariance(list);
  return Math.sqrt(variance).toFixed(2);
}

function calculateQuartiles(list){
  const q2=calculateMedian(list);
  let q1List=[];
  let q3List=[];
  
  list.sort((a, b)=> a-b);
  
  let mid=Math.floor(list.length/2);
  
  q1List=list.slice(0, mid);
  
  if(list.length%2===0){
    q3List=list.slice(mid);
  }else{
    q3List=list.slice(mid+1);
  }
  
  const q1=calculateMedian(q1List);
  const q3=calculateMedian(q3List);
  
  return{
    q1,
    q2,
    q3
  };
}

function calculateIQR(list){
  const data=calculateQuartiles(list);
  
  return data.q3-data.q1;
}

function displayResults(list){
  const count=list.length;
  const sum=calculateSum(list);
  const mean=calculateMean(list);
  const median=calculateMedian(list);
  const min=calculateMin(list);
  const max=calculateMax(list);
  const mode=calculateMode(list);
  const range=calculateRange(list);
  const variance=calculateVariance(list);
  const SD=calculateSD(list);
  const quartiles=calculateQuartiles(list);
  const IQR=calculateIQR(list);
  
  display.innerHTML=`Count: ${count}<br><br>
  Sum: ${sum}<br><br>
  Mean: ${mean}<br><br>
  Median: ${median}<br><br>
  Mode: ${mode.highestVal} (${mode.highest})<br><br>
  Range: ${range}<br><br>
  Maximum: ${max}<br><br>
  Minimum: ${min}<br><br>
  Variance: ${variance}<br><br>
  Standard Deviation: ${SD}<br><br>
  <pre>Quartiles: { Q1 : ${quartiles.q1}<br>
             Q2 : ${quartiles.q2}<br>
             Q3 : ${quartiles.q3}
            }</pre><br>
  Interquartile Range (IQR): ${IQR}`;
}

calculate.addEventListener("click", ()=>{
  let inputText=input.value;
  let list=inputText.split(",").map(num => Number(num.trim()));
  displayResults(list);
});

clear.addEventListener("click", ()=>{
  display.innerHTML=
    `Count     : 0
    <br><br>
    Sum        : 0
    <br><br>
    Mean       : 0
    <br><br>
    Median     : 0
    <br><br>
    Mode       : 0
    <br><br>
    Range      : 0
    <br><br>
    Minimum    : 0
    <br><br>
    Maximum    : 0
    <br><br>
    Variance   : 0
    <br><br>
    Standard Deviation : 0
    <br><br>
    Quartiles   : 0
    <br><br>
    Interquartile Range (IQR): 0`;
    
    display.style.fontSize="20px";
  input.value="";
  list.length=0;
});