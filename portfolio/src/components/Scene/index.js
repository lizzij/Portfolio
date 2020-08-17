import React from "react";
import Matter from "matter-js";
import './styles.scss';

class Scene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.sceneRef = React.createRef();
  }

  componentDidMount() {
    var Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Constraint = Matter.Constraint,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint;

    var engine = Engine.create({
    });
    

    const defaultWidth = window.innerWidth;
    const defaultHeight = window.innerHeight;
    var render = Render.create({
      element: this.sceneRef.current,
      engine: engine,
      options: {
        width: defaultWidth,
        height: defaultHeight,
        wireframes: false,
        background: '#f4f4f4'
      }
    });

    const createImage = (text, width, height, color='#f4f4f4') => {
      let drawing = document.createElement("canvas");
      drawing.width = width;
      drawing.height = height;
      let ctx = drawing.getContext("2d");
      ctx.fillStyle = color;
      if (color !== '#f4f4f4') ctx.fillRect(0, 0, width, height);
      ctx.beginPath();
      ctx.arc(width/2, height/2, 20, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "#222222";
      const testFontSize = defaultWidth * 0.05;
      ctx.font = `${testFontSize}px CMW90-Cut-Out-Linear`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, width/2, height/2);
      
      return drawing.toDataURL("image/png");
    }

    const borderThickness = Math.min(64, 0.04 * defaultWidth);
    const gravity = 0
    const pink = "#FFB7C9";

    engine.world.gravity.y = gravity;

    World.add(engine.world, [
      Bodies.rectangle(defaultWidth / 2, 0, defaultWidth, borderThickness, 
        { isStatic: true, render: {fillStyle: "f4f4f4"}}), // top
      Bodies.rectangle(defaultWidth / 2, defaultHeight, defaultWidth, borderThickness, 
        { isStatic: true, render: {fillStyle: "f4f4f4"}}), // bottom
      Bodies.rectangle(defaultWidth, defaultHeight / 2, borderThickness, defaultHeight, 
        { isStatic: true, render: {fillStyle: "f4f4f4"}}), // right
      Bodies.rectangle(0, defaultHeight / 2, borderThickness, defaultHeight, 
        { isStatic: true, render: {fillStyle: "f4f4f4"}}) // left
    ]);

    var drag = Bodies.circle(defaultWidth*0.7, defaultHeight*0.78, defaultWidth*0.08, {
      restitution: 0.3,
      render: {
        sprite: {
            texture: createImage("Drag~", defaultWidth*0.18, defaultWidth*0.08, pink)
        }
      }
    });

    var click = Bodies.circle(defaultWidth*0.3, defaultHeight*0.5, defaultWidth*0.08, {
      restitution: 0.3,
      render: {
        sprite: {
          texture: createImage("Click me!", defaultWidth*0.25, defaultWidth*0.08, pink)
      }
      }
    });

    var ballA = Bodies.circle(defaultWidth*0.3, defaultWidth*0.3, defaultWidth*0.04, { restitution: 0.5 });
    var ballB = Bodies.circle(defaultWidth*0.1, defaultWidth*0.9, defaultWidth*0.04, { restitution: 0.5 });
    var ballC = Bodies.circle(defaultWidth*0.9, defaultWidth*0.7, defaultWidth*0.04, { restitution: 0.5 });

    const textToShape = (text, width=defaultWidth*0.09, x, y) => 
      Bodies.rectangle(x, y, width, defaultHeight*0.4, {
        restitution: 0.2,
        render: {
          sprite: {
            texture: createImage(text, width, defaultWidth*0.06)
        }
      }}
    );

    const hi = textToShape('Hi', defaultWidth*0.06, defaultWidth*0.3, defaultHeight*0.2);
    const name = textToShape('I\'m Eliza', defaultWidth*0.22, defaultWidth*0.3, defaultHeight*0.2);

    var constraint = Constraint.create({
        bodyA: hi,
        pointA: { x: defaultWidth*0.03, y: 0 },
        bodyB: name,
        pointB: { x: -defaultWidth*0.11, y: 0 },
        stiffness: 0.5,
        damping: 0.9,
        render: { strokeStyle: '#222222' }
    });

    const neu = textToShape('an undergrad at NEU', defaultWidth*0.5, defaultWidth*0.4, defaultHeight*0.3);
    const cs = textToShape('majoring in CS', defaultWidth*0.38, defaultWidth*0.38, defaultHeight*0.33)
    const hms = textToShape('now swe intern at HMS', defaultWidth*0.58, defaultWidth*0.36, defaultHeight*0.4);
    const grad = textToShape('graduating may 2021', defaultWidth*0.48, defaultWidth*0.4, defaultHeight*0.5);
    

    World.add(engine.world, [ballA, ballB, ballC, drag, click, 
      hi, name, constraint, 
      neu, cs, hms, grad]);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.1,
          render: {
            visible: false
          }
        }
      }
    );

    World.add(engine.world, mouseConstraint);

    const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

    Matter.Events.on(mouseConstraint, "mousedown", function(event) {
      World.add(engine.world, Bodies.circle(getRandomInt(defaultWidth), 50, defaultWidth*0.04, 
      { restitution: 0.7 }));
    });

    Engine.run(engine);
    Render.run(render);
  }

  render() {
    return <div ref={this.sceneRef}></div>;
  }
}
export default Scene;