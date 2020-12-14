<template>
    <div>
    <table>
        <tr>
            <th class="text-right">Color</th>
            <th class="text-center">Hue</th>
            <th class="text-center">Saturation</th>
            <th class="text-center">Value</th>
        </tr>
        <tr v-for="(name, key) in colors">
            <th class="text-right">{{ name }}</th>
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

input {
    width: 50px;
    background-color: var(--colorBg);
    color: var(--colorFg);
    border:1px solid var(--colorFg);
}

td, th {
    padding: 1px 7px;
}

</style>
