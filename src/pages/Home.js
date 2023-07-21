function Home() {
  console.log(process.env.REACT_APP_NAME, "nameee")
  return (
    <div className="mainDiv">
        <h1>Home page</h1>
        <h2>name: {process.env.REACT_APP_NAME}</h2>
        <h3>updated ....</h3>
    </div>
  );
}

export default Home;
