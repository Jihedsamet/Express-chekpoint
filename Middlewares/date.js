const dateCondition = (req, res, next) => {
  const date = new Date();
  const hour = date.getHours();

  if (hour > 9 && hour < 22) {
    next();
  } else{
    return res.status(405).send("arja3 ghodwa😊")
  }
};

module.exports = dateCondition;
