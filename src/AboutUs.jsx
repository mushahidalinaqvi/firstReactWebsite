
function AboutUs() {
  return (
    <div>
      <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.paragraph}>
       Hello This is Mushahid Ali
      </p>
      <p style={styles.paragraph}>
        
      </p>
      <h2 style={styles.subheading}>Our Values</h2>
      <ul style={styles.list}>
        <li>Integrity</li>
        <li>Customer Satisfaction</li>
        <li>Innovation</li>
        <li>Teamwork</li>
      </ul>
      <h2 style={styles.subheading}>Get in Touch</h2>
      <p style={styles.paragraph}>
        We would love to hear from you! Reach out to us at [your email address] or follow us on our social media channels.
      </p>
    </div>
    </div>
  )
}

const styles = {
    container: {
      padding: '20px',
      maxWidth: '800px',
      height: '1000px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      textAlign: 'center',
      color: '#333',
    },
    paragraph: {
      lineHeight: '1.6',
      color: '#555',
    },
    subheading: {
      marginTop: '20px',
      color: '#333',
    },
    list: {
      listStyleType: 'disc',
      paddingLeft: '20px',
    },
  };

export default AboutUs
