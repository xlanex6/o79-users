<template>
  <li class="col-span-1 flex flex-col text-center bg-white shadow relative">
    <div class="absolute top-0 bg-red-500 text-white font-thin leading-6 px-2">Equipe o79</div>
    <div class="flex-1 flex flex-col p-8">
      <img
        class="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
        :src="`https://i.pravatar.cc/150?u=${user.id}`"
        :alt="`${user.name}`"
      />
      <h3 class="mt-6 text-gray-900 text-sm leading-5 font-medium">{{user.name}}</h3>
      <dl class="mt-1 flex-grow flex flex-col justify-between">
        <dt class="sr-only">Job</dt>
        <dd class="text-gray-500 text-sm leading-5">{{user.function}}</dd>
        <dt class="sr-only">Role</dt>
        <dd class="mt-3">
          <span
            v-for="skill in user.skills"
            :key="skill"
            class="px-2 py-1 mx-1 text-red-800 text-xs leading-4 font-medium bg-red-100 rounded-full"
          >Tag 1</span>
        </dd>
        <dt class="sr-only">Presentation</dt>
        <dd class="mt-3 text-gray-500 text-sm leading-5">
          {{user.presentation}}
        </dd>
      </dl>
    </div>
    <div class="border-t border-gray-200">
      <div class="-mt-px flex">
        <div class="w-0 flex-1 flex border-r border-gray-200">
          <a
            :href="`mailto:${user.email}`"
            class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-red-500 focus:outline-none focus:shadow-outline-red focus:border-red-300 focus:z-10 transition ease-in-out duration-150"
          >
            <svg
              class="w-5 h-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span class="ml-3">Email</span>
          </a>
        </div>
        <div class="-ml-px w-0 flex-1 flex">
          <a
            :href="`tel:${user.mobile}`"
            class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-red-500 focus:outline-none focus:shadow-outline-red focus:border-red-300 focus:z-10 transition ease-in-out duration-150"
          >
            <svg
              class="w-5 h-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span class="ml-3">Téléphone</span>
          </a>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ["user"]
};
</script>
