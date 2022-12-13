<template>
  <Card class="flex flex-col items-center justify-center">
    <div wire:id="yP7YukDqC19jJdpBnC95" class="">
      <div class="welcome-class" style="">
        <div class="">
          <div class=" ">
            <div class="flex items-center h-12">
              <div class="w-12 h-12 bg-gray-200 bg-cover rounded-full"
                style="background-image: url('https://ui-avatars.com/api/?name=C+L&amp;color=FFFFFF&amp;background=111827')">
              </div>

              <div class="mr-0 ml-4">
                <h2 class="m-0 text-lg font-bold tracking-tight leading-7 sm:text-xl sm:leading-7 text-gray-600">
                  Hoş geldin, Cumhuriyet Lisesi
                </h2>

                <form action="http://cumhuriyet.indivischool.com/filament/logout" method="post"
                  class="text-sm leading-5">
                  <input type="hidden" name="_token" value="FrB7UkCI1eEoFp8Qd39CGeP4KjH6e433HgHWfQLq"
                    class="p-0 m-0 cursor-default" style="font-size: 128%;" />
                  <!-- <button type="submit" class="p-0 m-0 text-center text-gray-600 normal-case bg-transparent bg-none cursor-pointer" style="font-size: 128%;">
                                                    Oturumu kapat
                                                  </button> -->
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>
<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const observer = ref(null)
const dark = ref(false)

onMounted(() => {
    dark.value = document.documentElement.classList.contains('dark')

    observer.value = new MutationObserver((records) => {
        records.forEach((record) => {
            dark.value = record.target.classList.contains('dark')
        })
    })

    observer.value.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class'],
        childList: false,
        characterData: false,
    })
})

onBeforeUnmount(() => {
    observer.value.disconnect()
    observer.value = null
})
</script>
<script>
export default {
  props: [
    'card',

    // The following props are only available on resource detail cards...
    // 'resource',
    // 'resourceId',
    // 'resourceName',
  ],

  mounted() {
    //
  },
}
</script>
