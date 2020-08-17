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

    // const defaultWidth = window.innerWidth - 100;
    // const defaultHeight = window.innerHeight - 200;
    const defaultWidth = 500;
    const defaultHeight = 500;
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

    const createImage = (string) => {
      let drawing;
      
      // document.fonts.load("20pt CMW90-Cut-Out-Linear").then(function() {
      //   console.log('document fonts ready')
      //   drawing = document.createElement("canvas");
      //   drawing.width = '150'
      //   drawing.height = '150';
      //   let ctx = drawing.getContext("2d");
      //   ctx.fillStyle = "#FFB7C9";
      //   ctx.fillRect(0, 0, 150, 150);
      //   ctx.beginPath();
      //   ctx.arc(75, 75, 20, 0, Math.PI * 2, true);
      //   ctx.closePath();
      //   ctx.fill();
      //   ctx.fillStyle = "#222222";
      //   console.log("ctx.font", ctx.font);
      //   ctx.font = "20pt CMW90-Cut-Out-Linear";
      //   console.log("ctx.font", ctx.font);
      //   ctx.textAlign = "center";
      //   ctx.fillText(string, 75, 85);
        
      //   return drawing.toDataURL("image/png");
      // });

      drawing = document.createElement("canvas");
      drawing.width = '150'
      drawing.height = '150';
      let ctx = drawing.getContext("2d");
      ctx.fillStyle = "#FFB7C9";
      ctx.fillRect(0, 0, 150, 150);
      ctx.beginPath();
      ctx.arc(75, 75, 20, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "#222222";
      console.log("ctx.font", ctx.font);
      ctx.font = "20pt CMW90-Cut-Out-Linear";
      console.log("ctx.font", ctx.font);
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
            texture: createImage("In Dev"),
            xScale: 1,
            yScale: 1
        }
      }
    });
    World.add(engine.world, [
      // walls
      Bodies.rectangle(200, 0, 600, 50, { isStatic: true }),
      Bodies.rectangle(400, defaultHeight, defaultWidth, 50, { isStatic: true }),
      Bodies.rectangle(260, defaultWidth, 50, defaultHeight, { isStatic: true }),
      Bodies.rectangle(0, defaultWidth, 50, defaultHeight, { isStatic: true })
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
    return (
      <div ref={this.sceneRef}>
        <div style={{ fontFamily: "CMW90-Cut-Out-Linear" }}>eliz ais a senior&nbsp;</div>
      </div>
    )
    // return <div ref={this.sceneRef}></div>;
  }
}
export default Scene;