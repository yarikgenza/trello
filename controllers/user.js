export const getUser = async function (req, res, next) {
  const user = req.user;

  if (!user) {
    console.log('No user!')
    next();
  }
  res.json(user);
}
