const iota = iotaLibrary.composeAPI({
    provider: 'https://nodes.iota.cafe:443'   // This is the main net not development
})

// find other nodes at https://nodes.iota.works/

// https://nodes.iota.cafe:443
// https://www.iotaqubic.us:443
// https://ultranode.iotatoken.nl:443
// https://perma.iota.partners:443

// https://iotanode.us:443  // I may have over used this!
// https://nodes.devnet.thetangle.org:443'  // DEV NET must use sendTrytes(trytes, 3, 9) these iota are not real!






async function mySendFunction(){

  const myReceivingAddress = await iota.getNewAddress(mySeed, {checksum: true, security: 2})

  // or use below any address you are given or make using the Trinity App https://trinity.iota.org/
  //const myReceivingAddress = ''   // You can generate your own receive address


  const myValueIOTA = 6    // amount of IOTA to send.

  console.log('Sending: '+myValueIOTA+' iota to '+myReceivingAddress)

  const myTransfers = [{
      value: myValueIOTA,
      address: myReceivingAddress,
      message: Converter.asciiToTrytes('Sent: '+myValueIOTA+' iota to '+myReceivingAddress)
    }]

    const myTrytes = await iota.prepareTransfers(mySeed, myTransfers)

    // with security depth 3 and minWeightMagnitude for Mainnet = 14
    const myResponse = await iota.sendTrytes(myTrytes, 3, 14)

    console.log('Completed TXs. You sent: '+myValueIOTA+' IOTA to '+myReceivingAddress)
   // response.map(tx => console.log(tx))    // very useful, shows lots of information: the hash, value, message incoded etc

}

// run the async function to be able to use 'await'
mySendFunction()
