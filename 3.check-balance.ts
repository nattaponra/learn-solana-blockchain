import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
 
const publicKey = new PublicKey("51J4UGj1DZVX8ZwQMjehFHWp7w55krJR6Vc2f1Nx3MNo");
 
const connection = new Connection("https://api.devnet.solana.com", "confirmed");
 
const balanceInLamports = await connection.getBalance(publicKey);
 
const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;
 
console.log(
  `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`,
);