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