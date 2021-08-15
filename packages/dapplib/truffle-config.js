require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner enroll bundle food plastic recipe planet attitude hen light army gasp'; 
let testAccounts = [
"0x7abef3d211a8bc901374bf7e578dd68942ffe29546cfcedd557146f3c48bf0eb",
"0x44ad107b53c8b9926219d2821237f30383dde6e28ae2344b9e3ab1a955041107",
"0xbd1878486c94acf296364d8f3647098c010f32a78092c42f0aeaf42f753f44ff",
"0x81925913f890373b4798db197ffb93073e37dd88d922c303b8fa6cbaa065afd0",
"0x20b625f361a9abf6c92e432b92b7c72763da3d525c6f33454d93a71e4f13e505",
"0x676181e7741bdb9fa0ad3307349af8e1afb182c4d3408c6654ff06234d172327",
"0x5be9f69d27675c99c00c6b482f150c4c9c7f546d70d5974b99aea2e206dd43ad",
"0x63c033ef457b66328530e44a9a9c5859ac43accc88a1ddc6430019bf975555e6",
"0x8055f91d0f924f83af56d32451d51641cccde18433c18a980fe7ac7d384749ca",
"0x537631f27d779d1f2d871828cf77b7ef698c620c716d91a78b86fe860f263ba4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

