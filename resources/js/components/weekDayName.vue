<template>
    <div class="checkbox ck">
        <label> <input type="checkbox" value="weekName"  class="ck-left" > {{ weekID }} </label>
    </div>
</template>
<script>
export default {
    name: 'WeekDayName',
    props: {
        'weekName': {
            required: true,
            type: String
        },
        'weekID': {
            required: true,
            type: String
        }
    }
}
</script>

<style>
    .ck {
        padding: 0px 5px;
    }
    .ck-right{
        margin-right: 5px !important;
    }
</style>
