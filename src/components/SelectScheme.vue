<template>
    <select @change="change($event)">
        <option v-for="(name, key) in schemes" :value="key">{{ name }}</option>
    </select>
</template>

<script>
export default {
    name: 'SelectScheme',
    data () {
        return {
            cssId: "current-scheme",
            current: "",
            schemes: {
                one:    'HiQolor One',
                old:    'HiQolor Old',
                two:    'HiQolor Two',
                left:   'HiQolor Left',
                right:  'HiQolor Right',
                bright: 'HiQolor Bright',
                normal: 'HiQolor Normal',
            }
        }
    },

    methods:{
        change(event){
            this.setScheme(event.target.value);
        },
        setScheme(name){
            var link = document.getElementById(this.cssId);
            if (!link) {
                var head  = document.getElementsByTagName('head')[0];
                link = this.createCssLink();
                head.appendChild(link);
            }
            link.href = this.getCssPath(name);
        },
        createCssLink(){
            var link    = document.createElement('link');
            link.id     = this.cssId;
            link.rel    = 'stylesheet';
            link.type   = 'text/css';
            link.href   = '';
            link.media  = 'all';

            return link;
        },
        getCssPath(name){
            return '/public/schemes/' + name + '.css';
        }
    }
}
</script>

<style>
select {
    background-color: var(--colorBg);
    color: var(--colorFg);
}

</style>
