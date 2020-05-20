const schema = {
  properties: {
    queryStringParameters: {
      type: "object",
      properties: {
        status: {
          type: "string",
          enum: ["OPEN", "CLOSED"],
          default: "OPEN",
          message: "Invalid status",
        },
      },
    },
  },
  required: ["queryStringParameters"],
};

export default schema;
