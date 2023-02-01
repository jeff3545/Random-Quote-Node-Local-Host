//Jeff Smith
//tutorial2c
//1/30/2023
const http = require(`http`);
const httpStatus  = require("http-status-codes");
processRequest = (request, response) => {
    console.log(`Received an incoming request.`);
    response.writeHead(httpStatus.StatusCodes.OK, {"Content-type": "text/html"});
   //picks a random quote
    function chooseRandomItem() {
        var predictions = ["I'm far from being god, but I work god damn hard.",
                       "Belief in oneself and knowing who you are, I mean, that's the foundation for everything great.",
                       "I love what I do, and when you love what you do, you want to be the best at it.",
                       "Religion is like a personal computer. You let people in if you want to... We're all gods.",
                       "Shakespeare was a man who wrote poetry. I'm a man who writes poetry. Why not compare yourself to the best?",
                       "Rosa Parks sat so Martin Luther King could walk. Martin Luther King walked so Obama could run. Obama's running so we all can fly.",
                       "I was a really good student. In the sixth grade, I was reading at a twelfth grade reading level. But I got bored.",
                       "Your job is to inspire people from your neighborhood to get out."];
    
        var numItems = predictions.length;
        var randomIndex = Math.floor(Math.random( ) * numItems);
        return predictions[randomIndex];
    }
    //uses chooseRandomItem function to print a random quotee on local host
        response.write("<h1>Random Jay-Z Quote</h2>");
        response.write(`<p>${chooseRandomItem( )}</p>`);
        response.end( );
        console.log("Sent this response message: " + chooseRandomItem());
}
const server = http.createServer(processRequest);
let PORT = 3000;
server.listen(PORT);
console.log(`Server started and is listening on ${PORT}`);
