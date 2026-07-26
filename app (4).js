// variablea

// tabs
const profitTab=document.querySelector(".profitTab");
const discountTab=document.querySelector(".discountTab");
const gstTab=document.querySelector(".gstTab");

//modules
const profitModule=document.querySelector(".profit-loss");
const discountModule=document.querySelector(".discount");
const gstModule=document.querySelector(".GST");

// profit-loss
const CP=document.querySelector("#CP");
const SP_pl=document.querySelector("#SP_pl");
const profit=document.querySelector("#profit");
const loss=document.querySelector("#loss");
const profit_per=document.querySelector("#profit_per");
const loss_per=document.querySelector("#loss_per");

// discount
const MP=document.querySelector("#MP");
const SP_dis=document.querySelector("#SP_dis");
const discount=document.querySelector("#dis");
const discount_per=document.querySelector("#dis_per");


// GST
const OP=document.querySelector("#OP");
const FP=document.querySelector("#FP");
const gst=document.querySelector("#gst");
const gst_per=document.querySelector("#gst_per");

const inputs=document.querySelectorAll("input");

// buttons

const cal=document.querySelector("#calculate");

const clear=document.querySelector("#clear");

// functions

// profit-loss

function calculateCP(data){
  if(!isNaN(data.sp) && !isNaN(data.profit)){
    return data.sp-data.profit;
  }else if(!isNaN(data.sp) && !isNaN(data.loss)){
    return data.sp+data.loss;
  }else if(!isNaN(data.sp) && !isNaN(data.profit_per)){
    return data.sp/(1+data.profit_per/100);
  }else if(!isNaN(data.sp) && !isNaN(data.loss_per)){
    return data.sp/(1-data.loss_per/100);
  }else if(!isNaN(data.profit) && !isNaN(data.profit_per)){
    return data.profit*(100/data.profit_per);
  }else if(!isNaN(data.loss) && !isNaN(data.loss_per)){
    return data.loss*(100/data.loss_per);
  }else{
    return NaN;
  }
}

function calculateSP(data){
  if(!isNaN(data.cp) && !isNaN(data.profit)){
    return data.cp+data.profit;
  }else if(!isNaN(data.cp) && !isNaN(data.loss)){
    return data.cp-data.loss;
  }else if(!isNaN(data.cp) && !isNaN(data.profit_per)){
    return data.cp*(1+data.profit_per/100);
  }else if(!isNaN(data.sp) && !isNaN(data.loss_per)){
    return data.cp*(1-data.loss_per/100);
  }else{
    return NaN;
  }
}

function calculateProfit(data){
  if(!isNaN(data.cp) && !isNaN(data.sp)){
    return data.sp-data.cp;
  }else if(!isNaN(data.cp) && !isNaN(data.profit_per)){
    return data.cp*(data.profit_per/100);
  }else if(!isNaN(data.sp) && !isNaN(data.profit_per)){
    return (data.sp*data.profit_per)/(100+data.profit_per);
  }else{
    return NaN;
  }
}

function calculateLoss(data){
  if(!isNaN(data.cp) && !isNaN(data.sp)){
    return data.cp-data.sp;
  }else if(!isNaN(data.cp) && !isNaN(data.loss_per)){
    return data.cp*(data.loss_per/100);
  }else if(!isNaN(data.sp) && !isNaN(data.loss_per)){
    return (data.sp*data.loss_per)/(100-data.loss_per);
  }else{
    return NaN;
  }
}

function calculateProfitPer(data){
  if(!isNaN(data.cp) && !isNaN(data.profit)){
    return data.profit/data.cp*100;
  }else if(!isNaN(data.cp) && !isNaN(data.sp)){
    return (data.sp-data.cp)/data.cp*100;
  }else if(!isNaN(data.sp) && !isNaN(data.profit)){
    return data.profit/(data.sp-data.profit)*100;
  }else{
    return NaN;
  }
}

function calculateLossPer(data){
  if(!isNaN(data.cp) && !isNaN(data.loss)){
    return data.loss/data.cp*100;
  }else if(!isNaN(data.cp) && !isNaN(data.sp)){
    return (data.cp-data.sp)/data.cp*100;
  }else if(!isNaN(data.sp) && !isNaN(data.loss)){
    return data.loss/(data.sp+data.loss)*100;
  }else{
    return NaN;
  }
}

// discount

