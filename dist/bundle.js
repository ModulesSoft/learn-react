'use strict';

var _React = React,
    createElement = _React.createElement;
var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;

/*const style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'verdana'
}
const title = React.createElement(
    'h1',
    {id: 'title',className: 'header',style:style},
    'Hello world'
)*/

render(React.createElement(
    'h1',
    { id: 'title', className: 'header', style: { backgroundColor: 'orange', color: 'white' } },
    'hellow bitches!'
), document.getElementById('react-container'));
