<template>
    <div>
        <cal-body>
            <router-view></router-view>
        </cal-body>
    </div>
</template>

<script>
import Layout from '../layouts/default'

export default {
    components: {
        'cal-body': Layout
    }
}
</script>

<style>

</style>
