import json
import pandas

excel_data_df = pandas.read_excel('combined.xlsx', sheet_name='Sheet1')
thisisjson = excel_data_df.to_json(orient='records')
thisisjson_dict = json.loads(thisisjson)

with open('data.json', 'w') as json_file:
    json.dump(thisisjson_dict, json_file)
