import "./MarketPlace.css";

function MarketPlace() {
  return (
    <div className="Marketplace">
      <div
        style={{
          width: "86%",
          height: "80%",
          display: "flex",
          flexDirection: "column ",
          alignItems: "center",
          position: "relative",
        }}
      >
        <h1 style={{ color: "white" }}>지금 난리 난 인기 미팅</h1>
        <div
          style={{
            width: "83%",
            height: "80%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Meetingmeta />
          <Meetingmeta />
        </div>
        <img
          src="icon/exclamationmark.png"
          alt="exclamationmark"
          style={{ height: "15%", position: "absolute", right: 19, top: 0 }}
        />
      </div>
      <h3
        style={{
          position: "absolute",
          bottom: "2%",
          color: "white",
          fontFamily: "mechanical-en",
        }}
      >
        SEE MORE
      </h3>
    </div>
  );
}

function Meetingmeta() {
  return (
    <div
      style={{
        width: "95%",
        height: "46%",
        display: "flex",

        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          width: "30%",
          height: "82%",
          backgroundColor: "gray",
          borderRadius: "10px",
        }}
      ></div>
      <div
        style={{
          width: "30%",
          height: "82%",
          backgroundColor: "gray",
          borderRadius: "10px",
        }}
      ></div>
      <div
        style={{
          width: "30%",
          height: "82%",
          backgroundColor: "gray",
          borderRadius: "10px",
        }}
      ></div>
    </div>
  );
}

export default MarketPlace;
