"use strict";

module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Yaaayyy!!! Serverless function executed successfully",
        input: event,
      },
      null,
      2
    ),
  };
};
