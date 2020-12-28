import { Graph } from 'react-d3-graph'

// graph payload (with minimalist structure)
const data = {
  nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
  links: [
    { source: "Harry", target: "Sally" },
    { source: "Harry", target: "Alice" },
  ],
};

// the graph configuration, just override the ones you need
const myConfig = {
  nodeHighlightBehavior: true,
  node: {
    color: "lightgreen",
    size: 120,
    highlightStrokeColor: "blue",
  },
  link: {
    highlightColor: "lightblue",
  },
};

const onClickNode = function(nodeId: string) {
  console.log(`Clicked node ${nodeId}`);
};

const onClickLink = function(source: string, target: string) {
  console.log(`Clicked link between ${source} and ${target}`);
};

const SkillGraph = () => {
  return (
    <Graph
      id="graph-id" // id is mandatory
      data={data}
      config={myConfig}
      onClickNode={onClickNode}
      onClickLink={onClickLink}
    />
  )
}

export default SkillGraph
