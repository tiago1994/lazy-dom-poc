export function DynamicWidget({ count }: { count: number }) {
  const isOpen = Math.random() < 0.5;
  const height = Math.floor(Math.random() * 750) + 300;

  return (
    <div
      style={{
        border: "1px solid black",
        height: isOpen ? height : 40,
        width: "100%",
        display: "inline-block",
        padding: 10,
        boxSizing: "border-box",
        marginBottom: 20,
      }}
    >
      <div style={{ fontWeight: "bold" }}>Dynamic Widget {count}</div>
      {isOpen && (
        <>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              overflowY: "auto",
              height: "calc(100% - 50px)",
              marginTop: 10,
            }}
          >
            {Array.from(Array(200).keys()).map(() => (
              <div>
                Example: <b>AAABBBCCC</b>
              </div>
            ))}
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ flex: 1 }}>Test</div>
            <div>
              <button>Reload</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
