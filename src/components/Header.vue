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
          ><img src="../assets/favicon.png" alt=""
        /></router-link>
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
            <li class="nav-item px-lg-4">
              <router-link to="/test" class="nav-link text-uppercase"
                >Contactanos</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>  
</template>
