/*
    define rest api resocures in simillar way to dbset in context
    so

    const config = {
        baseurlA,
        baseurlB,
        baseurlC,
        baseurlD
    }
    
    const resocure={
        account()
        tokken()
        workout()
        workoutSchedule()
        workoutPlan()
        Exercise()
        Mood()
        Fatigue()
    }
    
    //work in progress
    await token.getItem(x)
    const jwtStore()

    //then seperate actions into cqrs
    so
    const query={
        'getWorkout': resocure.workout.get(x=>)
        'getWorkouts':
    }

    //have StateRecordsTable
    //inject to state record table dostep do bazy prefer localforage
    create crud template?
    //state with context builder
    state:{
        tableA,
        tableB,
        tableC,
    }
    config(){
        tableA
            .hasName()
            .hasExpiration()
            .hasUpdateFunction(workout(),params)
    }
    hasupdateFunction:
     fn().get()

*/

class StateRecordsTable{
    pointOfAccess =0;
    constructor(startValue){
        this.value = 1
        this.pointOfAccess.setItem('table-name',[new StateRecord()])
        this.pointOfAccess.setItem('table-name-created',[new StateRecord()])
        this.pointOfAccess.setItem('table-name-expiration',[new StateRecord()])
    }
    getAll(),
    openQuery(),
    async constructor({update}){
        await update()
    }
}
export class StateRecord {
    constructor({value, expirationPeriod}){
        this.value = value;
        this.lastUpdated = Date.now();
        this.expirationPeriod = expirationPeriod ?? Infinity;
    }

    getValue(){
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
        return (this.lastUpdated ?? false) && 
            ( this.lastUpdated + this.expirationPeriod) > Date.now()
    }

    async get(updateSource){
        if(!this.isCurrent()){
            this.update(await updateSource);
        }
        return this.getValue();
    }
}