import Counter from './components/Counter';
import TodoList from './components/TodoList';
import ProfileCard from './components/ProfileCard';
import SearchBox from './components/SearchBox';

function App() {
  return (
    <main className="app-container">
      <h1>Week 9 React Hooks Assignment</h1>
      <p>Use the counter buttons, todo list, profile loader, and search box below to update state with React hooks.</p>
      <Counter />
      <TodoList />
      <ProfileCard />
      <SearchBox />
    </main>
  );
}

export default App;
