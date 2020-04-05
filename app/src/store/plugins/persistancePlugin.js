import localforage from "localforage";
const instance = localforage.createInstance({
  driver: [
          localforage.INDEXEDDB,
          localforage.WEBSQL,
          localforage.LOCALSTORAGE]
});
export const persistancePlugin = (store) => {
    instance.iterate((value, key) =>
        store.commit(key,value)
    )
    store.subscribe(mutations =>
        instance.setItem(mutations.type, mutations.payload)
    )
}