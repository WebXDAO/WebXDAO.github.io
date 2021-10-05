const fetch = require("node-fetch");
const Cache = require("@11ty/eleventy-cache-assets");

module.exports = async function() {
  let url = "https://dev.to/api/articles?username=web3community";

  const response = await Cache(url, {
		duration: "4h", // save for 4 hours
		type: "json" // we’ll parse JSON for you
	});

  // uncomment to see json coming from dev.to api
  console.log("Fetching new dev.to articles...", response)

  return response;
};