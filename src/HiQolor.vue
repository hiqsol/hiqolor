<template>
  <div id="hiqolor" class="container">
    <div class="row">
      <div class="col-sm">
        <hi-qolor-text></hi-qolor-text>
      </div>
      <div class="col-sm">
        <select-scheme></select-scheme>
        <hi-qolor-form></hi-qolor-form>
      </div>
    </div>
  </div>
</template>

<script>
import HiQolorText from 'components/HiQolorText.vue'
import HiQolorForm from 'components/HiQolorForm.vue'
import SelectScheme from 'components/SelectScheme.vue'
export default {
  name: 'hiqolor',
  components: {
    HiQolorText, HiQolorForm, SelectScheme
  }
 }

</script>

<style>
body {
    font-family:Hack;
    font-size:14px;
    color: var(--colorFg);
    background-color: var(--colorBg);
}

B {
    font-weight: normal;
}

.colorFg        { color: var(--colorFg); }
.colorBg        { color: var(--colorBg); }
.color0         { color: var(--color0); }
.color1         { color: var(--color1); }
.color2         { color: var(--color2); }
.color3         { color: var(--color3); }
.color4         { color: var(--color4); }
.color5         { color: var(--color5); }
.color6         { color: var(--color6); }
.color7         { color: var(--color7); }
.color8         { color: var(--color8); }
.color9         { color: var(--color9); }
.color10        { color: var(--color10); }
.color11        { color: var(--color11); }
.color12        { color: var(--color12); }
.color13        { color: var(--color13); }
.color14        { color: var(--color14); }
.color15        { color: var(--color15); }

.background     { color: var(--colorBg); }
.foreground     { color: var(--colorFg); }
.black          { color: var(--color0); }
.red            { color: var(--color1); }
.green          { color: var(--color2); }
.yellow         { color: var(--color3); }
.blue           { color: var(--color4); }
.purple         { color: var(--color5); }
.cyan           { color: var(--color6); }
.white          { color: var(--color7); }
.bold .black    { color: var(--color8); }
.bold .red      { color: var(--color9); }
.bold .green    { color: var(--color10); }
.bold .yellow   { color: var(--color11); }
.bold .blue     { color: var(--color12); }
.bold .purple   { color: var(--color13); }
.bold .cyan     { color: var(--color14); }
.bold .white    { color: var(--color15); }

.black  B       { color: var(--color8); }
.red    B       { color: var(--color9); }
.green  B       { color: var(--color10); }
.yellow B       { color: var(--color11); }
.blue   B       { color: var(--color12); }
.purple B       { color: var(--color13); }
.cyan   B       { color: var(--color14); }
.white  B       { color: var(--color15); }
</style>
