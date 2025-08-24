import { ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

export default function FlowchartHome() {
  return (
    <div style={{ width: "100%", height: "100vh" }} className="overflow-scroll">
      <ReactFlow>
        <Controls className="absolute top-0 right-0 w-fit bg-white h-fit " />
        <Background />
      </ReactFlow>
    </div>
  );
}
