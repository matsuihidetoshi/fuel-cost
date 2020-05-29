<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Fuel Cost Log</h1>
      </v-col>
      <v-col
        class="ml-10 mr-10 mb-5 overflow-y-auto"
        v-scroll
        align="center"
        justify="center"
        style="height: 300px"
      >
        <v-card
          v-for="(log, id) in logs"
          v-bind:key="id"
          @click.stop="
            target = id;
            dialog = true;
            action = 0;
            editLog = log
          "
        >
          <p>{{ log.timestamp }}</p>
          <p>Refuel: {{ log.refuel }}</p>
          <p>Distance: {{ log.distance }}</p>
        </v-card>
      </v-col>
    </v-row>
    <v-form
      ref="form"
      v-model="valid"
    >
      <v-text-field
        v-model="log.refuel"
        :rules="numberRules"
        label="Refuel(l)"
        class="ml-5 mr-5"
        required
      ></v-text-field>
      <v-text-field
        v-model="log.distance"
        :rules="numberRules"
        label="Distance(km)"
        class="ml-5 mr-5 mb-5"
        required
      ></v-text-field>
      <v-btn
        color="error"
        @click.stop="dialog = true; action = 1"
        class="ml-5 mb-5"
      >
        clear
      </v-btn>
      <v-btn
        :disabled="!valid"
        color="success"
        @click="addLog(log)"
        class="float-right mr-5 mb-5 pl-7 pr-7"
      >
        add
      </v-btn>
    </v-form>
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card
        class="pt-3"
      >
        <v-form
          ref="form"
          v-model="valid"
          v-if="action == 0"
        >
          <v-text-field
            v-model="editLog.refuel"
            :rules="numberRules"
            label="Refuel(l)"
            class="ml-3 mr-3"
            required
          ></v-text-field>
          <v-text-field
            v-model="editLog.distance"
            :rules="numberRules"
            label="Distance(km)"
            class="ml-3 mr-3 mb-3"
            required
          ></v-text-field>
          <v-btn
            color="error"
            @click="deleteLog(target)"
            class="ml-5 mb-5"
          >
            delete
          </v-btn>
          <v-btn
            :disabled="!valid"
            color="success"
            @click="updateLog(target)"
            class="float-right mr-5 mb-5 pl-7 pr-7"
          >
            update
          </v-btn>
        </v-form>
        <p
          class="ml-5"
          v-if="action == 1"
        >
          Are you sure you want to clear<br>
          all logs permanently?
        </p>
        <v-btn
          @click="dialog = false;"
          class="ml-5 mb-5"
        >
          back
        </v-btn>
        <v-btn
          v-if="action == 1"
          @click="clearLogs"
          class="float-right mr-5 mb-5"
          color="error"
        >
          yes
        </v-btn>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  export default {
    name: 'Calculation',
    data() {
      return {
        key: 'fuel-cost-data-log-280399f321b0037c605b7c47699bfe83',
        logs: null,
        log: {
          refuel: null,
          distance: null,
          timestamp: null
        },
        editLog: {
          refuel: null,
          distance: null,
          timestamp: null
        },
        numberRules: [
          v => !!v || 'Required',
          v => (v && !isNaN(v)) || 'Number only',
        ],
        valid: false,
        dialog: false,
        action: null,
        target: null
      }
    },
    methods: {
      getLogs() {
        return JSON.parse(localStorage.getItem(this.key))
      },
      addLog(log) {
        log.timestamp = new Date()
        var logs = this.getLogs()
        var id = log.timestamp.getTime()
        if (!logs) {
          logs = {}
        }
        logs[id] = log
        localStorage.setItem(this.key, JSON.stringify(logs))
        this.logs = JSON.parse(localStorage.getItem(this.key))
      },
      updateLog(id) {
        this.logs[id] = this.editLog
        localStorage.setItem(this.key, JSON.stringify(this.logs))
        this.dialog = false
      },
      deleteLog(id) {
        delete this.logs[id]
        localStorage.setItem(this.key, JSON.stringify(this.logs))
        this.dialog = false
      },
      clearLogs() {
        localStorage.removeItem(this.key)
        this.logs = JSON.parse(localStorage.getItem(this.key))
        this.dialog = false
      },
    },
    mounted () {
      this.logs = JSON.parse(localStorage.getItem(this.key))
    }
  }
</script>
