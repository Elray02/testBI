export class BankDataModel {
    name: string;
    stats: {};
    color: string;
    constructor(
        name: string,
        stats: {}
    ) {
        this.name  = name ;
        this.stats = stats ;
    }
}
