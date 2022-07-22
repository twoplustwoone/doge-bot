const screenshotapi = process.env.SCREENSHOT_API_TOKEN
let URL =
  'https://shot.screenshotapi.net/screenshot?token=' +
  screenshotapi +
  '&url=https%3A%2F%2Fwww.wallstreetzen.com%2Fstocks%2Fus%2Fnyse%2Fcrm%2Fstock-forecast&output=json&file_type=png&block_ads=true&no_cookie_banners=true&wait_for_event=load&selector=body%20%3E%20div%20%3E%20div.MuiContainer-root.jss1.MuiContainer-maxWidthXl%20%3E%20div%20%3E%20div%3Anth-child(1)%20%3E%20div&scroll_to_element=body%20%3E%20div%20%3E%20div.MuiContainer-root.jss1.MuiContainer-maxWidthXl%20%3E%20div%20%3E%20div%3Anth-child(1)%20%3E%20div'

const getStockPrediction = () => {
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log({ data })
      return data.screenshot
    })
}

module.exports = { getStockPrediction }
