export const SLEEP50 = () =>
  new Promise(resolve => setTimeout(() => resolve(), 50));
export const SLEEP75 = () =>
  new Promise(resolve => setTimeout(() => resolve(), 75));
export const SLEEP100 = () =>
  new Promise(resolve => setTimeout(() => resolve(), 100));
export const SLEEP125 = () =>
  new Promise(resolve => setTimeout(() => resolve(), 125));
export const SLEEP150 = () =>
  new Promise(resolve => setTimeout(() => resolve(), 150));
export const SLEEP200 = () =>
  new Promise(resolve => setTimeout(() => resolve(), 200));
export const SLEEP500 = () =>
  new Promise(resolve => setTimeout(() => resolve(), 500));
export const SLEEP1000 = () =>
  new Promise(resolve => setTimeout(() => resolve(), 1000));
export const SLEEP = t =>
  new Promise(resolve => setTimeout(() => resolve(), t));
