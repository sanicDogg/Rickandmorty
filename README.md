# Rickandmorty

####Учебный проект в рамках React-интенсива компании Andersen
####Выполнили:
#####-Молитвин Александр
#####-Мамедов Аббас

####впроекте были реализованны следующие пункты из списка требований к пректу:

1. React:
   1.1 Пишем функциональные компоненты c хуками в приоритете над классовыми: [components](https://github.com/sanicDogg/Rickandmorty/tree/main/src/components)
   1.2 Есть четкое разделение на умные и глупые компоненты.
   1.3 Есть рендеринг списков: [SearchPage](https://github.com/sanicDogg/Rickandmorty/blob/main/src/pages/SearchPage/SearchPage.jsx), [Cards](https://github.com/sanicDogg/Rickandmorty/blob/main/src/components/Cards/Cards.jsx), [Search](https://github.com/sanicDogg/Rickandmorty/blob/main/src/components/Search/Search.jsx)
   1.4 Реализована хотя бы одна форма: [FormLoginPassword](https://github.com/sanicDogg/Rickandmorty/blob/main/src/components/FormLoginPassword/FormLoginPassword.jsx)
   1.5 Есть применение Контекст API: [themeContext](https://github.com/sanicDogg/Rickandmorty/blob/main/src/app/themeContext.js)
   1.6 Есть применение предохранителя: [ErrorBoundaryComponent](https://github.com/sanicDogg/Rickandmorty/tree/main/src/components/ErrorBoundaryComponent)
   1.7 Есть хотя бы один кастомный хук: [hooks](https://github.com/sanicDogg/Rickandmorty/tree/main/src/hooks)
   1.8 Хотя бы несколько компонентов используют PropTypes:[Card](https://github.com/sanicDogg/Rickandmorty/blob/main/src/components/Card/Card.jsx), [SearchResult](https://github.com/sanicDogg/Rickandmorty/blob/main/src/components/SearchResult/SearchResult.jsx), [LikeButton](https://github.com/sanicDogg/Rickandmorty/blob/main/src/components/LikeButton/LikeButton.jsx)
   1.9 Поиск не должен триггерить много запросов к серверу: реализованно с помощью библиотеки react-debounce-input в компоненте [Search](https://github.com/sanicDogg/Rickandmorty/blob/main/src/components/Search/Search.jsx)
   1.10 Есть применение lazy + Suspense: [Card](https://github.com/sanicDogg/Rickandmorty/blob/main/src/components/Card/Card.jsx)

2. Redux:
   2.1 Используем Modern Redux with Redux Toolkit: [store](https://github.com/sanicDogg/Rickandmorty/blob/main/src/app/store.js)
   2.2 Используем слайсы: [userSlice](https://github.com/sanicDogg/Rickandmorty/blob/main/src/features/user/userSlice.js)
   2.3 Есть хотя бы одна кастомная мидлвара: [localStorage](https://github.com/sanicDogg/Rickandmorty/tree/main/src/features/midlewares/localStorage)
   2.4 Используется RTK Query: [apiSlice](https://github.com/sanicDogg/Rickandmorty/blob/main/src/features/api/apiSlice.js)
   2.5 Используется Transforming Responses: [apiSlice](https://github.com/sanicDogg/Rickandmorty/blob/main/src/features/api/apiSlice.js)

3. второй уровень (необязательный):
   Используются мемоизированные селекторы: [userSlice](https://github.com/sanicDogg/Rickandmorty/blob/main/src/features/user/userSlice.js)

###ссылки
[репозиторий на GitHub](https://github.com/sanicDogg/Rickandmorty)

[Rick and Morty Api](https://rickandmortyapi.com/)

[доска с тикетами](https://trello.com/b/4vl4n61W/%D1%83%D1%87%D0%B5%D0%B1%D0%BD%D1%8B%D0%B9-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82)
