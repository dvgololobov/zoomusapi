const qs = require('querystring')
const jwt = require('jsonwebtoken')

Helpers = {
  generateQueryParams: (params) => {
    let filteredObject = {}
    for (let key in params) {
      if(params[key] !== null) filteredObject[key] = params[key]
    }
    return qs.stringify(filteredObject)
  },
  addQueryParams: (defaultObject = {}, paramsObject = {}) => {
    for (let key in paramsObject) {
      if(params[key] !== null) defaultObject[key] = paramsObject[key]
    }
    return defaultObject
  },
  generatePayload: (key, expireTime = 3600) => {
    return {
      iss: key,
      exp: ((new Date()).getTime() + expireTime)
    }
  },
  token: (key, secret, expireTime = 3600) => jwt.sign(Helpers.generatePayload(key, expireTime), secret)
}

module.exports = Helpers