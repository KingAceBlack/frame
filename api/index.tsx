import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
import { serveStatic } from 'frog/serve-static'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/vercel'
import type { Address } from 'viem'
import { abi } from '../abi.js'
import NodeCache from 'node-cache';
const myCache = new NodeCache();




// Example of setting data in cache
const key = 'myDataKey';
const initialData = { count: 0 };
myCache.set(key, initialData);
let cachedData = myCache.get(key);

// Uncomment to use Edge Runtime.
// export const config = {
//   runtime: 'edge',
// }






let counter = 0;

let player = {
  name: 'player',
  life: 99,
  timegated: 1,
  forgednumber: 0,
  timeremaining: "9000",
  specials: 3,
  tinkererbombactive: 0,
  hasGem: 0,
  metStranger: 0,
  death: 0,
  finalDecision: 0,
  framesLoaded: 0, 
  enemiesKilled: 0,
};


export const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
})


// Function to get the counter from localStorage


// Function to increment the counter and store it in localStorage
function incrementCounter() {
    
    counter += 1;
}


app.frame('/', (c) => {
    let image;
    let intents;
    
        let updatedCounter = incrementCounter();

        let cachedData = myCache.get(key);
        if (cachedData) {
            // Modify data (e.g., increment count)
            cachedData.count += 1;

            // Update data in cache with the same key
            myCache.set(key, cachedData);

            console.log('Data modified and updated in cache:', cachedData);
        } else {
            console.error('Data not found in cache for key:', key);
        }

        image = 'https://violet-worldwide-sole-637.mypinata.cloud/ipfs/QmcLTne4zVtLRzjkeBDRmsQ2sQj5dadxAwfuYUH6XCBs4e';
        intents = [
           
           <Button action="/page1">Continue</Button>,

        ];


    return c.res({
        image: image,
        intents: intents
    });
});




app.frame('/page1', (c) => {
    let image;
    let intents;
    player.framesLoaded += 1;
    let updatedCounter = incrementCounter();

        
        if (cachedData) {
            // Modify data (e.g., increment count)
            cachedData.count += 1;

            // Update data in cache with the same key
            myCache.set(key, cachedData);

            console.log('Data modified and updated in cache:', cachedData);
        } else {
            console.error('Data not found in cache for key:', key);
        }

        image = (
            <div
                style={{
                    alignItems: 'center',
                    backgroundImage: 'url(https://violet-worldwide-sole-637.mypinata.cloud/ipfs/QmcLTne4zVtLRzjkeBDRmsQ2sQj5dadxAwfuYUH6XCBs4e)',
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'nowrap',
                    height: '100%',
                    justifyContent: 'center',
                    textAlign: 'center',
                    width: '100%',
                    color: '#E1A411',
                    fontStyle: 'normal',
                    letterSpacing: '-0.025em',
                    lineHeight: 1.4,
                    marginTop: 0,
                    padding: '0 120px',
                    whiteSpace: 'pre-wrap',
                }}
            >
               <p style={{ fontSize : '50px', margin : '0', marginTop : '-200', color: 'red'  }}> {`Health remaining : ${player.life}`} </p>
               <p style={{ fontSize : '50px', margin : '0', marginCenter : '-150', color: 'red'  }}> {`Enemies Defeated : ${player.enemiesKilled}`} </p>
               <p style={{ fontSize : '50px', margin : '0', marginCenter : '-50', color: 'red'  }}> {`cachingStuff : ${cachedData.count}`} </p>
               <p style={{ fontSize : '50px', margin : '0', marginCenter : '+150', color: 'red'  }}> {`Total Frames Loaded : ${player.framesLoaded}`} </p>
               <p style={{ fontSize : '50px', margin : '0', marginCenter : '+250', color: 'red'  }}> {`End Choice : ${counter}`} </p>
    
              
            </div>
        );
        intents = [
           
             <Button action="/page2">Continue</Button>,
        ];


    return c.res({
       
        image: image,
        intents: intents
    });
});

