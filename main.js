import { app, BrowserWindow } from "electron";

let screen
app.on("ready", () => {
  screen = new BrowserWindow({
    width: 1150,
    height: 700,
    resizable: false,
    webPreferences: {
      nodeIntegration: false
    }
  })
  screen.loadURL("http://localhost:3000")
})
