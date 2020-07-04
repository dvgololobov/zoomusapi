const helpers = require('../../helpers')

module.exports = (userEmail = '', params = {}, token = '', basicUrl) => ({
  listMeetings: () => {
    let queryParams = {
      type: 'live', // scheduled | live | upcoming
      page_size: 30, // The number of records returned within a single API call. Maximum 300
      next_page_token: null // The string of page token. Use it for pagination
    }
    queryParams = helpers.addQueryParams(queryParams, params)

    if (queryParams.page_size > 300) queryParams.page_size = 300

    const queryString = helpers.generateQueryParams(queryParams)

    return {
      method: 'get',
      url: `${basicUrl}/users/${userEmail}/meetings?${queryString}`,
      headers: {
        Authorization: `Bearer ${token}`,
        'User-Agent': 'Zoom-api-Jwt-Request',
        'content-type': 'application/json'
      }
    }
  },
  createMeeting: () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1).toISOString().replace(/\..+/, '')
    let bodyData = {
      start_time: tomorrow,
      timezone: 'Europe/Moscow',
      topic: 'Name of meeting',
      type: 2,
      agenda: '',
      duration: 60,
      settings: {
        approval_type: 0,
        enforce_login: false,
        host_video: false,
        participant_video: false,
        cn_meeting: false,
        in_meeting: false,
        join_before_host: false,
        mute_upon_entry: true,
        watermark: false,
        use_pmi: false,
        registration_type: 2,
        audio: 'both',
        auto_recording: 'cloud'
      }
    }

    bodyData = helpers.addQueryParams(bodyData, params)

    return {
      method: 'post',
      url: `${basicUrl}/users/${userEmail}/meetings`,
      headers: {
        Authorization: `Bearer ${token}`,
        'User-Agent': 'Zoom-api-Jwt-Request',
        'content-type': 'application/json'
      },
      data: bodyData
    }
  }
})
