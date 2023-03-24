// HOME
// Home is a subcomponent. It is the landing page.
// It is imported into App.js and rendered in the main area of the app.

// IMPORTS
// React
import React from 'react';
import Card from 'react-bootstrap/Card';
// Local styles modify original bootstrap styles
import './styles/Card.css';

// COMPONENT: Home
// PURPOSE:  Renders the home page.
//           - Displays a styled bootstrap card:
//             - Image             image-home.jpg
//             - Page title       "Banking on Insecurity..."
//             - Page description "Tired of big banks'..."
// FUTURE:   Make the width of the card responsive.
export function Home() {
  return (
    <div style={{display: "flex", justifyContent: "center", paddingBottom: "20px"}}>
      <Card>
        <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/image-home.jpg`} alt="card image cap" />
        <Card.Body>
          <Card.Title>Banking on Insecurity: Our Financial Institution<br/>Chooses Chaos Over Control</Card.Title>
          <br/>
          <Card.Text style={{textAlign: 'left'}}>
Tired of big banks' obsession with security? Look no further than <span className="belleza"><i>Insecure</i>TRUST (IT)</span>, where we embrace the beauty of insecurity.<br/>
<br/>
That's right - we have intentionally designed our bank to be completely vulnerable to hacks, leaks, and financial transparency. Why? Because true freedom can only be achieved through risk.<br/>
<br/>
Big banks might tell you that security is paramount, but what they really mean is that they're more concerned with protecting their own interests than yours. At our "bank", we put our trust in the power of the people, and we're not afraid to admit that sometimes that means taking a chance.<br/>
<br/>
Sure, there are downsides to our approach:
<ul>
  <li>Your account information might get stolen.</li>
  <li>Your funds might disappear.</li>
  <li>Your credit score might plummet.</li>
</ul>
But think of the upside - you'll be part of a financial revolution that puts the needs of the many above the greed of the few.<br/>
<br/>
So, if you're sure about this... <i>are you sure about this?</i> Create an account with <span className="belleza"><i>Insecure</i>TRUST</span>. We can't guarantee that your money will be safe, but we can promise that you'll be part of something truly revolutionary.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Home;