

var s
var m
var st

function setup() {
  createCanvas(680,360);
  //call the functions on the sun and moon objects
  s = new Sun();
  m = new Moon();
  //call the functions to create a field of stars. TODO: figure out a better way to propagate stars.
  st = new Star();
  st0 = new Star();
  st1 = new Star();
  st2 = new Star();
  st3 = new Star();
  st4 = new Star();
  st5 = new Star();
  st6 = new Star();
  st7 = new Star();
  st8 = new Star();
  st9 = new Star();
  st10 = new Star();
  st11 = new Star(); 
  st12 = new Star();
  st13 = new Star();
  st14 = new Star();
  st15 = new Star();
  st16 = new Star();
  sh = new shootingStars();          
}
//set the original background
function draw() {
  background(0, 35, 135);
  //run the sun functions on startup
  s.display();
  s.set();
}
//create a constructor for the sun and a function to set the sun  
function Sun() {
//physics engine for the sun	
  this.pos = createVector(width/2,100);
  this.vel = createVector(0,1);
  //note: accelerator isn't stricly necessary for current flow, but adding it here so I can experiment with the arc of the sunset
  this.acc = createVector(0);

  this.set = function() {

    this.pos.add(this.vel);
    this.vel.add(this.acc);
 //logic to shift from day to night and trigger moonrise when the sun fully sets   
    if (this.pos.y > height)  {
      background(0,0,0);
      m.display();
      m.rise();	
    }
  };

  this.display = function() {
  	fill(255, 156, 0);	
    ellipse(this.pos.x, this.pos.y, 150, 150);
  }
}
//create the Moon and a function for a moonrise
function Moon() {
//physics engine for Moon	
  this.pos = createVector(width/2, 350);
  this.vel = createVector(0, -1);
  this.rise = function() {
	this.pos.add(this.vel);
//logic to only show the stars when the moon has reached its zenith
	if (this.pos.y < 100) {
	  this.pos = createVector(width/2, 100);
	  //call the functions to display the field of stars. see above TODO
      st.display();
      st.twinkle();
      st0.display();
      st0.twinkle();
      st1.display();
      st1.twinkle();
      st2.display();
      st2.twinkle();
      st3.display();
      st3.twinkle();           
      st4.display();
      st4.twinkle();  
      st5.display();
      st5.twinkle();
      st6.display();
      st6.twinkle();
      st7.display();
      st7.twinkle();  
      st8.display();
      st8.twinkle();
      st9.display();
      st9.twinkle();  
      st10.display();
      st10.twinkle();
      st11.display();
      st11.twinkle();
      st12.display();
      st12.twinkle();
      st13.display();
      st13.twinkle();
      st14.display();
      st14.twinkle();
      st15.display();
      st15.twinkle(); 
      st16.display();
      st16.twinkle();
      sh.starshower();

	}
}
//constructor function for the moon itself
  this.display = function(){
  	fill(255);
    ellipse(this.pos.x, this.pos.y, 140, 140);
   }
}
//call functions to create a starshower
function shootingStars() {
  this.starshower = function() {
    st5.shootright();
    st14.shootdown();
    st12.shootdown();    
    st8.shootupward();
    st6.shootupward(); 
    st2.shootdown(); 
    st.shootleft();    
  }
}
//create a constructor for each star
function Star() {
//physics engine for Stars, detail explanation below:	
//vector to position the stars randomly in the sky	
  this.pos = createVector(random(0,width), random(0,height));
//vector to give the stars their initial motion
  this.vel = createVector(-1,1);
  //vector for the upward motion of a shooting star
  this.upvel = createVector(-10,0);
  //vector for the downward motion of a shooting star
  this.downvel = createVector(0,10);
  //vector for a generic acceleration of shooting stars
  this.acc = createVector(0,2);
  //vector for the acceleration to the left of a shooting star
  this.leftacc = createVector(random(-1,0));
  //vector for the acceleration to the right of a shooting star
  this.rightacc = createVector(random(0,1));
  //add the twinkle function
  this.twinkle = function() {
    this.pos.x = this.pos.x + random(-1,1)
  }
//create functions for shooting motion in various directions
  this.shootright = function() {
  	this.pos.add(this.vel);
  	this.vel.add(this.rightacc);
  }
  this.shootleft = function() {
  	this.pos.add(this.vel);
    this.vel.add(this.leftacc);
  }
  this.shootdown = function() {
  	this.pos.add(this.downvel);
  }
  this.shootupward = function() {
  	this.pos.add(this.upvel);
  }
  //constructor for the star itself
  this.display = function() {
  	fill(255);
    ellipse(this.pos.x, this.pos.y, 5, 5);
  }	
}
  
  
