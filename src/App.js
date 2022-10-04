import { useState } from 'react';

function App() {
  // Sets seeing questions to false at start
  const [showQs, setShowQs] = useState(false);
  // When food item is clicked, toggles seeing user questions
  const onClick = () => {
    setShowQs(current => !current);
    //setShowQs(true);
  }
  const Questions = () => (
    <div>
      &nbsp; Is your issue with....
      
      <button class="mid">Quality?</button><br></br>
      <button class="mid">Ingredients?</button><br></br>
      <button class="mid">Temperature?</button><br></br>
      <button class="mid">Appearance?</button><br></br>
    </div>
  );

  return (
    <>
      <h1>Welcome to Totally Not the Gag!</h1>
      <h2>Your Feedback goes directly to our chefs.</h2>
      What did you order?<br></br>
      <button class="top" onClick={onClick}>🍕 Pizza</button>
      <button class="top" onClick={onClick}>🍟 Fries</button>
      <button class="top" onClick={onClick}>🌭 Hot Dog</button>
      
      {/* Questions about food won't show until user clicks a button */}
      {showQs ? <Questions /> : null }

      {/* submit button displays console message saying feedback is "submitted"
      --we aren't storing it anywhere :P*/}
      Please tell us what was wrong or what we could do to improve.<br></br>
      &nbsp;<input type="text" /><br></br>
      <button onClick={() => console.log("Feedback Submitted.")}>Submit Feedback</button>

    </>
  );
}

export default App;
