# zoomusapi
The Zoom.us api client based on axios lib.

## Installation

`npm install zoomusapi`

## Usage

Code examples:

With async/await:
```javascript
const Zoom = require('zoomusapi')
const Api = new Zoom('API_KEY', 'API_SECRET', 'EXPIRE_TIME_IN_MILLISECONDS')

const app = async () => {
  const listMeetings = await Api.listMeetings('zoom_user@email.com')
  console.log(listMeetings.data)
}

app()
```

With then chains:
```javascript
const Zoom = require('zoomusapi')
const Api = new Zoom('API_KEY', 'API_SECRET', 'EXPIRE_TIME_IN_MILLISECONDS')

const app = () => {
  Api.listMeetings('zoom_user@email.com')
    .then(result => {
        console.log(result.data)
    })
}

app()
```

All of that cases print object in your console:
```json5
{
  "page_size": 30,
  "total_records": 0,
  "next_page_token": "",
  "meetings": []
}
```
## Next Features:
- add some methods of zoom api

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## History
2020-07-04: First publish (This is beta. Don't use it)

## License
Apache 2.0
