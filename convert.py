import json
import pandas
from pprint import pprint

# load data
excel_data_df = pandas.read_excel("combined.xlsx", sheet_name="Sheet1")
json_string = excel_data_df.to_json(orient="records")
json_list = json.loads(json_string)

output = []

# separate out "Possible Locations" and create an entry for each
for field in json_list:
    pl = field["Possible Locations"].split(",")
    for location in pl:
        modified_field = field.copy()
        modified_field["PossibleLocations"] = location.strip()
        output.append(modified_field)

# remove the old Possible Locations field
for field in output:
    field.pop("Possible Locations")

# remove duplicates in list
output = [dict(t) for t in {tuple(d.items()) for d in output}]

pprint(output)

# write data to file
with open("static/data.json", "w") as json_file:
    json.dump(output, json_file, indent=4)
