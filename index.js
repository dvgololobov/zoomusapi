const helpers = require('./helpers')
const api = require('./api')
const axios = require('axios')

class APIClient {

  constructor(APIKey = '', APISecret = '', expireTime = 3600) {
    this.token = helpers.token(APIKey, APISecret, expireTime)
    this.basicUrl = 'https://api.zoom.us/v2'
  }

  listMeetings (userEmail = '', params = {}) {
    const clientParams = api.meetings(userEmail, params, this.token, this.basicUrl).listMeetings()
    return axios(clientParams)
  }

}

const init = (APIKey = '', APISecret = '', expireTime = (1000 * 12 * 60 * 60)) => new APIClient(APIKey, APISecret, expireTime)

module.exports = init
module.exports.APIClient = APIClient