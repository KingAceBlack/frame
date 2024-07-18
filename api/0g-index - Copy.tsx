import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
import { serveStatic } from 'frog/serve-static'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/vercel'
import type { Address } from 'viem'
import { abi } from '../abi.js'

// Uncomment to use Edge Runtime.
// export const config = {
//   runtime: 'edge',
// }





export const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
})


app.frame('/', (c) => {
  return c.res({
    action: '/finish',
    image: (
      <div style={{ color: 'green', display: 'flex', fontSize: 60 }}>
        Perform a transaction
      </div>
    ),
    intents: [
      <Button.Transaction target="/mint">Mint</Button.Transaction>,
    ]
  })
})



app.transaction('/mint', async (c, next) => {
  await next();
  const txParams = await c.res.json();
  txParams.attribution = false;
  console.log(txParams);
  c.res = new Response(JSON.stringify(txParams), {
    headers: {
      "Content-Type": "application/json",
    },
  });
},
async (c) => {
  const address = c.address;

  // console.log('address', address);
  //console.log('Button', Button.Transaction key);

  return c.contract({
    abi,
    functionName: 'claim',
    args: [
      address as `0x${string}`, // _receiver address
      0n, // _tokenId as uint256
      1n, // _quantity as uint256
      '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', // _currency address
      0n, // _pricePerToken as uint256
      {
        proof: [], // _allowlistProof.proof as bytes32[]
        quantityLimitPerWallet: 100n, // _allowlistProof.quantityLimitPerWallet as uint256
        pricePerToken: 0n, // _allowlistProof.pricePerToken as uint256
        currency: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE' // _allowlistProof.currency address
      },
      '0x' // _data as bytes
    ],
    chainId: `eip155:421614`,
    to: '0x7C5B213CAaf6ebbcB6F1B24a193307261B1F6e69',
  });
});


app.frame('/finishnn', (c) => {
  const { transactionId } = c
  return c.res({
    image: (
      <div style={{ color: 'white', display: 'flex', fontSize: 60 }}>
        Transaction ID: {transactionId}
      </div>
    )
  })
})


app.frame('/finish', (c) => {
    let image;
    let intents;
    


        image = 'https://violet-worldwide-sole-637.mypinata.cloud/ipfs/Qmf5ZotjRTKSVFc53fWQtJEzU66x9qJg3xEkoPcdxUFd44';
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
    


        image = 'https://violet-worldwide-sole-637.mypinata.cloud/ipfs/Qmf5ZotjRTKSVFc53fWQtJEzU66x9qJg3xEkoPcdxUFd44';
        intents = [
           
           <Button.Transaction target="/mint2">Mint2</Button.Transaction>,

        ];


    return c.res({
       action: '/finish',
        image: image,
        intents: intents
    });
});



app.transaction('/mint2', async (c, next) => {
  await next();
  const txParams = await c.res.json();
  txParams.attribution = false;
  console.log(txParams);
  c.res = new Response(JSON.stringify(txParams), {
    headers: {
      "Content-Type": "application/json",
    },
  });
},
async (c) => {
  const address = c.address;

  // console.log('address', address);
  //console.log('Button', Button.Transaction key);

  return c.contract({
    abi,
    functionName: 'claim',
    args: [
      address as `0x${string}`, // _receiver address
      0n, // _tokenId as uint256
      1n, // _quantity as uint256
      '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', // _currency address
      0n, // _pricePerToken as uint256
      {
        proof: [], // _allowlistProof.proof as bytes32[]
        quantityLimitPerWallet: 100n, // _allowlistProof.quantityLimitPerWallet as uint256
        pricePerToken: 0n, // _allowlistProof.pricePerToken as uint256
        currency: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE' // _allowlistProof.currency address
      },
      '0x' // _data as bytes
    ],
    chainId: `eip155:421614`,
    to: '0x22Ba0cF9dba965bdE4c2BA59A80193FA1b490d8E',
  });
});



// @ts-ignore
const isEdgeFunction = typeof EdgeFunction !== 'undefined'
const isProduction = isEdgeFunction || import.meta.env?.MODE !== 'development'
devtools(app, isProduction ? { assetsPath: '/.frog' } : { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
