import { app, BrowserWindow } from "electron";
// const path = require('path')

let screen
app.on("ready", () => {
  screen = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      nodeIntegration: false
    }
  })
  screen.loadURL("http://localhost:3000")
})
