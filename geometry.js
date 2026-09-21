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
const sectorBtn=document.querySelector("#sectorBtn");
const segmentBtn=document.querySelector("#segmentBtn");
const trapeziumBtn=document.querySelector("#trapeziumBtn");
const poligeonBtn=document.querySelector("#poligeonBtn");

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
const sector=document.querySelector("#sector");
const segment=document.querySelector("#segment");
const trapezium=document.querySelector("#trapezium");
const poligeon=document.querySelector("#poligeon");

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
const text=document.querySelectorAll("h2");
const buttons=document.querySelector(".buttons");
const back=document.querySelector("#back");
const display=document.querySelector("#display");
const confirm=document.querySelector("#confirm");
const pointIn=document.querySelector("#point_In");
const guide = document.querySelector("#guide");


function changeUI(){
  input_2D.style.display="none";
  input_3D.style.display="none";
  
  two_D.style.display="none";
  three_D.style.display="none";
  
  display.style.display="block";
  
  for(let t of text){
    t.style.display="none";
  }
  
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

// circle 

circleBtn.addEventListener("click", ()=>{
  for(let shape of shapes){
    shape.classList.remove("active-module");
  }
  
  circle.classList.add("active-module");
  
  changeUI();
  
  curr="circle";
});

// square 

squareBtn.addEventListener("click", ()=>{
  for(let shape of shapes){
    shape.classList.remove("active-module");
  }
  
  square.classList.add("active-module");
  
  changeUI();
  
  curr="square";
});

// rectangle 

rectangleBtn.addEventListener("click", ()=>{
  for(let shape of shapes){
    shape.classList.remove("active-module");
  }
  
  rectangle.classList.add("active-module");
  
  changeUI();
  
  curr="rectangle";
});

// triangle 

triangleBtn.addEventListener("click", ()=>{
  for(let shape of shapes){
    shape.classList.remove("active-module");
  }
  
  triangle.classList.add("active-module");
  
  changeUI();
  
  curr="triangle";
});

// Sector

sectorBtn.addEventListener("click", ()=>{
  for(let shape of shapes){
    shape.classList.remove("active-module");
  }
  
  sector.classList.add("active-module");
  
  changeUI();
  
  curr="sector";
});

// segment 

segmentBtn.addEventListener("click", ()=>{
  for(let shape of shapes){
    shape.classList.remove("active-module");
  }
  
  segment.classList.add("active-module");
  
  changeUI();
  
  curr="segment";
});

// Trapezium 

trapeziumBtn.addEventListener("click", ()=>{
  for(let shape of shapes){
    shape.classList.remove("active-module");
  }
  
  trapezium.classList.add("active-module");
  
  changeUI();
  
  curr="trapezium";
});

// Polygon 

poligeonBtn.addEventListener("click", ()=>{
  for(let shape of shapes){
    shape.classList.remove("active-module");
  }
  
  poligeon.classList.add("active-module");
  
  changeUI();
  
  curr="poligeon";
});

confirm.addEventListener("click", ()=>{
  pointIn.innerHTML="";
  guide.style.display="block";
  let count= parseFloat(document.querySelector("#side_num").value)
  
  if(count<3){
    return;
  }
  
  for(let i=0; i<count; i++){
    
    let x=document.createElement("input");
    
    let y=document.createElement("input"); 
    x.type="number";
    y.type="number";
    
    x.classList.add("x_cor");
    y.classList.add("y_cor"); 
    
    x.placeholder=`point ${i+1} x coordinate: `
    y.placeholder=`point ${i+1} y coordinate: ` 
    
    pointIn.appendChild(x);
    pointIn.appendChild(y); 
    pointIn.appendChild(document.createElement("br"));
  }
  
  confirm.style.display="none";
  document.querySelector("#side_num").style.display="none";
});

// cube 

cubeBtn.addEventListener("click", ()=>{
  for(let shape of shapes){
    shape.classList.remove("active-module");
  }
  
  cube.classList.add("active-module");
  
  changeUI();
  
  curr="cube";
});

// cuboid 

cuboidBtn.addEventListener("click", ()=>{
  for(let shape of shapes){
    shape.classList.remove("active-module");
  }
  
  cuboid.classList.add("active-module");
  
  changeUI();
  
  curr="cuboid";
});

// sphere 

sphereBtn.addEventListener("click", ()=>{
  for(let shape of shapes){
    shape.classList.remove("active-module");
  }
  
  sphere.classList.add("active-module");
  
  changeUI();
  
  curr="sphere";
});

// hemisphere 

hemisphereBtn.addEventListener("click", ()=>{
  for(let shape of shapes){
    shape.classList.remove("active-module");
  }
  
  hemisphere.classList.add("active-module");
  
  changeUI();
  
  curr="hemisphere";
});

// cylinder 

cylinderBtn.addEventListener("click", ()=>{
  for(let shape of shapes){
    shape.classList.remove("active-module");
  }
  
  cylinder.classList.add("active-module");
  
  changeUI();
  
  curr="cylinder";
});

// cone

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
  for (let t of text) {
    t.style.display = "inline";
  }
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
  
  if((side_1+side_2)<=side_3 || (side_2+side_3)<=side_1  || (side_3+side_1)<=side_2){
    display.innerText="Inconsistent values";
      return;
  }
  
  const perimeter=(side_1+side_2+side_3).toFixed(2);
  
  let area;
  
  let area1;
  let area2;
  
  let s=perimeter/2;
    
  area1=(Math.sqrt(s*(s-side_1)*(s-side_2)*(s-side_3))).toFixed(2);
  
  
  area2=((1/2)*height*base).toFixed(2);
  
  if(!(isNaN(side_1) || isNaN(side_2) || isNaN(side_3) || isNaN(height) || isNaN(base))){
    
    if(Math.abs(area1 - area2) > 0.000001){
      display.innerText="Inconsistent values";
      return;
    }
  }
  
  if(!isNaN(area1)){
    area=area1;
  }else{
    area=area2;
  }
  
  return{
    perimeter,
    area
  };
}

