const express = require('express')
const getDevice = express.Router()
const geoip = require('geoip-lite')

const getname = useragent => {
  if (useragent.isTablet) return 'Tablet'
  else if (useragent.isiPad) return 'iPad'
  else if (useragent.isiPhone) return 'iPhone'
  else if (useragent.isWindows) return 'Windows'
  else if (useragent.isAndroid) return 'Android'
  else if (useragent.isLinux || useragent.isLinuxx64) return 'Linux'
  else if (useragent.isMac) return 'Mac'
  else return 'unknown'
}

getDevice.get('/test/deviceinfo', (req, res) => {
  const name = getname(req.useragent)
  const ip = req.ip
  let geo = geoip.lookup(ip)
  res.json({
    status: 'success',
    data: {
      deviceType: req.device.type || 'unknown',
      browser: req.useragent.browser || 'unknown',
      ip: ip || 'unknown',
      deviceName: name,
      contry: geo ? geo.country : 'unknown',
      region: geo ? geo.region : 'unknown'
    }
  })
})

module.exports = getDevice
