// import localStorageMock from './localstoragemock.js';

// Object.defineProperty(window, 'localStorage', { value: localStorageMock });

// const setLocalStorage = (id, data) => {
//   window.localStorage.setItem(id, JSON.stringify(data));
// };

// test('data is added into local storage', () => {
//   const mockId = '1';
//   const mockJson = { data: 'json data' };
//   setLocalStorage(mockId, mockJson);
//   expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockJson));
// });