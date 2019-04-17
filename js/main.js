const rpcURL = "https://ropsten.infura.io/v3/fb87a2e390164e58a7f1a5104f393f98";

let contract = {
  abi: [{"constant":true,"inputs":[{"name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"secureToken","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getAudit","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"enableToken","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"HashMap","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_abler","type":"address"}],"name":"setAbler","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"disableToken","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"abler","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"auditor","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"AbleMap","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getHash","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"},{"name":"_hash","type":"bytes32"}],"name":"setHash","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"},{"name":"_lat","type":"string"},{"name":"_long","type":"string"}],"name":"setLocation","outputs":[{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"locator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getLocation","outputs":[{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getAbleState","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_auditor","type":"address"}],"name":"setAuditor","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_locator","type":"address"}],"name":"setLocator","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"audit","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getSecuredState","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"LocationMap","outputs":[{"name":"lat","type":"string"},{"name":"long","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"AuditMap","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"curator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_curator","type":"address"}],"name":"setCurator","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"SecuredMap","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"unsecureToken","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":true,"name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"approved","type":"address"},{"indexed":true,"name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"operator","type":"address"},{"indexed":false,"name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"}],
  addr: '0x48f14e15c721c041d0191fc227d2923886e376e5'
}

let FP = web3.eth.contract(contract.abi);
// initiate contract for an address
let fp = FP.at(contract.addr);

//let wallets = ['0x7FD6485acA6Ec6dE91946B997770dd31026f0662', '0x150d93630dE6d7ee603194C2A26eecb2020F5023', '0x732d0C2309486701bEE258B3df517BEb1504e168']
let wallets = ['0x7FD6485acA6Ec6dE91946B997770dd31026f0662', '0xd012f4fEac4e9BF49e6932B8725f003a37630287', '0x78B6da97cB2171415109727212436313b7074E34', '0x150d93630dE6d7ee603194C2A26eecb2020F5023', '0x732d0C2309486701bEE258B3df517BEb1504e168']

let nfts = [0,1,2]

let collection = []

window.addEventListener('load', async () => {
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
  } else if (window.web3) {
      window.web3 = new Web3(web3.currentProvider);
      // Acccounts always exposed
  } else {
      console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
  }

  nfts.forEach((x) => {
    $.getJSON('js/collection/' + x + '.json', function(data) {
      collection[x] = data;
    });
  });

  paint();

});

function getBalance(who) {
  fp.balanceOf(who, (e,r) => {
    $('#'+who).text(r.toString())
  });
}

function modalSend() {
  console.log('modal sending!');
  var which = $("#sendWhich").val();
  var who = $("#sendWho").val();
  console.log(who, which);
  send(who, which);
  $('#sendModal').modal('hide');
  $('#sendWho').val('');
  $('#sendWhich').val(0);
}

function getStates(which) {
  fp.getSecuredState(which, (e,r) => {
    let x = r.toString() == '1' ? '✅' : r.toString() == '0' ? '❌' : '-';
    $('#t' + which + ' .secure').text(x)
  });
 
  fp.getAbleState(which, (e,r) => {
    let x = r.toString() == '1' ? '✅' : r.toString() == '0' ? '❌' : '-';
    $('#t' + which + ' .able').text(x)
  });

  fp.getAudit(which, (e,r) => {
    $('#t' + which + ' .audit').text(r.toString());
  });

  fp.getLocation(which, (e,r) => {
    $('#t' + which + ' .location').text(JSON.stringify(r));
  });

  fp.getHash(which, (e,r) => {
    $('#t' + which + ' .hash').text(r.toString());
    if (parseInt(r) != 0) {
      $('#c' + which).html(`        
          <div id="carouselExampleSlidesOnly" class="card-img-top carousel slide" data-ride="carousel"><div class="carousel-inner"><div class="carousel-item active"><img class="d-block w-100" src="img/${collection[which].details.citation[0].filename}" alt="First slide"></div><div class="carousel-item"><img class="d-block w-100" src="img/${collection[which].details.citation[1].filename} alt="Second slide"></div></div></div>
          <div class="card-body"><h5 class="card-title">${collection[which].details.name}</h5><p class="card-text">${collection[which].details.material}<br><a href="${collection[which].details.boxLink}">Box.net Link</a></p></div>
      `);
    }
  })
  
  fp.ownerOf(which, (e,r) => {
    $('#t' + which + ' .owner').text(r);
    $('#t' + which + ' .json a').attr('href', 'https://raw.githubusercontent.com/fourpark/dapp/master/js/collection/' + which + '.json');
  });

  fp.auditor((e,r) => {
    $('#auditor').text(r);
  });

  fp.locator((e,r) => {
    $('#locator').text(r);
  });

  fp.curator((e,r) => {
    $('#curator').text(r);
  });

  fp.abler((e,r) => {
    $('#abler').text(r);
  });
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

function send (who, which) {
  fp.transferFrom(web3.eth.defaultAccount, who, which, (e,r) => {
    console.log('📩')
  });
}

function burn (which) {
  fp.burn(which, (e,r) => {
    console.log('🔥')
  });
}

function audit (which) {
  fp.audit(which, (e,r) => {
    console.log('🕵️');
  });
}

function setLocation (which, lat, long) {
  fp.setLocation(which, lat, long, (e,r) => {
    console.log('🌎')
  });
}

function setHash (which, hash) {
  fp.setHash(which, hash, (e,r) => {
    console.log('#️⃣')
  })
}

function paint () {
  console.log('🔄')
  wallets.forEach(getBalance);
  nfts.forEach(getStates);
}