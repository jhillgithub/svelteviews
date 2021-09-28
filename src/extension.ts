import * as vscode from "vscode";
import { CustomWebviewPanel } from "./CustomWebview";
import { SidebarPanelProvider } from "./SidebarPanelProvider";
export function activate(context: vscode.ExtensionContext) {
  const sidebarProvider = new SidebarPanelProvider(context.extensionUri);

  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider("svelte-sidebar", sidebarProvider)
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("svelteviews.showWebview", () => {
      CustomWebviewPanel.createOrShow(context.extensionUri);
    })
  );
}
