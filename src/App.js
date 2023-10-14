import { MovieTheater, Checkout } from "./components";

function App() {
  return (
    <div
      style={{
        width: "80%",
        height: "100vh",
        margin: "0px auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <div
        style={{
          width: "80%",
          height: "80%",
          display: "flex",
          gap: "8px",
          flexDirection: "row",
        }}>
        <div style={{ flex: "1" }}>
          <Checkout />
        </div>
        <div style={{ flex: "2" }}>
          <MovieTheater />
        </div>
      </div>
    </div>
  );
}

export default App;
