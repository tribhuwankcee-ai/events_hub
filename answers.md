Answers
Practical III

Q1: You change the footer colour in styles.css. How many pages update? What if the same colour was only set with an inline style on index.html?

All five pages update, since footer { } lives in the shared external stylesheet css/styles.css, which every page links to. If the same colour had instead been set only with an inline style on index.html, only that one element on that one page would change — inline styles aren't reusable across pages.

Q2: Which is more specific: h1 or #welcome? If both set color, which wins? Write a one-line proof from your page.

#welcome (an ID selector) is more specific than h1 (an element selector), because specificity ranks ID > class > element. Proof: h1 { color: #0f172a; } sets the heading colour, but any colour rule on #welcome would still override it for that element, regardless of source order.

Q3: Convert 
#0369a1 into an approximate rgb(...) value. Why do designers often prefer hex in stylesheets?

#0369a1 ≈ rgb(3, 105, 161). Designers often prefer hex because it's a single compact token instead of three comma-separated numbers, easy to copy/paste as one value, and matches the format used by most design tools and colour pickers.

Q4: Set a nav link to display: none, then to visibility: hidden. What is the difference in the layout?

display: none removes the element from the page entirely — it takes up no space, so the remaining nav links shift left to fill the gap. visibility: hidden makes the element invisible but keeps its space reserved, leaving a visible empty gap where the link used to be.

Q5: In your wireframe, how many event cards appear side-by-side at phone width? At desktop width?

Per the Bootstrap grid (col-md-4), event cards stack 1-per-row (full width) at phone width, and appear 3-per-row at desktop width (md breakpoint and above, ≥768px).

Q6: Why must styles.css be linked AFTER the Bootstrap CSS file? What happens if you reverse the order and both set h1 colour?

For selectors of equal specificity, CSS gives priority to whichever rule appears later in the cascade — so linking styles.css after Bootstrap lets custom rules override Bootstrap's defaults. If the order were reversed, Bootstrap's h1 colour would be read last and would win instead, silently undoing the intended custom heading colour.

## Practical IV

Q1: If validate.js runs BEFORE main.js and calls a function defined only in main.js, what error appears in the Console?

A ReferenceError appears, for example "ReferenceError: seatsMessage is not defined". Scripts run in order from top to bottom, so when validate.js runs first the function has not been defined yet and the browser cannot find the name. This is why register.html loads main.js first and validate.js second.

Q2: Uncomment document.write() after the page has fully loaded (or paste it in Console). What happens to the page? Why is innerHTML safer for updates?

After the page has loaded, document.write("oops") wipes the existing page and replaces it with only the new text, because it writes into a document that has already finished loading. innerHTML is safer because it changes only the one element selected with getElementById and leaves the rest of the page intact.

Q3: Click Cancel on the confirm dialog. Does the form clear? Which method call stopped the default action?

No, the form does not clear and the name I typed stays in the field. e.preventDefault() stopped the default action, because confirm() returns false when Cancel is clicked and the code runs e.preventDefault() when !confirm(...) is true.

Q4: Paste console.log(b) after an if { let b = 2; } block. What error do you get, and what does that prove about let? Also write typeof null.

The Console shows "ReferenceError: b is not defined". This proves that let is block-scoped: b exists only inside the { } of the if block and is destroyed at the closing brace, unlike var, which escapes the block. typeof null is "object", which is a famous historical quirk of JavaScript.

Q5: Change Inter-College Football seats from 0 to 5 in the events array and reload. What happens to the card and the Register button?

The Football card stops being a sold-out card: the title is no longer struck through, the badge changes from grey "Sold out" to a green "5 seats" badge, and the message becomes "Filling fast!". The "No seats left" text is replaced by a blue Register button, because eventCardHtml() only treats an event as sold out when ev.seats === 0. I changed it back to 0 afterwards and confirmed it was sold out again.

Q6: What does seatsMessage(0) return? What does seatsMessage(12) return? Call both in the Console.

In the Console, seatsMessage(0) returned 'Sold out' and seatsMessage(12) returned 'Filling fast!'. The value 12 is greater than 0 but not greater than 20, so it falls into the "Filling fast!" branch.

Q7: Submit the form with an empty email. Which line stops the browser from leaving the page? What would happen without e.preventDefault()?

The line e.preventDefault(); inside validateForm() stops the browser from submitting. Without it the browser would carry out its normal form submission, so the page would reload straight away and the red error messages would be lost before the user could read them, and the invalid data would be sent anyway.

Q8: Is document.querySelectorAll("nav a") a NodeList or an HTMLCollection? Does forEach work on it in modern browsers?

It is a NodeList. In the Console it printed NodeList(5) with five a.nav-item elements, and instanceof NodeList returned true. forEach works on a NodeList in modern browsers, and I confirmed it by printing Home, Events, Register, Gallery and Contact with forEach.