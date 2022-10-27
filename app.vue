<template>
  <div>

  </div>
</template>

<script setup lang="ts">
/*
  exampleGet infers the HTTP get in addition to the HTTP post return types

  const exampleGet: _AsyncData<Pick<{
    post: string;
  }, never> | Pick<{
    get: string;
  }, never>, true | FetchError<any>>

  
  expected behavior is
  const exampleGet: _AsyncData<Pick<{
    get: string;
  }, never>, true | FetchError<any>>
*/
const exampleGet = await useFetch('/api/example')

const get = exampleGet.data.value.get // type safety is broken " Property 'get' does not exist on type 'Pick<{ post: string; }, never> | Pick<{ get: string; }, never>'. Property 'get' does not exist on type 'Pick<{ post: string; }, never>'.ts(2339) "


/*
  examplePost infers the HTTP get in addition to the HTTP post return types

  const examplePost: _AsyncData<Pick<{
    post: string;
  }, never> | Pick<{
    get: string;
  }, never>, true | FetchError<any>>

  
  expected examplePost is
  const exampleGet: _AsyncData<Pick<{
    post: string;
  }, never>, true | FetchError<any>>
*/
const examplePost = await useFetch('/api/example', { method: 'POST' })

const post = exampleGet.data.value.post // type safety is broken " Property 'post' does not exist on type 'Pick<{ post: string; }, never> | Pick<{ get: string; }, never>'.  Property 'post' does not exist on type 'Pick<{ post: string; }, never>'.ts(2339) "

</script>
