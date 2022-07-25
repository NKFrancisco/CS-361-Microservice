import 'dotenv/config';
import express from 'express';
import puppeteer from 'puppeteer';

const PORT = 3000;

const app = express();

app.use(express.json());

//CORS
app.use((req, res, next) => {
    res.header({"Access-Control-Allow-Origin": "*"});
    next();
 }) 

//GET
app.get('/', async (req, res) => {

    //Set res parameters
    res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    });

    // Wiki img scrapper 
    try {
        // Initialize Puppeteer
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        //Wiki URL Base 
        const wikiURL = "https://en.wikipedia.org/wiki/" + req.query.content;

        //Check URL String
        console.log(wikiURL);

        //Goto URL
        await page.goto(wikiURL);

        //Goto Info Box and get images 
        const imgSrcs = await page.evaluate ( () => {
            const srcs = Array.from(
                document.querySelectorAll('.infobox-image img')
            ).map((image) => image.getAttribute("src"));
            return srcs;
        });

        console.log("page has been loaded!");

        console.log(imgSrcs[0]);

        // End Puppeteer
        await browser.close();

        //Send back URL 
        res.send(JSON.stringify(imgSrcs[0]));

      } catch (error) {
        console.log(error);

        //Send error message back
        res.send(JSON.stringify("Could not find make or model"));
      }
    
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});