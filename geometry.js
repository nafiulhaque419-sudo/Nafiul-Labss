let curr="";

const two_D=document.querySelector(".twoD");
const three_D=document.querySelector(".threeD");

const input_2D=document.querySelector(".input_2d");
const input_3D=document.querySelector(".input_3d");

// 2D buttons
const circleBtn=document.querySelector("#circleBtn");
const squareBtn=document.querySelector("#squareBtn");
const rectangleBtn=document.querySelector("#rectangleBtn");
const triangleBtn=document.querySelector("#triangleBtn");

// 3D buttons
const cubeBtn=document.querySelector("#cubeBtn");
const cuboidBtn=document.querySelector("#cuboidBtn");
const sphereBtn=document.querySelector("#sphereBtn");
const hemisphereBtn=document.querySelector("#hemisphereBtn");
const cylinderBtn=document.querySelector("#cylinderBtn");
const coneBtn=document.querySelector("#coneBtn");

// 2D inputs
const circle=document.querySelector("#circle");
const square=document.querySelector("#square");
const rectangle=document.querySelector("#rectangle");
const triangle=document.querySelector("#triangle");

// 3D inputs
const cube=document.querySelector("#cube");
const cuboid=document.querySelector("#cuboid");
const sphere=document.querySelector("#sphere");
const hemisphere=document.querySelector("#hemisphere");
const cylinder=document.querySelector("#cylinder");
const cone=document.querySelector("#cone");

// inputs list

const shapes=document.querySelectorAll(".shapes");

// other variables

const cal=document.querySelector("#calculate");
const clear=document.querySelector("#clear");
const text=document.querySelector("h2");
const buttons=document.querySelector(".buttons");
const back=document.querySelector("#back");
const display=document.querySelector("#display");

function changeUI(){
  input_2D.style.display="none";
  input_3D.style.display="none";
  
  two_D.style.display="none";
  three_D.style.display="none";
  
  display.style.display="block";
  text.style.display="none";
  
  buttons.classList.add("buttons-active");
  
  back.style.display="inline-block";
}

two_D.addEventListener("click", ()=>{
  two_D.classList.add("active");
  three_D.classList.remove("active");
  
  input_2D.style.display="grid";
  input_3D.style.display="none";
});

three_D.addEventListener("click", ()=>{
  two_D.classList.remove("active");
  three_D.classList.add("active");
  
  input_3D.style.display="grid";
  input_2D.style.display="none";
});

circleBtn.addEventListener("click", ()=>{
  for(let shape of shapes){
    shape.classList.remove("active-module");
  }
  
  circle.classList.add("active-module");
  
  changeUI();
  
  curr="circle";
});

squareBtn.addEventListener("click", ()=>{
  for(let shape of shapes){
    shape.classList.remove("active-module");
  }
  
  square.classList.add("active-module");
  
  changeUI();
  
  curr="square";
});

rectangleBtn.addEventListener("click", ()=>{
  for(let shape of shapes){
    shape.classList.remove("active-module");
  }
  
  rectangle.classList.add("active-module");
  
  changeUI();
  
  curr="rectangle";
});

triangleBtn.addEventListener("click", ()=>{
  for(let shape of shapes){
    shape.classList.remove("active-module");
  }
  
  triangle.classList.add("active-module");
  
  changeUI();
  
  curr="triangle";
});

cubeBtn.addEventListener("click", ()=>{
  for(let shape of shapes){
    shape.classList.remove("active-module");
  }
  
  cube.classList.add("active-module");
  
  changeUI();
  
  curr="cube";
});

cuboidBtn.addEventListener("click", ()=>{
  for(let shape of shapes){
    shape.classList.remove("active-module");
  }
  
  cuboid.classList.add("active-module");
  
  changeUI();
  
  curr="cuboid";
});

sphereBtn.addEventListener("click", ()=>{
  for(let shape of shapes){
    shape.classList.remove("active-module");
  }
  
  sphere.classList.add("active-module");
  
  changeUI();
  
  curr="sphere";
});

hemisphereBtn.addEventListener("click", ()=>{
  for(let shape of shapes){
    shape.classList.remove("active-module");
  }
  
  hemisphere.classList.add("active-module");
  
  changeUI();
  
  curr="hemisphere";
});

cylinderBtn.addEventListener("click", ()=>{
  for(let shape of shapes){
    shape.classList.remove("active-module");
  }
  
  cylinder.classList.add("active-module");
  
  changeUI();
  
  curr="cylinder";
});

coneBtn.addEventListener("click", ()=>{
  for(let shape of shapes){
    shape.classList.remove("active-module");
  }
  
  cone.classList.add("active-module");
  
  changeUI();
  
  curr="cone";
});

back.addEventListener("click", ()=>{
  if(two_D.classList.contains("active")){
    input_2D.style.display="grid";
  }else{
    input_3D.style.display="grid";
  }
  
  two_D.style.display="block";
  three_D.style.display="block";
  
  display.style.display="none";
  text.style.display="inline";
  
  buttons.classList.remove("buttons-active");
  
  back.style.display="none";
  
  for(let shape of shapes){
    shape.classList.remove("active-module");
  }
  
  curr="";
});

