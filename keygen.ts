import { Keypair } from '@solana/web3.js'

// Generate a new keypair
const keypair = Keypair.generate();

// Display the keys
console.log('Public Key:', keypair.publicKey.toBase58()); // 4D7QKwfFiQ5UsTTiGH9UYzVfwMNgV272hRVYX3meArCL
console.log('Secret Key:', keypair.secretKey.toString());