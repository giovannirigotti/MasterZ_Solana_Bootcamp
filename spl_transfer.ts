import { 
    Keypair, 
    Connection,
    PublicKey, 
} from "@solana/web3.js";

import { 
    getOrCreateAssociatedTokenAccount,
    transfer,
 } from "@solana/spl-token";

import wallet from "./wallet.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com", "finalized");
const mint = new PublicKey("AeBRSqQ4WKLN8ezyA3XVFcV6zH3yv91wDaXWR4skcahJ");
const fromAta = new PublicKey("8YxBvQ4R3jYLFcwUsP9ENgBj981jBJgcTireStasm5mu");

const to = Keypair.generate();
console.log("To: ", to.publicKey.toBase58()); // 7PjvXXYNyJSQfpKmRXa8MXTkfyGHsWtwZzJkf1wRotT2

(async () => {

    const tokenAccount = await getOrCreateAssociatedTokenAccount(
        connection, 
        keypair,
        mint,
        to.publicKey,
    );

    const toAta = tokenAccount.address;
    console.log("Associated Token Account: ", toAta.toBase58()); // Ak2M9iMQKEWow1FCdTSQNT4xGqjQw5oZQExsHUTcC5WU

    const amountToAta = tokenAccount.amount;
    console.log("Amount in ATA: ", amountToAta.toString()); // 0

    const amount = 10e5; // 1 solo

    await transfer(
        connection,
        keypair,
        fromAta,
        toAta,
        keypair,
        amount
    );

    console.log("Transferred", amount, "from", fromAta.toBase58(), "to", toAta.toBase58());
    // Transferred 1000000 from 8YxBvQ4R3jYLFcwUsP9ENgBj981jBJgcTireStasm5mu to Ak2M9iMQKEWow1FCdTSQNT4xGqjQw5oZQExsHUTcC5WU
})()