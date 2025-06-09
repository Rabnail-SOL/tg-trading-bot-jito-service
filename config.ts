import { Connection, PublicKey, Keypair } from "@solana/web3.js";
import {
 TxVersion
} from "@raydium-io/raydium-sdk";
import * as bs58 from 'bs58';
import { Wallet } from "@project-serum/anchor";


// define these
//export const blockEngineUrl = 'tokyo.mainnet.block-engine.jito.wtf';
export const blockEngineUrl = 'ny.mainnet.block-engine.jito.wtf';


const privateKey = new Uint8Array([
  //your private key
]);
export const wallet = new Wallet(Keypair.fromSecretKey(privateKey));



export const rpc_https_url = "YOUR_RPC_HTTPS_URL"; // e.g. "https://api.mainnet-beta.solana.com"



export const lookupTableCache= {}
export const connection = new Connection(rpc_https_url, "confirmed");
export const makeTxVersion = TxVersion.V0 // LEGACY
export const addLookupTableInfo = undefined // only mainnet. other = undefined
