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
        <router-link
          to="/"
          class="navbar-brand text-uppercase fw-bold d-lg-none"
          active-class="active"
          >Start Bootstrap</router-link
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
    <section class="page-section clearfix">
      <div class="container">
        <div class="intro">
          <div class="intro-img img-fluid mb-3 mb-lg-0 rounded slider">
            <ul>
              <li>
                <img class="item" src="../assets/img/intro.jpg" alt="1" />
              </li>
              <li>
                <img class="item" src="../assets/img/intro3.jpg" alt="2" />
              </li>
              <li>
                <img class="item" src="../assets/img/intro2.jpg" alt="3" />
              </li>
              <li>
                <img class="item" src="../assets/img/intro.jpg" alt="4" />
              </li>
            </ul>
          </div>          
          <div class="intro-text left-0 text-center bg-faded p-5 rounded">
            <h2 class="section-heading mb-4">
              <span class="section-heading-upper">Productos frescos</span>
              <span class="section-heading-lower">VALE LA PENA</span>
            </h2>
            <p class="mb-3">
              Every cup of our quality artisan coffee starts with locally
              sourced, hand picked ingredients. Once you try it, our coffee will
              be a blissful addition to your everyday morning routine - te lo
              garantizamos!
            </p>
            <div class="intro-button mx-auto">
              <a class="btn btn-primary btn-xl" href="#!">Visítanos Hoy!</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="page-section cta">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <div class="cta-inner bg-faded text-center rounded">
              <h2 class="section-heading mb-4">
                <span class="section-heading-upper">‎NUESTRA PROMESA‎</span>
                <span class="section-heading-lower">PARA TI</span>
              </h2>
              <p class="mb-0">
                ‎Cuando entras en nuestra tienda para comenzar tu día, nos
                dedicamos a brindarte un servicio amable, un ambiente acogedor
                y, sobre todo, excelentes productos elaborados con ingredientes
                de la más alta calidad. Si no está satisfecho, por favor
                háganoslo saber y haremos todo lo posible para hacer las cosas
                bien!‎
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