import json
import requests
import warnings

file_name = "data.json"
file_save = "data_sorted.json"

# convert json into python dictionary
with open(file_name, "r") as ds:
    data = json.load(ds)

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


# Sort List of Dictionaries by the number of citations in descending order
data = sorted(data, key=lambda k: k.get('citationCount'), reverse=True)

# Overwrite List
with open(file_save, "w") as of:
    json.dump(data, fp=of, ensure_ascii=False, indent=4)
