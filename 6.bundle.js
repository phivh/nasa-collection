(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{204:function(e,t,n){"use strict";function r(e,t){return e===t}n.d(t,"a",function(){return o});var o=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];var i=0,a=r.pop(),c=function(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(e){return"function"==typeof e})){var n=t.map(function(e){return typeof e}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}(r),u=e.apply(void 0,[function(){return i++,a.apply(null,arguments)}].concat(n)),l=e(function(){for(var e=[],t=c.length,n=0;n<t;n++)e.push(c[n].apply(null,arguments));return u.apply(null,e)});return l.resultFunc=a,l.dependencies=c,l.recomputations=function(){return i},l.resetRecomputations=function(){return i=0},l}}(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,n=null,o=null;return function(){return function(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,o=0;o<r;o++)if(!e(t[o],n[o]))return!1;return!0}(t,n,arguments)||(o=e.apply(null,arguments)),n=arguments,o}})},215:function(e,t,n){"use strict";n.r(t);var r=n(9),o=n(12),i=n(0),a=n.n(i),c=n(1),u=n.n(c),l=n(72),s=n(73),f=n(74);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}l.a.library.add(f.g);var v=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=y(this,h(t).call(this,e))).state={fileUrl:""},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,i["Component"]),n=t,(r=[{key:"componentDidMount",value:function(){var e=this;this.props.selectedItem.file&&fetch(this.props.selectedItem.file).then(function(e){return e.json()}).then(function(t){var n=t.find(function(e){return e.indexOf("mp4")>-1});e.setState({fileUrl:n})}).catch(function(e){console.error(e)})}},{key:"shouldComponentUpdate",value:function(){return!0}},{key:"onClose",value:function(){this.props.history.goBack()}},{key:"render",value:function(){console.log(this.props.selectedItem);var e="video"===this.props.selectedItem.data.media_type,t=this.state.fileUrl?this.state.fileUrl:this.props.selectedItem.fileUrl;return a.a.createElement("section",{className:"detail-page"},a.a.createElement("section",{className:"wrap-container"},a.a.createElement("div",{className:"page-header"},a.a.createElement("h1",null,this.props.selectedItem.data.title),a.a.createElement("button",{onClick:this.onClose.bind(this)},a.a.createElement(s.a,{icon:"times",size:"lg"}))),a.a.createElement("div",{className:"detail__content"},e?a.a.createElement(function(){return a.a.createElement("video",{controls:!0,autoPlay:!0},a.a.createElement("source",{src:t,type:"video/mp4"}))},null):a.a.createElement("img",{width:"100%",src:this.props.selectedItem.thumb,alt:this.props.selectedItem.data.title}))))}}])&&d(n.prototype,r),o&&d(n,o),t}();v.propTypes={selectedItem:u.a.object,history:u.a.object};var b=v,g=n(204),w=Object(g.a)([function(e,t){return e.find(function(e,n){return e.data.nasa_id===t.match.params.id})}],function(e,t){return e});t.default=Object(o.e)(Object(r.c)(function(e,t){var n;return n=e.pagination.hits>0?e.data:e.local,{selectedItem:w(n,t)}},null)(b))}}]);
//# sourceMappingURL=6.bundle.js.map