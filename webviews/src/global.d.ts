/// <reference types="svelte" />
import * as _vscode from "vscode";

declare global {
  const tsvscode: {
    postMessage: ({
      type: string,
      value: any,
      text: string,
      dataType: string,
    }) => void;
    getState: () => any;
    setState: (state: any) => void;
  };
}
