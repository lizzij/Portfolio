import React from "react";
import Matter from "matter-js";

class Scene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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

    var render = Render.create({
      element: this.refs.scene,
      engine: engine,
      options: {
        width: 600,
        height: 600,
        wireframes: false
      }
    });

    const createImage = (string) => {

      let drawing = document.createElement("canvas");
  
      drawing.width = '150'
      drawing.height = '150'
  
      let ctx = drawing.getContext("2d");
  
      ctx.fillStyle = "blue";
      //ctx.fillRect(0, 0, 150, 150);
      ctx.beginPath();
      ctx.arc(75, 75, 20, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.font = "20pt sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(string, 75, 85);
  
      return drawing.toDataURL("image/png");
    }

    var ballA = Bodies.circle(210, 100, 30, { restitution: 0.5 });
    var ballB = Bodies.circle(110, 50, 30, { restitution: 0.5 });
    const x = 100;
    const y = 100;
    const circleSize = 100;
    var testText = Bodies.circle(x,y,circleSize,{
      render: {
        sprite: {
            texture: createImage("Your Text String"),
            xScale: 1,
            yScale: 1
        }
      }
    });
    World.add(engine.world, [
      // walls
      Bodies.rectangle(200, 0, 600, 50, { isStatic: true }),
      Bodies.rectangle(200, 600, 600, 50, { isStatic: true }),
      Bodies.rectangle(260, 300, 50, 600, { isStatic: true }),
      Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
    ]);
    World.add(engine.world, [ballA, ballB, testText]);

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
    return <div ref="scene" />;
  }
}
export default Scene;