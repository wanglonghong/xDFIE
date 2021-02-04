const xDFIE = artifacts.require('xDFIE');


module.exports = async function (deployer, network, accounts) {

  deployer.deploy(xDFIE);

};
