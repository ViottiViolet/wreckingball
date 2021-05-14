const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var pig1,pig3;
var backgroundImg,platform;
var box1, box2, box3, box4, box5, slingshot, ground;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200, 600, 1200, 20)
    box1 = new Box(200, 100, 70, 70);
    box2 = new Box(250, 250, 50, 50);
    box3 = new Box(350, 250, 50, 50);
    box4 = new Box(270, 200, 50, 50);
    box5 = new Box(330, 200, 50, 50);
}

function draw(){
    background("white")
    Engine.update(engine);

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
}