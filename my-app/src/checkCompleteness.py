import json

file_name = "data.json"
file_save = "data_sorted.json"
incomplete = []
partiallyComplete = []
complete = []


def get_simple_keys(data):
    result = []
    for entry in data:
        for key in entry.keys():
            if type(entry[key]) != dict:
                result.append(key)
            else:
                result += get_simple_keys(entry[key])
        return result


with open(file_name, "r") as ds:
    data = json.load(ds)

keys = (get_simple_keys(data))

for entry in data:
    # Iterate through properties
    for key in keys:
        # check if dataset has been provided with every property
        if key not in entry and key is not "DOI":
            if key == "id" or key == "href":
                incomplete.append(entry['id'])
            else:
                partiallyComplete.append(entry['id'])
                # if they aren't
        # additionally check that property hasn't been provided with an empty value either
        else:
            if key == "id" or key == "href":
                if entry[key] is None:
                    incomplete.append(entry['id'])
            else:
                if entry[key] is None:
                    partiallyComplete.append(entry['id'])
                else:
                    complete.append(entry['id'])
    # Check that dataset has either arxiv link or DOI
    try:
        if "arxiv" not in entry['href']:
            if "DOI" not in entry:
                incomplete.append(entry['id'])
    except Exception as e:
        print(e)

# remove duplicate entries from lists
incomplete = list(dict.fromkeys(incomplete))
partiallyComplete = list(dict.fromkeys(partiallyComplete))
complete = list(dict.fromkeys(complete))

# check that datasets aren't contained in 'more restrictive' list already
partiallyComplete = [i for i in partiallyComplete if i not in incomplete]
complete = [i for i in complete if i not in incomplete]
complete = [i for i in complete if i not in partiallyComplete]


for entry in data:
    if entry['id'] in incomplete:
        entry.update({'completionStatus': "incomplete"})
    elif entry['id'] in partiallyComplete:
        entry.update({'completionStatus': "partially Complete"})
    elif entry['id'] in complete:
        entry.update({'completionStatus': "complete"})

with open(file_save, "w") as of:
    json.dump(data, fp=of, ensure_ascii=False, indent=4)


