exports.handler = (event, context, callback) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Launched through Jenkins Second attempt')
    };
    callback(null,response);
};