const helpers = require('./helpers')
const api = require('./api')
const axios = require('axios')

const APIClient = (APIKey = '', APISecret = '', expireTime = (1000 * 60 * 60)) => {
  this.token = helpers.token(APIKey, APISecret, expireTime)
  this.basicUrl = 'https://api.zoom.us/v2'
}

APIClient.prototype = {
  listMeetings: (userEmail = '', params = {}) => {
    const clientParams = api.meetings(userEmail, params, this.token, this.basicUrl).listMeetings()
    return axios(clientParams)
  }
}

const init = (APIKey = '', APISecret = '', expireTime = (1000 * 60 * 60)) => new APIClient(APIKey, APISecret, expireTime)

module.exports = init
module.exports.APIClient = APIClient