<template>
  <vs-tabs
    :position="isSmallerScreen ? 'top' : 'left'"
    class="tabs-shadow-none"
    id="profile-tabs"
    :key="isSmallerScreen"
  >
    <!--=========TAB=========-->
    <vs-tab icon-pack="feather" icon="icon-heart" :label="!isSmallerScreen ? 'ภาพรวม' : ''">
      <div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
        <info />
      </div>
    </vs-tab>
    <!--=========END=========-->
    <!--=========TAB=========-->
    <vs-tab icon-pack="feather" icon="icon-edit" :label="!isSmallerScreen ? 'แก้ไขข้อมูล' : ''">
      <div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
        <edit />
      </div>
    </vs-tab>
    <!--=========END=========-->
    <!--=========TAB=========-->
    <vs-tab icon-pack="feather" icon="icon-settings" :label="!isSmallerScreen ? 'จัดการ' : ''">
      <div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
        <setting />
      </div>
    </vs-tab>
    <!--=========END=========-->
  </vs-tabs>
</template>

<script>
import info from './component/info.vue'
import edit from './component/edit.vue'
import setting from './component/setting.vue'

export default {
  components: {
    info,
    edit,
    setting
  },
  data () {
    return {}
  },
  computed: {
    isSmallerScreen () {
      return this.$store.state.windowWidth < 768
    }
  }
}
</script>

<style lang="scss">
#profile-tabs {
  .vs-tabs--content {
    padding: 0;
  }
}
</style>
