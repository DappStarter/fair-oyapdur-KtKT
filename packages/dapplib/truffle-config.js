require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food wasp radar screen modify impulse light army gasp'; 
let testAccounts = [
"0xb0b2a48d7a5bc88c6aec3ee62cc8e0cacf9e09b72c880fe46b36c9436edb9496",
"0x790ea54aed36018c652e572862850aaddeb8bc59562a434bc890a1a7bae73ff4",
"0x9967d498c1134d8178058e35a8a2aaa905780cbc33da42d29b684295e4b9e753",
"0x0f3cffc57643ef3e81ec18446fcb3baaf0379fcc4b6e74b99c5335e96412e6ff",
"0x9890bd62bf6796d54dd92498db6af7f48eb6a40ea356e1641b172329314f5d21",
"0x4e2bc5396cebf26dab65c76d993d9a446166b68a17eab0f6ea14d0c6ef2da744",
"0xfd36e1df0972a94aa6a033ecdbd91a6d2af05b75ec9545476111a28f069c14af",
"0x79d5deb6f76ce589d61ee442ca76e0465984acaa77f7e88d1fe027fcd9a92399",
"0x167c9184f6d9d313ad559d5677b0d5ec6c62ce955e287184ddaa8fc244048c1c",
"0x29b7d84c0e6bf25fe17cefe543005cb60fb9ac5d89b340aa76a9de6a8678b64e"
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

