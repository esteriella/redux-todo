import Todos from './components/Todos';
import AddTodo from './components/AddTodo';


function App() {
  return (
    <section className='grid grid-col-1 items-center justify-center text-center'>
      <AddTodo />
      <Todos />
    </section>
  );
}



export default App;
