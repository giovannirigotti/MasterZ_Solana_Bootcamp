import { Keypair, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";

// Importo il mio wallet
import wallet from "./wallet.json";

// Crep Keypair dal mio wallet
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

// Creiamo una nuova connessione con il cluster di devnet di Solana
const connection = new Connection("https://api.devnet.solana.com", "finalized");

// Call per airdrop di 1 SOL
(async () => {
    try {        
        const signature = await connection.requestAirdrop(
            keypair.publicKey,
            1 * LAMPORTS_PER_SOL
        );

        // lod del link della tx avvenuta per l'explorer di Solana
        console.log(`Success! Check out your TX here: https://explorer.solana.com/tx/${signature}?cluster=devnet`);
        // https://explorer.solana.com/tx/ZxZi2JDQfQpjUHZx6ThR5ifvY2tQYE4voUTwDBLpdn6kBkgqtAWgFCoTEh2NWZ7a5RsXi4kuUgiGWP1EScDKuoM?cluster=devnet
    } catch (error) {
        console.error(error);
    }
})();

/* 
    
    Siccome abbiamo settato il nostro package.json con uno script che esegue il comando "ts-node", possiamo eseguire il nostro script con il comando "yarn airdrop" 

    Ricordati di non spammare la richiesta di airdrop, altrimenti verrai limitato dal cluster di devnet di Solana (puoi avere massimo 2 SOL per richiedere un altro airdrop)
    Se hai bisogno di più fondi, utilizza la faucet di Solana: https://faucet.solana.com/

*/