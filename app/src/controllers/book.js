const request = require('request')

module.exports = {
    get(req, res){

        var data = {
            template: {
                'shortid':'qrQLVD_yhz',
            },
            options: {
                preview: true
            }

        }

        var options = {
            url: 'http://localhost:8001/api/report',
            method: 'POST',
            json: data
        }

        return request(options).pipe(res)
    }
}