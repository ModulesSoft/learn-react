import {goodbye,hello} from "./lib";
import React from 'react'
import  {render} from 'react-dom'

// const {createElement} = React
// const {render} = ReactDOM

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
render(
<div>
    {hello}
    {goodbye}
</div>,
document.getElementById('react-container')
)