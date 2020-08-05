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

    const defaultWidth = window.innerWidth - 100;
    const defaultHeight = window.innerHeight - 200;

    var render = Render.create({
      element: this.refs.scene,
      engine: engine,
      options: {
        width: defaultWidth,
        height: defaultHeight,
        wireframes: false
      }
    });

    const createImage = (string) => {

      let drawing = document.createElement("canvas");
  
      drawing.width = '150'
      drawing.height = '150';
  
      let ctx = drawing.getContext("2d");
      const myFont = new FontFace('CiseauxMatisseW90-Cut-Out-Linear', 'url(//db.onlinewebfonts.com/t/b5079189698c77632120991d1178c1d1.woff2)');

      myFont.load().then((font) => {
        document.fonts.add(font);
      });

      ctx.fillStyle = "#FFB7C9";
      ctx.fillRect(0, 0, 150, 150);
      ctx.beginPath();
      ctx.arc(75, 75, 20, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "#222222";
      ctx.font = "20pt CiseauxMatisseW90-Cut-Out-Linear";
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
    return <div ref="scene" />;
  }
}
export default Scene;