import React from 'react';
import '../style.css';
export default ({ pic, cate, headings }) => {
  return (
        <a class="card" href="#">
        <div class="card__background" style={{backgroundImage: "url("+pic+")"}}></div>
        <div class="card__content">
            <p class="card__category">{cate}</p>
            <h3 class="card__heading">{headings}</h3>
        </div>
        </a>
  );
}