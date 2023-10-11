//import React, {useCallback} from "react";
import ReactFlow, {useNodesState, useEdgesState, /*addEdge, Background*/} from "reactflow";
import NodeForm from "./Nodeform";
import 'reactflow/dist/style.css';

const initialNodes = []
const initialEdges = []


function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onAddNode = (label) => {
    const newNodeId = (nodes.length + 1).toString();
    let x_place = 0
    if (newNodeId % 2 === 0) {
      x_place = 100;
    }
    else {
      x_place = 0;
    }
    const newNode = {
      id: newNodeId,
      position: {x: x_place, y: (newNodeId - 1) * 100},
      data: { label: label + '-' + newNodeId},
    };
    console.log(x_place, newNode.id)
    setNodes([...nodes, newNode]);
    let a = 'e' + (nodes.length) + '-' + (nodes.length+1)
    console.log(a)
    const newEdge = {
      id: a,
      source: (nodes.length).toString(),
      target: (nodes.length + 1).toString(),
      animated: true
    };
    setEdges([...edges, newEdge])
  }
  //const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <div style={{ width: '100vw', height: '100vh'}}>
      <NodeForm onAddNode={onAddNode}/>
      <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange}  style={{fontWeight: "bold", marginTop: '40px'}}/>
    </div>
  );
}

export default App;