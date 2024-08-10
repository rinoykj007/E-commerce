import "./chess.css";

function Chess() {
  const getBackgroundColor = (index) => {
    const row = Math.floor(index / 8);
    const column = index % 8;
    return (row + column) % 2 === 0 ? "black" : "white";
  };

  return (
    <div className="container">
      {Array(64)
        .fill()
        .map((_, index) => {
          return (
            <div
              key={index}
              style={{ backgroundColor: getBackgroundColor(index) }}
              className="item"
            >
              {index + 1}
            </div>
          );
        })}
    </div>
  );
}

export default Chess;
