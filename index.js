/**
 * created by zyf
 */
'use strict';
(function(_root) {
  var DOMUtil = {
    generateClosedDOMString: function (dom, content, attr) {
        if (content instanceof Array) {
            var res = "";
            for (var k = 0; k < content.length; k++) {
                res += this.generateClosedDOMString(dom, content[k], attr)
            }
            return res
        }
        var tag_attr = "";
        for (var i in attr) {
            if (attr.hasOwnProperty(i)) {
                tag_attr += i + '="' + attr[i] + '"'
            }
        }
        return "<" + dom + " " + tag_attr + ">" + content + "</" + dom + ">";
    },
    generateNotClosedDOMString: function (dom, attr) {
        //非闭合标签<img />
        var tag_attr = "";
  
        for (var i in attr) {
            if (attr.hasOwnProperty(i)) {
                tag_attr += i + '="' + attr[i] + '"'
            }
        }
        return "<" + dom + " " + tag_attr + "/>";
  
    },
    div: function (content, attr) {
        return this.generateClosedDOMString("div", content, attr)
    },
    p: function (content, attr) {
        return this.generateClosedDOMString("p", content, attr)
    },
    canvas: function (content, attr) {
        return this.generateClosedDOMString("canvas", content, attr)
    },
    svg: function (content, attr) {
        return this.generateClosedDOMString("svg", content, attr)
    },
    a: function (content, attr) {
        return this.generateClosedDOMString("a", content, attr)
    },
    button: function (content, attr) {
        return this.generateClosedDOMString("button", content, attr)
    },
    table: function (content, attr) {
        return this.generateClosedDOMString("table", content, attr)
    },
    tr: function (content, attr) {
        return this.generateClosedDOMString("tr", content, attr)
    },
    td: function (content, attr) {
        return this.generateClosedDOMString("td", content, attr)
    },
    th: function (content, attr) {
        return this.generateClosedDOMString("th", content, attr)
    },
    span: function (content, attr) {
        return this.generateClosedDOMString("span", content, attr)
    },
    ul: function (content, attr) {
        return this.generateClosedDOMString("ul", content, attr)
    },
    li: function (content, attr) {
        return this.generateClosedDOMString("li", content, attr)
    },
    h3: function (content, attr) {
        return this.generateClosedDOMString("h3", content, attr)
    },
    option: function (content, attr) {
        return this.generateClosedDOMString("option", content, attr)
    },
    img: function (attr) {
        return this.generateNotClosedDOMString("img", attr)
    },
    br: function (attr) {
        return this.generateNotClosedDOMString("br")
    },
    hr: function (attr) {
        return this.generateNotClosedDOMString("hr")
    },
    form: function (content, attr) {
        return this.generateClosedDOMString("form", content, attr)
    },
    label: function (content, attr) {
        return this.generateClosedDOMString("label", content, attr)
    },
    input: function (attr) {
        return this.generateNotClosedDOMString("input", attr)
    },
    select: function (content, attr) {
        return this.generateClosedDOMString("select", content, attr)
    }
  };
  _root.DOMUtil = DOMUtil
})(window)

