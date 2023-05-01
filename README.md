
1. Склонировать репозиторий
2. Скачать проект себе на пк через терминал git clone https://github.com/Maksym-Svyrydov/<your repo name>
3. Изменить в настройках репозитория: 
Actions => General => Workflow permissions: установить чек бокс на Read and Write permissions, 
установить чек бокс на Allow GitHub Actions to create and approve pull request
4. Установить зависимости npm install 
5. Инициализировать проект: внести любые минимальные изменения в файл App.js, после изменений не должно быть ошибок!
6. В файле package.json изменить "homepage": "https://<your github name>.github.io/<your repo name>/"
7. Выполнить команды в терминале:
git add .
git commit -m"initilal project"
git push
8. В настройках репозитория на вкладке Pages в разделе Branch выбрать ветку gh-pages , /root => save
9. Приследуючем пуше в ветку main, страница проекта задеплоится из ветки gh-pages.
      
10. Для настройки маршрутизации необходимо добавить в файл index.js:
- import { BrowserRouter } from 'react-router-dom'
      
- Обернуть App:
<BrowserRouter basename="/your repo neme">
      <App />
</BrowserRouter>
      
- в файле App.js добавить импорты:
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
      
- с помощю ленивой загрузки импортировать страници и настроить маршрутизацию:

const Home = lazy(() => import('./pages/Home'));
const Tweets = lazy(() => import('./pages/Tweets'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="*" />
        <Route path="tweet" element={<Tweets />} />
        <Route path="*" />
      </Route>
    </Routes>
  );
};
      
ошибка 404 после перезагрузки страници устранена :)
установлены пакеты:
"modern-normalize"
"axios"
"create-react-app"
"styled-components"
при необходимости до устанавливай необходимые для проэкта библиотеки (возможно некоторые нужно поставить в dev-dependencies :))
