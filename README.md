# lab3_CloudCourse


## To run this application
 To run this application, install npm in the both sides server and client, then run the server using node server.js then run the client using node client.js.
 
### The server is running in port 3000
### The client is running in port 5000
### The deployed application 
https://amralshaaba-server-lab3.herokuapp.com/ 

# Description
## Server
I imported express module to create a web server called app that is running in port 3000, then I used express.json for parseing incoming JSON requests and puts the parsed data in req. body . then I created a map with its default value after importing the the sentence from the client and extract the words from it, I set a for loop to size 10 so each word can have a maximum size 10. then the foreach loop will count the length of words and then uppdate the map then I sent the map as an object. 

## Client
I imported express module to create a web server called app that is running in port 5000, Imported path module for handling and transforming file paths, Imported axios library to make HTTP requests from node. js or XMLHttpRequests from the browser, the I set the pathes to web server to connect the embedded javascript template that I made to generate HTML. The client will send the sentence the server that is deplyed to Heroku 
https://amralshaaba-server-lab3.herokuapp.com/ 
