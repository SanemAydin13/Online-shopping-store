import withAuth from '../hoc/withAuth'

const HomePage = () => {
  return (
    <>
     <h1>Welcome to the Home Page</h1>
        <p>home page</p>
    </>
  )
}

export default withAuth(HomePage);
