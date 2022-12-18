import React from 'react'
import styled from 'styled-components'

const Loader = () => {
  return (
    <>
    <Wrapper>
      <div className="spinner">
<div className="loader l1"></div>
<div className="loader l2"></div>
</div>
</Wrapper>
    </>
  )
}

const Wrapper=styled.section`
width: 100vw;
height: 100vh;
.spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50%,-50%;
 border: 0 solid transparent;
 border-radius: 50%;
 width: 50px;
 height: 50px;
}

.loader {
 width: inherit;
 height: inherit;
 position: absolute;
}

.loader::before,
.loader::after {
 content: '';
 border: 3px solid rgb(32,132,219);
 border-radius: 50%;
 width: inherit;
 height: inherit;
 position: absolute;
 opacity: 1;
}

.l1::before,
.l1::after {
 -webkit-animation: clockwiseZ 2.5s infinite;
         animation: clockwiseZ 2.5s infinite;
}

.l2::after,
.l2::before {
 -webkit-animation: anticlockwiseZ 2.5s infinite;
         animation: anticlockwiseZ 2.5s infinite;
}

@-webkit-keyframes clockwiseZ {
 0%, 100% {
  -webkit-transform: rotateY(0);
          transform: rotateY(0);
 }

 50% {
  -webkit-transform: rotateY(180deg) skew(-10deg, -5deg);
          transform: rotateY(180deg) skew(-10deg, -5deg);
 }
}

@keyframes clockwiseZ {
 0%, 100% {
  -webkit-transform: rotateY(0);
          transform: rotateY(0);
 }

 50% {
  -webkit-transform: rotateY(180deg) skew(-10deg, -5deg);
          transform: rotateY(180deg) skew(-10deg, -5deg);
 }
}

@-webkit-keyframes anticlockwiseZ {
 0%, 100% {
  -webkit-transform: rotateX(0);
          transform: rotateX(0);
 }

 50% {
  -webkit-transform: rotateX(-180deg) skew(10deg, 5deg);
          transform: rotateX(-180deg) skew(10deg, 5deg);
 }
}

@keyframes anticlockwiseZ {
 0%, 100% {
  -webkit-transform: rotateX(0);
          transform: rotateX(0);
 }

 50% {
  -webkit-transform: rotateX(-180deg) skew(10deg, 5deg);
          transform: rotateX(-180deg) skew(10deg, 5deg);
 }
}

`

export default Loader