function calculateMP(data){
  if(!isNaN(data.sp) && !isNaN(data.dis)){
    return data.sp+data.dis;
  }else if(!isNaN(data.sp) && !isNaN(data.discount_per)){
    return data.sp/(1-data.dis_per/100);
  }else if(!isNaN(data.dis) && !isNaN(data.dis_per)){
    return data.dis*100/data.dis_per;
  }else{
    return NaN;
  }
}

function calculateSPDis(data){
  if(!isNaN(data.mp) && !isNaN(data.dis)){
    return data.mp-data.dis;
  }else if(!isNaN(data.mp) && !isNaN(data.discount_per)){
    return data.mp*(1-data.dis_per/100);
  }else if(!isNaN(data.dis) && !isNaN(data.dis_per)){
    return (data.dis*(100-data.dis_per))/data.dis_per
  }else{
    return NaN;
  }
}

function calculateDiscount(data){
  if(!isNaN(data.mp) && !isNaN(data.sp)){
    return data.mp-data.sp;
  }else if(!isNaN(data.mp) && !isNaN(data.discount_per)){
    return data.mp*data.dis_per/100;
  }else if(!isNaN(data.sp) && !isNaN(data.dis_per)){
    return (data.sp*data.dis_per)/(100-data.dis_per)
  }else{
    return NaN;
  }
}

function calculateDiscountPer(data){
  if(!isNaN(data.mp) && !isNaN(data.sp)){
    return ((data.mp-data.sp)/data.mp)*100;
  }else if(!isNaN(data.mp) && !isNaN(data.dis)){
    return (data.dis/data.mp)*100;
  }else if(!isNaN(data.sp) && !isNaN(data.dis)){
    return (data.dis/(data.sp+data.dis))*100;
  }else{
    return NaN;
  }
}

//GST

function calculateOP(data){
  if(!isNaN(data.fp) && !isNaN(data.gst)){
    return data.fp-data.gst;
  }else if(!isNaN(data.fp) && !isNaN(data.gst_per)){
    return data.fp/(1+data.gst_per/100);
  }else if(!isNaN(data.gst) && !isNaN(data.gst_per)){
    return data.gst*100/data.gst_per;
  }else{
    return NaN;
  }
}

function calculateFP(data){
  if(!isNaN(data.op) && !isNaN(data.gst)){
    return data.op+data.gst;
  }else if(!isNaN(data.op) && !isNaN(data.gst_per)){
    return data.op*(1+data.gst_per/100);
  }else if(!isNaN(data.gst) && !isNaN(data.gst_per)){
    return (data.gst*(100+data.gst_per))/data.gst_per;
  }else{
    return NaN;
  }
}

function calculateGST(data){
  if(!isNaN(data.op) && !isNaN(data.fp)){
    return data.fp-data.op;
  }else if(!isNaN(data.op) && !isNaN(data.gst_per)){
    return data.op*data.gst_per/100;
  }else if(!isNaN(data.fp) && !isNaN(data.gst_per)){
    return (data.fp*data.gst_per)/(100+data.gst_per);
  }else{
    return NaN;
  }
}

function calculateGSTPer(data){
  if(!isNaN(data.op) && !isNaN(data.fp)){
    return ((data.fp-data.op)/data.op)*100;
  }else if(!isNaN(data.op) && !isNaN(data.gst)){
    return (data.gst/data.op)*100;
  }else if(!isNaN(data.fp) && !isNaN(data.gst)){
    return (data.gst/(data.fp-data.gst))*100;
  }else{
    return NaN;
  }
}

