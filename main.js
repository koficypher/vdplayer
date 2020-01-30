const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 750,
    backgroundColor: "#ffffff",
    webPreferences: {
      nodeIntegration: true,
      backgroundThrottling: false
    }
    // icon: `file://${__dirname}/dist/assets/logo.png`,
    //frame: false //uncomment this for frameless window
  });

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "dist/index.html"),
      protocol: "file:",
      slashes: true
    })
  );

  //// uncomment below to open the DevTools.
  win.webContents.openDevTools();

  // Event when the window is closed.
  win.on("closed", function() {
    win = null;
  });
}

// Create window on electron intialization
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", function() {
  // On macOS specific close process
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function() {
  // macOS specific close process
  if (win === null) {
    createWindow();
  }
});
