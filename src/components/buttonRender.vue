<template>
  <div class="buttoner">
    <md-filled-tonal-button href="https://blog.hesiy.cn">{{ button1 }}</md-filled-tonal-button>
    &nbsp;
    <md-outlined-button href="https://github.com/FloatSheep">{{ button2 }}</md-outlined-button>
  </div>
</template>

<script>
import siteConfig from '../../site.config'

export default {
  data() {
    return {
      button1: '',
      button2: '',
      yamlData: null
    }
  },
  mounted() {
    this.loadYamlData()
  },
  methods: {
    async loadYamlData() {
      try {
        this.button1 = siteConfig.button1
        this.button2 = siteConfig.button2
      } catch (error) {
        console.error('Failed to load YAML data:', error)
      }
    }
  }
}
</script>
