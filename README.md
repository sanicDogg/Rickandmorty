# Rickandmorty

#### Учебный проект в рамках React-интенсива компании Andersen

---

#### Выполнили:

##### -Молитвин Александр

##### -Мамедов Аббас

---

#### в проекте были реализованны следующие пункты из списка требований к пректу:

- React
  - Пишем функциональные компоненты c хуками в приоритете над классовыми: [components](https://github.com/sanicDogg/Rickandmorty/tree/main/src/components)
  - Есть четкое разделение на умные и глупые компоненты.
  - Есть рендеринг списков: [SearchPage](https://github.com/sanicDogg/Rickandmorty/blob/main/src/pages/SearchPage/SearchPage.jsx), [Cards](https://github.com/sanicDogg/Rickandmorty/blob/main/src/components/Cards/Cards.jsx), [Search](https://github.com/sanicDogg/Rickandmorty/blob/main/src/components/Search/Search.jsx)
  - Реализована хотя бы одна форма: [FormLoginPassword](https://github.com/sanicDogg/Rickandmorty/blob/main/src/components/FormLoginPassword/FormLoginPassword.jsx)
  - Есть применение Контекст API: [themeContext](https://github.com/sanicDogg/Rickandmorty/blob/main/src/app/themeContext.js)
  - Есть применение предохранителя: [ErrorBoundaryComponent](https://github.com/sanicDogg/Rickandmorty/tree/main/src/components/ErrorBoundaryComponent)
  - Есть хотя бы один кастомный хук: [hooks](https://github.com/sanicDogg/Rickandmorty/tree/main/src/hooks)
  - Хотя бы несколько компонентов используют PropTypes:[Card](https://github.com/sanicDogg/Rickandmorty/blob/main/src/components/Card/Card.jsx), [SearchResult](https://github.com/sanicDogg/Rickandmorty/blob/main/src/components/SearchResult/SearchResult.jsx), [LikeButton](https://github.com/sanicDogg/Rickandmorty/blob/main/src/components/LikeButton/LikeButton.jsx)
  - Поиск не должен триггерить много запросов к серверу: реализованно с помощью библиотеки react-debounce-input в компоненте [Search](https://github.com/sanicDogg/Rickandmorty/blob/main/src/components/Search/Search.jsx)
  - Есть применение lazy + Suspense: [Card](https://github.com/sanicDogg/Rickandmorty/blob/main/src/components/Card/Card.jsx)

---

- Redux:
  - Используем Modern Redux with Redux Toolkit: [store](https://github.com/sanicDogg/Rickandmorty/blob/main/src/app/store.js)
  - Используем слайсы: [userSlice](https://github.com/sanicDogg/Rickandmorty/blob/main/src/features/user/userSlice.js)
  - Есть хотя бы одна кастомная мидлвара: [localStorage](https://github.com/sanicDogg/Rickandmorty/tree/main/src/features/midlewares/localStorage)
  - Используется RTK Query: [apiSlice](https://github.com/sanicDogg/Rickandmorty/blob/main/src/features/api/apiSlice.js)
  - Используется Transforming Responses: [apiSlice](https://github.com/sanicDogg/Rickandmorty/blob/main/src/features/api/apiSlice.js)

---

- второй уровень (необязательный):
  - Используются мемоизированные селекторы: [userSlice](https://github.com/sanicDogg/Rickandmorty/blob/main/src/features/user/userSlice.js)

---

###ссылки
[репозиторий на GitHub](https://github.com/sanicDogg/Rickandmorty)

[Rick and Morty Api](https://rickandmortyapi.com/)

[доска с тикетами](https://trello.com/b/4vl4n61W/%D1%83%D1%87%D0%B5%D0%B1%D0%BD%D1%8B%D0%B9-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82)

---
