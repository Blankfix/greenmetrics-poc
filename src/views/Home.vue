<template lang="pug">
  div#home
    v-container
      v-row(justify="center")
        v-col(cols="12")
          h2.text-center Jump into the #[span.green--text green]  !
          h3.text-center.secondary--text
            | Inject funds into impactful environmental initiatives
            br
            | and balance your carbone debt of your digital pollution

    <form-register-and-sign-in />
</template>

<script>
import FormRegisterAndSignIn from '@/components/FormRegisterAndSignIn';

  export default {
    name: 'Home',

    components: {
      FormRegisterAndSignIn,
    },
  }
</script>
