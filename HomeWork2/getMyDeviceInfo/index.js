var express = require('express');
var app = express();
const os = require('os');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const pdf = require('html-pdf');


app.set('view engine', 'ejs');


const osInfo= {
    architecture: os.arch(),
    cpus: os.cpus(),
    hostname:  os.hostname(),
    oSReleaseInfo:  os.release(),
    uptimeOfOS:  + os.uptime(),
    userInfo: os.userInfo()
};

const gethtmltopdf = async (osInfo,req, res) => {
    try {
        const filePathName = path.resolve(__dirname, 'views/main.ejs');
        const htmlString = fs.readFileSync(filePathName).toString();
        let  options = { format: 'Letter' };
        const ejsData = ejs.render(htmlString, { osInfo: osInfo });
        console.log()
        return await pdf.create(ejsData, options).toFile('generatedfile.pdf', (err, result) => {
            if (err) return console.log(err);
            if (result.filename) {
                return res.status(200).json({
                    status: "success",
                    message: "Exported successfully.",
                  });            }
        });
       
    } catch (err) {
        return res.status(500).json({
            data: error,
            status: "error",
            message: "Something went wrong.",
          });    }


}
app.get('/', (req, res) => {
    res.render('main.ejs', {osInfo});
})
app.get('/export', (req, res) => {
    gethtmltopdf(osInfo,req, res)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});