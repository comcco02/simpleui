import { useState } from 'react';

/*
  Context: We are creating a system that allows a customer to judge/review their food and leave a ticket to the cooks about 
  what went wrong, what could be improved on, and what they thought about the meal. This system ideally would run on a tablet or 
  similar device running alone at a table and reporting results back to the owners, but this is a web app, 
  which means we can expect it to run on almost anything. 

  Goals: Create a system that has the customer determine their issue by certain metrics such as temperature, taste, appearance, incorrect order, etc. 
  A full list can be created and expanded on at any time, we can use a data structure for it. We should be able to pick an issue on the list and have it highlighted, 
  and have a text box appear down below for comments to be entered. We don't need to handle the long or short term storage of the user's input.
*/

function App() {
  // Sets seeing questions to false at start
  const [showQs, setShowQs] = useState(false);
  // When issue is selected, show user the text box for further input
  const [showInput, setShowInput] = useState(false);

  const onClick = () => {
    setShowQs(current => !current);
    //setShowQs(true);
  }
  const onClick_question = () => {
    setShowInput(current => !current);
    //setShowInput(true);
  }
  //Our div containing our list of issues
  const Questions = () => (
    <div>
      <p>Is your issue with....</p>

      <button class="mid" onClick={onClick_question}>Taste?</button><br></br>
      <button class="mid" onClick={onClick_question}>Incorrect Order?</button><br></br>
      <button class="mid" onClick={onClick_question}>Temperature?</button><br></br>
      <button class="mid" onClick={onClick_question}>Appearance?</button><br></br>
    </div>
  );

  const Input = () => (
    <div>
      {/* submit button displays console message saying feedback is "submitted"
      --we aren't storing it anywhere :P*/}
      <p>Please tell us what was wrong or what we could do to improve.</p><br></br>
      <input class="inputbox" type="text" /><br></br>
      <button onClick={() => console.log("Feedback Submitted.")}>Submit Feedback</button>
    </div>
  );

  return (
    <>
      <h1>ConveyUr Cuisine</h1>
      <h2>Your Feedback goes directly to our chefs.</h2>
      <p>What did you order?</p><br></br>
      <button class="top" onClick={onClick}>🍕 Pizza</button>
      <button class="top" onClick={onClick}>🍟 Fries</button>
      <button class="top" onClick={onClick}>🌭 Hot Dog</button>

      {/* Questions about food won't show until user clicks a button */}
      {showQs ? <Questions /> : null}
      {/*don't show input box until user clicks a question*/}
      {showInput ? <Input /> : null}

    </>
  );
}

export default App;
