const { SafeString } = require('handlebars');
const markdown = require('markdown-it')();

const markdownRender = (text) => {  
    if (text != null) {
        text = markdown.render(text);
    }

    return new SafeString(text);
};

module.exports = { markdownRender };
