<template>
  <div>
    <a
      href="https://wa.me/573206437419?text=Me%20gustaría%20saber%20el%20precio%20de%20los%20productos"
      class="whatsapp"
      target="_blank"
    >
      <i class="fab fa-whatsapp icons"></i>
    </a>
    <header>
      <h1 class="site-heading text-center text-faded d-none d-lg-block">
        <span class="site-heading-upper text-primary mb-3"
          >De La Granja A Tu Casa</span
        >
        <span class="site-heading-lower">Negocio Local</span>
      </h1>
    </header>
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
      <div class="container">
        <a
          class="navbar-brand text-uppercase fw-bold d-lg-none"
          href="index.html"
          >De La Granja A Tu Casa</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item px-lg-4">
              <router-link
                to="/"
                class="nav-link text-uppercase"
                active-class="active"
                >Hogar</router-link
              >
            </li>
            <li class="nav-item px-lg-4">
              <router-link to="/about" class="nav-link text-uppercase"
                >Acerca De</router-link
              >
            </li>
            <li class="nav-item px-lg-4">
              <router-link to="/products" class="nav-link text-uppercase"
                >Productos</router-link
              >
            </li>
            <li class="nav-item px-lg-4">
              <router-link to="/store" class="nav-link text-uppercase"
                >Tienda</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <section class="page-section">
      <div class="container">
        <div class="product-item">
          <div class="product-item-title d-flex">
            <div class="bg-faded p-5 d-flex ms-auto rounded">
              <h2 class="section-heading mb-0">
                <span class="section-heading-upper">Ricas Y Frescas</span>
                <span class="section-heading-lower">Fresas Organicas</span>
                <p class="section-heading-upper precio">Precio: Lb $3000 & Kg $6000</p>
              </h2>
            </div>
          </div>
          <img
            class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            src="../assets/img/products-01.jpg"
            alt="3"
          />
          <div class="product-item-description d-flex me-auto">
            <div class="bg-faded p-5 rounded">
              <p class="mb-0">
                La fresa es un fruto de color rojo brillante, suculento y
                fragante que se obtiene de la planta que recibe su mismo nombre.
                En Occidente es considerada la "reina de las frutas". Además de
                poderse comer cruda se puede consumir como compota,
                mermelada,... Es empleada con fines medicinales ya que posee
                excelentes propiedades que ayudan a preservar la salud.<br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="page-section">
      <div class="container">
        <div class="product-item">
          <div class="product-item-title d-flex">
            <div class="bg-faded p-5 d-flex me-auto rounded">
              <h2 class="section-heading mb-0">
                <span class="section-heading-upper">Deliciosas</span>
                <span class="section-heading-lower">Papa Cultivada</span>
                <p class="section-heading-upper precio">Precio: Kg $2800</p>
              </h2>
            </div>
          </div>
          <img
            class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            src="../assets/img/products-02.jpg"
            alt="4"
          />
          <div class="product-item-description d-flex ms-auto">
            <div class="bg-faded p-5 rounded">
              <p class="mb-0">
                La papa, es uno de los cultivos más importantes de la región
                interandina, constituyendo una de las fuentes vegetales más
                nutritivas, debido a que su contenido en carbohidratos y
                proteínas es mucho más alto que el que se encuentra en los
                cereales, raíces y otros tubérculos, motivo por el cual en el
                Ecuador, hace parte de los productos que constituyen la canasta
                básica popular.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="page-section">
      <div class="container">
        <div class="product-item">
          <div class="product-item-title d-flex">
            <div class="bg-faded p-5 d-flex ms-auto rounded">
              <h2 class="section-heading mb-0">
                <span class="section-heading-upper">natural & Cremosa</span>
                <span class="section-heading-lower">Leche de vaca</span>
                <p class="section-heading-upper precio">Precio: 1L $2800</p>
              </h2>
            </div>
          </div>
          <img
            class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            src="../assets/img/products-03.jpg"
            alt="5"
          />
          <div class="product-item-description d-flex me-auto">
            <div class="bg-faded p-5 rounded">
              <p class="mb-0">
                La leche es una de las principales fuentes de calcio de la
                naturaleza y la única en el bebé. El calcio es imprescindible,
                entre otras funciones, para la formación y el mantenimiento de
                los huesos y dientes. Pero además la leche nos aporta elementos
                muy valiosos como vitaminas, proteínas de alto valor biológico,
                y otros minerales que hacen de la leche un alimento básico en
                todas las edades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer text-faded text-center py-5">
      <div class="container">
        <h6 class="m-0 small">Copyright &copy; De Le Granja A Tú Casa 2021</h6>
      </div>
    </footer>
  </div>
</template>
<style>
.precio {
  font-family: "Lora", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
    text-transform: initial;
}
</style>