<template>
  <footer>
    <span class="copyright">{{ copyright }}</span>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <span class="copyright">基于 <code>Redish101</code> 仿造（?</span>
  </footer>
</template>

<script>
import siteConfig from '../../site.config'

export default {
  data() {
    return {
      copyright: '',
      yamlData: null
    }
  },
  mounted() {
    this.loadYamlData()
  },
  methods: {
    async loadYamlData() {
      try {
        this.copyright = siteConfig.copyright
      } catch (error) {
        console.error('Failed to load YAML data:', error)
      }
    }
  }
}
</script>
