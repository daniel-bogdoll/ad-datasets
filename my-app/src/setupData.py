import json
import requests
import warnings

file_name = "my-app/src/data.json"
file_save = "my-app/src/data_sorted.json"
incomplete = []
partiallyComplete = []
complete = []


def get_simple_keys(datasets):
    result = []
    for entry in datasets:
        for key in entry.keys():
            if type(entry[key]) != dict:
                result.append(key)
            else:
                result += get_simple_keys(entry[key])
        return result


# convert json into python dictionary
with open(file_name, "r") as ds:
    data = json.load(ds)


keys = (get_simple_keys(data))


# get number of citations for all datasets
for x in data:
    try:
        paper_id = x['relatedPaper']
        r = requests.get('https://api.semanticscholar.org/graph/v1/paper/URL:' + paper_id,
                         params={'fields': 'citationCount'})
        # Add the number of citations to the respective dictionary
        x.update({'citationCount': r.json()['citationCount']})
    except:
        # Use paper DOI instead
        try:
            paper_doi = x['DOI']
            r = requests.get('https://api.semanticscholar.org/graph/v1/paper/DOI:' + paper_doi,
                                 params={'fields': 'citationCount'})
            # Add the number of citations to the respective dictionary
            x.update({'citationCount': r.json()['citationCount']})
        except:
            # If the request failed, citationCount is set to 0
            x.update({'citationCount': 0})
            warnings.warn(x["id"])

    for key in keys:
        # check if dataset has been provided with every property
        if key not in x and key is not "DOI":
            if key == "id" or key == "href":
                incomplete.append(x['id'])
            else:
                partiallyComplete.append(x['id'])
                # if they aren't
        # additionally check that property hasn't been provided with an empty value either
        else:
            if key == "id" or key == "href":
                if x[key] is None:
                    incomplete.append(x['id'])
            else:
                if x[key] is None:
                    partiallyComplete.append(x['id'])
                else:
                    complete.append(x['id'])
    # Check that dataset has either arxiv link or DOI
    try:
        if "arxiv" not in x['href']:
            if "DOI" not in x:
                incomplete.append(x['id'])
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


# Sort List of Dictionaries by the number of citations in descending order
data = sorted(data, key=lambda k: k.get('citationCount'), reverse=True)

# Overwrite List
with open(file_save, "w") as of:
    json.dump(data, fp=of, ensure_ascii=False, indent=4)
