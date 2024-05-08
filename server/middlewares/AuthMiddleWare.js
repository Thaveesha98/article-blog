const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");

  if (!accessToken) {
    return res.status(401).json({ error: "user not logged in" }); // Return early if token is missing
  }

  try {
    const validToken = verify(accessToken, "importantSecrete");
    if (validToken) {
      return next(); // Token is valid, proceed to the next middleware
    }
  } catch (err) {
    console.log(err);
    return res.status(401).json({ error: err.message }); // Return error message if token verification fails
  }

  return res.status(401).json({ error: "Invalid token" }); // Return error if token verification fails
};

module.exports = { validateToken };
