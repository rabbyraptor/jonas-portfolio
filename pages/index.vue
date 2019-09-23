<template>
  <main class="container">
    <div class="wrapper">
      <section class="">
        <h1 class="title">
          Jonas Hammer
        </h1>
        <nav>
          <ul>
            <li>
              <a href="#listen">Listen</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#follow">Follow</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <img src="../assets/img/Jonas-Hammer-wide-low-rgb.jpg">
      </section>
      <section>
        <h2 class="subtitle" id="listen">
          Listen
        </h2>
        <div>
          <iframe src="https://embed.spotify.com/?uri=spotify%3Aalbum%3A3duv31DnBPnEppCclqmPui" width="600" height="204" frameborder="0" allowtransparency="true"></iframe>
        </div>
      </section>
      <section>
        <h2 class="subtitle" id="about">
          About
        </h2>
        <p>
          Text about Jonas Hammer
        </p>
      </section>
      <section>
        <h2 class="subtitle" id="follow">
          Follow
        </h2>
        <p>
          These are the places you can follow
        </p>
        <div class="social-icons">
          <a href="https://facebook.com/jonasmahavishnu" target="_blank">
            <img src="../assets/img/fb-logo-250.png" id="fb-logo"/>
          </a>
          <a href="https://instagram.com/jonasmahavishnu" target="_blank">
            <img src="../assets/img/ig-glyph.png"/>
          </a>
        </div>
      </section>
      <section>
        <h2 class="subtitle" id="contact">
          Get in touch
        </h2>
        <p>
          How to get in touch
        </p>
      </section>
      <section style="margin-top:4em;">
        <div>
          © Jonas Hammer – All rights reserved
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #203A43;  /* fallback for old browsers */
}

.wrapper{
  width:90%;
  max-width:1000px;
  min-height:100vh;
  background: #fff;
}

nav{
  display: flex;
  justify-content: center;
  margin:.5em 0;
}

nav ul{
  display: flex;
  flex-flow: row;
}

nav a{
  padding:.4em;
  margin:0 .4em;
  color: #35495e;
  font-family: 'Permanent Marker';
}

section:first-of-type{
  padding-top:2em;
}

section:last-of-type{
  padding-bottom: 2em;
}

section{
  padding:3em 0 3em 0;
}

.title {
  font-family: 'Permanent Marker';
  /* font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; */
  display: block;
  font-weight: 300;
  font-size: 5em;
  color: #35495e;
  letter-spacing: 1px;
/*   margin:.5em 0;
 */}

.subtitle {
  font-family: 'Permanent Marker';
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

p{
  font-family: 'Permanent Marker';
  text-align: inherit;
  font-size: 1.2em;
}

#fb-logo{
  padding:2em;
}

.social-icons{
  height:auto;
}

.social-icons img{
  height:200px;
  width:auto;  
}

.links {
  padding-top: 15px;
}
</style>
