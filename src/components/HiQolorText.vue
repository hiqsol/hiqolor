<template>
    <div>
        <p>
            <span class=foreground>normal</span>
            <span class=black>black</span>
            <span class=red>red</span>
            <span class=green>green</span>
            <span class=yellow>yellow</span>
            <span class=blue>blue</span>
            <span class=purple>purple</span>
            <span class=cyan>cyan</span>
            <span class=white>white</span>
        </p>
        <p class=bold>
            <span class=foreground>bold</span>
            <span class=black>black</span>
            <span class=red>red</span>
            <span class=green>green</span>
            <span class=yellow>yellow</span>
            <span class=blue>blue</span>
            <span class=purple>purple</span>
            <span class=cyan>cyan</span>
            <span class=white>white</span>
        </p>
        <pre>
            <span class=black>This is <b>black</b> line</span>
            <span class=red>This is <b>red</b> line</span>
            <span class=green>This is <b>green</b> line</span>
            <span class=yellow>This is <b>yellow</b> line</span>
            <span class=blue>This is <b>blue</b> line</span>
            <span class=purple>This is <b>purple</b> line</span>
            <span class=cyan>This is <b>cyan</b> line</span>
            <span class=white>This is <b>white</b> line</span>
        </pre>
    </div>
</template>

<script>
export default {
    name: 'HiQolorText',
    data () {
        return {
            name: ""
        }
    },

    methods:{
        operate(element){
            this.formula +=element;
        },
    }
}
</script>

<style>
/*vue*/

</style>
