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
                        Calendar Content
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import {mapState, mapGetters, mapActions} from 'vuex'
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
            alert()
        }
    }
}
</script>
