import { Keypair, Connection } from "@solana/web3.js";

import { createMint } from "@solana/spl-token";

import wallet from "./wallet.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com", "finalized");

(async () => {

    const mint = await createMint(
        connection,
        keypair,
        keypair.publicKey,
        null,
        6,
    );

    console.log("Mint Address:", mint.toBase58()); // AeBRSqQ4WKLN8ezyA3XVFcV6zH3yv91wDaXWR4skcahJ
})()