function calculate(data){
  let know=0;
  
  if(Object.hasOwn(data, "profit")){
    for(let key in data){
      if(!isNaN(data[key])){
        know++;
      }
    }
    
    if(know<2 || know>5){
      for(let input of inputs){
        input.value="please enter 2 or 3 or 4 or 5 values";
      }
      return;
    }
    
    while(isNaN(data.cp) || isNaN(data.sp) || isNaN(data.profit) || isNaN(data.loss) || isNaN(data.profit_per) || isNaN(data.loss_per)){
    let changed=false;
    if(isNaN(data.cp)){
      data.cp=calculateCP(data);
      if(!isNaN(data.cp)){
        changed=true;
      }
    }
    if(isNaN(data.sp)){
      data.sp=calculateSP(data);
      if(!isNaN(data.sp)){
        changed=true;
      }
    }
    if(isNaN(data.profit)){
      data.profit=calculateProfit(data);
      if(!isNaN(data.profit)){
        changed=true;
      }
    }
    if(isNaN(data.loss)){
      data.loss=calculateLoss(data);
      if(!isNaN(data.loss)){
        changed=true;
      }
    }
    if(isNaN(data.profit_per)){
      data.profit_per=calculateProfitPer(data);
      if(!isNaN(data.profit_per)){
        changed=true;
      }
    }
    if(isNaN(data.loss_per)){
      data.loss_per=calculateLossPer(data);
      if(!isNaN(data.loss_per)){
        changed=true;
      }
    }
    if(changed===false){
      for(let input of inputs){
        input.value="can't determined all values from the given input";
      }
      return;
    }
  }
  return data;
  }else if(Object.hasOwn(data, "dis")){
    for(let key in data){
      if(!isNaN(data[key])){
        know++;
      }
    }
    
    if(know<2 || know>3){
      for(let input of inputs){
        input.value="please enter 2 or 3 values";
      }
      return;
    }
    
    while(isNaN(data.mp) || isNaN(data.sp) || isNaN(data.dis) || isNaN(data.dis_per)){
    let changed=false;
    if(isNaN(data.mp)){
      data.mp=calculateMP(data);
      if(!isNaN(data.mp)){
        changed=true;
      }
    }
    if(isNaN(data.sp)){
      data.sp=calculateSPDis(data);
      if(!isNaN(data.sp)){
        changed=true;
      }
    }
    if(isNaN(data.dis)){
      data.dis=calculateDiscount(data);
      if(!isNaN(data.dis)){
        changed=true;
      }
    }
    if(isNaN(data.dis_per)){
      data.dis_per=calculateDiscountPer(data);
      if(!isNaN(data.dis_per)){
        changed=true;
      }
    }
    if(changed===false){
      for(let input of inputs){
        input.value="can't determined all values from the given input";
      }
      return;
    }
  }
  return data;
  }else{
    for(let key in data){
      if(!isNaN(data[key])){
        know++;
      }
    }
    
    if(know<2 || know>3){
      for(let input of inputs){
        input.value="please enter 2 or 3 values";
      }
      return;
    }
    
    while(isNaN(data.op) || isNaN(data.fp) || isNaN(data.gst) || isNaN(data.gst_per)){
    let changed=false;
    if(isNaN(data.op)){
      data.op=calculateOP(data);
      if(!isNaN(data.op)){
        changed=true;
      }
    }
    if(isNaN(data.fp)){
      data.fp=calculateFP(data);
      if(!isNaN(data.fp)){
        changed=true;
      }
    }
    if(isNaN(data.gst)){
      data.gst=calculateGST(data);
      if(!isNaN(data.gst)){
        changed=true;
      }
    }
    if(isNaN(data.gst_per)){
      data.gst_per=calculateGSTPer(data);
      if(!isNaN(data.gst_per)){
        changed=true;
      }
    }
    if(changed===false){
      for(let input of inputs){
        input.value="can't determined all values from the given input";
      }
      return;
    }
  }
  return data;
  }
}

function displayResult(data){
  if(profitModule.classList.contains("active-module")){
    CP.value=data.cp;
    SP_pl.value=data.sp;
    profit.value=data.profit;
    loss.value=data.loss;
    profit_per.value=data.profit_per;
    loss_per.value=data.loss_per;
  }else if(discountModule.classList.contains("active-module")){
    MP.value=data.mp;
    SP_dis.value=data.sp;
    discount.value=data.dis;
    discount_per.value=data.dis_per;
  }else{
    OP.value=data.op;
    FP.value=data.fp;
    gst.value=data.gst;
    gst_per.value=data.gst_per;
  }
}

