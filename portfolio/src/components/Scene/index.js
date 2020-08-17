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

    const createImage = (text, width, height, color) => {
      let drawing = document.createElement("canvas");
      drawing.width = width;
      drawing.height = height;
      let ctx = drawing.getContext("2d");
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, width, height);
      ctx.beginPath();
      ctx.arc(width/2, height/2, 20, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "#222222";
      const testFontSize = defaultWidth * 0.03;
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

  var ballA = Bodies.circle(210, 100, 30, { restitution: 0.5 });
  var ballB = Bodies.circle(110, 50, 30, { restitution: 0.5 });
  var drag = Bodies.circle(defaultWidth*0.7, defaultHeight*0.78, defaultWidth*0.03, {
    restitution: 0.3,
    render: {
      sprite: {
          texture: createImage("Drag~", defaultWidth*0.12, defaultWidth*0.06, pink)
      }
    }
  });

  var click = Bodies.circle(defaultWidth*0.2, defaultHeight*0.5, defaultWidth*0.032, {
    restitution: 0.3,
    render: {
      sprite: {
        texture: createImage("Click Me!", defaultWidth*0.16, defaultWidth*0.064, pink)
    }
    }
  });

  World.add(engine.world, [ballA, ballB, drag, click]);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      });

    World.add(engine.world, mouseConstraint);

    const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

    Matter.Events.on(mouseConstraint, "mousedown", function(event) {
      World.add(engine.world, Bodies.circle(getRandomInt(defaultWidth), 50, 30, 
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