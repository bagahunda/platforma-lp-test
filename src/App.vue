<template>
  <div id="app">
    <router-view />
    <basePreloader v-if="isLoading"/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters({
      isLoading: 'talks/isLoading'
    })
  }
}
</script>

<style lang="scss">
/* ***********************************
 *
 *    CSS Reset & Base
 *
 * *********************************** */

/* Reset margin, padding, border
 * *********************************** */

html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
a,
p,
span,
em,
small,
strong,
sub,
sup,
mark,
del,
ins,
strike,
abbr,
dfn,
blockquote,
q,
cite,
code,
pre,
ol,
ul,
li,
dl,
dt,
dd,
div,
section,
article,
main,
aside,
nav,
header,
hgroup,
footer,
img,
figure,
figcaption,
address,
time,
audio,
video,
canvas,
iframe,
details,
summary,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td {
  margin: 0;
  padding: 0;
  border: 0;
}

/* Typography
 * *********************************** */

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  line-height: 1.4;
}

* {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

a,
a:visited {
  color: inherit;
}

/* Layout
 * *********************************** */

article,
aside,
footer,
header,
nav,
section,
main {
  display: block;
}

* {
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: inherit;
}

/* Elements
 * *********************************** */

table {
  border-collapse: collapse;
  border-spacing: 0;
}

ol,
ul {
  list-style: none;
}

img,
video {
  max-width: 100%;
}

img {
  border-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:after,
blockquote:before,
q:after,
q:before {
  content: "";
  content: none;
}

/* Attributes & states
 * *********************************** */

[hidden] {
  display: none !important;
}

[disabled] {
  cursor: not-allowed;
}

:focus:not(:focus-visible) {
  outline: none;
}

/* Utility classes
 * *********************************** */

.sr-only {
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  left: -9999px;
  top: -9999px;
}

// @font-face {
//   font-family: "TT Norms";
//   src: url("./assets/fonts/TTNorms.woff2");
//   font-style: normal;
//   font-weight: 200;
// }

@font-face {
  font-family: "TT Norms Regular";
  src: url("./assets/fonts/TTNorms-Regular.woff2");
  font-style: normal;
  font-weight: 400;
}

@font-face {
  font-family: "TT Norms Bold";
  src: url("./assets/fonts/TTNorms-Bold.woff2");
  font-style: normal;
  font-weight: 400;
}

body {
  font-family: "TT Norms Regular", sans-serif;
  overflow: hidden;
}
</style>
