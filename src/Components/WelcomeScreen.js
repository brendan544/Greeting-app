import React from 'react';


const WelcomeScreen = () => {
  return (
    <div className="welcome-screen">
      <header className="welcome-header">
        <h1>Welcome to GreetingApp!</h1>
        <p>Your personal app for warm welcomes and friendly greetings.</p>
      </header>
      <main className="welcome-content">
        <button className="start-button" onClick={() => alert('Get Started!')}>
          Get Started
        </button>
      </main>
    </div>
  );
};

export default WelcomeScreen;