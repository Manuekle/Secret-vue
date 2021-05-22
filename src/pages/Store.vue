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
          >Start Bootstrap</a
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
    <section class="page-section cta">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <div class="cta-inner bg-faded text-center rounded">
              <h2 class="section-heading mb-5">
                <span class="section-heading-upper">‎ADELANTE‎ </span>
                <span class="section-heading-lower">ESTAMOS DISPONIBLES</span>
              </h2>
              <ul class="list-unstyled list-hours mb-5 text-left mx-auto">
                <li class="list-unstyled-item list-hours-item d-flex">
                  Domingo
                  <span class="ms-auto">Cerrado</span>
                </li>
                <li class="list-unstyled-item list-hours-item d-flex">
                  Lunes
                  <span class="ms-auto">7:00 AM A 8:00 PM</span>
                </li>
                <li class="list-unstyled-item list-hours-item d-flex">
                  Martes
                  <span class="ms-auto">7:00 AM A 8:00 PM</span>
                </li>
                <li class="list-unstyled-item list-hours-item d-flex">
                  Miercoles
                  <span class="ms-auto">7:00 AM A 8:00 PM</span>
                </li>
                <li class="list-unstyled-item list-hours-item d-flex">
                  Jueves
                  <span class="ms-auto">7:00 AM A 8:00 PM</span>
                </li>
                <li class="list-unstyled-item list-hours-item d-flex">
                  Viernes
                  <span class="ms-auto">7:00 AM A 8:00 PM</span>
                </li>
                <li class="list-unstyled-item list-hours-item d-flex">
                  Sábado
                  <span class="ms-auto">9:00 AM A 5:00 PM</span>
                </li>
              </ul>
              <p class="address mb-5">
                <em>
                  <strong>Cra 7A #27En-21, Palace</strong>
                  <br />
                  Popayán, Cauca
                </em>
              </p>
              <p class="mb-0">
                <small><em>‎Llame en cualquier momento‎</em></small>
                <br />
                (320) 643-7419
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