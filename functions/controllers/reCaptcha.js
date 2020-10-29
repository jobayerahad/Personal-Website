const axios = require("axios");
const config = require("config");

// @desc    validate Human
exports.validateHuman = async (req, res) => {
  const secret = config.get("recaptchaSecretKey");
  const token = req.query.token;

  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`
    );

    const data = response.data;
    const isHuman = data.success;

    if (isHuman === null || !isHuman) res.status(400).json({ errors: ["You're not a human"] });

    res.header("Access-Control-Allow-Origin", "*");
    res.send(isHuman);
  } catch (error) {
    throw new Error(`Error in Google Siteverify API.  ${error.message}`);
  }
};
