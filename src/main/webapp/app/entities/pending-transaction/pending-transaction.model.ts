// import { BaseEntity } from './../../shared';

// export class PendingTransaction implements BaseEntity {
export class PendingTransaction {
    constructor(
        public id?: number,
        public sender?: string,
        public receiver?: string,
        public tokenQuantity?: number,
        public transactionHash?: string,
        public imageId?: number
    ) {}
}
