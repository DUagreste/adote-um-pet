import type { NextPage } from 'next'
import Title from '../ui/components/title/title'
import List from '../ui/components/list/list'


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

        <List
          pets={[
            {
              id: 1,
              name: 'Yang',
              history: 'lorem',
              photo: 'https://images7.alphacoders.com/889/889709.jpg',
            },
            {
              id: 2,
              name: 'Choco',
              history: 'lorem',
              photo: 'https://img2.goodfon.com/wallpaper/nbig/5/9d/german-shepherd-puppy-dog-pet-1663.jpg',
            }
          ]}
        />
    </div>
  )
}

export default Home
