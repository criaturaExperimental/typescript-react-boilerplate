/* eslint-disable no-unused-vars */
module.exports = api => {
  const isTest = api.env('test');

  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-typescript',
      '@babel/preset-react'
    ],
    plugins: [
      '@babel/proposal-class-properties',
      '@babel/proposal-object-rest-spread'
    ]
  };
};
