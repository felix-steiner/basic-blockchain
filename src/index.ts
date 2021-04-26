import { Chain } from "./chain";
import { Wallet } from "./wallet";

const satoshi = new Wallet();
const bob = new Wallet();
const alice = new Wallet();

satoshi.send(50, bob.publicKey);
bob.send(23, alice.publicKey);
alice.send(5, bob.publicKey);

console.log(Chain.instance);