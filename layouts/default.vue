<template>
  <div class="container">
    <div class="wrapper">
      <header>
        <nav>
          <ul>
            <li>
              <nuxt-link to="/">Hjem</nuxt-link>
            </li>
            <li>
              <nuxt-link to="biografi">Biografi &#38; CV</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/#some">SoMe</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/#kontakt">Kontakt</nuxt-link>
            </li>
          </ul>
        </nav>
      </header>
      <nuxt />
      <footer>
          © Jonas Hammer – All rights reserved
      </footer>
    </div>
  </div>
</template>

<style>
html {
  font-family: "Permanent Marker", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #203a43; /* fallback for old browsers */
}

.wrapper {
  width: 100%;
  max-width: 1000px;
  min-height: 100vh;
  background: #fff;
}

header {
  width:100%;
  max-width:1000px;
  position: fixed;
  box-shadow: 1px 1px 4px rgba(0,0,0,.3);
}
nav {
  margin:auto;
  padding: 0.5em 0;
  background-color: #fff;
}

nav ul {
  display: flex;
  flex-flow: row;
  justify-content: center;
  padding: 0;
}

nav a {
  padding: 0.4em;
  margin: 0 0.4em;
  color: #35495e;
  font-family: "Permanent Marker";
}

footer{
  color:#393939;
  padding:3em 0 2em 0;
}
</style>
