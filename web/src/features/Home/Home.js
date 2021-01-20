import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { state } from '../../store/slice/__template__/__template__Slice'
import { fetch__Template__ } from '../../store/slice/__template__/__template__Async'

const Home = () => {
  const { __template__, status, error } = useSelector(state)
  const dispatch = useDispatch()

  return (
    <Fragment>
      <main className='grid grid-cols-main max-w-screen h-screen overflow-hidden'>
        <aside className='auto-cols-max'>
          <div className='h-full bg-green-500'>
            <ul className='navigation'>
              <li className='path flex align-middle text-lg p-2'>
                <i className='material-icons text-lg'>dashboard</i> Dashboard
              </li>
            </ul>
          </div>
        </aside>
        <div className='auto-cols-max'>
          <header className='h-header flex align-center p-3'>header</header>
          <section className='h-content flex overflow-y-auto'>
            <div className='m-4'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod eius facilis aspernatur id nobis sapiente
              assumenda quos doloremque neque velit labore aliquam vel dolorem quidem aut ipsa molestiae saepe, et dolor
              quo voluptas voluptatibus quas. Exercitationem similique ipsum architecto veritatis maxime iste enim.
              Architecto doloremque doloribus praesentium facere a ipsam recusandae sunt ducimus, voluptas pariatur
              explicabo provident expedita dolores possimus consequuntur at labore eaque. Beatae dolores quia id
              voluptatum sapiente, eveniet quibusdam doloribus deserunt quis aperiam labore officia ex odit officiis
              nihil nobis facilis omnis, animi sequi numquam in voluptates ipsam eius error. Sapiente, nesciunt ipsa!
              Quasi obcaecati facilis quidem officiis impedit odio ut a nihil dolorem perferendis ipsa, tempore odit
              unde architecto praesentium temporibus saepe magni atque recusandae! At blanditiis, quasi laboriosam
              molestias quis ducimus accusantium neque ratione, tenetur est debitis sunt eius odit tempora aliquam minus
              quidem tempore assumenda illum unde velit! Repellat a totam corrupti, et provident in sequi quaerat at ut
              consectetur, nobis recusandae, quod eum molestiae reiciendis sapiente eius ducimus ad laboriosam fugiat
              nihil facilis dolores. Iusto dolorum commodi officia debitis velit deleniti fugit eos facilis quos, eaque
              corrupti. Ut eveniet cumque aspernatur saepe nobis hic autem mollitia. Dolore expedita omnis maiores sit
              perferendis veritatis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod eius facilis
              aspernatur id nobis sapiente assumenda quos doloremque neque velit labore aliquam vel dolorem quidem aut
              ipsa molestiae saepe, et dolor quo voluptas voluptatibus quas. Exercitationem similique ipsum architecto
              veritatis maxime iste enim. Architecto doloremque doloribus praesentium facere a ipsam recusandae sunt
              ducimus, voluptas pariatur explicabo provident expedita dolores possimus consequuntur at labore eaque.
              Beatae dolores quia id voluptatum sapiente, eveniet quibusdam doloribus deserunt quis aperiam labore
              officia ex odit officiis nihil nobis facilis omnis, animi sequi numquam in voluptates ipsam eius error.
              Sapiente, nesciunt ipsa! Quasi obcaecati facilis quidem officiis impedit odio ut a nihil dolorem
              perferendis ipsa, tempore odit unde architecto praesentium temporibus saepe magni atque recusandae! At
              blanditiis, quasi laboriosam molestias quis ducimus accusantium neque ratione, tenetur est debitis sunt
              eius odit tempora aliquam minus quidem tempore assumenda illum unde velit! Repellat a totam corrupti, et
              provident in sequi quaerat at ut consectetur, nobis recusandae, quod eum molestiae reiciendis sapiente
              eius ducimus ad laboriosam fugiat nihil facilis dolores. Iusto dolorum commodi officia debitis velit
              deleniti fugit eos facilis quos, eaque corrupti. Ut eveniet cumque aspernatur saepe nobis hic autem
              mollitia. Dolore expedita omnis maiores sit perferendis veritatis? Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Quod eius facilis aspernatur id nobis sapiente assumenda quos doloremque neque velit
              labore aliquam vel dolorem quidem aut ipsa molestiae saepe, et dolor quo voluptas voluptatibus quas.
              Exercitationem similique ipsum architecto veritatis maxime iste enim. Architecto doloremque doloribus
              praesentium facere a ipsam recusandae sunt ducimus, voluptas pariatur explicabo provident expedita dolores
              possimus consequuntur at labore eaque. Beatae dolores quia id voluptatum sapiente, eveniet quibusdam
              doloribus deserunt quis aperiam labore officia ex odit officiis nihil nobis facilis omnis, animi sequi
              numquam in voluptates ipsam eius error. Sapiente, nesciunt ipsa! Quasi obcaecati facilis quidem officiis
              impedit odio ut a nihil dolorem perferendis ipsa, tempore odit unde architecto praesentium temporibus
              saepe magni atque recusandae! At blanditiis, quasi laboriosam molestias quis ducimus accusantium neque
              ratione, tenetur est debitis sunt eius odit tempora aliquam minus quidem tempore assumenda illum unde
              velit! Repellat a totam corrupti, et provident in sequi quaerat at ut consectetur, nobis recusandae, quod
              eum molestiae reiciendis sapiente eius ducimus ad laboriosam fugiat nihil facilis dolores. Iusto dolorum
              commodi officia debitis velit deleniti fugit eos facilis quos, eaque corrupti. Ut eveniet cumque
              aspernatur saepe nobis hic autem mollitia. Dolore expedita omnis maiores sit perferendis veritatis? Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Quod eius facilis aspernatur id nobis sapiente
              assumenda quos doloremque neque velit labore aliquam vel dolorem quidem aut ipsa molestiae saepe, et dolor
              quo voluptas voluptatibus quas. Exercitationem similique ipsum architecto veritatis maxime iste enim.
              Architecto doloremque doloribus praesentium facere a ipsam recusandae sunt ducimus, voluptas pariatur
              explicabo provident expedita dolores possimus consequuntur at labore eaque. Beatae dolores quia id
              voluptatum sapiente, eveniet quibusdam doloribus deserunt quis aperiam labore officia ex odit officiis
              nihil nobis facilis omnis, animi sequi numquam in voluptates ipsam eius error. Sapiente, nesciunt ipsa!
              Quasi obcaecati facilis quidem officiis impedit odio ut a nihil dolorem perferendis ipsa, tempore odit
              unde architecto praesentium temporibus saepe magni atque recusandae! At blanditiis, quasi laboriosam
              molestias quis ducimus accusantium neque ratione, tenetur est debitis sunt eius odit tempora aliquam minus
              quidem tempore assumenda illum unde velit! Repellat a totam corrupti, et provident in sequi quaerat at ut
              consectetur, nobis recusandae, quod eum molestiae reiciendis sapiente eius ducimus ad laboriosam fugiat
              nihil facilis dolores. Iusto dolorum commodi officia debitis velit deleniti fugit eos facilis quos, eaque
              corrupti. Ut eveniet cumque aspernatur saepe nobis hic autem mollitia. Dolore expedita omnis maiores sit
              perferendis veritatis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod eius facilis
              aspernatur id nobis sapiente assumenda quos doloremque neque velit labore aliquam vel dolorem quidem aut
              ipsa molestiae saepe, et dolor quo voluptas voluptatibus quas. Exercitationem similique ipsum architecto
              veritatis maxime iste enim. Architecto doloremque doloribus praesentium facere a ipsam recusandae sunt
              ducimus, voluptas pariatur explicabo provident expedita dolores possimus consequuntur at labore eaque.
              Beatae dolores quia id voluptatum sapiente, eveniet quibusdam doloribus deserunt quis aperiam labore
              officia ex odit officiis nihil nobis facilis omnis, animi sequi numquam in voluptates ipsam eius error.
              Sapiente, nesciunt ipsa! Quasi obcaecati facilis quidem officiis impedit odio ut a nihil dolorem
              perferendis ipsa, tempore odit unde architecto praesentium temporibus saepe magni atque recusandae! At
              blanditiis, quasi laboriosam molestias quis ducimus accusantium neque ratione, tenetur est debitis sunt
              eius odit tempora aliquam minus quidem tempore assumenda illum unde velit! Repellat a totam corrupti, et
              provident in sequi quaerat at ut consectetur, nobis recusandae, quod eum molestiae reiciendis sapiente
              eius ducimus ad laboriosam fugiat nihil facilis dolores. Iusto dolorum commodi officia debitis velit
              deleniti fugit eos facilis quos, eaque corrupti. Ut eveniet cumque aspernatur saepe nobis hic autem
              mollitia. Dolore expedita omnis maiores sit perferendis veritatis? Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Quod eius facilis aspernatur id nobis sapiente assumenda quos doloremque neque velit
              labore aliquam vel dolorem quidem aut ipsa molestiae saepe, et dolor quo voluptas voluptatibus quas.
              Exercitationem similique ipsum architecto veritatis maxime iste enim. Architecto doloremque doloribus
              praesentium facere a ipsam recusandae sunt ducimus, voluptas pariatur explicabo provident expedita dolores
              possimus consequuntur at labore eaque. Beatae dolores quia id voluptatum sapiente, eveniet quibusdam
              doloribus deserunt quis aperiam labore officia ex odit officiis nihil nobis facilis omnis, animi sequi
              numquam in voluptates ipsam eius error. Sapiente, nesciunt ipsa! Quasi obcaecati facilis quidem officiis
              impedit odio ut a nihil dolorem perferendis ipsa, tempore odit unde architecto praesentium temporibus
              saepe magni atque recusandae! At blanditiis, quasi laboriosam molestias quis ducimus accusantium neque
              ratione, tenetur est debitis sunt eius odit tempora aliquam minus quidem tempore assumenda illum unde
              velit! Repellat a totam corrupti, et provident in sequi quaerat at ut consectetur, nobis recusandae, quod
              eum molestiae reiciendis sapiente eius ducimus ad laboriosam fugiat nihil facilis dolores. Iusto dolorum
              commodi officia debitis velit deleniti fugit eos facilis quos, eaque corrupti. Ut eveniet cumque
              aspernatur saepe nobis hic autem mollitia. Dolore expedita omnis maiores sit perferendis veritatis? Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Quod eius facilis aspernatur id nobis sapiente
              assumenda quos doloremque neque velit labore aliquam vel dolorem quidem aut ipsa molestiae saepe, et dolor
              quo voluptas voluptatibus quas. Exercitationem similique ipsum architecto veritatis maxime iste enim.
              Architecto doloremque doloribus praesentium facere a ipsam recusandae sunt ducimus, voluptas pariatur
              explicabo provident expedita dolores possimus consequuntur at labore eaque. Beatae dolores quia id
              voluptatum sapiente, eveniet quibusdam doloribus deserunt quis aperiam labore officia ex odit officiis
              nihil nobis facilis omnis, animi sequi numquam in voluptates ipsam eius error. Sapiente, nesciunt ipsa!
              Quasi obcaecati facilis quidem officiis impedit odio ut a nihil dolorem perferendis ipsa, tempore odit
              unde architecto praesentium temporibus saepe magni atque recusandae! At blanditiis, quasi laboriosam
              molestias quis ducimus accusantium neque ratione, tenetur est debitis sunt eius odit tempora aliquam minus
              quidem tempore assumenda illum unde velit! Repellat a totam corrupti, et provident in sequi quaerat at ut
              consectetur, nobis recusandae, quod eum molestiae reiciendis sapiente eius ducimus ad laboriosam fugiat
              nihil facilis dolores. Iusto dolorum commodi officia debitis velit deleniti fugit eos facilis quos, eaque
              corrupti. Ut eveniet cumque aspernatur saepe nobis hic autem mollitia. Dolore expedita omnis maiores sit
              perferendis veritatis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod eius facilis
              aspernatur id nobis sapiente assumenda quos doloremque neque velit labore aliquam vel dolorem quidem aut
              ipsa molestiae saepe, et dolor quo voluptas voluptatibus quas. Exercitationem similique ipsum architecto
              veritatis maxime iste enim. Architecto doloremque doloribus praesentium facere a ipsam recusandae sunt
              ducimus, voluptas pariatur explicabo provident expedita dolores possimus consequuntur at labore eaque.
              Beatae dolores quia id voluptatum sapiente, eveniet quibusdam doloribus deserunt quis aperiam labore
              officia ex odit officiis nihil nobis facilis omnis, animi sequi numquam in voluptates ipsam eius error.
              Sapiente, nesciunt ipsa! Quasi obcaecati facilis quidem officiis impedit odio ut a nihil dolorem
              perferendis ipsa, tempore odit unde architecto praesentium temporibus saepe magni atque recusandae! At
              blanditiis, quasi laboriosam molestias quis ducimus accusantium neque ratione, tenetur est debitis sunt
              eius odit tempora aliquam minus quidem tempore assumenda illum unde velit! Repellat a totam corrupti, et
              provident in sequi quaerat at ut consectetur, nobis recusandae, quod eum molestiae reiciendis sapiente
              eius ducimus ad laboriosam fugiat nihil facilis dolores. Iusto dolorum commodi officia debitis velit
              deleniti fugit eos facilis quos, eaque corrupti. Ut eveniet cumque aspernatur saepe nobis hic autem
              mollitia. Dolore expedita omnis maiores sit perferendis veritatis? Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Quod eius facilis aspernatur id nobis sapiente assumenda quos doloremque neque velit
              labore aliquam vel dolorem quidem aut ipsa molestiae saepe, et dolor quo voluptas voluptatibus quas.
              Exercitationem similique ipsum architecto veritatis maxime iste enim. Architecto doloremque doloribus
              praesentium facere a ipsam recusandae sunt ducimus, voluptas pariatur explicabo provident expedita dolores
              possimus consequuntur at labore eaque. Beatae dolores quia id voluptatum sapiente, eveniet quibusdam
              doloribus deserunt quis aperiam labore officia ex odit officiis nihil nobis facilis omnis, animi sequi
              numquam in voluptates ipsam eius error. Sapiente, nesciunt ipsa! Quasi obcaecati facilis quidem officiis
              impedit odio ut a nihil dolorem perferendis ipsa, tempore odit unde architecto praesentium temporibus
              saepe magni atque recusandae! At blanditiis, quasi laboriosam molestias quis ducimus accusantium neque
              ratione, tenetur est debitis sunt eius odit tempora aliquam minus quidem tempore assumenda illum unde
              velit! Repellat a totam corrupti, et provident in sequi quaerat at ut consectetur, nobis recusandae, quod
              eum molestiae reiciendis sapiente eius ducimus ad laboriosam fugiat nihil facilis dolores. Iusto dolorum
              commodi officia debitis velit deleniti fugit eos facilis quos, eaque corrupti. Ut eveniet cumque
              aspernatur saepe nobis hic autem mollitia. Dolore expedita omnis maiores sit perferendis veritatis? Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Quod eius facilis aspernatur id nobis sapiente
              assumenda quos doloremque neque velit labore aliquam vel dolorem quidem aut ipsa molestiae saepe, et dolor
              quo voluptas voluptatibus quas. Exercitationem similique ipsum architecto veritatis maxime iste enim.
              Architecto doloremque doloribus praesentium facere a ipsam recusandae sunt ducimus, voluptas pariatur
              explicabo provident expedita dolores possimus consequuntur at labore eaque. Beatae dolores quia id
              voluptatum sapiente, eveniet quibusdam doloribus deserunt quis aperiam labore officia ex odit officiis
              nihil nobis facilis omnis, animi sequi numquam in voluptates ipsam eius error. Sapiente, nesciunt ipsa!
              Quasi obcaecati facilis quidem officiis impedit odio ut a nihil dolorem perferendis ipsa, tempore odit
              unde architecto praesentium temporibus saepe magni atque recusandae! At blanditiis, quasi laboriosam
              molestias quis ducimus accusantium neque ratione, tenetur est debitis sunt eius odit tempora aliquam minus
              quidem tempore assumenda illum unde velit! Repellat a totam corrupti, et provident in sequi quaerat at ut
              consectetur, nobis recusandae, quod eum molestiae reiciendis sapiente eius ducimus ad laboriosam fugiat
              nihil facilis dolores. Iusto dolorum commodi officia debitis velit deleniti fugit eos facilis quos, eaque
              corrupti. Ut eveniet cumque aspernatur saepe nobis hic autem mollitia. Dolore expedita omnis maiores sit
              perferendis veritatis?
            </div>
          </section>
        </div>
        <aside className='auto-cols-max'>
          <div className='h-full bg-green-500 p-3 '>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing</li>
            </ul>
          </div>
        </aside>
      </main>
    </Fragment>
  )
}

export default Home
