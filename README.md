# CS-361-Microservice 
## Wiki image scrapper 

## Required Packages 
-Node.js
-Puppeteer

To install goto the folder containing the project with a CLI and type nmp install, the package.json will install node and puppeteer. 

# Communication Contract 

##Requesting data 
Data will be requested with a GET request. The parameters will be in the URL via a query that contains the Make_Model to find the wikipedia page for the vehicle and get an image.  

Request example for Honda Civic 
> http://localhost:3000/?content=Honda_Civic


##Reciving data 
The data will be recived by a response from the GET request that will contain a JSON string containing the URL to the image requested. 

Response example for Honda Civic
> "//upload.wikimedia.org/wikipedia/commons/thumb/6/6d/2017_Honda_Civic_SR_VTEC_1.0_Front.jpg/280px-2017_Honda_Civic_SR_VTEC_1.0_Front.jpg"

##UML DIagram 
