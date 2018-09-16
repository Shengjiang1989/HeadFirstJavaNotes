var notes = NotesFromHeadFirstJavaBook;

/*************************************
* Chapter 1 - 7 Basics
*************************************/
/*
how js works?
1. Create a page with HTML CSS and javascript, or put them in seperate files.
2. When the browser sees code, it starts parsing it immediately, getting ready to execute it.
3. The browser starts executing your code as soon as it encounters it in your page, and continues executing it for the lifetime of your page.
(That is the reason why event listener works all life time)
*/

//how to get js into you page?
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Just a Generic Page</title>
<script>
setTimeout(wakeUpUser, 5000);
function wakeUpUser() {
alert("Are you going to stare at this boring page forever?");
}
</script>
</head>
<body>
<h1>Just a generic heading</h1>
<p>Not a lot to read about here. I'm just an obligatory paragraph living in an example in a JavaScript book. I'm looking for something to make my life more
exciting.</p>
</body>
</html>



/*
difference between .textcontent and .innerHTML

Quick example:
*/

var example = document.getElementById('exampleId');

example.textContent = '<a href="https://google.com">google</a>';

//output: <a href="http://google.com">google</a>

example.innerHTML = '<a href="https://google.com">google</a>';

//output: google

/*
You can see from the first example that output of type text/plain is not parsed by the browser and results in the full content displaying. Output of the type 
 text/html tells the browser to parse it before displaying it.
*/

/*
From a syntax point of view, if you look at the previous examples, you'll notice that to select a class in querySelector, i did put a "." in front of myClass. 
this should not be done in getElementsByClassName.

querySelector and querySelectorAll return elements that are non-live while other selectors (getElementById, getElementsByClassName...) return live elements. 
So, elements of a collection returned by getElementsByClassName will be modified if they are modified in the DOM. Elements returned by querySelector will not.
*/