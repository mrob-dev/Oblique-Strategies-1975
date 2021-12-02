const strategies = [
    {strategy: "Abandon normal instruments"},
    {strategy: "Accept advice"},
    {strategy: "Accretion"},
    {strategy: "A line has two sides"},
    {strategy: "Allow an easement (an easement is the abandonment of a stricture)"},
    {strategy: "Are there sections? Consider transitions"},
    {strategy: "Ask people to work against their better judgement"},
    {strategy: "Ask your body"},
    {strategy: "Assemble some of the instruments in a group and treat the group"},
    {strategy: "Balance the consistency principle with the inconsistency principle"},
    {strategy: "Be dirty"},
    {strategy: "Breathe more deeply"},
    {strategy: "Bridges -build -burn"},
    {strategy: "Cascades"},
    {strategy: "Change instrument roles"},
    {strategy: "Change nothing and continue with immaculate consistency"},
    {strategy: "Children's voices -speaking -singing"},
    {strategy: "Cluster analysis"},
    {strategy: "Consider different fading systems"},
    {strategy: "Consult other sources -promising -unpromising"},
    {strategy: "Convert a melodic element into a rhythmic element"},
    {strategy: "Courage!"},
    {strategy: "Cut a vital connection"},
    {strategy: "Decorate, decorate"},
    {strategy: "Define an area as 'safe' and use it as an anchor"},
    {strategy: "Destroy -nothing -the most important thing"},
    {strategy: "Discard an axiom."},
    {strategy: "Disconnect from desire"},
    {strategy: "Discover the recipes you are using and abandon them"},
    {strategy: "Distorting time"},
    {strategy: "Do nothing for as long as possible"},
    {strategy: "Don't be afraid of things because they're easy to do"},
    {strategy: "Don't be frightened of cliches"},
    {strategy: "Don't be frightened to display your talents"},
    {strategy: "Don't break the silence"},
    {strategy: "Don't stress one thing more than another"},
    {strategy: "Do something boring"},
    {strategy: "Do the washing up"},
    {strategy: "Do the words need changing?"},
    {strategy: "Do we need holes?"},
    {strategy: "Emphasise differences"},
    {strategy: "Emphasise repetitions"},
    {strategy: "Emphasise the flaws"},
    {strategy: "Faced with a choice, do both (given by Dieter Rot)"},
    {strategy: "Feedback recordings into an acoustic situation"},
    {strategy: "Fill every beat with something"},
    {strategy: "Get your neck massaged"},
    {strategy: "Ghost echoes"},
    {strategy: "Give the game away"},
    {strategy: "Give way to your worst impulse"},
    {strategy: "Go slowly all the way round the outside"},
    {strategy: "Honor thy error as a hidden intention"},
    {strategy: "How would you have done it?"},
    {strategy: "Humanise something free of error"},
    {strategy: "Imagine the music as a moving chain or caterpillar"},
    {strategy: "Imagine the music as a set of disconnected events"},
    {strategy: "Infinitesimal gradations"},
    {strategy: "Intentions -credibility of -nobility of -humility of"},
    {strategy: "Into the impossible"},
    {strategy: "Is it finished?"},
    {strategy: "Is there something missing?"},
    {strategy: "Is the tuning appropriate?"},
    {strategy: "Just carry on"},
    {strategy: "Left channel, right channel, centre channel"},
    {strategy: "Listen in total darkness, or in a very large room, very quietly"},
    {strategy: "Listen to the quiet voice"},
    {strategy: "Look at a very small object, look at its centre"},
    {strategy: "Look at the order in which you do things"},
    {strategy: "Look closely at the most embarrassing details and amplify them"},
    {strategy: "Lowest common denominator check -single beat -single note -single riff"},
    {strategy: "Make a blank valuable by putting it in an exquisite frame"},
    {strategy: "Make an exhaustive list of everything you might do and do the last thing on the list"},
    {strategy: "Make a sudden, destructive unpredictable action; incorporate"},
    {strategy: "Mechanicalise something idiosyncratic"},
    {strategy: "Mute and continue"},
    {strategy: "Only one element of each kind"},
    {strategy: "(Organic) machinery"},
    {strategy: "Overtly resist change"},
    {strategy: "Put in earplugs"},
    {strategy: "Remember those quiet evenings"},
    {strategy: "Remove ambiguities and convert to specifics"},
    {strategy: "Remove specifics and convert to ambiguities"},
    {strategy: "Repetition is a form of change"},
    {strategy: "Reverse"},
    {strategy: "Short circuit"},
    {strategy: "Shut the door and listen from outside"},
    {strategy: "Simple subtraction"},
    {strategy: "Spectrum analysis"},
    {strategy: "Take a break"},
    {strategy: "Take away the elements in order of apparent non-importance"},
    {strategy: "Tape your mouth (given by Ritva Saarikko)"},
    {strategy: "The inconsistency principle"},
    {strategy: "The tape is now the music"},
    {strategy: "Think of the radio"},
    {strategy: "Tidy up"},
    {strategy: "Trust in the you of now"},
    {strategy: "Turn it upside down"},
    {strategy: "Twist the spine"},
    {strategy: "Use an old idea"},
    {strategy: "Use an unacceptable colour"},
    {strategy: "Use fewer notes"},
    {strategy: "Use filters"},
    {strategy: "Use 'unqualified' people"},
    {strategy: "Water"},
    {strategy: "What are you really thinking about just now? Incorporate"},
    {strategy: "What is the reality of the situation?"},
    {strategy: "What mistakes did you make last time?"},
    {strategy: "What would your closest friend do?"},
    {strategy: "What wouldn't you do?"},
    {strategy: "Work at a different speed"},
    {strategy: "You are an engineer"},
    {strategy: "You can only make one dot at a time"},
    {strategy: "You don't have to be ashamed of using your own ideas"},
    {strategy: "[blank white card]"}
]

// Define random number generator function
  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
   
  // Call function and save result to variable
  let randomNumber = randomInteger(0, strategies.length-1);

  function handleClick() {
    document.getElementById('obliqueStrategies').innerHTML = "";
    let NewRandomNumber = randomInteger(0, strategies.length-1);
    if (NewRandomNumber == randomNumber) { () => { handleClick } }
    else { randomNumber = NewRandomNumber}
    getStrategy()
}

  function getStrategy() {
    document.getElementById('obliqueStrategies').innerHTML = `
        <div class="vertical-center">
        
        <div id="title"><h1>- Oblique Strategies -</h1></div>
        
        <br>
        
        <div id="maintext"><h2> Over One Hundred Worthwhile Dilemmas<br>by Brian Eno and Peter Schmidt</h2>
        <p>In 1975, Peter Schmidt and Brian Eno created the original pack of Oblique Strategies 
        cards, through thinking about approaches to their own work as artist and musician.</p> 
        <p>The Oblique Strategies constitute a set of over 100 cards, each of which is a 
        suggestion of a course of action or thinking to assist in creative situations.</p><p> 
        These famous cards have been used by many artists and creative people all over the 
        world since their initial publication.</p></div>
        
        
        <div id="oblique">
           <span>${strategies[randomNumber].strategy}</span>
           </div>
           <div id="buttondiv"><button id="btn">New strategy</button></div><br>
          <div id="footer"><p><span id="footertext">Oblique Strategies © 1975-2001 Brian Eno/Peter Schmidt</span></p></div>

        </div>
    `
    document.getElementById('btn').addEventListener('click', () => { handleClick() })
}
 
getStrategy()