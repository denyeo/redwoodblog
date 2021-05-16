import { Link, routes } from '@redwoodjs/router'

const SubmitPage = () => {
  return (
    <>
      <h1>SubmitPage</h1>
      <p>
        Find me in <code>./web/src/pages/SubmitPage/SubmitPage.js</code>
      </p>
      <p>
        My default route is named <code>submit</code>, link to me with `
        <Link to={routes.submit()}>Submit</Link>`
      </p>
    </>
  )
}

export default SubmitPage
