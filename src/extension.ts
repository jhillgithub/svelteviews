import * as vscode from "vscode";
import { CustomWebviewPanel } from "./CustomWebview";
import { SidebarPanelProvider } from "./SidebarPanelProvider";
import { CustomDataEditorProvider } from "./CustomDataEditorProvider";
export function activate(context: vscode.ExtensionContext) {
  const sidebarProvider = new SidebarPanelProvider(context.extensionUri);

  // Register our custom editor providers
  context.subscriptions.push(CustomDataEditorProvider.register(context));

  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider("svelte-sidebar", sidebarProvider)
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("svelteviews.showWebview", () => {
      CustomWebviewPanel.createOrShow(context.extensionUri);
    })
  );
}
