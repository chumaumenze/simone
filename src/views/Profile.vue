<template lang="pug">
  ion-app.about
    ion-header
      ion-toolbar
        ion-title
          | SimOne
    ion-content(padding='', text-center='')
      | Coming Soon...
      ion-list
        ion-list-header Follow me on Twitter
        ion-item
          ion-icon(name='logo-ionic', slot='start')
          a(target='_blank', rel='no-referer', href='https://twitter.com/chumaumenze')
            | @chumaumenze
        ion-item
          p
            | Visit
            a(href='https://codebloks.com.ng') https://codebloks.com.ng
            |  for latest updates.
</template>
