# Starter kit - Ethereum Project

## Introduction
  This is a starter project kit for Ethereum Projects. 
  
## Getting Started 
  These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

1.  Node js (We need this to install truffle and testrpc) 
2. Testrpc - In memory Blockchain
3. Metamask - Helps run DApp in the browser itself.
4. Truffle Latest Version - Development Environment

### PaperSpace Installation Steps
1. Sign In to Paperspace(https://www.paperspace.com) with Username: your email id and Password: your phone number
2. For Ubuntu/Mac - open Terminal and connect with - ssh paperspace@(your public ip ex:72.52.111.97) -L 8080:localhost:8080
    
    a. For further installations on paperspace linux vm,follow the installations steps from Case 2 : Ubuntu 16.04

3. For Windows:
    
    a. Download putty from https://www.putty.org/
    
    b. To configure SSH tunnel on putty follow - https://blog.devolutions.net/2017/4/how-to-configure-an-ssh-tunnel-on-putty
    
    c. For port forwarding follow - https://intranet.cs.hku.hk/csintranet/contents/technical/howto/putty-portforward.jsp
    
    d. For further installations on paperspace linux vm,follow the installations steps from Case 2 : Ubuntu 16.04 
 
### Installation Steps

**Case 1 : Windows 10**


1. Go to (https://nodejs.org/en/) to install nodejs.


**Note : Run command prompt as administrator for installation **


2. Install the tools via npm:

Open a NEW PowerShell prompt as Administrator (to ensure that it reloads), then run the following commands:

```
# npm install -g npm
# npm install -g -production windows-build-tools
# npm install -g ethereumjs-testrpc
# npm install -g truffle

```

3. Install webpack && webpack-dev-server

```
# npm install -g webpack
# npm install -g webpack-dev-server

```
4. Install Metamask for Chrome

1. Go to : (https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en)

2. Click on **Add to Crome** as shown in below image.

![Add to Crome](/0_G5l8hOVqhjQ1kxhC.png)

3. Click on Metamask plugin 

4. Create New Password

![Password](/download.png)

5. Save Seedwords

![SeedWords](/download_1.png)

**Case 2 : OS : Ubuntu 16.04 and 18.04** 
#### Install Packages
First, update and install packages
```
# sudo apt-get update && sudo apt-get -y upgrade
# sudo apt-get -y install curl git vim build-essential 

```
#### Install NodeJs
Install NodeJs to execute the DAPP
```
# curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
# sudo apt-get install -y nodejs
# sudo npm install -g express

```
#### Install Truffle
Install Truffle packages
```
# sudo npm install -g truffle
```
#### Install testrpc
testprc uses ethereumjs to simulate full client behavior and make developing Ethereum
##### Install testrpc

```
# sudo npm install -g ethereumjs-testrpc

```
##### Launch testrpc

```

# testrpc -m "Your browser seedwords for metamask"

```
#### Install Metamask for Chrome

1. Go to : (https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en)
2. Click on **Add to Crome** as shown in below image.
![Add to Crome](/0_G5l8hOVqhjQ1kxhC.png)
3. Click on Metamask plugin 
4. Create New Password
![Password](/download.png)
5. Save Seedwords
![SeedWords](/download_1.png)

#### Install Webpack 

```
# npm install -g webpack
# npm install -g webpack-dev-server

```


### Setting Application


1. git clone https://github.com/shalmali86/Starter_kit.git && cd Starter_kit

2. npm install

3. truffle compile // This step will create build folder.

4. Open Terminal2 / Another Command promt

5. Start testrpc by command ->  testrpc -m "seedwords of Metamsk"

6. truffle migrate //migrate smart contract to running blockchain 

7. npm run dev // To run the application in browser

8. open "http://localhost:8080" in web browser

9. Enter value for 3 text boxes for pricipal , period , rate

10. Click on **Calculate** button 

11. Metamask will open notification window 

12. Accept transaction.

13. See result as interest. 

**Thank you!**
