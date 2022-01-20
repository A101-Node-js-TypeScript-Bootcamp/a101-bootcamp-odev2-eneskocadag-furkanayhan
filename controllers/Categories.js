const axios = require("axios");
module.exports.multigetCategories = async (req, res) => {
  const responseData = await axios("https://api.trendyol.com/sapigw/product-categories");
  res.json(responseData.data);
};

