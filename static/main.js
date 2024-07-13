const { ref } = Vue

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Rule Name',
    align: 'left',
    field: row => row.RuleName,
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
  { name: 'Possible Locations', align: 'center', label: 'Possible Locations', field: 'Possible Locations', sortable: true },
  { name: 'Recall Period', align: 'center', label: 'Recall Period', field: 'Recall Period', sortable: true },
  { name: 'Recalled Overdue Fine', align: 'center', label: 'Recalled Overdue Fine', field: 'Recalled Overdue Fine', sortable: true },
  { name: 'Reloan Limit', align: 'center', label: 'Reloan Limit', field: 'Reloan Limit', sortable: true },
  { name: 'Renew Fee', align: 'center', label: 'Renew Fee', field: 'Renew Fee', sortable: true },
  { name: 'Requested Item Due Date', align: 'center', label: 'Requested Item Due Date', field: 'Requested Item Due Date', sortable: true },
  { name: 'Time frame when loan renewal is allowed', align: 'center', label: 'Time frame when loan renewal is allowed', field: 'Time frame when loan renewal is allowed', sortable: true },
  { name: 'Unnamed: 0', align: 'center', label: 'Unnamed: 0', field: 'Unnamed: 0', sortable: true },
  { name: 'Unnamed: 4', align: 'center', label: 'Unnamed: 4', field: 'Unnamed: 4', sortable: true },
]

