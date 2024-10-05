//generate a new keypair
import { Keypair } from "@solana/web3.js";
 
const keypair = Keypair.generate();
 
console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);
console.log(`✅ Finished!`);

//Load a secret key from an env file
import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
 
const existingKeypair = getKeypairFromEnvironment("SECRET_KEY");
console.log(`The public key is: `, existingKeypair.publicKey.toBase58());
console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`,
);