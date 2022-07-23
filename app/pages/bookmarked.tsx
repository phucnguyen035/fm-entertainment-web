import Main from 'app/core/layouts/Main'
import { BlitzPage } from 'blitz'

const Bookmarked: BlitzPage = () => {
  return <div>Bookmarked</div>
}

Bookmarked.getLayout = (page) => <Main>{page}</Main>

export default Bookmarked
