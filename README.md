# Wallet Unlinker

This project provides a Node.js script that automatically unlinks wallets from the platform by calling the `postUnlinkWallet` API. The script retrieves the linked wallets and attempts to unlink each one until a successful response is received.

## Prerequisites

Before running the script, ensure that you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (Node package manager)

## Setup Instructions

Follow these steps to set up the project and run the script:

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/magicmagichappens/magic-eden-unlink.git
cd magic-eden-unlink
```

### 2. Install Dependencies
This project requires the axios package for making HTTP requests. You can install the required dependencies by running:

```bash
npm install
```

### 3. Set Up Cookie
The Cookie is used for authentication with the platform's API. Ensure you have a valid cookie and update the COOKIE variable in the index.js file with the correct value:
Watch this below video and this time instead of copying session_signature, copy the whole cookie value:  
[Video](https://discord.com/channels/907946085014704128/1314823725383942234/1315385634369703987)
```javascript
const COOKIE = "cf_clearance=9BiPRW3JvjSYpiWQS7_SAMPLE; session_signature=2CiTUTE8scyQMz_SAMPLE";
```


4. Run the Script
Once the dependencies are installed and the session_signature is set up, you can run the script using the following command:

```bash
node index.js
```
