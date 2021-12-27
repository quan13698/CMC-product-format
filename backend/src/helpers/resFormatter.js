module.exports = (req, res) => async (func) => {
  try {
    const data = await func;
    const resp = {
      success: true,
      message: "OK",
      data: data,
    };
    res.json(resp);
  } catch (e) {
    const { code, message } = e;
    const resp = {
      success: false,
      message: message || code,
    };
    console.log(e);
    res.json(resp);
  }
};
