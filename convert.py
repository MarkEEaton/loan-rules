import json
import pandas
from pprint import pprint

# load data
excel_data_df = pandas.read_excel('combined.xlsx', sheet_name='Sheet1')
json_string = excel_data_df.to_json(orient='records')
json_list = json.loads(json_string)

output = []

for field in json_list:
    pl = field["Possible Locations"].split(",")
    if len(pl) == 1:
        output.append(field)

pprint(output)

# write data to file
with open('expirmental_data.json', 'w') as json_file:
    json.dump(output, json_file)
