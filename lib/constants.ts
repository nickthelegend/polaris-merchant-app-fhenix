export const CONTRACTS = {
    MASTER: {
        POOL_MANAGER: "0xB7f5B6dc3978046c7cEA05EB529e500400290675",
        LOAN_ENGINE: "0x2a5653E5621A197600757C35abEC1c6C50Ea5344",
        SCORE_MANAGER: "0x6EfC88aFa5bA8c0f68EbCEd8410c3B1c54b87242",
        CREDIT_ORACLE: "0x7716D5ea002e42b3f0cCC75aCCE602832cF46be6",
        PROTOCOL_FUNDS: "0x1B19E402F4082Aa6704ea2444a2383C566806AC6",
        MERCHANT_ROUTER: "0xCa924A3bC86b2EaBDc01a3617CA89c3CD383B19B",
        USDC: "0x1083D49aAB56502D4f4E24fFf52ce622D9B6eCd0",
        USDT: "0xfCaBa68297d86E56e01E8e9CcB88AF06bc093b9E",
        WETH: "0xC14c378c295D9B518f3086d7389b7d3553d6F5DA",
        BNB: "0xf8b85BCf5a9b52F3D95b323a82F3cF90dF8AB0C1",
    },
};

export const NETWORKS = {
    SEPOLIA: {
        chainId: 11155111,
        name: "Ethereum Sepolia",
        rpc: "https://eth-sepolia.g.alchemy.com/v2/3qRB0TMQQv3hyKgav_6lF",
        explorer: "https://sepolia.etherscan.io",
    },
    LOCAL_HARDHAT: {
        chainId: 50312,
        name: "Fhenix Local",
        rpc: "http://localhost:8545",
        explorer: "https://explorer.sepolia.fhenix.zone",
    },
};
