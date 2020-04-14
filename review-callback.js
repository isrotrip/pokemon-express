function get(path, cb) {
  cb(null, 'hello')
}

get('/', function (req, res) {
  console.log(res)
})