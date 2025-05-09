import "./InvitationBody.css";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import LocationQrCode from "../assets/locationqr.png";

const locationLink =
  "https://www.google.com/maps/place/Sri+Channamaji+Samudaya+Bhavana/@14.0214828,75.9555455,854m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bba5b0f8bae4707:0xb8824aa640913de5!8m2!3d14.0214828!4d75.9581204!16s%2Fg%2F1q645ww7x?entry=ttu&g_ep=EgoyMDI1MDQyMi4wIKXMDSoASAFQAw%3D%3D";

const InvitationBody = () => {
  return (
    <div className="invitationBody">
      <div
        className="text"
        style={{
          width: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        With our best friends & beloved family
      </div>

      <span
        className="styled-Text"
        style={{
          width: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color:'#4d4104'
        }}
      >
        Save the Date
      </span>
      <h1 className="text">We are getting married</h1>

      <div /* className="names"*/>
        <span className="names">Naveen</span>
        <span className="amp">&</span>
        <span className="names">Thanu</span>
      </div>
      <div className="text" style={{ marginTop: "15px" }}>
        Reception at:
      </div>
      <div className="text">17th May 2025, 7:30pm onwards</div>
      <div className="text">muhurtha at:</div>
      <div className="text">18th May 2025, 7:00am - 7:50am</div>

      

      <a id="targetLink" href={locationLink}>
        <img
          src='src/assets/locationqr.png'
          alt="location"
          width="100px"
          height="100px"
          style={{ borderRadius: "10px", padding: "20px" }}
        />
      </a>
      <div className="text">(Please Scan above for the Location)</div>
      <a
        className="text"
        href={locationLink}
      >
        <u>
          <LocationPinIcon /> Sri Channamaji Samudaya Bhavana
        </u>
      </a>

      <div style={{ fontSize: "15px" }}></div>
      <div className="text">Channagiri, Chitradurga Rd</div>
      <div className="text">Karnataka - 577213</div>
    </div>
  );
};

export default InvitationBody;
