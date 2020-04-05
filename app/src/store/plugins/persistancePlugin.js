import localforage from "localforage";
import { EventBus } from "../../eventBus/eventBus";
const instance = localforage.createInstance({
  driver: [
          localforage.INDEXEDDB,
          localforage.WEBSQL,
          localforage.LOCALSTORAGE]
});
export const persistancePlugin = (store) => {
    instance.iterate((value, key) =>
        store.commit(key,value)
    ).then(()=>{
        EventBus.$emit('data-was-loaded');
    })
    store.subscribe(mutations =>
        instance.setItem(mutations.type, mutations.payload)
    )
}