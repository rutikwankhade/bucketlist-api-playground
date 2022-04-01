import './App.css';
function App() {

  return (
    <div className="md:p-20 p-10 flex flex-col justify-center items-center">
     
      <div className="flex items-center border rounded-xl px-4">
        <h1 className="text-xl text-green-400 font-semibold">Endpoint</h1>
        <h1 className="text-xl  rounded-xl bg-gray-50 p-2 m-2">https://bucket-list-api.hasura.app/v1/graphql</h1>
      </div>

      <div>


        <div className="md:w-8/12 mx-auto my-8 border p-10 rounded-xl">

          <p className="text-2xl text-center mb-4 font-semibold">Here are the different categories available in the API</p>

          <div className="flex flex-wrap justify-center">
            <span className="border bg-gray-50 p-2 rounded-xl px-4 m-2 text-xl">adventure</span>
            <span className="border bg-gray-50 p-2 rounded-xl px-4 m-2 text-xl">challenge</span>
            <span className="border bg-gray-50 p-2 rounded-xl px-4 m-2 text-xl">travel</span>
            <span className="border bg-gray-50 p-2 rounded-xl px-4 m-2 text-xl">fun</span>
            <span className="border bg-gray-50 p-2 rounded-xl px-4 m-2 text-xl">skills</span>
            <span className="border bg-gray-50 p-2 rounded-xl px-4 m-2 text-xl">creative</span>
            <span className="border bg-gray-50 p-2 rounded-xl px-4 m-2 text-xl">experience</span>
            <span className="border bg-gray-50 p-2 rounded-xl px-4 m-2 text-xl">education</span>



          </div>

        </div>

      </div>

      <div className="flex items-center justify-center mx-auto">
        <a href="https://github.com/rutikwankhade/bucketlist-api-playground" target="_blank" rel="noreferrer" className="text-xl text-indigo-400 font-semibold underline m-2 mx-4">Github</a>
        <a href="https://bucket.vercel.app" target="_blank" rel="noreferrer" className="text-xl text-indigo-400 font-semibold underline m-2 mx-4">Bucket app</a>
        <a href="https://bucket.vercel.app/explore-ideas" target="_blank" rel="noreferrer" className="text-xl text-indigo-400 font-semibold underline m-2 mx-4">Demo</a>



      </div>
      <p className="text-md my-4 text-center">Made with 💖 by <a href="https://rutikwankhade.dev" className="text-indigo-400 font-semibold" target="_blank" rel="noreferrer" >Rutik Wankhade</a></p>


    </div>
  );
}

export default App;
