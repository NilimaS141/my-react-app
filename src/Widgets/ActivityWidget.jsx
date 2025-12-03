function ActivityWidget({ title, items }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        width: "450px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <h3>{title}</h3>
      <ul>
        {items.map((i, index) => (
          <li style={{ margin: "20px" }} key={index}>
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ActivityWidget;
