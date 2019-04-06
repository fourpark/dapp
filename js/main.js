const rpcURL = "https://ropsten.infura.io/v3/fb87a2e390164e58a7f1a5104f393f98";

window.addEventListener('load', async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // Request account access if needed
            await ethereum.enable();
            // Acccounts now exposed
			web3.eth.sendTransaction({/* ... */});
        } catch (error) {
            // User denied account access...
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
        web3.eth.sendTransaction({/* ... */});
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
});

let abi = [{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"disableToken","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"enableToken","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"secureToken","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"unsecureToken","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":true,"name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"approved","type":"address"},{"indexed":true,"name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"operator","type":"address"},{"indexed":false,"name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"AbleMap","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getAbleState","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getSecuredState","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"SecuredMap","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}]
let addr = '0xbd055e2b0261f7fababf42fe46888371c30e120a'

let wallets = ['0x7FD6485acA6Ec6dE91946B997770dd31026f0662', '0x150d93630dE6d7ee603194C2A26eecb2020F5023', '0x732d0C2309486701bEE258B3df517BEb1504e168']
let nfts = [0,1,2]

let collection = [{"id":0,"name":"Art Vault 1","contractHash":"0x06012c8cf97bead5deae237070f9587f8e7a266d","legalFramework":"https://box.net/path/to/pdf","description":"Pellentesque lorem urna, fermentum vitae porttitor ut, volutpat a augue. In elit nibh, gravida eget nulla vel, dictum porta ante. Fusce ut massa non velit vehicula congue at sed eros. Maecenas commodo erat non dui tempus volutpat. Curabitur porta porttitor justo, eu sagittis mauris maximus vitae.","assets":[{"hash":"0xd1Df4eFc6b7d47D00E21566B668a9cbbBf5D26D0","owner":{"address":"0xb1690c08e213a35ed9bab7b318de14420fb57d8c","type":"account","since":"1539288088"},"totalOwners":13,"listing":{"isListed":1},"details":{"@context":"http://schema.org","@type":"Painting","name":"Orange Way","dateCreated":"+1994","material":"Acrylic and Lacquer","creator":{"@type":"Person","name":"Sky Jones"},"contentLocation":{"@type":"AdministrativeArea","name":"North Texas"},"width":[{"@type":"Distance","name":"20 inches"}],"height":[{"@type":"Distance","name":"30 inches"}],"edition":1,"sizeOfEditon":1,"signedByArtist":0,"citation":[{"@type":"DigitalDocument","name":"Front Side Image","contentLocation":"https://fourparkmanagement.app.box.com/file/315057634432","sha3-224-hash":"2ac276e30ea39e917084ec00a04649eac11eb2ee367d6ecac0199f74","filename":"940014296_Orange Way_Front.jpg"},{"@type":"DigitalDocument","name":"Back Side Image","contentLocation":"https://fourparkmanagement.app.box.com/file/315053533649","sha3-224-hash":"8bf9f9be497350fcd89dcf1bbaf6fb55a1bef4dd33ed6a5949f2e298","filename":"940014296_Orange Way_Back.jpg"},{"@type":"DigitalDocument","name":"Book of Provenance","contentLocation":"https://fourparkmanagement.app.box.com/file/315051163828","sha3-224-hash":"d4309156098d9227f2d6f953e4b1007d25bbe4e2b1b0e00ca46bf9a6","filename":"940014296_Orange Way_Book of Provenance.jpg"}]}},{"hash":"0xd1Df4eFc6b7d47D00E21566B668a9cbbBf5D2XXX","owner":{"address":"0xed9bab7b1690c08e213a35b318de14420fb57d8c","type":"account","since":"1539288088"},"totalOwners":13,"listing":{"isListed":1},"details":{"@context":"http://schema.org","@type":"Painting","name":"Lucky Charms","dateCreated":"+1994","material":"Acrylic and Lacquer","creator":{"@type":"Person","name":"Sky Jones"},"contentLocation":{"@type":"AdministrativeArea","name":"North Texas"},"width":[{"@type":"Distance","name":"20 inches"}],"height":[{"@type":"Distance","name":"30 inches"}],"edition":1,"sizeOfEditon":1,"signedByArtist":0,"citation":[{"@type":"DigitalDocument","name":"Front Side Image","contentLocation":"https://fourparkmanagement.app.box.com/file/315052584472","sha3-224-hash":"c3de0991be048436c1ac565857ce85ac53b615272d0cddbfd3385438","filename":"200-093_Lucky Charms_Front.jpg"},{"@type":"DigitalDocument","name":"Back Side Image","contentLocation":"https://fourparkmanagement.app.box.com/file/315057636926","sha3-224-hash":"a9e12dbfe565be4b8a4adc8bc81cbb328928dadf504ec8f2813d11be","filename":"200-093_Lucky Charms_Back.jpg"}]}},{"hash":"0xd1Df4eFc6b7d47D00E21566B668a9cbbBf5D2XXX","owner":{"address":"0xed9bab7b1690c08e213a35b318de14420fb57d8c","type":"account","since":"1539288088"},"totalOwners":13,"listing":{"isListed":1},"details":{"@context":"http://schema.org","@type":"Painting","name":"Luciferess","dateCreated":"+1994","material":"Acrylic and Lacquer","creator":{"@type":"Person","name":"Sky Jones"},"contentLocation":{"@type":"AdministrativeArea","name":"North Texas"},"width":[{"@type":"Distance","name":"20 inches"}],"height":[{"@type":"Distance","name":"30 inches"}],"edition":1,"sizeOfEditon":1,"signedByArtist":0,"citation":[{"@type":"DigitalDocument","name":"Front Side Image","contentLocation":"https://fourparkmanagement.app.box.com/file/315057636926","sha3-224-hash":"a9e12dbfe565be4b8a4adc8bc81cbb328928dadf504ec8f2813d11be","filename":"200-092_Luciferess_Front.jpg"},{"@type":"DigitalDocument","name":"Back Side Image","contentLocation":"https://fourparkmanagement.app.box.com/file/315052584472","sha3-224-hash":"c3de0991be048436c1ac565857ce85ac53b615272d0cddbfd3385438","filename":"200-092_Luciferess_Front.jpg"}]}}]}];

