import { makeAutoObservable } from "mobx";
import { SharedTypes } from "../types";

export class ApiService<Keys extends string> {
  stateList: {
    key: Keys;
    state: { status: "loading" | "success" | "error"; error: string | null };
  }[] = [];
  constructor(public keys: Keys[]) {
    this.stateList = keys.map((key) => ({
      key,
      state: { status: "loading", error: null },
    }));
    makeAutoObservable(this);
  }

  start(key: Keys) {
      this.stateList = this.stateList.map((item)=>{
        if (item.key === key) {
          return {
            ...item,
            state: { status: "loading", error: null }
          }
        } else return item;
      });
  }

  success(key: Keys) {
    this.stateList = this.stateList.map((item)=>{
      if (item.key === key) {
        return {
          ...item,
          state: { status: "success", error: null }
        }
      } else return item;
    });
  }

  error(key: Keys, error: string) {

    this.stateList = this.stateList.map((item)=>{
      if (item.key === key) {
        return {
          ...item,
          state: { status: "error", error: error }
        }
      } else return item;
    });
  }

  getState(key: Keys) {
    const targetItem = this.stateList.find((item) => (item.key === key));
    if (!targetItem) {
      throw new Error("wrong key");
    }
    return targetItem;
  }

  getMergedStatus(keys: Keys[]): SharedTypes.Status {
    const result = keys.map((key) => {
      return this.getState(key).state.status
    });
    console.log('result', result)
    if (result.includes("error")) return "error";
    if (result.includes("loading")) return "loading";
    return "success";
  }
}
