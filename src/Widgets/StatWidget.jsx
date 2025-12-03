function StatWidget({ title, value, icon, bgColor }) {
  return (
    <div
      style={{
        background: bgColor || "#dbeafe",
        padding: "10px",
        borderRadius: "10px",
        width: "220px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div style={{ fontSize: "30px", alignContent: "center" }}>{icon}</div>
      <div>
        <h3 style={{ fontSize: "18px", fontWeight: "400" }}>{title}</h3>
        <h2 style={{ fontSize: "24px", fontWeight: "700" }}>{value}</h2>
      </div>
    </div>
  );
}
export default StatWidget;