// Functions

function calCircle(radius){
  const circumference=(2*Math.PI*radius).toFixed(2);
  
  const area=(Math.PI*radius*radius).toFixed(2);
  
  return{
    circumference,
    area
  };
}

function calSquare(side){
  const perimeter=(4*side).toFixed(2);
  
  const area=(side**2).toFixed(2);
  
  return{
    perimeter,
    area
  };
}

function calRectangle(length, breadth){
  const perimeter=(2*(length+breadth)).toFixed(2);
  
  const area=(length*breadth).toFixed(2);
  
  return{
    perimeter,
    area
  };
}

function calTriangle(side_1, side_2, side_3, height, base){
  
  const perimeter=(side_1+side_2+side_3).toFixed(2);
  
  let area=0;
  
  if(isNaN(height) && isNaN(base)){
    let s=perimeter/2;
    
    area=(Math.sqrt(s*(s-side_1)*(s-side_2)*(s-side_3))).toFixed(2);
  }else{
    area=((1/2)*height*base).toFixed(2);
  }
  
  return{
    perimeter,
    area
  };
}

function calCube(side){
  const totalSurfaceArea=(6*side**2).toFixed(2);
  
  const laterelSurfaceArea=(4*side**2).toFixed(2);
  
  const volume=(side**3).toFixed(2);
  
  return{
    totalSurfaceArea,
    laterelSurfaceArea,
    volume
  };
}

function calCuboid(l, b, h){
  const totalSurfaceArea=(2*(l*b + b*h + l*h)).toFixed(2); 
  
  const laterelSurfaceArea=(2*(l+b)*h).toFixed(2);
  
  const volume=(l*b*h).toFixed(2);
  
  return{
    totalSurfaceArea,
    laterelSurfaceArea,
    volume
  };
}

function calSphere(radius){
  const surfaceArea=(4*Math.PI*radius**2).toFixed(2);
  
  const volume=((4/3)*Math.PI*radius**3).toFixed(2);
  
  return{
    surfaceArea,
    volume
  };
}

function calHemisphere(radius){
  const totalSurfaceArea=(3*Math.PI*radius**2).toFixed(2);
  
  const laterelSurfaceArea=(2*Math.PI*radius**2).toFixed(2);
  
  const volume=((2/3)*Math.PI*radius**3).toFixed(2);
  
  return{
    totalSurfaceArea,
    laterelSurfaceArea,
    volume
  };
}

function calCylinder(radius, height){
  const totalSurfaceArea=(2*Math.PI*radius*(radius+height)).toFixed(2);
  
  const laterelSurfaceArea=(2*Math.PI*radius*height).toFixed(2);
  
  const volume=(Math.PI*radius**2*height).toFixed(2);
  
  return{
    totalSurfaceArea,
    laterelSurfaceArea,
    volume
  };
}

function calCone(radius, height){
  const l=Math.sqrt(height**2+radius**2);
  
  const totalSurfaceArea=(Math.PI*radius*(radius+l)).toFixed(2);
  
  const laterelSurfaceArea=(Math.PI*radius*l).toFixed(2);
  
  const volume=((1/3)*Math.PI*radius**2*height).toFixed(2);
  
  return{
    totalSurfaceArea,
    laterelSurfaceArea,
    volume
  };
}

