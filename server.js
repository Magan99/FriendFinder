// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require('express');



// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

var app = express();

// Sets an initial port.

var PORT = process.env.port || 2509;

//Sets up the Express app to handle data parsing 

app.use(express.urlencoded({ extended:true}));

app.use(express.json());

// ================================================================================

// ROUTER 

// The below points our server to a series of "route" files.

// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

// ================================================================================

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});  
