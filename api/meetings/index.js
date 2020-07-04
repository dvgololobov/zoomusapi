const helpers = require('../../helpers')

module.exports = (userEmail = config.mainUserEmail, params = {}, token = '', basicUrl) => ({
  listMeetings: () => {
    let queryParams = {
      type: 'live', // scheduled | live | upcoming
      page_size: 30, // The number of records returned within a single API call. Maximum 300
      next_page_token: null // The string of page token. Use it for pagination
    }
    queryParams = helpers.addQueryParams(queryParams, params)

    if(queryParams.page_size > 300) queryParams.page_size = 300

    const queryString = helpers.generateQueryParams(queryParams)

    return {
      method: 'get',
      url: `${basicUrl}/users/${userEmail}/meetings?${queryString}`,
      headers: { Authorization: `Bearer ${token}`, 'User-Agent': 'Zoom-api-Jwt-Request', 'content-type': 'application/json' }
    }
  }
})