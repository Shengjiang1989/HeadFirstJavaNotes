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

/*how to get js into you page?
1. put <script> in the <head> of a html
this is not good for two reasons:
  1. When your browser loads a page, it loads everything in your page’s <head> before it loads the <body>. 
     So, if your code is in the <head>, users might have to wait a while to see the page.
  2. code will be executed before <body> fully loaded, which will result the dom elements may not fully parsed before code runs
2. put at the end of body
3. put ref at the end of body, and put all the code in a seperate file
*/

/*reach out and communicate with your user
1. window.alert()
2. dcoument.write()
3. console.log()
4. document.getElementById()
*/

/*something to care about on variables
1. global and local variables If a variable is declared outside a function, it’s GLOBAL. If it’s declared inside a function, it’s LOCAL.
Local variables typically disappear when your function ends. (closure 会不一样) 
2. If you use a variable without declaring it first, that variable will be global. That means that even if you use a variable for the 
first time inside a function (because you meant for it to be local)
3. The way js look for defination of a parameter: 
    first look for local variable
    second look for function parameter
    third look for global variable
*/

/*what is DOM
树状结构我们称之为document object model: It’s created when the browser loads your page
1. When you load a page into the browser, not only does the browser parse the HTML and then render it to the display, 
it also creates a set of objects that represent your markup. These objects are stored in the DOM.
2. When JavaScript modifies the DOM, the browser updates the page dynamically, so you see new content on your page.
3. document(node or object)
      |
     html
     /  \
  head  body 
4. When you grab an element from the DOM using getElementById, what you get is an element object, which you can use to read, 
change or replace the element’s content and attributes.
*/

/* types
1. you need a variable that’s not been initialized yet, you want a property that doesn’t exist (or has been deleted), 
you go after an array item that isn’t there—you’re going to encounter undefined.
it isn’t an object, or a number or a string or a boolean, or really anything that is defined
2. it is most common to use null in places where an object should be but one can’t be created or found, 
and it is most common to find undefined when you have a variable that hasn’t been initialized, 
or an object with a missing property, or an array with a missing value.
3. isNaN(myNum) to check if sth is NaN

name          type          
undefined   undefined
null         object
NaN          number
*/

/* diceProject
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

/*************************************
* Chapter 9 - 13 advanced
*************************************/

/** what is event handler
event handler is a piece of code that registered to some event
*/

//the piece of code
function pageLoadedHandler() {
  alert("I'm alive!");
}
//register
window.onload = pageLoadedHandler;

/** Event object
see a example first
*/
window.onload = init;

function init() {
  var image = document.getElementById('zero');
  image.onclick = showAnswer;
}

function showAnswer() {
  document.getElementById('zero').src = "zero.jpg";
}

//if we add more pictures
function init() {
  var images = document.getElementsByClassName('img');
  for (int i = 0; i < images.length; i++) {
    images[i].onclick = showAnswer;
  }
}

function showAnswer(eventObj) {
  var name = eventObj.target.id;
  image.src = name + ".jpg";
}

/** Event Queue
When the click handler is called, it’s passed an event object—and in fact, for most of the events associated with the document object model (DOM) 
you’ll be passed an event object. The event object contains general information about the event, such as what element generated the event and 
what time the event happened. In addition, you’ll get information specific to the event, so if there was a mouse click, for instance, 
you’ll get the coordinates of the click.
*/

/* 事件被触发的时候，事件会被放入event queue，看字面意思，也是一个放event的queue，会按照顺序执行
每执行一个event，就会去寻找相应的handler，如果有的话
如果一个handler执行时间很长，就会导致后面被block掉
*/

/** setTimeout
1. When the page loads we do
two things: we define a handler named timerHandler, and we call setTimeout to create a time event that will be generated in 5000 milliseconds. 
When the time event happens, the handler will be executed.

*/
setTimeout(Handler, delayTime);

/** Asynchronous
Code written to handle events is different from code that executes top to bottom and then completes. 
Event handlers can run at any time and in any order: they are asynchronous.
*/