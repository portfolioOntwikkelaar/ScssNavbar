import React from 'react'
import Navbar from './Navbar'
import './styles/astral.scss'

const Careers = () => {
  return (
    <>
    <Navbar />
    <div className="drie">
    <a href="/" class="main-link" target="_blank">
    <article class="card">
      <div>
        <p class="sub-heading">
          Article
          <time datetime="2022-03-20">
            Mar 25, 2022 </time>
        </p>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem iste unde optio quis?.
        </p>
      </div>
      <span class="author-name"><img src="https://secure.gravatar.com/avatar/8081b26e05bb4354f7d65ffc34cbbd67?s=80&d=retro&r=pg" alt="" /><span>John Edwards</span></span>
      <div class="tags">
        <span class="tag">one</span>
        <span class="tag">two</span>
      </div>
    </article>
  </a>
    
    <a href="" class="main-link" target="_blank">
    <article class="card">
      <div>
        <p class="sub-heading">
          Article
          <time datetime="2022-03-20">
            Mar 25, 2022 </time>
        </p>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem iste unde optio quis?.
        </p>
      </div>
      <span class="author-name"><img src="https://secure.gravatar.com/avatar/8081b26e05bb4354f7d65ffc34cbbd67?s=80&d=retro&r=pg" alt="" /><span>Liam Edwards</span></span>
      <div class="tags">
        <span class="tag">one</span>
        <span class="tag">two</span>
      </div>
    </article>
  </a>
    </div>
    </>
  )
}

export default Careers
