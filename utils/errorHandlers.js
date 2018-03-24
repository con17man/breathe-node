
/**
 * @desc Catch Errors Handler for async/await
 *       replaces the try{} catch(e) {}
 */
exports.catchErrors = (fn) => {
    return function(req, res, next) {
        return fn(req, res, next).catch(next);
    };
};



/**
 * @desc Not Found Error Handler - if route isn't found return 404 error
 */
exports.notFound = (req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
}