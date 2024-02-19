import Header from "./components/Header";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

function App() {
  return (
    <>
      <Header />
      <section className="m-1 rounded-md py-3 bg-slate-50">
        <h2 className="text-lg pb-2 text-center font-semibold">Form</h2>
        <PostForm />
      </section>
      <section className="m-1 rounded-md py-3 bg-slate-50">
        <h2 className="text-lg pb-2 text-center font-semibold">List</h2>
        <PostList />
      </section>
    </>
  );
}

export default App;
