//es5导入模块
import $ from 'jquery'
//const $ = require('jquery')
$(function(){
    $('li:odd').css('backgroundColor','lightblue')
    $('li:even').css('backgroundColor',function(){
        return '#D97634'  
  })   
})