var FP = web3.eth.contract(abi);
// initiate contract for an address
var fp = FP.at(addr);

function getBalance(who) {
  fp.balanceOf(who, (e,r) => {
    $('#'+who).text(r.toString())
  });
}

function getStates(which) {
  fp.getSecuredState(which, (e,r) => {
    let x = '';
    if (r.toString() == '1') {
      x = "✅";
    } else {
      x = "❌";
    }
    $('#t' + which + ' .secure').text(x)
  });
  fp.getAbleState(which, (e,r) => {
    let x = '';
    if (r.toString() == '1') {
      x = "✅";
    } else {
      x = "❌";
    }
    $('#t' + which + ' .able').text(x)
  });
  fp.ownerOf(which, (e,r) => {
    $('#t' + which + ' .owner').text(r)
  });

  $('#t' + which + ' .json a').attr('href', 'https://github.com/fourpark/poc/js/collection/' + which + '.json');
}

function enable (which) {
  fp.enableToken(which, (e,r) => {
    console.log('✅')
  })
}

function disable (which) {
  fp.disableToken(which, (e,r) => {
    console.log('❌')
  })
}

function secure (which) {
  fp.secureToken(which, (e,r) => {
    console.log('🔒')
  })
}

function unsecure (which) {
  fp.unsecureToken(which, (e,r) => {
    console.log('🔓')
  })
}

function mint (who, which) {
  console.log(which,who)
  fp.mint(wallets[who], which, (e,r) => {
    console.log('💰')
  });
}

function send (which, to) {
  fp.transferFrom(wallets[0], wallets[to], which, (e,r) => {
    console.log('📩')
  });
}

function burn (which) {
  fp.burn(which, (e,r) => {
    console.log('🔥')
  });
}

function paint () {
  console.log('🔄')
  wallets.forEach(getBalance);
  nfts.forEach(getStates);
}
paint();