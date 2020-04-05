export class StateRecord {
    constructor({value, expirationPeriod}){
        this.value = value;
        this.lastUpdated = Date.now();
        this.expirationPeriod = expirationPeriod || Infinity;
    }

    getOfflineValue(){
        return this.value;
    }

    update(value){
        this.value = value;
        this.lastUpdated = Date.now();
    }

    clean() {
        this.value = undefined;
        this.lastUpdated = undefined;
        this.expirationPeriod = undefined;
    }

    isCurrent(){
        let lastUpdated = this.lastUpdated || false;
        return (lastUpdated) && 
            ( lastUpdated + this.expirationPeriod) > Date.now()
    }

    async getValue(updateSource){
        if(!this.isCurrent()){
            this.update(await updateSource);
        }
        return this.getOfflineValue();
    }
}