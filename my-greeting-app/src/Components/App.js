import React, { useState } from 'react';
import WelcomeScreen from './WelcomeScreen';
import UserProfile from './UserProfile';
import GreetingCreation from './GreetingCreation';

function App() {
  // Define state to manage the current view
  const [currentView, setCurrentView] = useState('welcome');

  // Handlers to change the view
  const showWelcomeScreen = () => setCurrentView('welcome');
  const showUserProfile = () => setCurrentView('profile');
  const showGreetingCreation = () => setCurrentView('creation');

  return (
    <div className="App">
      <nav>
        <button onClick={showWelcomeScreen}>Home</button>
        <button onClick={showUserProfile}>User Profile</button>
        <button onClick={showGreetingCreation}>Create Greeting</button>
      </nav>

      {/* Conditional Rendering */}
      {currentView === 'welcome' && <WelcomeScreen />}
      {currentView === 'profile' && <UserProfile />}
      {currentView === 'creation' && <GreetingCreation />}
    </div>
  );
}

export default App;