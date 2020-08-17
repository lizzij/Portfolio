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
        background: '#6c757d'
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
      ctx.font = "36pt CMW90-Cut-Out-Linear";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, width/2, height/2);
      
      return drawing.toDataURL("image/png");
    }

    const borderThickness = 64;
    const gravity = 0
    const pink = "#FFB7C9";

    engine.world.gravity.y = gravity;

    World.add(engine.world, [
      Bodies.rectangle(defaultWidth / 2, 0, defaultWidth, borderThickness, { isStatic: true }), // top
      Bodies.rectangle(defaultWidth / 2, defaultHeight, defaultWidth, borderThickness, { isStatic: true }), // bottom
      Bodies.rectangle(defaultWidth, defaultHeight / 2, borderThickness, defaultHeight, { isStatic: true }), // right
      Bodies.rectangle(0, defaultHeight / 2, borderThickness, defaultHeight, { isStatic: true }) // left
  ]);

  var ballA = Bodies.circle(210, 100, 30, { restitution: 0.5 });
  var ballB = Bodies.circle(110, 50, 30, { restitution: 0.5 });
  var testText = Bodies.circle(defaultWidth*0.7, defaultHeight*0.78, 100, {
    render: {
      sprite: {
          texture: createImage("Drag~", 180, 90, pink),
          xScale: 1,
          yScale: 1
      }
    }
  });

  var ball1 = Bodies.circle(defaultWidth*0.2, defaultHeight*0.5, 80, {
    restitution: 0.5,
    render: {
      fillStyle: pink,
      sprite: {
        texture: createImage("Click Me!", 240, 90, pink),
        xScale: 1,
        yScale: 1
    }
    }
  });

  World.add(engine.world, [ball1, ballA, ballB, testText]);

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

    Matter.Events.on(mouseConstraint, "mousedown", function(event) {
      World.add(engine.world, Bodies.circle(150, 50, 30, { restitution: 0.7 }));
    });

    Engine.run(engine);
    Render.run(render);
  }

  render() {
    return <div ref={this.sceneRef}></div>;
  }
}
export default Scene;