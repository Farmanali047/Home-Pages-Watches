import PersonalizeButton from "./PersonalizeButton";

const CenteredTextWithVideoBackground = () => {
  return (
    <div style={styles.container}>
      <video style={styles.video} autoPlay loop muted>
        <source src="/Videos/center.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div style={styles.acenter} className="d-flex flex-column align-items-center justify-content-center">
        <h1 className="hero-title text-white text-center" style={styles.text}>
          FLY ME <br />
          TO THE MOON
        </h1>
        <PersonalizeButton
          dataElement="DISCOVER"
          url="https://www.goyard.com/eu_en/online-personalisation.html"
          colore="white"
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Ensures the container takes full viewport height
    width: '100%',
    overflow: 'hidden', // Prevents video overflow
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Ensures the video covers the entire container
    zIndex: 0, // Places the video behind the text and button
  },
  text: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'white', // Text color
    zIndex: 1, // Ensure the text stays above the video
    textAlign: 'center',
    padding: '10px', // Adds some spacing around the text
  },
  acenter: {
    position: 'absolute', // Position the text relative to the container
    zIndex: 1, // Ensures it stays on top of the video
  }
};

export default CenteredTextWithVideoBackground;
