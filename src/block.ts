import * as crypto from 'crypto';
import { Transaction } from './transaction';

export class Block {
  public nonce = Math.round(Math.random() * 999999999);
  constructor(
    public previousHash: string,
    public transaction: Transaction,
    public timestamp = Date.now(),
  ) { }

  get hash() {
    const hash = crypto.createHash('SHA256');
    hash.update(JSON.stringify(this)).end();
    return hash.digest('hex');
  }
}