function calculate(){
  switch (curr) {
    case "circle":
      var radius=parseFloat(document.querySelector("#circle_radius").value);
      
      if(isNaN(radius)){
        var diameter=parseFloat(document.querySelector("#circle_diameter").value);
        radius=diameter/2;
      }
      
      if(isNaN(radius) && isNaN(diameter)){
        display.innerText="Please Enter eighter radius or diameter";
        return;
      }
      
      data=calCircle(radius);
      
      return data;

    case "square":
      var side=parseFloat(document.querySelector("#square_side").value);
      
      if(isNaN(side)){
        display.innerText="Please Enter the value of side";
        return;
      }
      
      data=calSquare(side);
      
      return data;

    case "rectangle":
      var length=parseFloat(document.querySelector("#rectangle_length").value);
      
      var breadth=parseFloat(document.querySelector("#rectangle_breadth").value);
      
      if(isNaN(length) || isNaN(breadth)){
        display.innerText="Please Enter length and breadth";
        return;
      }
      
      data=calRectangle(length, breadth);
      
      return data;

    case "triangle":
      var side_1=parseFloat(document.querySelector("#triangle_side_1").value);
      
      var side_2=parseFloat(document.querySelector("#triangle_side_2").value);
      
      var side_3=parseFloat(document.querySelector("#triangle_side_3").value);
      
      var height=parseFloat(document.querySelector("#triangle_height").value);
      
      var base=parseFloat(document.querySelector("#triangle_base").value);
      
      if((isNaN(side_1) ||  isNaN(side_2) ||  isNaN(side_3)) && (isNaN(height) ||  isNaN(base))){
        display.innerText="Please Enter eighter all sides or height and base";
        return;
      }
      
      data=calTriangle(side_1, side_2, side_3, height, base);
      
      return data;

    case "cube":
      var side=parseFloat(document.querySelector("#cube_side").value);
      
      if(isNaN(side)){
        display.innerText="Please Enter the value of side";
        return;
      }
      
      data=calCube(side);
      
      return data;

    case "cuboid":
      var length=parseFloat(document.querySelector("#cuboid_length").value);
      
      var breadth=parseFloat(document.querySelector("#cuboid_breadth").value);
      
      var height=parseFloat(document.querySelector("#cuboid_height").value);
      
      if(isNaN(length) || isNaN(breadth)){
        display.innerText="Please Enter length and breadth";
        return;
      }
      
      data=calCuboid(length, breadth, height);
      
      return data;

    case "sphere":
      var radius=parseFloat(document.querySelector("#sphere_radius").value);
      
      if(isNaN(radius)){
        var diameter=parseFloat(document.querySelector("#sphere_diameter").value);
        radius=diameter/2;
      }
      
      if(isNaN(radius) && isNaN(diameter)){
        display.innerText="Please Enter eighter radius or diameter";
        return;
      }
      
      data=calSphere(radius);
      
      return data;

    case "hemisphere":
      var radius=parseFloat(document.querySelector("#hemisphere_radius").value);
      
      if(isNaN(radius)){
        var diameter=parseFloat(document.querySelector("#hemisphere_diameter").value);
        radius=diameter/2;
      }
      
      if(isNaN(radius) && isNaN(diameter)){
        display.innerText="Please Enter eighter radius or diameter";
        return;
      }
      
      data=calHemisphere(radius);
      
      return data;

    case "cylinder":
      var radius=parseFloat(document.querySelector("#cylinder_radius").value);
      
      var height=parseFloat(document.querySelector("#cylinder_height").value);
      
      if(isNaN(radius) || isNaN(height)){
        display.innerText="Please Enter radius and height";
        return;
      }
      
      data=calCylinder(radius, height);
      
      return data;

    case "cone":
      var radius=parseFloat(document.querySelector("#cone_radius").value);
      
      var height=parseFloat(document.querySelector("#cone_height").value);
      
      if(isNaN(height) || isNaN(radius)){
        display.innerText="Please Enter radius and height";
        return;
      }
      
      data=calCone(radius, height);
      return data;

    default:
      return;
  }
}

function displayResult(data){
  switch (curr) {
  case "circle":
    display.innerHTML=`Circumference = ${data.circumference}<br><br>
    Area = ${data.area}`;
    break;

  case "square":
    display.innerHTML=`Perimeter = ${data.perimeter}<br><br>
    Area = ${data.area}`;
    break;

  case "rectangle":
    display.innerHTML=`Perimeter = ${data.perimeter}<br><br>
    Area = ${data.area}`;
    break;

  case "triangle":
    display.innerHTML=`Perimeter = ${data.perimeter}<br><br>
    Area = ${data.area}`;
    break;

  case "cube":
    display.innerHTML=`Total Surface Area = ${data.totalSurfaceArea}<br><br>
    Laterel Surface Area = ${data. laterelSurfaceArea}<br><br>
    Volume = ${data.volume}`;
    break;

  case "cuboid":
    display.innerHTML=`Total Surface Area = ${data.totalSurfaceArea}<br>
    Laterel Surface Area = ${data.laterelSurfaceArea}<br><br>
    Volume = ${data.volume}`;
    break;

  case "sphere":
    display.innerHTML=`Surface Area = ${data.surfaceArea}<br><br>
    Volume = ${data.volume}`;
    break;

  case "hemisphere":
    display.innerHTML=`Total Surface Area = ${data.totalSurfaceArea}<br><br>
    Laterel Surface Area = ${data.laterelSurfaceArea}<br><br>
    Volume = ${data.volume}`;
    break;

  case "cylinder":
    display.innerHTML=`Total Surface Area = ${data.totalSurfaceArea}<br><br>
    Laterel Surface Area = ${data.laterelSurfaceArea}<br><br>
    Volume = ${data.volume}`;
    break;

  case "cone":
    display.innerHTML=`Total Surface Area = ${data.totalSurfaceArea}<br><br>
    Laterel Surface Area = ${data.laterelSurfaceArea}<br><br>
    Volume = ${data.volume}`;
    break;

  default:
    return;
  }
}

cal.addEventListener("click", ()=>{
  if(curr===""){
    return;
  }
  
  let data=calculate();
  
  displayResult(data);
});

clear.addEventListener("click", ()=>{
  data={};
  
  document.querySelectorAll("input").forEach(input=>{
    input.value="";
  });
  
  display.innerHTML="";
});
