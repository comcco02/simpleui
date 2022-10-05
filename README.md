# simpleui
Human Computer Interaction
Team Leader: Colton 

To-Dos: 
- still need to get dropdowns to work or keep the buttons? (idk - was my code helpful in solving this issue? - SD)
- do more than the console message when Submit is clicked?? (like maybe a pop-up or something displays on the webpage?) [LOOK BELOW]

<html>
<body>

<h2>Submit Button</h2>

<button onclick="myFunction()">Submit</button>

<p id="demo"></p>

<script>
function myFunction() {
  var txt;
  if (confirm("Please select an option!")) {
    txt = "Submission successful!";
  } else {
    txt = "Need more time?";
  }
  document.getElementById("demo").innerHTML = txt;
}
</script>

</body>
</html>



<img width="446" alt="image" src="https://user-images.githubusercontent.com/77684974/193926761-29954bf6-c9af-4b42-b3f7-5a383ebf8bd3.png">

CM 9/30/22
All, I've been given instructions to lay low and rest, and to not do a repeat of Wednesday and strain my head and my eyes. Off the top of my head, I did do a few searches to narrow down what I remember being the most pressing issues on Wednesday:

hiding / showing dropdown element after selection: 

https://stackoverflow.com/questions/24502898/show-or-hide-element-in-react - may have best luck with ternary example
https://bobbyhadz.com/blog/react-toggle-boolean-state - helped toggle showing/hiding

spacing out elements within a div using CSS and use of a class identifier - BOXES come to mind

https://www.geeksforgeeks.org/css-margins-padding/

other than that I think seth has dug up some good resources on some of the rest of the issues we were having. Nice!

ZP - I don't remember exactly what you were working on, but if you had claimed something, go for it. Otherwise if you could help the others out with any issues with Github or with their own piece, that would be amazing. 

As for me, I'm slated to return on 10/3, which is Monday. Not ideal, but it is what it is. I'm likely going to be testing things out and trying to catch up on Sunday, so please document what we need to wrap up and I'll do my best to finish it, it's only fair.

thanks


OTHER LINKS - 

https://www.w3schools.com/react/showreact.asp?filename=demo2_react_forms_textarea
 
https://stackoverflow.com/questions/36619401/how-to-add-textbox-value-to-dropdown-list

https://www.aspsnippets.com/Articles/JavaScript-Enable-Button-when-text-is-entered-in-TextBox.aspx

https://www.w3schools.com/howto/howto_css_text_buttons.asp

https://www.w3schools.com/howto/howto_js_dropdown.asp

https://www.youtube.com/watch?v=vKlq91Avgq8

Theme: What theme do we want for this project? 

Our chosen theme: Food Review - ConveyUr Cuisine
- App is for complaining about your food (because robots aren't good cooks :P)
- Assuming that there is something wrong with the food after you get it

9/21/22 

CA – Researching trouble ticket systems and web interfaces 

CM - Established public branch of simpleui for the team's ability to sync and make changes from anywhere, always able to grab and run the latest version. I will be going over the basics of git and how it integrates into VSCode on the 23rd. This stuff *looks* intimidating, but overall it's a lifesaver.

HS – Created and shared Word Document for Team
Emailed Zack about group project   

SD - Researching trouble ticket systems and web interfaces 

ZP - Not in class

Created Github accounts for full access of project amongst our team, including contribution metrics that are available and open to the public. Who does what, etc.

We discussed our theme of the project and then determined that the direction we wanted to head in was a sort of food review / feedback system for restaurants (and maybe the gag)
 
9/23/22 
Discussed general plan for app:
![Image](https://user-images.githubusercontent.com/114101723/192025584-113bc064-d39f-4998-a18f-f071936b8638.png)

- 3 Buttons at the top with food text 
- Once one is clicked, app will show options for critiquing the food

Categories:
- What went wrong (drop down that haves options: too hot/cold (temperature), not what you ordered, appearance, taste, other)
- If you chose 'Other', describe what went wrong(text box)
- Submit button
  - Color change--console log "Critique submitted!"

9/26/22 

CA - Made text box for comments and critques for robot restaurant

CM - SICK

CA - Made text box for comments and critques for robot restaurant

HS - Created drop down options

SD - Researched and tested code on how to enable the submit button to be clicked once text is entered

ZP - Created the three options for food

9/28/22

CA - Connected to Git Hub
Uploded code to the workspace

CM - Taught Caroline, Hailey, and Seth how to connect to Git Hub

HS - Connected to Git Hub

SD - Connected to Git Hub

10/03/22

Other group presentations

CA, HS, and SD were not present due to business trip.

CM - 

ZP - 

10/4/22 

CA - figured out show/hide of questions after food is clicked and console message when Submit is clicked

Things to do  
Boxes - this code can be reused and repurposed from the final build of our tic tac toe project - we can use the squares and gussy them up a bit and make it look good, creating the div for all of them in one easy go. 
 - If we really want to get fancy we can take a look at using clip art or simplified icons to pick what food item to leave a review on.

Images and Colors? TBD, after all code functions properly

Site Creation and hooks for the HTML section - again, yoink from previous project and rework if needed. We can do that.

CSS goodness - not too much probably needs to be changed, but a color refresh for accessiblity would be nice. Ideally, we implement padding amongst the elements in the main navigation div to make it more accessible to users working on touch-enabled devices like phones and tablets. This also makes selecting the correct option on a regular desktop or laptop machine a lot less of a problem.

JS work to get everything running properly. - this is the hard part, but we already have headway with our previous material as an example of how to work the very basics of a react web app. We can do this!

Context, expanded: We are creating a system that allows a customer to judge/review their food and leave a ticket to the cooks about what went wrong, what could be improved on, and what they thought about the meal. This system ideally would run on a tablet or similar device running alone at a table and reporting results back to the owners, but this is a web app, which means we can expect it to run on almost anything. With that in mind, I feel like a simple UI with basic building blocks and set options laid out graphically to be the best choice. 

Goals, expanded: Create a system that has the customer determine their issue by certain metrics such as temperature, taste, appearance, incorrect order, etc. A full list can be created and expanded on at any time, we can use a data structure for it. We should be able to pick an issue on the list and have it highlighted, and have a text box appear down below for comments to be entered. We don't need to handle the long *or* short term storage of the user's input, so design on this will be key. We can also yoink some code from the tic-tac-toe project to get highlighting to apply to our selected object.

Spooky test area for merge conflict rundown. Don't fear!
~

~

~

~

~

~

~

~

~

~
