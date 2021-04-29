<template>
  <div class="detail-params">
    <div class="rule">
      <table class="rule-table">
        <tbody>
          <tr v-for="(item, index) in itemRule" :key="index">
            <th>{{item[0]}}</th>
            <td v-for="(value, key) in item" :key="key" v-show="key !== 0">
              {{value}}
            </td>
          </tr>
        </tbody>
        <tfoot>
            <td :colspan="ruleLength" class="rule-desc">
              {{itemDesc}}
            </td>
          </tfoot>
      </table>
    </div>
    <div class="set">
      <table class="set-table">
        <tbody>
          <tr v-for="(item, index) in itemSet" :key="index">
            <th>{{item.key}}</th>
            <td>{{item.value}}</td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailParams',
  props: {
    itemParams: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  computed: {
    itemSet() {
      if (this.itemParams.info) {
        return this.itemParams.info.set
      }
    },
    itemRule() {
      if (this.itemParams.rule) {
        return this.itemParams.rule.tables[0]
      }
    },
    itemDesc() {
      if (this.itemParams.rule) {
        return this.itemParams.rule.desc ? this.itemParams.rule.desc : this.itemParams.rule.disclaimer
      }
    },
    ruleLength() {
      if (this.itemParams.rule) {
        return this.itemParams.rule.tables[0][0].length
      }
    }
  }
}

</script>

<style scoped>
.detail-params {
  border-top: 4px solid rgba(123, 123, 123, 0.3);
  border-bottom: 4px solid rgba(123, 123, 123, 0.3);
  padding: 1em 0;
} 

.rule-table,
.set-table {
  width: 95%;
  border-collapse: collapse;
  margin: 0 auto;
}

.rule-table {
  border-bottom: 3px solid rgba(123, 123, 123, 0.4);
}

.rule-table tr,
.set-table tr {
  border-bottom: 2px solid rgba(123, 123, 123, 0.2);
}
.rule th,
.set-table th {
  text-align: left;
  width: 25%;
  padding: 1em 0;
}
.rule td {
  width: 20%;
  text-align: left;
  padding: 1rem 0;
}
.set-table td {
  padding: 1rem 0;
  color: red;
  text-align: left;
}


</style>