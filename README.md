# __CodePad__
codepad is an online ide based on react app for instant coding anywhere anytime without installing anything.


## Clone the repo
* Open your terminal.

* Change the current working directory to the location where you want to clone the repository.

* Run the following command to clone the repository:
```bash
git clone https://github.com/nmnarora600/codepad.git
```


## Installing the Required Dependencies

After cloning the repo run run following commands to install required node modules.

* check in to codepad
```bash
cd codepad
```
* install node modules for frontend
```bash
npm install
```
## Getting client key

To get news from this web app you must get an api key from __[HackerEarth](https://www.hackerearth.com/api/register/)__

After getting your Client api from HackerEarth and paste it in the .env file of root folder.

## Setting Environment variables
To start using the app you must create an environment (.env) file in root of codepad folder and set following values.


```bash
PORT=DESIRED-PORT-NUMBER
REACT_APP_CODE="ENTER-YOUR-CLIENT-KEY-HERE"
```
make sure to not erase " " marks as api key must be sent as a string.
I am using PORT=3002, and WDS_SOCKET-PORT 3003.

## How to Run

After following above steps just open the frontend folder in cmd, powershell etc.
```bash
cd Path/to/the/repo/codepad
```
* Run the following command to start app

```bash
npm start
```
* Open your Browser and go to the following link to see your app 

```bash
http://localhost:<YOUR-LISTED-PORT>/
```

<!-- ## Deployed Version
* Alternatively, you can also access the deployed version of this application at __[Link](https://cloudcanvas.icodewithcoffee.ml)__.

* Please note that the deployed version is primarily for demonstration purposes and may not have the complete functionality or the latest updates found in the source code. -->

## Disclaimer

* This application is for educational purposes only and should not be used for commercial purposes. The information, code, and data provided are meant as educational examples and should not be integrated into any commercial application.


## Contributing

* Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

* Please make sure to update tests as appropriate.

