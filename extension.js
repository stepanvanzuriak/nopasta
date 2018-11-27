const vscode = require("vscode");
const clipboardy = require("clipboardy");

function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand("nopasta.copy", () => {
      const editor = vscode.window.activeTextEditor;
      const text = editor.document.getText(editor.selection);
      const maxBufferSize = vscode.workspace
        .getConfiguration("nopasta")
        .get("maxBufferSize");

      if (text.length <= maxBufferSize) {
        clipboardy.write(text);
      } else {
        clipboardy.write("Just do this by hands!");
      }
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("nopasta.paste", () => {
      vscode.commands.executeCommand("editor.action.clipboardPasteAction");
    })
  );
}
exports.activate = activate;

function deactivate() {}
exports.deactivate = deactivate;
