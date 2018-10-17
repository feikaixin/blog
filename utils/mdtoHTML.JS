const regex = /^( {0,3}#+ )|^( {0,}[\*|\-] )|^( ?\-{3,})|^( {0,3}```)/g

// 判断是块级标签
const isBlock = str => {
  const regex = /^( {0,3}#+ )|^( {0,}[\*|\-] )|^( ?\-{3,})|^( {0,3}```)/g
  return regex.test(str);
}

class Converter {
  constructor(markdown) {
    this.data = {};
    this.title=""; // 标题
    this.date = ""; // 时间
    this.tags =[]; // tags 标记列表
    this.categories =''; // 分类名称
    this.content = [];
    this.markdown = markdown;
  }

  toHtml = (md) => {
    // 去除data相关片段
    const { markdown, data } = this.getGlobalData(this.markdown);
    // 将代码进行分割成块
    const block = this.toBlock(markdown);
    // 对于每块进行处理，形成标签
    const blockHtml = this.blockToHtml(block);
    // 将块标签转化成行内标签
    const inlineHtml = this.inLineHtml(blockHtml);
    // 返回拼装的html代码
    return inlineHtml.join('');
  }

  getContent = () => {
    this.toHtml();
    return this.content;
  }

  // 渲染生成富文本，用于添加添加样式
  toRich(md) {
  }

  isFixedData = (item) => {
    if(/^title[:|：]/g.test(item)) {
      this.title = item.replace(/^title:/g,'').trim();
      return true;
    }
    if(/^date[:|：]/g.test(item)) {
      this.date = item.replace(/^date[:|：]/g, '').trim();
      return true;
    }
    if(/^tags[:|：]/g.test(item)) {
      const regex = /d/g;
      let match;
      while(match = regex.exec(item)) {
        this.tags.push(match[1]);
      }
      return true;
    }
    if(/^categories[:|：]/g.test(item)) {
      this.categories = item.replace(/^categories[:|：]/g, '').trim();
      return true;
    }
    return false;
  }

  /**
   *
   * 提取全局数据，然后将之清除
   * @memberof Converter
   * @param md md string
   * @return { markdown, data }
   */
  getGlobalData = (md) => {
    let regex = /\[(\d+)\]: ?([\S]*)/g;
    let tempR;
    let data = {};
    while( tempR = regex.exec(md))
    {
      data[tempR[1]] = tempR[2]
    }
    const markdown = md.replace(/\[(\d+)\]: ?([\S]*)/g, '')
    this.data = data;
    return { markdown, data }
  }

  toBlock(md) {
    let mdarr = md.split('\n').filter(item => item.trim().length !== 0)

    let blockMD = [];
    let identification = false;
    // 分割形成块级元素
    for(let i = 0; i < mdarr.length; i++) {
      // 
      if(this.isFixedData(mdarr[i])) {
        i++;
        continue;
      }
      // 判断当前是不是块级元素，如果是的话判他的上一个是不是块级元素，不是的话进行合并
      // ``` 拦截处理
      if(/^( {0,3}`{3})/g.test(mdarr[i])) {
        identification = !identification;
        if(identification) blockMD.push(mdarr[i]);
        continue;
      }
      if(identification) {
        blockMD[blockMD.length-1] += '\n' + mdarr[i]
        continue;
      }
      // table 拦截
      if(/^\|/g.test(mdarr[i])) {
        if(/^\|\-\-|/g.test(mdarr[i+1])) {
          blockMD.push(mdarr[i]);
          i+=2;
          for(;i<mdarr.length;i++) {
            if(/^\|/g.test(mdarr[i])) {
              blockMD[blockMD.length - 1] += '\n' + mdarr[i]; 
            } else {
              break;
            }
          }
          mdarr[i] && blockMD.push(mdarr[i]);
          continue;
        }
      }
      // >拦截
      if(/^> /g.test(mdarr[i])) {
        blockMD.push(mdarr[i++]);
        continue;
      }

      if(i>0 && !isBlock(mdarr[i])) {
        if(!isBlock(mdarr[i-1])) {
          blockMD[blockMD.length - 1] += '<br>' + mdarr[i];
          continue;
        }
      }
      blockMD.push(mdarr[i])
    }
    return blockMD
  }

  // 将块级转化成html
  blockToHtml = (blockArr) => {
    const blockHtmlArr = [];
    for(const item of blockArr) {
      let blockIdentifident = item.match(regex) && item.match(regex)[0].trim();
      // #
      if(/#/g.test(blockIdentifident)) {
        const title = item.replace(/^( {0,3}#+ )/g,'');
        const level = blockIdentifident.length;
        blockHtmlArr.push(`<h${level} class='ace ace-h' id="${title}">${title}</h${level}>`)
        // 推进目录中
        this.content.push({
          title,
          level: blockIdentifident.length,
        })
        continue
      }
      // * | -
      if(/^ {0,3}\*|(\-^\-)/g.test(item)) {
        blockHtmlArr.push(`<li class='ace ace-li'>${item.replace(/^( {0,}[\*|\-] )/g,'')}</li>`)
        continue
      }
      if(/^ {4,6}\*|(\-^\-)/g.test(item)) {
        blockHtmlArr.push(`<li class='ace ace-li ace-li-2'>${item.replace(/^( {0,}[\*|\-] )/g,'')}</li>`)
        continue
      }
      if(/^ {7,9}\*|(\-^\-)/g.test(item)) {
        blockHtmlArr.push(`<li class='ace ace-li ace-li-3'>${item.replace(/^( {0,}[\*|\-] )/g,'')}</li>`)
        continue
      }

      // ---
      if(/-+/g.test(blockIdentifident)) {
        blockHtmlArr.push(`<hr>`)
        continue
      }
      // ```
      if(/```/g.test(blockIdentifident)) {
        // 使用插件进行代码格式化
        blockHtmlArr.push(`<pre class="line-numbers ace ace-code"><code class="language-javascript">${
          Prism.highlight(item.replace(/(```)/g, ''), Prism.languages.javascript, 'javascript')
        }</code></pre>`)
        continue
      }

      // table

      
      // 行内标签
      blockHtmlArr.push(this.specialHtml(item));
    }
    return blockHtmlArr;
  }

  // 处理特殊行内标签
  specialHtml = md => {
    // > 处理这种标签
    if(/^( {0,3}> )/g.test(md)) {
      return `<div class='ace ace-ref ace-p'>${md.replace(/^( {0,3}> )/g, '')}</div>`
    }
    if(/^\|/g.test(md)) {
      // 对table进行渲染

      const rows = md.split('\n');
      const regex = /\|([\s|\S]*?)\|/g;
      let match = null;
      let table = ''
      for(let i = 0; i < rows.length; i++) {
        const str = '';
        while(match  = regex.exec(rows[i])) {
          let content = match[1];
          str += `<div class='ace ace-table-cell'>${content}</div>`
        }
        table += `<div class="ace ace-table-row">${str}</div>`
      }
      return `<div class='ace ace-table'>${table}</div>`
    }
    return `<p class='ace ace-p'>${md}</p>`
  }

  // 处理行行内标签
  inLineHtml = (md) => {
    const data = this.data;
    const html = [];
    for(let item of md) {
      let str = item;
      if(str.includes('<pre class="line-numbers ace ace-code"><code class="language-javascript">')) {
        html.push(str)
        continue
      }
      // table 
      // *xianzia*
      str = str.replace(/[^\*]\*([^\*]+)\*/g, '<i>$1</i>')
      // **xianzai*
      str = str.replace(/\*{2}([^\*]\S*)\*{2}/g, '<strong>$1</strong>')
      str = str.replace(/[^\`]\`([^\`]+)\`/g, `<code class='ace ace-code-inline'>$1</code>`)
 
      str = str.replace(/\[([\s|\S]*)\]\[\D+\]/g, `<a href="$1" class="ace ace-link">$1</a>`)

      str = str.replace(/\!\[\S?\]\((\S+)\)/g, `<img src="$1" class="ace ace-img"></img>`)
      // 图片加载
      if(/\!\[[\S]*\]\[(\d+)\]/g.test(str)) {
        let regex = /\!\[([\S]*)\]\[(\d+)\]/g
        let match;
        while(match  = regex.exec(str)) {
          let href = data[match[2]];
          let name = match[1];
          str = str.replace(/\!\[[\S]*\]\[(\d+)\]/, `<img src="${href}" class="ace ace-img" alt="${name}"></img>`);
        }
      }
      // 链接加载
      if(/\[([\s|\S]*)\]\[\d+\]/g.test(str)) {
        let regex = /\[([\s|\S]*)\]\[(\d+)\]/g
        let match  = regex.exec(str);
        let href = data[match[2]];
        let name = match[1];
        str = str.replace(/\[([\s|\S]*)\]\[\d+\]/g, `<a href=${href} class="ace ace-link">${name}</a>`);
      }
      html.push(str)
    }
    return html;
  }
}

export default {
  Converter
};

