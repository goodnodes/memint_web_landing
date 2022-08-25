function Footer() {
  return (
    <div
      style={{
        height: "10vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          width: "70%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ color: "gray" }}>© 2022 PEOPLE CHAIN, INC.</p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="icon/mail.png" style={{ margin: 15 }} />
          <img src="icon/instagram.png" style={{ margin: 15 }} />
          <img src="icon/facebook.png" style={{ margin: 15 }} />
        </div>
      </div>
    </div>
  );
}

export default Footer;