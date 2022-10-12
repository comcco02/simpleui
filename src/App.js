import { useState } from 'react';

/*
  Context: We are creating a system that allows a customer to judge/review their food and leave a ticket to the cooks about 
  what went wrong, what could be improved on, and what they thought about the meal. This system ideally would run on a tablet or 
  similar device running alone at a table and reporting results back to the owners, but this is a web app, 
  which means we can expect it to run on almost anything. 
*/

function App() {
  // Sets seeing questions to false at start
  const [showQs, setShowQs] = useState(false);
  // Sets seeing comments to false at start
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
      {/* submit button fires alert message saying customer's feedback is "submitted"*/}
      <p>Please describe your issue below:</p><br></br>
      <textarea class="inputbox" type="text" rows="4" cols="50"/><br></br><br></br>
      <button class="submitBtn" onClick={() => alert("Submission successful, hope to see you again soon!")}>Submit</button>
    </div>
  );

  return (
    <>
      <h1>ConveyUr Cuisine</h1>
      <h2>Hello, your feedback goes directly to our chefs 👨‍🍳.</h2>
      <p>Please click on the food you ordered.</p><br></br>
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
