function Footer() {
  return (
    <div
      style={{
        height: "100px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        // backgroundColor: "black",
        marginTop: 'auto'
      }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          width: "85%",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: '10px'
        }}
      >
        <p style={{ color: "gray" }}>© 2022 GOODNODES</p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="icon/mail.png" alt="mail" style={{ width: "80%" }} />
          {/* <img
            src="icon/instagram.png"
            alt="instagram"
            style={{ margin: 15 }}
          />
          <img src="icon/facebook.png" alt="facebook" style={{ margin: 15 }} /> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
