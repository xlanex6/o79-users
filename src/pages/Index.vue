<template>
  <Layout>
    <header class="text-center h-64 uppercase bg-red-500 text-white grid items-center">

      <h1 class="font-bold leading-1 sm:text-6xl text-3xl">Communauté o79</h1>

      <!-- <input
        type="text"
        class="h-8  rounded placeholder-gray-400 px-3 py-1 text-gray-900 w-1/2 mx-auto outline-none focus:shadow text-lg"
        placeholder="Recherchez votre futur talent"
      > -->
      <div class="mt-1 relative rounded shadow-sm w-3/4 sm:w-2/3 max-w-md mx-auto">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            class="h-5 w-5 text-gray-400"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <input
          id="query"
          autofocus
          v-model.trim="searchTerm"
          class="form-input block w-full pl-10 text-lg sm:leading-5 h-10 text-gray-700 outline-none focus:shadow-lg"
          placeholder="Dev, cuisinier,..."
        />
      </div>

    </header>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 bg-gray-200">
      <user
        v-for="{node} in filteredUsers"
        :key="node.id"
        :user='node'
      />
    </div>
  </Layout>
</template>

<script>
import user from "../components/user";
export default {
  name: "indexPage",
  components: { user },
  data() {
    return {
      searchTerm: ""
    };
  },
  metaInfo: {
    title: "Communauté"
  },
  computed: {
    filteredUsers() {
      const searchTerm = this.searchTerm;
      if (searchTerm.length < 3) return this.$page.users.edges;
      return this.$search.search({ query: searchTerm, limit: 8 });
    }
  }
};
</script>

<page-query>
query{
  users:allUser{
    edges{
      node{
        id
        name
        email
        phone
        website
        skills
        function
        mobile
        presentation
        image
      }
    }
  }
}
</page-query>

<style lang="postcss" scoped>
.o79 {
  @apply font-bold leading-10 text-6xl;
}
</style>
