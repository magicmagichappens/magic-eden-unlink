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

### 3. Set Up session_signature
The session_signature is used for authentication with the platform's API. Ensure you have a valid session_signature and update the session_signature variable in the index.js file with the correct value:
Watch this to know how to get: 
[Video](https://discord.com/channels/907946085014704128/1314823725383942234/1315385634369703987)
```javascript
const session_signature = "your-session-signature-here";
```


4. Run the Script
Once the dependencies are installed and the session_signature is set up, you can run the script using the following command:

```bash
node index.js
```