function calSector(radius, angle) {
  const perimeter=(angle/360*2*Math.PI*radius+2*radius).toFixed(2);
  
  const area=(angle/360*Math.PI*radius*radius).toFixed(2);
  
  return{
    perimeter,
    area
  };
}

function calSegment(radius, angle, chord) {
  const perimeter=(angle/360*2*Math.PI*radius+chord).toFixed(2);
  
  const area=(angle/360*Math.PI*radius*radius-(chord/4*Math.sqrt(4*radius**2-chord**2))).toFixed(2);
  
  return{
    perimeter,
    area
  };
}

function calTrapezium(p1, p2, h) {
  const area=(1/2*(p1+p2)*h).toFixed(2);
  
  return area;
}

function calDist(x1, y1, x2, y2) {
  return Math.sqrt((x1-x2)**2+(y1-y2)**2);
}

function calPolygon(xcor, ycor) {
  
  let perimeter=calDist(xcor[xcor.length-1], ycor[ycor.length-1], xcor[0], ycor[0]);
  
  for(let i=1; i<xcor.length; i++){
    let p=calDist(xcor[i-1], ycor[i-1], xcor[i], ycor[i]);
    perimeter+=p;
  }
  perimeter=perimeter.toFixed(2);
  
  let sum1=xcor[xcor.length-1]*ycor[0];
  let sum2=ycor[ycor.length-1]*xcor[0]; 
  
  for(let i=1; i<xcor.length; i++){
    let temp1=xcor[i-1]*ycor[i];
    let temp2=ycor[i-1]*xcor[i];
    
    sum1+=temp1;
    sum2+=temp2;
  }
  
  let area=(Math.abs(sum1-sum2)/2).toFixed(2);
  
  
  
  return {
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
      
      if(isNaN(side_1) ||  isNaN(side_2) ||  isNaN(side_3)){
        display.innerHTML=`Area = ${data.area}`;
        return ;
      }
      
      return data;
    
    case "sector":
      
      var radius=parseFloat(document.querySelector("#sector_radius").value);
      
      var angle=parseFloat(document.querySelector("#sector_angle").value); 
      if(isNaN(radius) || isNaN(angle)){
        display.innerText="Please Enter the value of radius and angle";
        return;
      }
      
      data=calSector(radius, angle);
      
      return data;
      
    case "segment":
      
      var radius=parseFloat(document.querySelector("#segment_radius").value);
      
      var angle=parseFloat(document.querySelector("#segment_angle").value); 
      
      var chord=parseFloat(document.querySelector("#segment_chord").value);
      
      if(isNaN(radius) || isNaN(angle) || isNaN(chord)){
        display.innerText="Please Enter the value of radius, angle and chord";
        return;
      }
      
      data=calSegment(radius, angle, chord);
      
      if(data.area<0 || isNaN(data.area)){
        display.innerText="Inconsistent values";
        return;
      }
      
      return data; 
    
    case "trapezium":
      
      var p1=parseFloat(document.querySelector("#trapezium_p1").value);
      
      var p2=parseFloat(document.querySelector("#trapezium_p2").value); 
      
      var h=parseFloat(document.querySelector("#trapezium_height").value);
      
      if(isNaN(p1) || isNaN(p2) || isNaN(h)){
        display.innerText="Please Enter the values of parellal sides and height";
        return;
      }
      
      data=calTrapezium(p1, p2, h);
      
      return data; 
      
    case "poligeon" :
      
      const xs=document.querySelectorAll(".x_cor");
      const ys=document.querySelectorAll(".y_cor");
      
      let xcor=[];
      let ycor=[];
      
      for(let i=0; i<xs.length; i++){
        let x=parseFloat(xs[i].value);
        let y=parseFloat(ys[i].value);
        
        xcor.push(x);
        ycor.push(y);
      }
      
      data=calPolygon(xcor, ycor);
      
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
      
      if(isNaN(length) || isNaN(breadth) || isNaN(height)){
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
  
  case "sector":
    display.innerHTML=`Perimeter = ${data.perimeter}<br><br>
    Area = ${data.area}`;
    break;

  case "segment":
    display.innerHTML=`Perimeter = ${data.perimeter}<br><br>
    Area = ${data.area}`;
    break;
  
  case "trapezium":
    display.innerHTML=`
    Area = ${data}`;
    break; 
  
  case "poligeon":
    display.innerHTML=`Perimeter = ${data.perimeter}<br><br>
    Area = ${data.area}`;
    break;

  case "cube":
    display.innerHTML=`Total Surface Area = ${data.totalSurfaceArea}<br><br>
    Laterel Surface Area = ${data.laterelSurfaceArea}<br><br>
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
