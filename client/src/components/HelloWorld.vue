<template>
  <div style="position:relative; overflow:auto;">
    <OrgChart :datasource="ds" @node-click="selectNode"> 
    </OrgChart>
  </div>
</template>

<script>
import OrgChart from './OrgContainer.vue'
import axios from 'axios'

export default {
  components: {
    OrgChart
  },
  name: 'HelloWorld',
  data () {
    return {
      ds: {},
      nodeData: {}
    }
  },
  async mounted() {
    const response = await axios.get("http://localhost:3000/tree");
    console.log(response.data);
    this.ds = response.data[0];
  },
  methods: {
    selectNode(nodeData) {
      alert("node " + nodeData.username + " is selected");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
