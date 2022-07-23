import Main from 'app/core/layouts/Main'
import { BlitzPage } from 'blitz'

const TvSeries: BlitzPage = () => {
  return <div>TV Series page</div>
}

TvSeries.getLayout = (page) => <Main>{page}</Main>

export default TvSeries
