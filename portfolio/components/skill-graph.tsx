import { Graph } from 'react-d3-graph'

const data = {
  nodes: [
    { id: "Python" }, { id: "Django" }, { id: "Flask" }, { id: "Pandas" }, { id: "TensorFlow" }, { id: "PyTorch" },
    { id: "Linux" }, { id: "Shell" }, { id: "Docker" }, { id: "Elasticsearch" }, { id: "Redis" }, { id: "PostgreSQL" },
    { id: "Scala" }, { id: "C++" }, { id: "JavaScript" }, { id: "Java" }, { id: "Firebase" }, 
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

const config = {
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

const SkillGraph = () => {
  return (
    <Graph
      id="skill-graph"
      data={data}
      config={config}
    />
  )
}

export default SkillGraph
