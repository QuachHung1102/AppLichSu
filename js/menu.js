'use strict';
import { data1, data2 } from "./data.js";

const getEleByClass = (className) => {
  return document.getElementsByClassName(className);
};
const getEleById = (id) => {
  return document.getElementById(id);
};

const menu1 = getEleById("menu1");
const menu2 = getEleById("menu2");

const renderMenu = (data) => {
  let content = "";
  content = data.reduce((tdContent, item, index) => {
    tdContent += `
      <div class="itemTitle menuItem">${item.title}</div>
    `;
    return tdContent;
  }, "");
  return content;
};

menu1.innerHTML = renderMenu(data1);
menu2.innerHTML = renderMenu(data2);