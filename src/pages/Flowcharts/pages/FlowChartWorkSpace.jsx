import {
  ReactFlow,
  Background,
  Controls,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  Handle,
  Position,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Plus } from "lucide-react";
import { useCallback, useState } from "react";
import { useLocation } from "react-router-dom";
import NewPanel from "../components/NewPanel";

export default function FlowChartWorkSpace() {
  const data = useLocation().state.response;
  const [nodes, setNodes] = useState([
    {
      id: "n1",
      position: {
        x: 100,
        y: 100,
      },
      data: {
        label: "node-1",
      },
    },
    {
      id: "n2",
      position: {
        x: 150,
        y: 150,
      },
      data: {
        label: "node-2",
      },
    },
  ]);
  const [edges, setEdges] = useState([
    {
      id:'n1-n2',
      source:"n1",
      target:"n2"
    }
  ]);
  const [isNodePanel, setNodePanel] = useState(false);

  const onNodeChange = useCallback((changes) => {
    setNodes((nodeSnapshot) => applyNodeChanges(changes, nodeSnapshot)), [];
  });
  const onEdgesChange = useCallback(
    (changes) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    []
  );
  const onConnect = useCallback(
    (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    []
  );
  function newNode() {
    setNodePanel(true);
  }

  return (
    <div
      style={{ width: "100%", height: "100vh" }}
      className="overflow-scroll relative"
    >
      <div className="z-50 absolute top-15 left-30 bg-white rounded-xl border-2 border-neutral-300 px-4 py-2 w-[600px]">
        <h2 className="text-neutral-800 text-2xl capitalize ">{data?.name}</h2>
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodeChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={{ CustomNode: CustomNode }}
      >
        <Controls className="absolute top-20 right-0 w-fit bg-white h-fit " />
        <Background variant="lines" />
      </ReactFlow>
      <button
        className="absolute bottom-30 right-30 bg-neutral-800 text-white border-2 border-white p-4 rounded-xl  hover:bg-neutral-900 cursor-pointer z-50 general_animation shadow-xl shadow-gray-700/50"
        onClick={() => newNode()}
      >
        <Plus size={30} />
      </button>
      <NewPanel />
    </div>
  );
}

const CustomNode = () => {
  return (
    <div className="px-4 py-5 text-sm text-neutral-700 border-2 border-gray-300 focus:border-gray-500 hover:border-gray-400 rounded-xl bg-white relative">
      <label htmlFor="">Custom Node</label>
      <Handle type="source" position="top" />
      <Handle type="source" position="right" />

      <Handle type="source" position="left" id="a" />

      <Handle type="target" position={Position.Right} id="b" />
    </div>
  );
};