app.frame('/page2', (c) => {
    let image;
    let intents;
    player.framesLoaded += 1;
    let updatedCounter = incrementCounter();

        if (cachedData) {
            // Modify data (e.g., increment count)
            cachedData.count += 1;

            // Update data in cache with the same key
            myCache.set(key, cachedData);

            console.log('Data modified and updated in cache:', cachedData);
        } else {
            console.error('Data not found in cache for key:', key);
        }

        image = (
            <div
                style={{
                    alignItems: 'center',
                    backgroundImage: 'url(https://violet-worldwide-sole-637.mypinata.cloud/ipfs/QmcLTne4zVtLRzjkeBDRmsQ2sQj5dadxAwfuYUH6XCBs4e)',
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'nowrap',
                    height: '100%',
                    justifyContent: 'center',
                    textAlign: 'center',
                    width: '100%',
                    color: '#E1A411',
                    fontStyle: 'normal',
                    letterSpacing: '-0.025em',
                    lineHeight: 1.4,
                    marginTop: 0,
                    padding: '0 120px',
                    whiteSpace: 'pre-wrap',
                }}
            >
               <p style={{ fontSize : '50px', margin : '0', marginTop : '-200', color: 'red'  }}> {`Health remaining : ${player.life}`} </p>
               <p style={{ fontSize : '50px', margin : '0', marginCenter : '-150', color: 'red'  }}> {`Enemies Defeated : ${player.enemiesKilled}`} </p>
               <p style={{ fontSize : '50px', margin : '0', marginCenter : '-50', color: 'red'  }}> {`cachingStuff : ${cachedData.count}`} </p>
               <p style={{ fontSize : '50px', margin : '0', marginCenter : '+150', color: 'red'  }}> {`Total Frames Loaded : ${player.framesLoaded}`} </p>
               <p style={{ fontSize : '50px', margin : '0', marginCenter : '+250', color: 'red'  }}> {`End Choice : ${counter}`} </p>
    
              
            </div>
        );
        intents = [
           
             <Button action="/page3">Continue</Button>,
        ];

      


    return c.res({
       
        image: image,
        intents: intents
    });
});

app.frame('/page3', (c) => {
    let image;
    let intents;
    player.framesLoaded += 1;
    let updatedCounter = incrementCounter();

    if (cachedData) {
            // Modify data (e.g., increment count)
            cachedData.count += 1;

            // Update data in cache with the same key
            myCache.set(key, cachedData);

            console.log('Data modified and updated in cache:', cachedData);
        } else {
            console.error('Data not found in cache for key:', key);
        }

        image = (
            <div
                style={{
                    alignItems: 'center',
                    backgroundImage: 'url(https://violet-worldwide-sole-637.mypinata.cloud/ipfs/QmcLTne4zVtLRzjkeBDRmsQ2sQj5dadxAwfuYUH6XCBs4e)',
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'nowrap',
                    height: '100%',
                    justifyContent: 'center',
                    textAlign: 'center',
                    width: '100%',
                    color: '#E1A411',
                    fontStyle: 'normal',
                    letterSpacing: '-0.025em',
                    lineHeight: 1.4,
                    marginTop: 0,
                    padding: '0 120px',
                    whiteSpace: 'pre-wrap',
                }}
            >
               <p style={{ fontSize : '50px', margin : '0', marginTop : '-200', color: 'red'  }}> {`Health remaining : ${player.life}`} </p>
               <p style={{ fontSize : '50px', margin : '0', marginCenter : '-150', color: 'red'  }}> {`Enemies Defeated : ${player.enemiesKilled}`} </p>
               <p style={{ fontSize : '50px', margin : '0', marginCenter : '-50', color: 'red'  }}> {`cachingStuff : ${cachedData}`} </p>
               <p style={{ fontSize : '50px', margin : '0', marginCenter : '+150', color: 'red'  }}> {`Total Frames Loaded : ${player.framesLoaded}`} </p>
               <p style={{ fontSize : '50px', margin : '0', marginCenter : '+250', color: 'red'  }}> {`End Choice : ${counter}`} </p>
    
              
            </div>
        );
        intents = [
           
             <Button action="/page4">Continue</Button>,
        ];


    return c.res({
       
        image: image,
        intents: intents
    });
});


app.frame('/page4', (c) => {
    let image;
    let intents;
    player.framesLoaded += 1;
    let updatedCounter = incrementCounter();

        image = (
            <div
                style={{
                    alignItems: 'center',
                    backgroundImage: 'url(https://violet-worldwide-sole-637.mypinata.cloud/ipfs/QmcLTne4zVtLRzjkeBDRmsQ2sQj5dadxAwfuYUH6XCBs4e)',
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'nowrap',
                    height: '100%',
                    justifyContent: 'center',
                    textAlign: 'center',
                    width: '100%',
                    color: '#E1A411',
                    fontStyle: 'normal',
                    letterSpacing: '-0.025em',
                    lineHeight: 1.4,
                    marginTop: 0,
                    padding: '0 120px',
                    whiteSpace: 'pre-wrap',
                }}
            >
               <p style={{ fontSize : '50px', margin : '0', marginTop : '-200', color: 'red'  }}> {`Health remaining : ${player.life}`} </p>
               <p style={{ fontSize : '50px', margin : '0', marginCenter : '-150', color: 'red'  }}> {`Enemies Defeated : ${player.enemiesKilled}`} </p>
               <p style={{ fontSize : '50px', margin : '0', marginCenter : '-50', color: 'red'  }}> {`cachingStuff : ${cachedData}`} </p>
               <p style={{ fontSize : '50px', margin : '0', marginCenter : '+150', color: 'red'  }}> {`Total Frames Loaded : ${player.framesLoaded}`} </p>
               <p style={{ fontSize : '50px', margin : '0', marginCenter : '+250', color: 'red'  }}> {`End Choice : ${counter}`} </p>
    
              
            </div>
        );
        intents = [
           
             <Button action="/page5">Continue</Button>,
        ];


    return c.res({
       
        image: image,
        intents: intents
    });
});




