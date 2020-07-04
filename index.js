const helpers = require('./helpers')
const api = require('./api')
const axios = require('axios')

class APIClient {
  constructor (APIKey = '', APISecret = '', expireTime = 3600 * 1000) {
    this.APIKey = APIKey
    this.APISecret = APISecret
    this.token = helpers.token(APIKey, APISecret, expireTime)
    this.basicUrl = 'https://api.zoom.us/v2'
  }

  set token(value) {
    this._token = value
  }

  updateToken () {
    this._token = helpers.token(this.APIKey, this.APISecret, 3600 * 1000)
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
    this.updateToken()
    return axios(api.meetings(userEmail, params, this.token, this.basicUrl).listMeetings())
  }

  createMeeting (userEmail = '', params = {}) {
    this.updateToken()
    return axios(api.meetings(userEmail, params, this.token, this.basicUrl).createMeeting())
  }
}

module.exports = APIClient
