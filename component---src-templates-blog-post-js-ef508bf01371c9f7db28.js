(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{141:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return l});a(149),a(73);var n=a(0),o=a.n(n),r=a(144),i=a(154),c=a(148);t.default=function(e){var t=e.data,a=t.markdownRemark,n=t.indexJson.articles.filter(function(e){return"/"+e.link.split(".")[0]+"/"===a.fields.slug})[0];return o.a.createElement(c.a,null,o.a.createElement(d,null,n?o.a.createElement(i.Helmet,{title:n.title}):null,o.a.createElement("div",{className:"book-wrapper"},n?o.a.createElement(p,null,n.title):null,o.a.createElement("div",{className:"chapter-contents"},o.a.createElement("br",null),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.html}})))))};var l="1770153340",p=r.a.div.withConfig({displayName:"blog-post__Title",componentId:"sc-1e41lke-0"})(["font-family:'Crete Round',Georgia,Times New Roman,serif;font-size:24px;color:#e5533c;margin-top:0;text-align:center;"]),d=r.a.div.withConfig({displayName:"blog-post__Wrap",componentId:"sc-1e41lke-1"})(["width:100%;background:#f5f5f5;.book-wrapper{width:100%;max-width:1000px;padding:40px 16px 60px;margin:0 auto;background:#fff;}blockquote{background-color:#fcf8e3;border-color:#faebcc;color:#8a6d3b;padding:15px 30px;margin:0;margin-bottom:20px;border:1px solid rgba(0,0,0,0);border-radius:4px;h4{text-align:center;margin:0;}}.contents-wrapper{background:#f5f5f5;padding:30px 0;}.chapter-contents{width:100%;max-width:800px;margin:0 auto;font-family:'ProximaNova','Helvetica Neue',Helvetica,Arial,sans-serif;font-weight:300;letter-spacing:0.3px;line-height:36px;font-size:16px;}.chapter-contents h1{font-family:'Crete Round',Georgia,Times New Roman,serif;font-size:24px;color:#e5533c;margin-top:0;text-align:center;}.chapter-contents h2{font-family:'Crete Round',Georgia,Times New Roman,serif;font-size:18px;color:#14877e;}.chapter-contents a{color:#14877e;text-decoration:none;border-bottom:1px dotted #1bbfb1;}.book-wrapper img{display:block;max-width:700px;margin:20px auto;width:100%;}.book-wrapper img[alt='certificates']{display:block;width:291px;}:not(pre) > code[class*='language-'],pre{background:#f5f5f5;}pre{padding:1em;margin:0.5em 0;overflow:auto;}code[class*='language-'],pre{color:#000;text-shadow:0 1px #fff;font-size:14px;direction:ltr;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;line-height:26px;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;}.chapter-contents pre{color:#767676;border:1px solid #dcdcdc;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word;}.chapter-contents p > code,.chapter-contents ul > code,.chapter-contents ol > code,.chapter-contents li > code{padding-right:4px;padding-left:4px;padding-top:2px;padding-bottom:2px;background-color:#f5f5f5;color:#14877e;border-radius:4px;font-size:15px;}"])},145:function(e,t,a){var n;e.exports=(n=a(147))&&n.default||n},146:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(4),i=a.n(r),c=a(32),l=a.n(c);a.d(t,"a",function(){return l.a});a(145),o.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},147:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),o=a.n(n),r=a(4),i=a.n(r),c=a(55),l=a(2),p=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};p.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=p},148:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(144),i=a(146),c=a(7),l=a.n(c),p=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={enabled:!0},t}l()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.docsearch?window.docsearch({apiKey:"e7d7fcfb5ab7b179b4e5424f16404c6a",indexName:"gitbeijing",inputSelector:"#algolia-doc-search"}):(console.warn("Search has failed to load and now is being disabled"),this.setState({enabled:!1}))},a.render=function(){return this.state.enabled?o.a.createElement(d,null,o.a.createElement(s,{id:"algolia-doc-search",type:"search",placeholder:"Search docs"})):null},t}(n.Component),d=r.a.form.withConfig({displayName:"DocSearch__Form",componentId:"qvs5fz-0"})(["margin-bottom:24px;"]),s=r.a.input.withConfig({displayName:"DocSearch__Input",componentId:"qvs5fz-1"})(["border:0;font-size:16px;color:#fff;width:300px;height:32px;border-radius:4px;padding:8px 8px 8px 32px;background-image:url(data:image/svg+xml;base64,PHN2ZwogIGFsdD0iU2VhcmNoIgogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIK%0D%0AICB2aWV3Qm94PSIwIDAgMTYgMTYiCj4KICA8cGF0aAogICAgZD0iCiAgICAgIE02LjAyOTQ1LDEw%0D%0ALjIwMzI3YTQuMTczODIsNC4xNzM4MiwwLDEsMSw0LjE3MzgyLTQuMTczODJBNC4xNTYwOSw0LjE1%0D%0ANjA5LAogICAgICAwLDAsMSw2LjAyOTQ1LDEwLjIwMzI3Wm05LjY5MTk1LDQuMjE5OUwxMC44OTg5%0D%0ALDkuNTk5NzlBNS44ODAyMSw1Ljg4MDIxLAogICAgICAwLDAsMCwxMi4wNTgsNi4wMjg1Niw2LjAw%0D%0ANDY3LDYuMDA0NjcsMCwxLDAsOS41OTk3OSwxMC44OTg5bDQuODIzMzgsCiAgICAgIDQuODIzMzhh%0D%0ALjg5NzI5Ljg5NzI5LDAsMCwwLDEuMjk5MTIsMCwuODk3NDkuODk3NDksMCwwLDAtLjAwMDg3LTEu%0D%0AMjk5MDlaIgogICAgZmlsbD0iI2ZmZmZmZiIKICAvPgo8L3N2Zz4=);background-size:16px 16px;background-repeat:no-repeat;background-position-y:center;background-position-x:8px;background-color:rgba(0,0,0,0.2);&:focus{outline:none;}"]),g=function(){return o.a.createElement(u,null,o.a.createElement(m,null,o.a.createElement(i.a,{to:"/"},"Git 北京")),o.a.createElement(p,null))},u=r.a.div.withConfig({displayName:"Header__Wrap",componentId:"sc-75xirx-0"})(["background:teal;min-height:80px;display:flex;flex-direction:column;justify-content:center;align-items:center;"]),m=r.a.h2.withConfig({displayName:"Header",componentId:"sc-75xirx-1"})(["margin-bottom:24px;a{color:#fff;text-decoration:none;&:hover{color:#77f0f0;}}"]),f=function(){return o.a.createElement(h,null,o.a.createElement("nav",null,o.a.createElement("p",null,"有任何问题请联系",o.a.createElement("a",{href:"https://github.com/happypeter"}," happypeter")," ： happypeter1983@gmail.com ",o.a.createElement("br",null)," 所有内容基于"," ",o.a.createElement("a",{href:"https://creativecommons.org/licenses/by/4.0/"},"允许商用保留署名的 CC 协议")," ","发布")))},h=r.a.footer.withConfig({displayName:"Footer",componentId:"sc-4dc8xa-0"})(["width:100%;height:70px;nav{background:#333;min-height:70px;color:#fff;a{color:#14877e;text-decoration:none;}a:hover{text-decoration:underline;}}p{line-height:1.9;padding:40px;text-align:center;font-size:13px;margin-top:0;}"]),w=(a(151),a(152),t.a=function(e){var t=e.children;return o.a.createElement(w,null,o.a.createElement(g,null),t,o.a.createElement(f,null))},r.a.div.withConfig({displayName:"Layout__Wrap",componentId:"sc-74hz2d-0"})(["display:flex;flex-direction:column;"]))}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-ef508bf01371c9f7db28.js.map