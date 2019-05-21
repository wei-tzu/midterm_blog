import React from 'react';
import '../style.css';
import Card from '../component/card';
var rocks = require('../pic/rocks.jpeg')
var jeans = require('../pic/jeans_back.jpeg')
var dancer = require('../pic/dancer.jpeg')
var pasta = require('../pic/pasta.jpeg')
export default () => {
  return (
    <div class="card-section">
        <div class="card-grid">
        <Card pic = {rocks} cate = 'category' headings='All About Me'></Card>
        <Card pic = {jeans} cate = 'category' headings='Skills'></Card>
        <Card pic = {dancer} cate = 'category' headings='Works'></Card>
        <Card pic = {pasta} cate = 'category' headings='Thoughts'></Card>
        </div>
    </div>
  );
}