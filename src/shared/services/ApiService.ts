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
    this.stateList.forEach((item) => {
      if (item.key === key) {
        item.state.error = null;
        item.state.status = "loading";
      }
    });
  }

  success(key: Keys) {
    this.stateList.forEach((item) => {
      if (item.key === key) {
        item.state.error = null;
        item.state.status = "success";
      }
    });
  }

  error(key: Keys, error: string) {
    this.stateList.forEach((item) => {
      if (item.key === key) {
        item.state.error = error;
        item.state.status = "error";
      }
    });
  }

  getState(key: Keys) {
    const targetItem = this.stateList.find((item) => (item.key = key));
    if (!targetItem) {
      throw new Error("wrong key");
    }
    return targetItem;
  }

  getMergedStatus(keys: Keys[]): SharedTypes.Status {
    const result = keys.map((key) => this.getState(key).state.status);
    if (result.includes("error")) return "error";
    if (result.includes("loading")) return "loading";
    return "success";
  }
}
