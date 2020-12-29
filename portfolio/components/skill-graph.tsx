import { useState, useEffect } from 'react'
import { Graph } from 'react-d3-graph'

const data = {
  nodes: [
    { id: "Python", size: 300 }, { id: "Django" }, { id: "Flask" }, { id: "Pandas" }, { id: "TensorFlow" }, { id: "PyTorch" },
    { id: "Linux" }, { id: "Shell" }, { id: "Docker" }, { id: "Elasticsearch" }, { id: "Redis" }, { id: "PostgreSQL" },
    { id: "Scala", size: 300 }, { id: "C++" }, { id: "JavaScript", size: 300 }, { id: "Java" }, { id: "Firebase" }, 
    { id: "React.js" }, { id: "HTML/CSS" }, { id: "SQL" }, { id: "MySQL" }, { id: "TypeScript" }, 
  ],
  links: [
    { source: "Python", target: "Django" },
    { source: "Python", target: "Flask" },
    { source: "Python", target: "Pandas" },
    { source: "Python", target: "TensorFlow" },
    { source: "Python", target: "PyTorch" },
    { source: "Django", target: "Flask" },
    { source: "Pandas", target: "TensorFlow" },
    { source: "Pandas", target: "PyTorch" },
    { source: "TensorFlow", target: "PyTorch" },

    { source: "Linux", target: "Python" },
    { source: "Linux", target: "Shell" },
    { source: "Linux", target: "Docker" },
    { source: "Docker", target: "Elasticsearch" },
    { source: "Docker", target: "Redis" },
    { source: "Docker", target: "PostgreSQL" },
    { source: "Elasticsearch", target: "Redis" },
    { source: "Elasticsearch", target: "PostgreSQL" },
    { source: "Redis", target: "PostgreSQL" },

    { source: "Java", target: "Scala" },
    { source: "Java", target: "Firebase" },
  
    { source: "C++", target: "Linux" },

    { source: "JavaScript", target: "HTML/CSS" },
    { source: "JavaScript", target: "React.js" },
    { source: "JavaScript", target: "TypeScript" },
    { source: "TypeScript", target: "React.js" },
    { source: "HTML/CSS", target: "SQL" },
    { source: "MySQL", target: "SQL" },
  ],
};

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const config = {
  height: 500,
  width: 500,
  nodeHighlightBehavior: true,
  node: {
    color: "black",
    size: 120,
    fontSize: 16,
    highlightFontSize: 20,
    highlightColor: "#B91C1C",
    highlightStrokeColor: "#B91C1C",
  },
  link: {
    highlightColor: "#047857",
  },
};

// Callback to handle click on the graph.
// @param {Object} event click dom event
const onClickGraph = function(event: any) {
  console.log('Clicked the graph background');
};

const onClickNode = function(nodeId: string) {
  console.log('Clicked node ${nodeId}');
};

const onDoubleClickNode = function(nodeId: string) {
  console.log('Double clicked node ${nodeId}');
};

const onRightClickNode = function(event: any, nodeId: string) {
  console.log('Right clicked node ${nodeId}');
};

const onMouseOverNode = function(nodeId: string) {
  console.log(`Mouse over node ${nodeId}`);
};

const onMouseOutNode = function(nodeId: string) {
  console.log(`Mouse out node ${nodeId}`);
};

const onClickLink = function(source: string, target: string) {
  console.log(`Clicked link between ${source} and ${target}`);
};

const onRightClickLink = function(event: any, source: string, target: string) {
  console.log('Right clicked link between ${source} and ${target}');
};

const onMouseOverLink = function(source: string, target: string) {
  console.log(`Mouse over in link between ${source} and ${target}`);
};

const onMouseOutLink = function(source: string, target: string) {
  console.log(`Mouse out link between ${source} and ${target}`);
};

const onNodePositionChange = function(nodeId: string, x: number, y: number) {
  console.log(`Node ${nodeId} moved to new position x= ${x} y= ${y}`);
};

// Callback that's called whenever the graph is zoomed in/out
// @param {number} previousZoom the previous graph zoom
// @param {number} newZoom the new graph zoom
const onZoomChange = function(previousZoom: number, newZoom: number) {
  console.log(`Graph is now zoomed at ${newZoom} from ${previousZoom}`);
};

const SkillGraph = () => {
  return (
    <Graph
      id="skill-graph"
      data={data}
      config={config}
      onClickGraph={onClickGraph}
      onClickNode={onClickNode}
      onDoubleClickNode={onDoubleClickNode}
      onRightClickNode={onRightClickNode}
      onClickLink={onClickLink}
      onRightClickLink={onRightClickLink}
      onMouseOverNode={onMouseOverNode}
      onMouseOutNode={onMouseOutNode}
      onMouseOverLink={onMouseOverLink}
      onMouseOutLink={onMouseOutLink}
      onNodePositionChange={onNodePositionChange}
      onZoomChange={onZoomChange}
    />
  )
}

export default SkillGraph
