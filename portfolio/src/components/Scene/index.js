import React from "react";
import Matter from "matter-js";
import './styles.scss';
import Pinky from '../../assets/imgs/pinky.gif'

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
    // const defaultWidth = 500;
    // const defaultHeight = 500;
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

    const createImage = (string) => {
      let drawing = document.createElement("canvas");
      drawing.width = '150'
      drawing.height = '150';
      let ctx = drawing.getContext("2d");
      ctx.fillStyle = "#FFB7C9";
      ctx.beginPath();
      ctx.arc(75, 75, 20, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "#222222";
      ctx.font = "36pt CMW90-Cut-Out-Linear";
      ctx.textAlign = "center";
      ctx.fillText(string, 75, 85);
      
      return drawing.toDataURL("image/png");
    }

    const borderThickness = 64;
    const gravity = 0

    engine.world.gravity.y = gravity;

    World.add(engine.world, [
      Bodies.rectangle(defaultWidth / 2, 0, defaultWidth, borderThickness, { isStatic: true }), // top
      Bodies.rectangle(defaultWidth / 2, defaultHeight, defaultWidth, borderThickness, { isStatic: true }), // bottom
      Bodies.rectangle(defaultWidth, defaultHeight / 2, borderThickness, defaultHeight, { isStatic: true }), // right
      Bodies.rectangle(0, defaultHeight / 2, borderThickness, defaultHeight, { isStatic: true }) // left
  ]);

  var blue = Bodies.rectangle(253, 95, 244, 35, {
    restitution: 0.5,
    render: {
      fillStyle: '#ff0000',
      sprite: {
        texture: 'https://workbypost.com/miles/2blue.png'
      }
    }
  });

  var ballA = Bodies.circle(210, 100, 30, { restitution: 0.5 });
  var ballB = Bodies.circle(110, 50, 30, { restitution: 0.5 });
  var testText = Bodies.circle(100, 100, 100, {
    render: {
      sprite: {
          texture: createImage("In Dev"),
          xScale: 1,
          yScale: 1
      }
    }
  });

  World.add(engine.world, [blue, ballA, ballB, testText]);

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