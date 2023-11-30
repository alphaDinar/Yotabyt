anime({
  targets : 'logo-tag span',
  rotateX : ['180deg', 0],
  duration : 2000
})

anime({
  loop : true,
  targets : 'logo-tag i',
  rotate : '1turn',
  easing : 'linear',
  duration : 2000
})

document.querySelectorAll('.tagBox span i').forEach((el, i) => {
  anime({
    loop: true,
    targets: el,
    scale: [0.8, 1],
    rotate: ['20deg', 0, '20deg'],
    duration: 2000,
  })
})

document.querySelectorAll('.service').forEach((el, i) => {
  anime({
    targets: el,
    translateY: [-100, 0],
    delay: i * 100,
    opacity: [0, 1],
    duration: 2000
  })
})

document.querySelectorAll('.iconBox a').forEach((el,i)=>{
  anime({
    targets: el,
    translateY: [100, 0],
    delay: i * 100,
    opacity: [0, 1],
    duration: 2000
  })
})