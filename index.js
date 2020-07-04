const helpers = require('./helpers')
const api = require('./api')
const axios = require('axios')

class APIClient {
  constructor (APIKey = '', APISecret = '', expireTime = 3600) {
    this.token = helpers.token(APIKey, APISecret, expireTime)
    this.basicUrl = 'https://api.zoom.us/v2'
  }

  /**
   *
   * @param userEmail - String email of zoom user
   * @param params - Object contains standart zoom params for this method
   * {
   *    page_number: 1,
   *    page_size: 30,
   *    type: 'live',
   *    next_page_token: ''
   * }
   * @returns {*|AxiosPromise} Get data from response.data object
   */
  listMeetings (userEmail = '', params = {}) {
    const clientParams = api.meetings(userEmail, params, this.token, this.basicUrl).listMeetings()
    return axios(clientParams)
  }
}

module.exports = APIClient
