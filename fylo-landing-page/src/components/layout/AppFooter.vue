<template>
  <footer>
    <slot />
    <img src="/img/logo.svg" alt="logo" />
    <div class="content">
      <div class="content-item">
        <img src="/img/icon-location.svg" alt="icon-location" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div class="content-contact">
        <div class="content-item">
          <img src="/img/icon-phone.svg" alt="icon-phone" />
          <span>+1-543-123-4567</span>
        </div>
        <div class="content-item">
          <img src="/img/icon-email.svg" alt="icon-email" />
          <span>example@fylo.com</span>
        </div>
      </div>
      <ul class="content-link-1">
        <li><a href="#">About Us</a></li>
        <li><a href="#">Jobs</a></li>
        <li><a href="#">Press</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
      <ul class="content-link-2">
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Terms</a></li>
        <li><a href="#">Privacy</a></li>
      </ul>
      <div class="content-social">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M14.2 2.875A4.625 4.625 0 0 0 9.575 7.5v2.575H7.1c-.124 0-.225.1-.225.225v3.4c0 .124.1.225.225.225h2.475V20.9c0 .124.1.225.225.225h3.4c.124 0 .225-.1.225-.225v-6.975h2.497c.103 0 .193-.07.218-.17l.85-3.4a.225.225 0 0 0-.218-.28h-3.347V7.5a.775.775 0 0 1 .775-.775h2.6c.124 0 .225-.1.225-.225V3.1c0-.124-.1-.225-.225-.225h-2.6Z"
            />
          </svg>
        </a>
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M20.475 7.805c.01.185.01.37.01.545a11.885 11.885 0 0 1-.493 3.362A11.729 11.729 0 0 1 8.485 20.36a11.9 11.9 0 0 1-6.467-1.902a8.152 8.152 0 0 0 1.007.061a8.45 8.45 0 0 0 5.234-1.81a4.223 4.223 0 0 1-3.938-2.92a5.04 5.04 0 0 0 .792.072a4.04 4.04 0 0 0 1.12-.154a4.2 4.2 0 0 1-3.372-3.815a1.66 1.66 0 0 1-.02-.319v-.051a4.167 4.167 0 0 0 1.912.524A4.202 4.202 0 0 1 2.88 6.54a4.273 4.273 0 0 1 .566-2.129a11.968 11.968 0 0 0 8.7 4.412a4.219 4.219 0 0 1 7.187-3.846a8.443 8.443 0 0 0 2.684-1.028a4.978 4.978 0 0 1-1.543 3.856Z"
            />
          </svg>
        </a>
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="-2 -2 24 24"
          >
            <g fill="currentColor">
              <path
                d="M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z"
              />
              <path
                d="M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164a5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31a3.155 3.155 0 0 1 0 6.31z"
              />
              <circle cx="15.156" cy="4.858" r="1.237" />
            </g>
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>
