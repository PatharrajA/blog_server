var blog = function () {

    blogSchema = mongoose.Schema({
        blog_title: {
            type: String,
            required: true
        },
        blog_content: {
            type: String
        },
        created_at: {
            type: Date,
            default: Date.now
        },
        feature_media: {
            type: String
        },
        media: {
            image: [],
            video: [],
            audio: [],
            document: []
        },
        author: {},
        updated_at: {
            type: Date
        },
        blog_tag: []
    });

    _blogModel = mongoose.model('blog', blogSchema);

    var result_obtained = "",
        error_obtained = "";


    _createBlog = function (jsonData, callback) {
        var newBlog = new _blogModel(jsonData);
        newBlog.save(function (err, blog) {
            console.log(err, blog)
            if (!err) {
                result_obtained = {
                    data: blog,
                    code: 201,
                    message: message.success.blog,
                    success: true
                };
                callback(null, result_obtained);
            } else {
                error_obtained = {
                    error: err,
                    code: 204,
                    message: message.error.blog,
                    success: false
                };
                callback(error_obtained, null);
            }
        });
    };

    _getBlog = function (blog_id, callback) {
        _blogModel.findById(blog_id, function (err, blog) {
            if (!err) {
                result_obtained = {
                    data: blog,
                    code: 200,
                    message: message.success.getBlog,
                    success: true
                };
                callback(null, result_obtained);
            } else {
                error_obtained = {
                    error: err,
                    code: 204,
                    message: message.error.getBlog,
                    success: false
                };
                callback(error_obtained, null);
            }
        });
    };

    _getAllBlog = function (callback) {
        _blogModel.find({}, function (err, blog) {
            if (!err) {
                result_obtained = {
                    data: blog,
                    code: 200,
                    message: message.success.getBlog,
                    success: true
                };
                callback(null, result_obtained);
            } else {
                error_obtained = {
                    error: err,
                    code: 204,
                    message: message.error.getBlog,
                    success: false
                };
                callback(error_obtained, null);
            }
        });
    }
    return {
        createBlog: _createBlog,
        getBlog: _getBlog,
        getAllBlog: _getAllBlog
    }

}();

module.exports = blog;