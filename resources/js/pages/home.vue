<template>
    <div>
        <div class="card">
            <div class="card-header">
                <b> Calendar App</b>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-4">
                        <form @submit.prevent="setEventDate" method="post" id="eventScheduleForm">
                            <div class="form-group">
                                <label> Event </label>
                                <input class="form-control" name='event-type'/>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <span> From </span>
                                        <input class="form-control" name='date-from' type="date">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <span> To </span>
                                        <input class="form-control" name='date-to' type="date">
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="form-inline">
                                    <week-name weekID='Sun' weekName='weekDays'/>
                                    <week-name weekID='Mon' weekName='weekDays'/>
                                    <week-name weekID='Tue' weekName='weekDays'/>
                                    <week-name weekID='Wed' weekName='weekDays'/>
                                    <week-name weekID='Thu' weekName='weekDays'/>
                                    <week-name weekID='Fri' weekName='weekDays'/>
                                    <week-name weekID='Sat' weekName='weekDays'/>
                                </div>
                            </div>

                            <div class="form-group">
                                <button class="btn btn-success" type="submit">Save</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-8">
                        <span class="calindar-title"> {{ monthName }} </span>
                        <ul v-for="event in calindarEvents" :key='event.id' class="list">
                            <li>{{ event.eventName }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import { mapGetters } from 'vuex'
import WeekDayName from "../components/weekDayName";

export default {
    name: 'HomePage',
    components: {
        'week-name': WeekDayName
    },
    data: () => {
        return {
            eventName: '',
            dateFrom: '',
            dateTo: '',
            weekDays: []
        }
    },
    methods: {
        setEventDate : (e) => {
            console.log('test submit event setup');
        }
    },
    computed: {
        ...mapGetters(['calindarEvents', 'monthName'])
    }
}
</script>
