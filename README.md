# digi-transcript
digital-transcript

# Project Setup
First clone the repository
```
git clone git@github.com:aakritsubedi/digi-transcript.git
```
Install dependencies. Make sure you have nodejs and npm or yarn installed.
```
yarn
```
Create a .env file and set the values for environment variables
```
cp .env.example .env
nano .env
```
Download and run [Ganache environment](https://www.trufflesuite.com/ganache)
for testing in the local Ethereum blockchain


# Running the project
Compile the smart contract
```
truffle compile
```
Migrate the smart contract
```
truffle migrate
```
Run the API
```
node api/server.js
```
## Run client
Go to the client directory
```
cd client
```
Install dependencies
```
yarn
```
Run the React app
```
yarn start
```
Browse http://localhost:3000
