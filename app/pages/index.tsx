import Main from 'app/core/layouts/Main'
import { BlitzPage, GetServerSideProps } from 'blitz'
import { directus } from 'integrations/directus'

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const Home: BlitzPage = () => {
  const login = async () => {
    const res = await directus.auth.login({
      email: 'nguyen.hphuc035@gmail.com',
      password: 'GDRIOE#v6W4l3jQv[C1khvuR',
    })

    console.log('res: ', res)
  }

  return (
    <div>
      <button onClick={() => login()}>Login</button>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const movies = await directus.items('movies').readByQuery()

  console.log('movies: ', movies)

  return {
    props: {
      movies,
    },
  }
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Main>{page}</Main>

export default Home
