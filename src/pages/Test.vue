<template>
  <div>
    <section class="page-section cta">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <div class="cta-inner bg-faded text-center rounded">
              <h2 class="section-heading mb-5">
                <span class="section-heading-upper">ENVIA TUS DATOS </span>
                <span class="section-heading-lower">CONTACTANOS</span>
              </h2>
              <form class="cf">
                <div class="half left cf">
                  <label class="labels">Nombre:</label>
                  <input type="text" id="input-name" placeholder="Nombre" />
                  <label for="">Correo Electronico:</label>
                  <input
                    type="email"
                    id="input-email"
                    placeholder="Correo Electronico"
                  />
                  <label for="">Tema:</label>
                  <input type="text" id="input-subject" placeholder="Tema" />
                </div>
                <div class="half right cf">
                  <label for="">Mensaje:</label>
                  <textarea
                    name="message"
                    type="text"
                    id="input-message"
                    placeholder="Mensaje"
                  ></textarea>
                </div>
                <input type="submit" value="Enviar" id="input-submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style>
label {
  display: block;
  text-align: left;
  font-family: "Raleway", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
}

form {
  max-width: 600px;
  text-align: center;
  margin: 20px auto;
}

form input,
form textarea {
  border: 0;
  outline: 0;
  padding: 1em;
  display: block;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 20px;
  resize: none;
}

form #input-submit {
  color: white;
  background: rgba(47, 23, 15, 0.9);
  cursor: pointer;
}

form textarea {
  height: 265px;
}

.half {
  float: left;
  width: 48%;
  margin-bottom: 1em;
}

.right {
  width: 50%;
}

.left {
  margin-right: 2%;
}

@media (max-width: 480px) {
  .half {
    width: 100%;
    float: none;
    margin-bottom: 0;
  }
}
/* Clearfix */
.cf:before,
.cf:after {
  content: " ";
  /* 1 */
  display: table;
  /* 2 */
}
.cf:after {
  clear: both;
}
</style>



