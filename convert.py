import json
import pandas
from pprint import pprint

# load data
excel_data_df = pandas.read_excel('combined.xlsx', sheet_name='Sheet1')
json_string = excel_data_df.to_json(orient='records')
json_list = json.loads(json_string)

output = []

# separate out "Possible Locations" and create an entry for each
for field in json_list:
    pl = field["Possible Locations"].split(",")
    if len(pl) > 1:
        for location in pl:

            # create field "PossibleLocations" and remove "Possible Locations"
            field["PossibleLocations"] = location
            try:
                field.pop("Possible Locations")
            except KeyError:
                pass
            output.append(field)

    else:
        # rename field to "PossibleLocations"
        field["PossibleLocations"] = field.pop("Possible Locations")
        output.append(field)

# write data to file
with open('expirmental_data.json', 'w') as json_file:
    json.dump(output, json_file)
