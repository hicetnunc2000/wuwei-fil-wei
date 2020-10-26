
const { Validator } = require('@chainlink/external-adapter')
const web3 = require('web3')
const axios = require('axios')

const customParams = {}

const filEth = async (input, callback) => {

    const validator = new Validator(callback, input, customParams)
    const jobRunId = validator.validated.id

    await axios.get('https://min-api.cryptocompare.com/data/price?fsym=FIL&tsyms=ETH')
    .then(res => {
        callback(200, {
            "jobRunID": jobRunId,
            "data": web3.utils.toWei(`${res.data.ETH}`, 'ether')
        })
    })

}

module.exports.wuwei_fil_wei = (event, context, callback) => {
    filEth(JSON.parse(event.body), (statusCode, data) => {
        callback(null, {
            statusCode: statusCode,
            body: JSON.stringify(data),
            isBase64Encoded: false
        })
    })
}

