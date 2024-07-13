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
    if len(pl) > 1:
        for location in pl:

            # remove initial spaces
            if location[:1] == " ":
                location = location[1:]

            output.append(field)
            output[-1]["Possible Locations"] = location
    else:
        output.append(field)

# create field "PossibleLocations" and remove "Possible Locations"
for field in output:
    try:
        field["PossibleLocations"] = field.pop("Possible Locations")
        print("match")
    except KeyError:
        print("nomatch")

print(len(output))

# write data to file
with open("static/data.json", "w") as json_file:
    json.dump(output, json_file)
