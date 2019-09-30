<template>
  <main>
    <div class="wrapper">
      <section class="hero">
        <h1 class="title">
          Jonas Hammer
        </h1>
      </section>
      <section>
        <h2 class="subtitle" id="listen">
          Lyt
        </h2>
        <div>
          <iframe src="https://embed.spotify.com/?uri=spotify%3Aalbum%3A3duv31DnBPnEppCclqmPui" width="600" height="204" frameborder="0" allowtransparency="true"></iframe>
        </div>
      </section>
      <section>
        <h2 class="subtitle" id="some">
          SoMe
        </h2>
        <p>
          Følg mig på Facebook og Instagram:
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
        <h2 class="subtitle" id="kontakt">
          Kontakt
        </h2>
        <p>
          Telefon:<br/>
          <a class="telefon" href="tel:+4550539720">+45 50 53 97 20</a><br/><br/>
          Mail:<br/>
          <a class="email" href="mailto:jonascaster@gmail.com">jonascaster@gmail.com</a>
        </p>
      </section>
    </div>
  </main>
</template>

<script>

export default {
  components: {
    
  }
}
</script>

<style>

section:first-of-type{
  padding:5em 0;
}

section:last-of-type{
  padding-bottom: 2em;
}

section{
  padding:3em 0 3em 0;
}

.hero{
  min-height:650px;
  padding:1em 0;
  height:60vh;
  overflow:hidden;
  background-image: url(../assets/img/Jonas-Hammer-wide-low-rgb.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
}


.title {
  font-family: 'Permanent Marker';
  /* font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; */
  display: block;
  font-weight: 300;
  font-size:4em;
  color: #fff;
  letter-spacing: 1px;
  text-align: left;
  margin-left:1em;
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
