// Array of objects containing quotes
const quotes = [
{
	quote: 'You must be the change you wish to see in the world.', 											// quote
	source: 'Gandhi', 																						// creator of the quote
	citation: null, 																						// where the quote comes from
	year: null, 																							// the date of the quote
	tags: 'Lifestyle', 																						// quote category
},
{
	quote: 'I came, I saw, I conquered.', 																	// quote
	source: 'Gaius Julius Caesar, Roman emperor', 															// creator of the quote
	citation: 'Report on his victory over Pharnaces II of Pontus in the battle of Zela', 					// where the quote comes from
	year: null, 																							// the date of the quote
	tags: 'Leadership', 																					// quote category
},
{
	quote: 'The only thing we have to fear is fear itself', 												// quote
	source: 'Franklin D Roosevelt', 																		// creator of the quote
	citation: ' Franklin D Roosevelt’s first inaugural address, delivered at the United States Capitol', 	// where the quote comes from
	year: 1933, 																							// the date of the quote
	tags: 'Political', 																						// quote category
},
{
	quote: 'You can do anything but not everything', 														// quote
	source: 'David Allen', 																					// creator of the quote
	citation: 'Making It All Work', 																		// where the quote comes from
	year: 2009, 																							// the date of the quote
	tags: 'Lifestyle', 																						// quote category
},
{
	quote: 'Everything should be made as simple as possible, but not simpler.', 							// quote
	source: 'Albert Einstein', 																				// creator of the quote
	citation: null, 																						// where the quote comes from
	year: null, 																							// the date of the quote
	tags: 'Lifestyle', 																						// quote category
},];

// takes an array and returns a random random number based on the array length
const getRandomArrayNumber = (arr) => {
	const arrayLength = arr.length
	const randomNumber = Math.floor(Math.random() * arrayLength);
	// Why minimize? Why not exterminate the posibility
	arr.sort(function() { return 0.5 - Math.random() }); // Randomly sort the selected array, to minimize the posibility that the same array element get selected twice

	return randomNumber; //Return the random number
}

//Returns a random quotes from the quotes array based on the random number given from getRandomArrayNumber
const getRandomQuote = () => {
	const randomQuote = quotes[getRandomArrayNumber(quotes)]; // Store the selected quoted based on the random number

	return randomQuote;	// Returns the selected quote
}

// Returns a ransom color from the colors Array based on a random number from getRandomArrayNumber
const getRandomColor = () => {
	const colors = ['27ae60', '9b59b6', '34495e', 'e67e22', 'e74c3c']; // Array of colors
	const randomColor = colors[getRandomArrayNumber(colors)]; // Store the selected color based on the random number

	return randomColor; // Returns the selected color
}

//Print the selected random quote from getRandomQuote and the color from getRandomColor to the webpage index.html
const printQuote = () => {
	const quote = getRandomQuote(); // Store the return value from getRandomQuote
	const color = getRandomColor(); // Store the return value from getRandomColor

	/**
		Object Holds the various html elements and the value they should return from the quotes objects array
		quote: paragraph returning quote.quote
		source: paragraph returning quote.source
		citation: (Optional) Span returning quote.citation
		year: (Optional) Span returning quote.year
		tags: (Optonal) Span returning quote.tags
		closeSource: closes the open source paragraph tag 
	**/
	const quoteHtmlElements = {
		quote: '<p class="quote">' + quote.quote + '</p>',
		source: '<p class="source">' + quote.source,
		citation: '<span class="citation">' + quote.citation + '</span>',
		year: '<span class="year">' + quote.year + '</span>',
		tags: '<span class="tags">' + quote.tags + '</span>',
		closeSource: '</p>'
	};

	let quoteHtml = quoteHtmlElements.quote + quoteHtmlElements.source;	// Html to be returned, by default it includes quote and source

	if(quote.citation) { // Check to see if citation is added, then add it to the quoteHtml
		quoteHtml += quoteHtmlElements.citation;
	}

	if(quote.year) { // Check to see if Year is added, then add it to the quoteHtml												
		quoteHtml += quoteHtmlElements.year;
	}

	if(quote.tags) { // Check to see if Year is added, then add it to the quoteHtml													
		quoteHtml += quoteHtmlElements.tags;
	}

	quoteHtml += quoteHtmlElements.closeSource; // Add closeSource to quoteHtml

	document.querySelector('body').style.background = '#' + color // Add the selected getRandomColor as the background color
	document.querySelector('#loadQuote').style.background = '#' + color // Change the background color of the "Show another quote" button to the same as the background color
	document.getElementById('quote-box').innerHTML = quoteHtml;	// Add quoteHtml to webpage DOM
}

const intervalID = window.setInterval(printQuote, 4000); // Change random quote after 4 seconds, invokes printQuote

printQuote() // Init printquote on page load and page refresh.

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

