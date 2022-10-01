const { app, BrowserWindow } = require('electron');
const mainWindowJsonFIle = require('fs');

let jsonData = mainWindowJsonFIle.readFileSync("./src/json/main.json");
let mainWindowProperties = JSON.parse(jsonData);

const createWindow = () => {
  const win = new BrowserWindow({
    width: mainWindowProperties.width,
    height: mainWindowProperties.height,
    icon: "./resources/burt_icon.png"
  })
  win.loadFile('src/html/index.html')
}
app.whenReady().then(() => {
  createWindow()
})