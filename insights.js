const pagespeedInsights = require("pagespeed-insights");

let opts = {
  url: "https://www.google.com/search?q=chocolates",
  apiKey: "AxkfuV138x",
  strategy: "mobile"
};

pagespeedInsights(opts, (err, data) => {
  console.log(data);
});
