import "./style.css";

export const LandingPage = () => {
  return (
    <div className="background">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>

      <div
        style={{
          height: "100%",
          zIndex: 99999,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          color: "white",
          fontFamily: "monospace",
          flexDirection: "column",
        }}
      >
        <h1 style={{ fontSize: "50px", color: "white", marginLeft: "15%" }}>
          Pandemic Holiday
        </h1>

        <h1 style={{ fontSize: "30px", color: "white", marginLeft: "15%" }}>
          Travel when it's safe
        </h1>
        <h1 style={{ fontSize: "30px", color: "white", marginLeft: "15%" }}>
          Travel where it's safe
        </h1>
      </div>
    </div>
  );
};
