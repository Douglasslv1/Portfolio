import React from 'react'
import Logo from '../img/douglas.png'
import Style from './Style.module.css'

const Page1 = () => {
  return (
    <section>
        <div className={Style.logo}>
            <img src={Logo} alt="Imagem principal" />
        </div>
        <div className={Style.info}>
            <h1>Douglas Alves</h1>
            <h3>I'm a full stack developer!</h3>
            <button >Sobre mim</button>
            <button>Projetos</button>
            <button><a href="https://w.app/douglasalves">Me envie uma mensagem!</a></button>
        </div>
    </section>
  )
}

export default Page1