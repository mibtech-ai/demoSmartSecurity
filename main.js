import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <div class="logo">
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="120" height="120" rx="60" fill="#646cff"/>
        <path d="M60 20L90 70H30L60 20Z" fill="white"/>
        <circle cx="60" cy="85" r="8" fill="white"/>
      </svg>
    </div>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button">Count is 0</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

let counter = 0
document.querySelector('#counter').addEventListener('click', () => {
  counter++
  document.querySelector('#counter').textContent = `Count is ${counter}`
})