function isValid(data){
  if(profitModule.classList.contains("active-module")){
    if(!isNaN(data.cp) && data.cp<0){
      CP.value="Cost Price can't be negative";
      return true;
    }
    
    if(!isNaN(data.sp) && data.sp<0){
      SP_pl.value="Selling Price can't be negative";
      return true;
    }
    
    if(!isNaN(data.loss_per) && data.loss_per>100){
      loss_per.value="Loss% can't be greater than 100";
      return true;
    }
  }else if(discountModule.classList.contains("active-module")){
    
    if(!isNaN(data.mp) && !isNaN(data.sp) && data.sp>data.mp){
      
      MP.value="Marked Price can't be less than Selling Price";
      
      SP_dis.value="Selling Price can't be greater than Marked Price";
      
      return true;
    }
    
    if(!isNaN(data.mp) && data.mp<0){
      MP.value="Marked Price can't be negative";
      return true;
    }
    
    if(!isNaN(data.sp) && data.sp<0){
      SP_dis.value="Selling Price can't be negative";
      return true;
    }
    
    if(!isNaN(data.dis) && data.dis<0){
      discount.value="Discount can't be negative";
      return true;
    }
    
    if(!isNaN(data.dis_per) && (data.dis_per<0 || data.dis_per>100)){
      discount_per.value="Discount% can't be negative or greater than 100";
      return true;
    }
  }else{
    if(!isNaN(data.op) && !isNaN(data.fp) && data.fp<data.op){
      FP.value="Final Price can't be less than Original Price";
      
      OP.value="Original Price can't be greater than Final Price";
      
      return true;
    }
    
    if(!isNaN(data.op) && data.op<0){
      OP.value="Original Price can't be negative";
      return true;
    }
    
    if(!isNaN(data.fp) && data.fp<0){
      FP.value="Final Price can't be negative";
      return true;
    }
    
    if(!isNaN(data.gst) && data.gst<0){
      gst.value="GST can't be megative";
      return true;
    }
    
    if(!isNaN(data.gst_per) && data.gst_per<0){
      discount_per.value="GST% can't be negative";
      return true;
    }
  }
  return false;
}

function isConsistant(data, userData){
  for(let key in userData){
    if(!isNaN(userData[key])){
      
      let temp={...userData};
      temp[key]=NaN;
      
      temp=calculate(temp);
      
      if(!temp){
        return false;
      }
      
      if(temp[key].toFixed(2)!==userData[key].toFixed(2)){
        for(let input of inputs){
          input.value="Data is not Consistant";
        }
        return true;
      }
    }
  }
  return false;
}

profitTab.addEventListener("click", ()=>{
  if(profitModule.classList.contains("active-module")){
    return;
  }else{
    if(discountModule.classList.contains("active-module")){
      discountModule.classList.remove("active-module");
    }
    
    if(gstModule.classList.contains("active-module")){
      gstModule.classList.remove("active-module");
    }
  }
  
  profitModule.classList.add("active-module");
  
  profitTab.classList.add("active");
  discountTab.classList.remove("active");
  gstTab.classList.remove("active");
});

discountTab.addEventListener("click", ()=>{
  if(discountModule.classList.contains("active-module")){
    return;
  }else{
    if(profitModule.classList.contains("active-module")){
      profitModule.classList.remove("active-module");
    }
    
    if(gstModule.classList.contains("active-module")){
      gstModule.classList.remove("active-module");
    }
  }
  
  discountModule.classList.add("active-module");
  
  profitTab.classList.remove("active");
  discountTab.classList.add("active");
  gstTab.classList.remove("active");
});

gstTab.addEventListener("click", ()=>{
  if(gstModule.classList.contains("active-module")){
    return;
  }else{
    if(discountModule.classList.contains("active-module")){
      discountModule.classList.remove("active-module");
    }
    
    if(profitModule.classList.contains("active-module")){
      profitModule.classList.remove("active-module");
    }
  }
  
  gstModule.classList.add("active-module");
  
  profitTab.classList.remove("active");
  discountTab.classList.remove("active");
  gstTab.classList.add("active");
});

cal.addEventListener("click", ()=>{
  let data;
  
  if(profitModule.classList.contains("active-module")){
    data={
      cp: parseFloat(CP.value),
      sp: parseFloat(SP_pl.value),
      profit: parseFloat(profit.value),
      loss: parseFloat(loss.value),
      profit_per: parseFloat(profit_per.value),
      loss_per: parseFloat(loss_per.value)
    };
  }else if(discountModule.classList.contains("active-module")){
    data={
      mp: parseFloat(MP.value),
      sp: parseFloat(SP_dis.value),
      dis: parseFloat(discount.value),
      dis_per: parseFloat(discount_per.value)
    };
  }else{
    data={
      op: parseFloat(OP.value),
      fp: parseFloat(FP.value),
      gst: parseFloat(gst.value),
      gst_per: parseFloat(gst_per.value)
    }
  }
  
  if(isValid(data)){
    return;
  }
  
  const userData={...data};
  
  data=calculate(data);
  
  if(isConsistant(data, userData)){
    return;
  }
  
  displayResult(data);
});

clear.addEventListener("click", ()=>{
  for(let input of inputs){
    input.value="";
  }
  
  data={};
});

for(let input of inputs){
  input.addEventListener("click", ()=>{
    input.value="";
    data={};
  });
}