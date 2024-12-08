const axios = require('axios');

const session_signature = "FILL-YOUR-SESSION-SIGNATURE-HERE"

const HEADERS = {
    'Cookie': `session_signature=${session_signature}`,
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:133.0) Gecko/20100101 Firefox/133.0',
    'Accept': 'application/json',
    'Accept-Language': 'en-US,en;q=0.5',
    'Accept-Encoding': 'gzip, deflate, br',
    'Referer': 'https://mefoundation.com/wallets',
    'Content-Type': 'application/json',
    'X-Trpc-Source': 'nextjs-react',
    'Sentry-Trace': 'd9cc7cb4f22c457d91c96ee309cd0b12-89f254d17c63b5f7-0',
    'Baggage': 'sentry-environment=production,sentry-release=j2VPwOdw1NVG7ijuLo4CG,sentry-public_key=43f5a6f01fe6dff7b5c0d7c54530d6a0,sentry-trace_id=d9cc7cb4f22c457d91c96ee309cd0b12,sentry-sample_rate=0.05,sentry-sampled=false',
    'Origin': 'https://mefoundation.com',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'Priority': 'u=1',
    'Te': 'trailers'
}

async function getWalletLinkState(session_signature) {
    return await axios.get('https://mefoundation.com/api/trpc/auth.walletLinkState', {
        params: {
            batch: 1,
            input: '{"0":{"json":null,"meta":{"values":["undefined"]}}}'
        },
        headers: HEADERS
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('Error:', error);
            throw error;
        });
}

async function postUnlinkWallet(wallet_address) {
    const data = { "0": { "json": { "chain": "sol", "wallet": wallet_address, "allocationEvent": "tge-airdrop-final" } } }

    return await axios.post('https://mefoundation.com/api/trpc/auth.unlinkWallet?batch=1', data, {
        headers: HEADERS
    })
        .then(response => {

        })
        .catch(error => {
            console.log('Error unlinking wallet:', error.message);
            throw error;
        });
}

async function unlinkWalletWithRetry(address) {
    let unlinked = false;
    while (!unlinked) {
        try {
            await postUnlinkWallet(address);
            unlinked = true;
            console.log('Unlinked!');
        } catch (error) {
            console.log('Error in unlinking, retrying...');
        }
    }
}

async function unlinkAllWallets() {
    try {
        const response = await getWalletLinkState(session_signature);
        const wallets = response[0]["result"]["data"]["json"]["state"];

        console.log(JSON.stringify(response, null, 4));

        for (let i = 0; i < wallets.length; i++) {
            const address = wallets[i]["fromWallet"];
            console.log('Unlinking: ' + address);

            await unlinkWalletWithRetry(address);
        }
    } catch (error) {
        console.error('Error getting wallet links: ' + error);
    }
}

unlinkAllWallets();