app.frame('/page5', (c) => {
    let image;
    let intents;
    player.framesLoaded += 1;
    let updatedCounter = incrementCounter();

        image = (
            <div
                style={{
                    alignItems: 'center',
                    backgroundImage: 'url(https://violet-worldwide-sole-637.mypinata.cloud/ipfs/QmcLTne4zVtLRzjkeBDRmsQ2sQj5dadxAwfuYUH6XCBs4e)',
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'nowrap',
                    height: '100%',
                    justifyContent: 'center',
                    textAlign: 'center',
                    width: '100%',
                    color: '#E1A411',
                    fontStyle: 'normal',
                    letterSpacing: '-0.025em',
                    lineHeight: 1.4,
                    marginTop: 0,
                    padding: '0 120px',
                    whiteSpace: 'pre-wrap',
                }}
            >
               <p style={{ fontSize : '50px', margin : '0', marginTop : '-200', color: 'red'  }}> {`Health remaining : ${player.life}`} </p>
               <p style={{ fontSize : '50px', margin : '0', marginCenter : '-150', color: 'red'  }}> {`Enemies Defeated : ${player.enemiesKilled}`} </p>
               <p style={{ fontSize : '50px', margin : '0', marginCenter : '-50', color: 'red'  }}> {`cachingStuff : ${cachedData}`} </p>
               <p style={{ fontSize : '50px', margin : '0', marginCenter : '+150', color: 'red'  }}> {`Total Frames Loaded : ${player.framesLoaded}`} </p>
               <p style={{ fontSize : '50px', margin : '0', marginCenter : '+250', color: 'red'  }}> {`End Choice : ${counter}`} </p>
    
              
            </div>
        );
        intents = [
           
             <Button action="/page6">Continue</Button>,
        ];


    return c.res({
       
        image: image,
        intents: intents
    });
});



app.frame('/page6', (c) => {
    let image;
    let intents;
    player.framesLoaded += 1;
    let updatedCounter = incrementCounter();

        image = (
            <div
                style={{
                    alignItems: 'center',
                    backgroundImage: 'url(https://violet-worldwide-sole-637.mypinata.cloud/ipfs/QmcLTne4zVtLRzjkeBDRmsQ2sQj5dadxAwfuYUH6XCBs4e)',
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'nowrap',
                    height: '100%',
                    justifyContent: 'center',
                    textAlign: 'center',
                    width: '100%',
                    color: '#E1A411',
                    fontStyle: 'normal',
                    letterSpacing: '-0.025em',
                    lineHeight: 1.4,
                    marginTop: 0,
                    padding: '0 120px',
                    whiteSpace: 'pre-wrap',
                }}
            >
               <p style={{ fontSize : '50px', margin : '0', marginTop : '-200', color: 'red'  }}> {`Health remaining : ${player.life}`} </p>
               <p style={{ fontSize : '50px', margin : '0', marginCenter : '-150', color: 'red'  }}> {`Enemies Defeated : ${player.enemiesKilled}`} </p>
               <p style={{ fontSize : '50px', margin : '0', marginCenter : '-50', color: 'red'  }}> {`cachingStuff : ${cachedData}`} </p>
               <p style={{ fontSize : '50px', margin : '0', marginCenter : '+150', color: 'red'  }}> {`Total Frames Loaded : ${player.framesLoaded}`} </p>
               <p style={{ fontSize : '50px', margin : '0', marginCenter : '+250', color: 'red'  }}> {`End Choice : ${counter}`} </p>
    
              
            </div>
        );
        intents = [
           
             <Button action="/page1">Continue</Button>,
        ];


    return c.res({
       
        image: image,
        intents: intents
    });
});









// @ts-ignore
const isEdgeFunction = typeof EdgeFunction !== 'undefined'
const isProduction = isEdgeFunction || import.meta.env?.MODE !== 'development'
devtools(app, isProduction ? { assetsPath: '/.frog' } : { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
