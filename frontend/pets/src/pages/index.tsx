import type { NextPage } from 'next'
import Title from '../ui/components/title/title'


const Home: NextPage = () => {
  return (
    <div>
      <Title 
        title="" 
        subtitle={
          <span>
            Com um pequeno valor mensal, você <br />
            pode <strong>adotar um pet virtual.</strong>
          </span>
        }/>
    </div>
  )
}

export default Home
