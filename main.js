import { app, BrowserWindow } from "electron";

let screen
app.on("ready", () => {
  screen = new BrowserWindow({
    width: 1400,
    height: 800,
    resizable: false,
    webPreferences: {
      nodeIntegration: false
    }
  })
  screen.loadURL("http://localhost:3000");
})
