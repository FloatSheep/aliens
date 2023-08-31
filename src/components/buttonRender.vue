<template>
  <div class="buttoner">
    <md-filled-tonal-button href="https://blog.hesiy.cn">{{ button1 }}</md-filled-tonal-button>
    &nbsp;
    <md-outlined-button href="https://github.com/FloatSheep" >{{ button2 }}</md-outlined-button>
  </div>
</template>

<script>
import yaml from 'js-yaml';

export default {
  data() {
    return {
      button1: '',
      button2: '',
      yamlData: null,
    };
  },
  mounted() {
    this.loadYamlData();
  },
  methods: {
    async loadYamlData() {
      try {
        const response = await fetch('../../config/config.yaml');
        const text = await response.text();
        this.yamlData = yaml.load(text);
        this.button1 = this.yamlData.button1;
        this.button2 = this.yamlData.button2;
      } catch (error) {
        console.error('Failed to load YAML data:', error);
      }
    },
  },
};
</script>