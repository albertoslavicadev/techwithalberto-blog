import CookieConsent from "react-cookie-consent";

const Cookie = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="I consent"
      cookieName="cokies"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={150}
    >
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
};

export default Cookie
