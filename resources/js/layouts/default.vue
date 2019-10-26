<template>
  <div class="wrapper">
        <cal-header/>
        <cal-sidebar/>
        <div class="cal container-fluid">
            <transition name="fade">
                <slot> </slot>
            </transition>
        </div>
  </div>
</template>

<script>
import Header  from '../components/Header'
import Sidebar from '../components/Sidebar'


export default {
    name: 'Layout',
    components: {
        'cal-header': Header,
        'cal-sidebar': Sidebar
    }
}
</script>

<style>
    .cal.container-fluid {
        width: 95.6%;
        margin-left: 83px;
        margin-top: 25px;
    }

    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
</style>
