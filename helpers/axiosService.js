const axios = require("axios").default;
const {baseUrl} = require("../constants/urls");
const axiosCookieJarSupport = require("axios-cookiejar-support").default;
axiosCookieJarSupport(axios);

axios.defaults.baseURL = baseUrl;
axios.defaults.headers.common["User-Agent"] = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
axios.defaults.headers.common["Accept"] = "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8";
axios.defaults.headers.common["Accept-Language"] = "en-US,en;q=0.9";

const AxiosService = async (url) => {
  return new Promise(async (resolve, reject) => {
    const _url = url == null?url:encodeURI(url);
    try {
      const response = await axios.get(_url);
      if (response.status === 200) {
        return resolve(response);
      }
      return reject(response);
    } catch (error) {
      return reject(error.message);
    }
  });
};
module.exports = AxiosService;
