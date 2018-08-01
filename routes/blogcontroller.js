router.route('/blog').post(function (req, res) {
    try {
        if (req.header('Authorization')) {
            var session = token.ensureAuthenticated(req.header('Authorization'));
            if (session.success) {
                blogController.createBlog(req.body, function (err, blog) {
                    if (!err) {
                        res.send(blog);
                    } else {
                        res.send(err);
                    }
                });
            } else {
                res.send({
                    err: message.error.unAuthorize,
                    message: message.error.unAuthorize,
                    code: 401,
                    success: false
                });
            }
        } else {
            res.send({
                err: message.error.unAuthorize,
                message: message.error.unAuthorize,
                code: 401,
                success: false
            });
        }
    } catch (err) {
        res.send({
            err: err,
            message: message.error.parameter,
            code: 204
        });
    }
}).get(function (req, res) {
    try {
        if (req.header('Authorization')) {
            var session = token.ensureAuthenticated(req.header('Authorization'));
            if (session.success) {
                blogController.getAllBlog(function (err, blog) {
                    if (!err) {
                        res.send(blog);
                    } else {
                        res.send(err);
                    }
                });
            } else {
                res.send({
                    err: message.error.unAuthorize,
                    message: message.error.unAuthorize,
                    code: 401,
                    success: false
                });
            }
        } else {
            res.send({
                err: message.error.unAuthorize,
                message: message.error.unAuthorize,
                code: 401,
                success: false
            });
        }
    } catch (err) {
        res.send({
            err: err,
            message: message.error.parameter,
            code: 204
        });
    }
});

router.route('/blog/:blog_id').get(function (req, res) {
    try {
        if (req.header('Authorization')) {
            var session = token.ensureAuthenticated(req.header('Authorization'));
            if (session.success) {
                var blog_id = req.params.blog_id || req.body.blog_id || req.query.blog_id;
                blogController.getBlog(blog_id, function (err, user) {
                    if (!err) {
                        res.send(user);
                    } else {
                        res.send(err);
                    }
                });
            } else {
                res.send({
                    err: message.error.unAuthorize,
                    message: message.error.unAuthorize,
                    code: 401,
                    success: false
                });
            }
        } else {
            res.send({
                err: message.error.unAuthorize,
                message: message.error.unAuthorize,
                code: 401,
                success: false
            });
        }
    } catch (err) {
        res.send({
            err: err,
            message: message.error.parameter,
            code: 204
        });
    }
});


module.exports = router;