import { Keypair } from '@solana/web3.js'

// Generate a new keypair
const keypair = Keypair.generate();

// Display the keys
console.log('Public Key:', keypair.publicKey.toBase58());
console.log('Secret Key:', keypair.secretKey.toString());