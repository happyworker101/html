

export default class HTML {
  static generateClosedDOMString(tag: string, content: string | string[], attr: Record<string, string>) {
    if (content instanceof Array) {
      let str = ''
      for (var k = 0; k < content.length; k++) {
        str += HTML.generateClosedDOMString(tag, content[k], attr)
      }
      return str
    }
    var tag_attr = ''
    for (const i in attr) {
        if (attr.hasOwnProperty(i)) {
            tag_attr += i + '="' + attr[i] + '"'
        }
    }
    return `<${tag}${tag_attr ? ' ': ''}${tag_attr}>${content}</${tag}>`
  }

  static generateNotClosedDOMString(tag: string, attr: Record<string, string>) {
    //非闭合标签<img />
    let tag_attr = ''
  
    for (let i in attr) {
        if (attr.hasOwnProperty(i)) {
            tag_attr += i + '="' + attr[i] + '"'
        }
    }
    return `<${tag}${tag_attr ? ' ': ''}${tag_attr} />`
  }

  div(content: string | string[], attr: Record<string, string>) {
    return HTML.generateClosedDOMString('div', content, attr)
  }

  p(content: string | string[], attr: Record<string, string>) {
    return HTML.generateClosedDOMString('p', content, attr)
  }

  span(content: string | string[], attr: Record<string, string>) {
    return HTML.generateClosedDOMString('span', content, attr)
  }

  a(content: string | string[], attr: Record<string, string>) {
    return HTML.generateClosedDOMString('a', content, attr)
  }

  button(content: string | string[], attr: Record<string, string>) {
    return HTML.generateClosedDOMString('button', content, attr)
  }

  ul(content: string | string[], attr: Record<string, string>) {
    return HTML.generateClosedDOMString('ul', content, attr)
  }

  li(content: string | string[], attr: Record<string, string>) {
    return HTML.generateClosedDOMString('li', content, attr)
  }

  h(weight: number, content: string | string[], attr: Record<string, string>) {
    return HTML.generateClosedDOMString(`h${weight}`, content, attr)
  }

  input(attr: Record<string, string>) {
    return HTML.generateNotClosedDOMString('input', attr)
  }

  br(attr: Record<string, string>) {
    return HTML.generateNotClosedDOMString('br', attr)
  }

  hr(attr: Record<string, string>) {
    return HTML.generateNotClosedDOMString('hr', attr)
  }

  img(attr: Record<string, string>) {
    return HTML.generateNotClosedDOMString('img', attr)
  }
}