const rows = [
 {'Block When Overdue': 'No block when overdue',
  'Cancelled Recall Due Date': 'Attempt automatic renewal',
  'Closed Library Due Date Management': 'Move to the end of the next open day',
  'Due Date': '3 Days Due Date',
  'Enabled': 'Active',
  'Fullfilment Unit': '3 Day loan',
  'Grace Period': '3 Days Grace Period',
  'Is Loanable': 'Loanable',
  'Is Recallable': 'Recall Allowed',
  'Is Renewable': 'Renewable',
  'Lost Item Fine': 'No Lost Item Fine',
  'Lost Item Replacement Fee': '500.00 Lost Item Replacement Fee',
  'Lost Item Replacement Fee Refund Ratio': '100 Percent Lost Item Refund',
  'Maximum Fine': '150.00 Maximum Fine',
  'Maximum Period For Overdue Block': 'No Maximum Block Period',
  'Maximum Renewal Period': '6 Exact Days Maximum Renewal Period (6 Days',
  'Output': '3 days - equipment',
  'Overdue Fine': '15.00 Open Hours Overdue Fine (15.00/hr',
  'Overdue Notification Fine Type 1': 'No Overdue Fine',
  'Overdue Notification Fine Type 2': 'No Overdue Fine',
  'Overdue Notification Fine Type 3': 'No Overdue Fine',
  'Overdue Notification Fine Type 4': 'No Overdue Fine',
  'Overdue Notification Fine Type 5': 'No Overdue Fine',
  'Parameter': 'User Group Not EqualsProcessing/Library Use',
  'Possible Locations': 'Media Desk, Tablets',
  'Recall Period': 'No Recall Due Date',
  'Recalled Overdue Fine': '1.00 All Days Recalled Overdue Fine',
  'Reloan Limit': 'No Reloan Limit',
  'Renew Fee': 'No Renewal Fee',
  'Requested Item Due Date': 'No Requested Due Date',
  'RuleName': '3 Day loans for Undergraduates',
  'Time frame when loan renewal is allowed': 'No limit',
  'Unnamed: 0': null,
  'Unnamed: 4': null},
 {'Block When Overdue': 'No block when overdue',
  'Cancelled Recall Due Date': 'Keep due date',
  'Closed Library Due Date Management': 'Move Due Time to Upcoming Closing Time',
  'Due Date': '3 Hours Due Date',
  'Enabled': 'Active',
  'Fullfilment Unit': '3 Hour',
  'Grace Period': '1 Hour Grace Period',
  'Is Loanable': 'Loanable',
  'Is Recallable': 'No Recall',
  'Is Renewable': 'Renewable',
  'Lost Item Fine': 'No Lost Item Fine',
  'Lost Item Replacement Fee': '500.00 Lost Item Replacement Fee',
  'Lost Item Replacement Fee Refund Ratio': '100 Percent Lost Item Refund',
  'Maximum Fine': '150.00 Maximum Fine',
  'Maximum Period For Overdue Block': 'No Maximum Block Period',
  'Maximum Renewal Period': '6 Hours Maximum Renewal Period (6 Hours',
  'Output': '3 Hour laptops',
  'Overdue Fine': '15.00 Open Hours Overdue Fine (15.00/hr',
  'Overdue Notification Fine Type 1': 'No Overdue Fine',
  'Overdue Notification Fine Type 2': 'No Overdue Fine',
  'Overdue Notification Fine Type 3': 'No Overdue Fine',
  'Overdue Notification Fine Type 4': 'No Overdue Fine',
  'Overdue Notification Fine Type 5': 'No Overdue Fine',
  'Parameter': 'User Group Not EqualsProcessing/Library Use',
  'Possible Locations': 'Media Desk, Battery chargers, Media Desk, Laptops',
  'Recall Period': 'No Recall Due Date',
  'Recalled Overdue Fine': 'No Recall Overdue Fine',
  'Reloan Limit': 'No Reloan Limit',
  'Renew Fee': 'No Renewal Fee',
  'Requested Item Due Date': 'No Requested Due Date',
  'RuleName': '3 Hour',
  'Time frame when loan renewal is allowed': 'No limit',
  'Unnamed: 0': null,
  'Unnamed: 4': null},
 {'Block When Overdue': 'No block when overdue',
  'Cancelled Recall Due Date': 'Restore to original due date',
  'Closed Library Due Date Management': 'Move Due Time to Next Open Time',
  'Due Date': '56 Days Due Date',
  'Enabled': 'Active',
  'Fullfilment Unit': 'Closed Stacks',
  'Grace Period': '10 Exact Days Grace Period',
  'Is Loanable': 'Not For Loan',
  'Is Recallable': 'Recall Allowed',
  'Is Renewable': 'Not Renewable',
  'Lost Item Fine': 'No Lost Item Fine',
  'Lost Item Replacement Fee': '110.00 Lost Item Replacement Fee',
  'Lost Item Replacement Fee Refund Ratio': '100 Percent Lost Item Refund',
  'Maximum Fine': '20.00 Maximum Fine',
  'Maximum Period For Overdue Block': 'No Maximum Block Period',
  'Maximum Renewal Period': '280 Days Maximum Renewal Period',
  'Output': 'Closed Stacks Loan TOU',
  'Overdue Fine': 'No Overdue Fine',
  'Overdue Notification Fine Type 1': 'No Overdue Notification Fine Type 1',
  'Overdue Notification Fine Type 2': 'No Overdue Notification Fine Type 2',
  'Overdue Notification Fine Type 3': 'No Overdue Notification Fine Type 3',
  'Overdue Notification Fine Type 4': 'No Overdue Notification Fine Type 4',
  'Overdue Notification Fine Type 5': 'No Overdue Notification Fine Type 5',
  'Parameter': null,
  'Possible Locations': 'BMCC Zine Collection, Closed Stacks- Available for Scanning Request Only, Media Desk, Periodicals, Reference, Reference Desk',
  'Recall Period': '10 Days Recall Period',
  'Recalled Overdue Fine': '1.00 All Days Recalled Overdue Fine',
  'Reloan Limit': 'No Reloan Limit',
  'Renew Fee': 'No Renewal Fee',
  'Requested Item Due Date': '56 Days Requested Item Due Date',
  'RuleName': 'Closed Stacks Loan Rule',
  'Time frame when loan renewal is allowed': 'No limit',
  'Unnamed: 0': null,
  'Unnamed: 4': null},
 {'Block When Overdue': 'No block when overdue',
  'Cancelled Recall Due Date': 'Attempt automatic renewal',
  'Closed Library Due Date Management': 'Move to the end of the next open day',
  'Due Date': '1 Week Due Date',
  'Enabled': 'Active',
  'Fullfilment Unit': 'Equipment',
  'Grace Period': '3 Days Grace Period',
  'Is Loanable': 'Loanable',
  'Is Recallable': 'Recall Allowed',
  'Is Renewable': 'Renewable',
  'Lost Item Fine': 'No Lost Item Fine',
  'Lost Item Replacement Fee': '50.00 Lost Item Replacement Fee',
  'Lost Item Replacement Fee Refund Ratio': '100 Percent Lost Item Refund',
  'Maximum Fine': '50.00 Maximum Fine',
  'Maximum Period For Overdue Block': 'No Maximum Block Period',
  'Maximum Renewal Period': '2 Weeks Maximum Renewal Period (2 Weeks',
  'Output': 'Weekly - Equipment',
  'Overdue Fine': '5.00 Open Days Overdue Fine (5.00/day',
  'Overdue Notification Fine Type 1': 'No Overdue Fine',
  'Overdue Notification Fine Type 2': 'No Overdue Fine',
  'Overdue Notification Fine Type 3': 'No Overdue Fine',
  'Overdue Notification Fine Type 4': 'No Overdue Fine',
  'Overdue Notification Fine Type 5': 'No Overdue Fine',
  'Parameter': 'User Group =Undergraduate Student',
  'Possible Locations': 'Media Desk, DVD, Media Desk, Graphing Calculators, Reserves, 7 days',
  'Recall Period': '10 Days Recall Period',
  'Recalled Overdue Fine': 'No Recall Overdue Fine',
  'Reloan Limit': 'No Reloan Limit',
  'Renew Fee': 'No Renewal Fee',
  'Requested Item Due Date': 'No Requested Due Date',
  'RuleName': 'Weekly Equipment - Undergraduates',
  'Time frame when loan renewal is allowed': 'No limit',
  'Unnamed: 0': null,
  'Unnamed: 4': null},
 {'Block When Overdue': 'No block when overdue',
  'Cancelled Recall Due Date': 'Attempt automatic renewal',
  'Closed Library Due Date Management': 'Move to the end of the next open day',
  'Due Date': '1 Week Due Date',
  'Enabled': 'Active',
  'Fullfilment Unit': 'Equipment',
  'Grace Period': '3 Days Grace Period',
  'Is Loanable': 'Loanable',
  'Is Recallable': 'Recall Allowed',
  'Is Renewable': 'Renewable',
  'Lost Item Fine': 'No Lost Item Fine',
  'Lost Item Replacement Fee': '50.00 Lost Item Replacement Fee',
  'Lost Item Replacement Fee Refund Ratio': '100 Percent Lost Item Refund',
  'Maximum Fine': '50.00 Maximum Fine',
  'Maximum Period For Overdue Block': 'No Maximum Block Period',
  'Maximum Renewal Period': '2 Weeks Maximum Renewal Period (2 Weeks',
  'Output': 'Weekly - Equipment',
  'Overdue Fine': '5.00 Open Days Overdue Fine (5.00/day',
  'Overdue Notification Fine Type 1': 'No Overdue Fine',
  'Overdue Notification Fine Type 2': 'No Overdue Fine',
  'Overdue Notification Fine Type 3': 'No Overdue Fine',
  'Overdue Notification Fine Type 4': 'No Overdue Fine',
  'Overdue Notification Fine Type 5': 'No Overdue Fine',
  'Parameter': 'User Group Not EqualsProcessing/Library Use',
  'Possible Locations': 'Media Desk, DVD, Media Desk, Graphing Calculators, Reserves, 7 days',
  'Recall Period': '10 Days Recall Period',
  'Recalled Overdue Fine': 'No Recall Overdue Fine',
  'Reloan Limit': 'No Reloan Limit',
  'Renew Fee': 'No Renewal Fee',
  'Requested Item Due Date': 'No Requested Due Date',
  'RuleName': 'Weekly equipment - Everyone else',
  'Time frame when loan renewal is allowed': 'No limit',
  'Unnamed: 0': null,
  'Unnamed: 4': null},
 {'Block When Overdue': 'No block when overdue',
  'Cancelled Recall Due Date': 'Restore to original due date',
  'Closed Library Due Date Management': 'Move to the end of the next open day',
  'Due Date': '112 Days Due Date',
  'Enabled': 'Active',
  'Fullfilment Unit': 'General',
  'Grace Period': '10 Exact Days Grace Period',
  'Is Loanable': 'Loanable',
  'Is Recallable': 'No Recall',
  'Is Renewable': 'Renewable',
  'Lost Item Fine': '$25.00 Lost Item Fine',
  'Lost Item Replacement Fee': '$85.00 Lost Item Replacement Fee',
  'Lost Item Replacement Fee Refund Ratio': '100 Percent Lost Item Refund',
  'Maximum Fine': '$20.00 Maximum Fine',
  'Maximum Period For Overdue Block': 'No Maximum Block Period',
  'Maximum Renewal Period': '336 Days Maximum Renewal Period',
  'Output': 'General Loan TOU',
  'Overdue Fine': 'No Overdue Fine',
  'Overdue Notification Fine Type 1': 'No Overdue Fine',
  'Overdue Notification Fine Type 2': 'No Overdue Fine',
  'Overdue Notification Fine Type 3': 'No Overdue Fine',
  'Overdue Notification Fine Type 4': 'No Overdue Fine',
  'Overdue Notification Fine Type 5': 'No Overdue Fine',
  'Parameter': null,
  'Possible Locations': "Children's Book Review Center Middle Readers, Children's Book Review Center Young Adult, Comics and Graphic Novels Collection, Dictionaries, Juvenile Collection, Leisure Reading, Media Desk, Calculators, On Display Near Library Entrance, Reserve Desk, Stacks, Stacks-Oversized",
  'Recall Period': 'No Recall Due Date',
  'Recalled Overdue Fine': '$1.00 All Days Recalled Overdue Fine',
  'Reloan Limit': 'No Reloan Limit',
  'Renew Fee': 'No Renewal Fee',
  'Requested Item Due Date': '112 Days Requested Item Due Date',
  'RuleName': 'General Loan Rule',
  'Time frame when loan renewal is allowed': 'No limit',
  'Unnamed: 0': null,
  'Unnamed: 4': null},
 {'Block When Overdue': 'No block when overdue',
  'Cancelled Recall Due Date': 'Restore to original due date',
  'Closed Library Due Date Management': 'Move Due Time to Upcoming Closing Time',
  'Due Date': '3 Hours Due Date',
  'Enabled': 'Active',
  'Fullfilment Unit': 'Limited',
  'Grace Period': '15 Minutes Grace Period',
  'Is Loanable': 'Loanable',
  'Is Recallable': 'No Recall',
  'Is Renewable': 'Renewable',
  'Lost Item Fine': 'No Lost Item Fine',
  'Lost Item Replacement Fee': '100.00 Lost Item Replacement Fee',
  'Lost Item Replacement Fee Refund Ratio': '100 Percent Lost Item Refund',
  'Maximum Fine': '50.00 Maximum Fine',
  'Maximum Period For Overdue Block': 'No Maximum Block Period',
  'Maximum Renewal Period': '6 Hours Maximum Renewal Period (6 Hours',
  'Output': '3 Hours Loan TOU',
  'Overdue Fine': '5.00 Open Hours Overdue Fine (5.00/hr',
  'Overdue Notification Fine Type 1': 'No Overdue Notification Fine Type 1',
  'Overdue Notification Fine Type 2': 'No Overdue Notification Fine Type 2',
  'Overdue Notification Fine Type 3': 'No Overdue Notification Fine Type 3',
  'Overdue Notification Fine Type 4': 'No Overdue Notification Fine Type 4',
  'Overdue Notification Fine Type 5': 'No Overdue Notification Fine Type 5',
  'Parameter': null,
  'Possible Locations': 'Reserve Desk, Models, Reserves, 3 hours',
  'Recall Period': '10 Days Recall Period',
  'Recalled Overdue Fine': '1.00 All Days Recalled Overdue Fine',
  'Reloan Limit': 'No Reloan Limit',
  'Renew Fee': 'No Renewal Fee',
  'Requested Item Due Date': 'No Requested Due Date',
  'RuleName': '3 Hours Loan Rule',
  'Time frame when loan renewal is allowed': 'No limit',
  'Unnamed: 0': null,
  'Unnamed: 4': null},
 {'Block When Overdue': 'No block when overdue',
  'Cancelled Recall Due Date': 'Keep due date',
  'Closed Library Due Date Management': 'Move to the end of the next open day',
  'Due Date': '28 Exact Days Due Date',
  'Enabled': 'Active',
  'Fullfilment Unit': 'Monthly',
  'Grace Period': '3 Days Grace Period',
  'Is Loanable': 'Loanable',
  'Is Recallable': 'No Recall',
  'Is Renewable': 'Renewable',
  'Lost Item Fine': 'No Lost Item Fine',
  'Lost Item Replacement Fee': '50.00 Lost Item Replacement Fee',
  'Lost Item Replacement Fee Refund Ratio': '100 Percent Lost Item Refund',
  'Maximum Fine': '50.00 Maximum Fine',
  'Maximum Period For Overdue Block': 'No Maximum Block Period',
  'Maximum Renewal Period': '56 Exact Days Maximum Renewal Period (Fifty six days)',
  'Output': 'Monthly Loan TOU',
  'Overdue Fine': '.25 All Days Overdue Fine',
  'Overdue Notification Fine Type 1': 'No Overdue Fine',
  'Overdue Notification Fine Type 2': 'No Overdue Fine',
  'Overdue Notification Fine Type 3': 'No Overdue Fine',
  'Overdue Notification Fine Type 4': 'No Overdue Fine',
  'Overdue Notification Fine Type 5': 'No Overdue Fine',
  'Parameter': 'User Group =Undergraduate Student',
  'Possible Locations': 'Textbooks',
  'Recall Period': '10 Days Recall Period',
  'Recalled Overdue Fine': 'No Recall Overdue Fine',
  'Reloan Limit': 'No Reloan Limit',
  'Renew Fee': 'No Renewal Fee',
  'Requested Item Due Date': 'No Requested Due Date',
  'RuleName': 'Monthly - Undergraduate',
  'Time frame when loan renewal is allowed': 'No limit',
  'Unnamed: 0': null,
  'Unnamed: 4': null},
 {'Block When Overdue': 'No block when overdue',
  'Cancelled Recall Due Date': 'Keep due date',
  'Closed Library Due Date Management': 'Move to the end of the next open day',
  'Due Date': '28 Exact Days Due Date',
  'Enabled': 'Active',
  'Fullfilment Unit': 'Monthly',
  'Grace Period': '3 Days Grace Period',
  'Is Loanable': 'Loanable',
  'Is Recallable': 'No Recall',
  'Is Renewable': 'Renewable',
  'Lost Item Fine': 'No Lost Item Fine',
  'Lost Item Replacement Fee': '50.00 Lost Item Replacement Fee',
  'Lost Item Replacement Fee Refund Ratio': '100 Percent Lost Item Refund',
  'Maximum Fine': '50.00 Maximum Fine',
  'Maximum Period For Overdue Block': 'No Maximum Block Period',
  'Maximum Renewal Period': '56 Exact Days Maximum Renewal Period (Fifty six days)',
  'Output': 'Monthly Loan TOU',
  'Overdue Fine': '.25 All Days Overdue Fine',
  'Overdue Notification Fine Type 1': 'No Overdue Fine',
  'Overdue Notification Fine Type 2': 'No Overdue Fine',
  'Overdue Notification Fine Type 3': 'No Overdue Fine',
  'Overdue Notification Fine Type 4': 'No Overdue Fine',
  'Overdue Notification Fine Type 5': 'No Overdue Fine',
  'Parameter': 'User Group Not EqualsProcessing/Library Use',
  'Possible Locations': 'Textbooks',
  'Recall Period': '10 Days Recall Period',
  'Recalled Overdue Fine': 'No Recall Overdue Fine',
  'Reloan Limit': 'No Reloan Limit',
  'Renew Fee': 'No Renewal Fee',
  'Requested Item Due Date': 'No Requested Due Date',
  'RuleName': 'Monthly - Everyone',
  'Time frame when loan renewal is allowed': 'No limit',
  'Unnamed: 0': null,
  'Unnamed: 4': null},
 {'Block When Overdue': 'No block when overdue',
  'Cancelled Recall Due Date': 'Keep due date',
  'Closed Library Due Date Management': 'Move to the end of the next open day',
  'Due Date': '1 Day Due Date',
  'Enabled': 'Active',
  'Fullfilment Unit': 'Overnight',
  'Grace Period': '3 Days Grace Period',
  'Is Loanable': 'Loanable',
  'Is Recallable': 'No Recall',
  'Is Renewable': 'Not Renewable',
  'Lost Item Fine': 'No Lost Item Fine',
  'Lost Item Replacement Fee': '500.00 Lost Item Replacement Fee',
  'Lost Item Replacement Fee Refund Ratio': '100 Percent Lost Item Refund',
  'Maximum Fine': '150.00 Maximum Fine',
  'Maximum Period For Overdue Block': 'No Maximum Block Period',
  'Maximum Renewal Period': 'No Maximimum Renew Period',
  'Output': 'Overnight loans',
  'Overdue Fine': '15.00 Open Hours Overdue Fine (15.00/hr',
  'Overdue Notification Fine Type 1': 'No Overdue Fine',
  'Overdue Notification Fine Type 2': 'No Overdue Fine',
  'Overdue Notification Fine Type 3': 'No Overdue Fine',
  'Overdue Notification Fine Type 4': 'No Overdue Fine',
  'Overdue Notification Fine Type 5': 'No Overdue Fine',
  'Parameter': 'User Group =Undergraduate Student',
  'Possible Locations': 'Media Desk, CJ Laptops',
  'Recall Period': 'No Recall Due Date',
  'Recalled Overdue Fine': 'No Recall Overdue Fine',
  'Reloan Limit': 'No Reloan Limit',
  'Renew Fee': 'No Renewal Fee',
  'Requested Item Due Date': 'No Requested Due Date',
  'RuleName': 'Overnight - Undergraduate',
  'Time frame when loan renewal is allowed': 'No limit',
  'Unnamed: 0': null,
  'Unnamed: 4': null},
 {'Block When Overdue': 'No block when overdue',
  'Cancelled Recall Due Date': 'Keep due date',
  'Closed Library Due Date Management': 'Move to the end of the next open day',
  'Due Date': '1 Day Due Date',
  'Enabled': 'Active',
  'Fullfilment Unit': 'Overnight',
  'Grace Period': '3 Days Grace Period',
  'Is Loanable': 'Loanable',
  'Is Recallable': 'No Recall',
  'Is Renewable': 'Not Renewable',
  'Lost Item Fine': 'No Lost Item Fine',
  'Lost Item Replacement Fee': '500.00 Lost Item Replacement Fee',
  'Lost Item Replacement Fee Refund Ratio': '100 Percent Lost Item Refund',
  'Maximum Fine': '150.00 Maximum Fine',
  'Maximum Period For Overdue Block': 'No Maximum Block Period',
  'Maximum Renewal Period': 'No Maximimum Renew Period',
  'Output': 'Overnight loans',
  'Overdue Fine': '15.00 Open Hours Overdue Fine (15.00/hr',
  'Overdue Notification Fine Type 1': 'No Overdue Fine',
  'Overdue Notification Fine Type 2': 'No Overdue Fine',
  'Overdue Notification Fine Type 3': 'No Overdue Fine',
  'Overdue Notification Fine Type 4': 'No Overdue Fine',
  'Overdue Notification Fine Type 5': 'No Overdue Fine',
  'Parameter': 'User Group =Graduate Student',
  'Possible Locations': 'Media Desk, CJ Laptops',
  'Recall Period': 'No Recall Due Date',
  'Recalled Overdue Fine': 'No Recall Overdue Fine',
  'Reloan Limit': 'No Reloan Limit',
  'Renew Fee': 'No Renewal Fee',
  'Requested Item Due Date': 'No Requested Due Date',
  'RuleName': 'Overnight - Graduate',
  'Time frame when loan renewal is allowed': 'No limit',
  'Unnamed: 0': null,
  'Unnamed: 4': null},
 {'Block When Overdue': 'No block when overdue',
  'Cancelled Recall Due Date': 'Keep due date',
  'Closed Library Due Date Management': 'Move to the end of the next open day',
  'Due Date': '1 Day Due Date',
  'Enabled': 'Active',
  'Fullfilment Unit': 'Overnight',
  'Grace Period': '3 Days Grace Period',
  'Is Loanable': 'Loanable',
  'Is Recallable': 'No Recall',
  'Is Renewable': 'Not Renewable',
  'Lost Item Fine': 'No Lost Item Fine',
  'Lost Item Replacement Fee': '500.00 Lost Item Replacement Fee',
  'Lost Item Replacement Fee Refund Ratio': '100 Percent Lost Item Refund',
  'Maximum Fine': '150.00 Maximum Fine',
  'Maximum Period For Overdue Block': 'No Maximum Block Period',
  'Maximum Renewal Period': 'No Maximimum Renew Period',
  'Output': 'Overnight loans',
  'Overdue Fine': '15.00 Open Hours Overdue Fine (15.00/hr',
  'Overdue Notification Fine Type 1': 'No Overdue Fine',
  'Overdue Notification Fine Type 2': 'No Overdue Fine',
  'Overdue Notification Fine Type 3': 'No Overdue Fine',
  'Overdue Notification Fine Type 4': 'No Overdue Fine',
  'Overdue Notification Fine Type 5': 'No Overdue Fine',
  'Parameter': 'User Group =Doctoral Student',
  'Possible Locations': 'Media Desk, CJ Laptops',
  'Recall Period': 'No Recall Due Date',
  'Recalled Overdue Fine': 'No Recall Overdue Fine',
  'Reloan Limit': 'No Reloan Limit',
  'Renew Fee': 'No Renewal Fee',
  'Requested Item Due Date': 'No Requested Due Date',
  'RuleName': 'Overnight - Doctorial',
  'Time frame when loan renewal is allowed': 'No limit',
  'Unnamed: 0': null,
  'Unnamed: 4': null},
 {'Block When Overdue': 'No block when overdue',
  'Cancelled Recall Due Date': 'Keep due date',
  'Closed Library Due Date Management': 'Move to the end of the next open day',
  'Due Date': '1 Day Due Date',
  'Enabled': 'Active',
  'Fullfilment Unit': 'Overnight',
  'Grace Period': '3 Days Grace Period',
  'Is Loanable': 'Loanable',
  'Is Recallable': 'No Recall',
  'Is Renewable': 'Not Renewable',
  'Lost Item Fine': 'No Lost Item Fine',
  'Lost Item Replacement Fee': '500.00 Lost Item Replacement Fee',
  'Lost Item Replacement Fee Refund Ratio': '100 Percent Lost Item Refund',
  'Maximum Fine': '150.00 Maximum Fine',
  'Maximum Period For Overdue Block': 'No Maximum Block Period',
  'Maximum Renewal Period': 'No Maximimum Renew Period',
  'Output': 'Overnight loans',
  'Overdue Fine': '15.00 Open Hours Overdue Fine (15.00/hr',
  'Overdue Notification Fine Type 1': 'No Overdue Fine',
  'Overdue Notification Fine Type 2': 'No Overdue Fine',
  'Overdue Notification Fine Type 3': 'No Overdue Fine',
  'Overdue Notification Fine Type 4': 'No Overdue Fine',
  'Overdue Notification Fine Type 5': 'No Overdue Fine',
  'Parameter': 'User Group =BMCC Faculty',
  'Possible Locations': 'Media Desk, CJ Laptops',
  'Recall Period': 'No Recall Due Date',
  'Recalled Overdue Fine': 'No Recall Overdue Fine',
  'Reloan Limit': 'No Reloan Limit',
  'Renew Fee': 'No Renewal Fee',
  'Requested Item Due Date': 'No Requested Due Date',
  'RuleName': 'Overnight - Faculty',
  'Time frame when loan renewal is allowed': 'No limit',
  'Unnamed: 0': null,
  'Unnamed: 4': null},
 {'Block When Overdue': 'No block when overdue',
  'Cancelled Recall Due Date': 'Restore to original due date',
  'Closed Library Due Date Management': 'Move Due Time to Upcoming Closing Time',
  'Due Date': 'Semester Loan - Equipment',
  'Enabled': 'Active',
  'Fullfilment Unit': 'Semester',
  'Grace Period': '10 Exact Days Grace Period',
  'Is Loanable': 'Loanable',
  'Is Recallable': 'No Recall',
  'Is Renewable': 'Not Renewable',
  'Lost Item Fine': 'No Lost Item Fine',
  'Lost Item Replacement Fee': '500.00 Lost Item Replacement Fee',
  'Lost Item Replacement Fee Refund Ratio': '100 Percent Lost Item Refund',
  'Maximum Fine': '150.00 Maximum Fine',
  'Maximum Period For Overdue Block': 'No Maximum Block Period',
  'Maximum Renewal Period': '280 Days Maximum Renewal Period',
  'Output': 'Semester Loan - Equipment',
  'Overdue Fine': '15.00 Open Hours Overdue Fine (15.00/hr',
  'Overdue Notification Fine Type 1': 'No Overdue Fine',
  'Overdue Notification Fine Type 2': 'No Overdue Fine',
  'Overdue Notification Fine Type 3': 'No Overdue Fine',
  'Overdue Notification Fine Type 4': 'No Overdue Fine',
  'Overdue Notification Fine Type 5': 'No Overdue Fine',
  'Parameter': null,
  'Possible Locations': 'CUNY Loaner Devices',
  'Recall Period': 'No Recall Due Date',
  'Recalled Overdue Fine': '1.00 All Days Recalled Overdue Fine',
  'Reloan Limit': 'No Reloan Limit',
  'Renew Fee': 'No Renewal Fee',
  'Requested Item Due Date': '56 Days Requested Item Due Date',
  'RuleName': 'Semester Loan - Equipment',
  'Time frame when loan renewal is allowed': 'No limit',
  'Unnamed: 0': null,
  'Unnamed: 4': null}
]

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
