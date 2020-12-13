<template>
    <div>
    <table border=1>
        <tr>
            <th>Color</th>
            <th>Hue</th>
            <th>Saturation</th>
            <th>Value</th>
        </tr>
        <tr v-for="(name, key) in colors">
            <th align=right>{{ name }}</th>
            <td>
                <input type=number min=0>/<input type=number min=0></td>
            </td>
            <td>
                <input type=number min=0>/<input type=number min=0></td>
            </td>
            <td>
                <input type=number min=0>/<input type=number min=0></td>
            </td>
        </tr>
    </table>
    </div>
</template>

<script>
export default {
    name: 'HiQolorForm',
    data () {
        return {
            name: "",
            colors: {
                ground:     'Ground',
                white:      'White',
                black:      'Black',
                yellow:     'Yellow',
                green:      'Green',
                cyan:       'Cyan',
                blue:       'Blue',
                purple:     'Purple',
                red:        'Red',
            }
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

input {
    width:40px;
}

table {
    border:1px solid white;
}
th {
    padding:3px 5px;
}

</style>
