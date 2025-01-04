import { observeElements } from "../modules/utils/observe-utils.js";

window.onload = () => {
  const elementsToObserve = [
    ".company__info", // 회사 소개
    ".company__thumbnail",
    ".company__card-item",
    ".text-box", // 비전
    ".vision__image",
  ];

  elementsToObserve.forEach((selector) => observeElements(selector));
};