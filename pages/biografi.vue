<template>
  <main>
    <div class="wrapper">
      <section>
        <h2 class="subtitle">
          Biografi
        </h2>
        <div>
          <p class="tekst">
            Jonas Hammer er født i Odense og vokset op i Sisimiut på Grønland, hvor han har gået i folkeskole.
            Han er uddannet i ’Lydproduktion’, ’Brand- &#38; Marketingkommunikation’ samt ’Music-/Arts Management’ fra hhv. Aalborg-, Syddansk- og Københavns Universitet i 2018. 
            <br/>
            Nu læser han kandidatuddannelsen i sangskrivning, ved Det Jyske Musikkonservatorium i Århus. 
            <br/><br/>
            I forbindelse med konservatoriet, har Jonas været i praktik hos ”Ibens” forsanger Carsten Lykke.
            Jonas har været medlem af KODA siden 2010 og skriver sange til egne projekter såvel som andres, ligesom han også producerer og mixer musik for andre bands. Herudover rådgiver han vækstlagsmusikere i strategi, sound, karrierehåndtering og forretningsmodeller, som han udførte bachelorprojekt om, som afslutning på produceruddannelsen på Aalborg Universitet.
            <br/><br/>
            Jonas har været guitarist og sangskriver i forskellige projekter på tværs af genrer, indtil han i 2018 udgav debuten ”Persona” på eget label.</p>
        </div>
      </section>
      <section>
        <h2 class="subtitle">
          CV
        </h2>
        <div>
          <ul class="tekst">
            <li class="liste-kategori">
              Erfaring (Relevante bands og diskografi):
            </li>
            <li class="liste-titel">
            2017-19: Jonas Hammer
            </li>
            <li class="liste-item">
            Persona [EP] - Sangskrivning, musiker, produktion og co-mix
            </li>
              <li class="liste-item">
            Ullas Blog - Live [Single] - Sangskrivning, musiker, produktion og mix
            </li>
            <li class="liste-titel">
            2018: Markus Valentin
            </li>
            <li class="liste-item">
            Tinderbox - Udsnit Fra Scenekanten [EP] - Mix og master
            </li>
            <li class="liste-titel">
            2013-18: San Rexus
            </li>
              <li class="liste-item">
            UD [Single] - Studiemusiker (guitar og korvokal)
            </li>
            <li class="liste-item">
            Kan Du Se [Single] - Arrangement og studiemusiker (guitar og korvokal)
            </li>
            <li class="liste-titel">
            2015-16: Astro-Karte
            </li>
            <li class="liste-item">
            Indlevelse og Andre Problematikker [Album] - Sangskrivning, musiker, produktion og mix
            </li>
            <li class="liste-titel">
            2011-15: Midlands
            </li>
            <li class="liste-item">
            The Band’s Been Talking [EP] - Sangskrivning, musiker og co-produktion
            </li>
            <li class="liste-item">
            I Will Meet You Someday [EP] - Sangskrivning, musiker og co-produktion
            </li>
            <li class="liste-kategori">
            Priser:
            </li>
              <li class="liste-item">
            Årets Gademusiker 2018 v. Grenaa Gademusikerfestival (Solist, Juryprisen)
            </li>
              <li class="liste-kategori">
            Uddannelse:
            </li>
            <li class="liste-titel">
            2018-20: Kandidatuddannelse
            </li>
              <li class="liste-item">
            Sangskrivning v. Det Jyske Musikkonservatorium, Århus
            </li>
              <li class="liste-titel">
            2015-18: Bacheloruddannelse
            </li>
            <li class="liste-item">
            Populærmusik og Lydproduktion v. Aalborg Universitet (Produceruddannelsen)
            </li>
            <li class="liste-titel">
            2017-18: Tilvalg til bacheloruddannelsen
            </li>
            <li class="liste-item">
            Music-/ Arts Management v. Københavns universitet
            </li>
            <li class="liste-item">
            Branding og Marketingkommunikation v. Syddansk Universitet
            </li>
          </ul>
        </div>
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
.tekst{
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  text-align: left;
  padding:0 10%;
  font-size:1em;
  line-height:1.4em;
}
li{
  margin:.2em 0;
  color: #393939;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
}

.liste-kategori:first-of-type{
  margin-top:0;
}

.liste-kategori{
  font-weight:600;
  font-size:1.4em;
  margin-top: 1.5em;
}

.liste-titel{
  font-size:1em;
  font-weight:600;
  margin-top:1em;
}

.liste-item{
  list-style-type:initial;
  margin-left:1.5em;
}

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
