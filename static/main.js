const { ref } = Vue

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Possilbe Locations',
    align: 'left',
    field: row => row.PossibleLocations,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'Block When Overdue', align: 'center', label: 'Block When Overdue', field: 'Block When Overdue', sortable: true },
  { name: 'Cancelled Recall Due Date', align: 'center', label: 'Cancelled Recall Due Date', field: 'Cancelled Recall Due Date', sortable: true },
  { name: 'Closed Library Due Date Management', align: 'center', label: 'Closed Library Due Date Management', field: 'Closed Library Due Date Management', sortable: true },
  { name: 'Due Date', align: 'center', label: 'Due Date', field: 'Due Date', sortable: true },
  { name: 'Enabled', align: 'center', label: 'Enabled', field: 'Enabled', sortable: true },
  { name: 'Fullfilment Unit', align: 'center', label: 'Fullfilment Unit', field: 'Fullfilment Unit', sortable: true },
  { name: 'Grace Period', align: 'center', label: 'Grace Period', field: 'Grace Period', sortable: true },
  { name: 'Is Loanable', align: 'center', label: 'Is Loanable', field: 'Is Loanable', sortable: true },
  { name: 'Is Recallable', align: 'center', label: 'Is Recallable', field: 'Is Recallable', sortable: true },
  { name: 'Is Renewable', align: 'center', label: 'Is Renewable', field: 'Is Renewable', sortable: true },
  { name: 'Lost Item Fine', align: 'center', label: 'Lost Item Fine', field: 'Lost Item Fine', sortable: true },
  { name: 'Lost Item Replacement Fee', align: 'center', label: 'Lost Item Replacement Fee', field: 'Lost Item Replacement Fee', sortable: true },
  { name: 'Lost Item Replacement Fee Refund Ratio', align: 'center', label: 'Lost Item Replacement Fee Refund Ratio', field: 'Lost Item Replacement Fee Refund Ratio', sortable: true },
  { name: 'Maximum Fine', align: 'center', label: 'Maximum Fine', field: 'Maximum Fine', sortable: true },
  { name: 'Maximum Period For Overdue Block', align: 'center', label: 'Maximum Period For Overdue Block', field: 'Maximum Period For Overdue Block', sortable: true },
  { name: 'Maximum Renewal Period', align: 'center', label: 'Maximum Renewal Period', field: 'Maximum Renewal Period', sortable: true },
  { name: 'Output', align: 'center', label: 'Output', field: 'Output', sortable: true },
  { name: 'Overdue Fine', align: 'center', label: 'Overdue Fine', field: 'Overdue Fine', sortable: true },
  { name: 'Overdue Notification Fine Type 1', align: 'center', label: 'Overdue Notification Fine Type 1', field: 'Overdue Notification Fine Type 1', sortable: true },
  { name: 'Overdue Notification Fine Type 2', align: 'center', label: 'Overdue Notification Fine Type 2', field: 'Overdue Notification Fine Type 2', sortable: true },
  { name: 'Overdue Notification Fine Type 3', align: 'center', label: 'Overdue Notification Fine Type 3', field: 'Overdue Notification Fine Type 3', sortable: true },
  { name: 'Overdue Notification Fine Type 4', align: 'center', label: 'Overdue Notification Fine Type 4', field: 'Overdue Notification Fine Type 4', sortable: true },
  { name: 'Overdue Notification Fine Type 5', align: 'center', label: 'Overdue Notification Fine Type 5', field: 'Overdue Notification Fine Type 5', sortable: true },
  { name: 'Parameter', align: 'center', label: 'Parameter', field: 'Parameter', sortable: true },
  { name: 'Recall Period', align: 'center', label: 'Recall Period', field: 'Recall Period', sortable: true },
  { name: 'Recalled Overdue Fine', align: 'center', label: 'Recalled Overdue Fine', field: 'Recalled Overdue Fine', sortable: true },
  { name: 'Reloan Limit', align: 'center', label: 'Reloan Limit', field: 'Reloan Limit', sortable: true },
  { name: 'Renew Fee', align: 'center', label: 'Renew Fee', field: 'Renew Fee', sortable: true },
  { name: 'Rule Name', align: 'center', label: 'Rule Name', field: 'Rule Name', sortable: true },
  { name: 'Requested Item Due Date', align: 'center', label: 'Requested Item Due Date', field: 'Requested Item Due Date', sortable: true },
  { name: 'Time frame when loan renewal is allowed', align: 'center', label: 'Time frame when loan renewal is allowed', field: 'Time frame when loan renewal is allowed', sortable: true },
  { name: 'Unnamed: 0', align: 'center', label: 'Unnamed: 0', field: 'Unnamed: 0', sortable: true },
  { name: 'Unnamed: 4', align: 'center', label: 'Unnamed: 4', field: 'Unnamed: 4', sortable: true },
]

const url = "/static/experimental_data.json";

fetch(url)
  .then(response => response.json())
  .then(data => {
    rows = data;
    const app = Vue.createApp({
      setup () {
        return {
          visibleColumns: ref([ 'Due Date',
                                'Grace Period',
                                'Maximum Fine',
                             ]),
          columns,
          rows
        }
      }
    })

    app.use(Quasar, { config: {} })
    app.mount('#q-app')

  });
