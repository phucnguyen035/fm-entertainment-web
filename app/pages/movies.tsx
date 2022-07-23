import Main from 'app/core/layouts/Main'
import { BlitzPage } from 'blitz'

const Movies: BlitzPage = () => {
  return <div>Movies page</div>
}

Movies.getLayout = (page) => <Main>{page}</Main>

export default Movies
