import Row from '../models/row';

export const getRows = async function (req, res, next) {
  const userId = req.user._id;
  let rows;

  try {
    rows = await Row.find({
      userId
    }).populate('userId')
  } catch ({message}) {
    return next({
      message: e,
      status: 404
    })
  }
  res.json(rows);
}

export const addRow = async function (req, res, next) {
  const rowObj = req.body;
  const userId = req.user._id;
  rowObj.userId = userId;
  let row;

  try {
    row = await Row.create(rowObj)
  } catch ({message}) {
    return next({
      status: 403,
      message
    })
  }

  res.json(row)
}


export const delRow = async function (req, res, next) {
  const rowId = req.params.id;
  const userId = req.user._id;

  try {
    await Row.remove({
      _id: rowId,
      userId
    }).populate('userId')
  } catch ({message}) {
    return next({
      message
    })
  }

  res
    .status(200)
    .json({
      status: 'succesful'
    })
}
