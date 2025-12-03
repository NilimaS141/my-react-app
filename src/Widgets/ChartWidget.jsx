import { BarChart, XAxis, YAxis, Tooltip, Bar } from "recharts";

function ChartWidget({ title, data }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        width: "55%",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
      }}
    >
      <h3>{title}</h3>
      <BarChart width={650} height={400} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#1d4ed8" />
      </BarChart>
    </div>
  );
}

export default ChartWidget;
