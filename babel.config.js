/* eslint-disable no-unused-vars */
module.exports = api => {
  const isTest = api.env('test');

  return {
    presets: ['@babel/preset-env']
  };
};
