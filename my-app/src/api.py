import requests
import json

# data = json.load(open('data_2.json', 'r'))

# for x in data:
#    print(x['id'])
#    paper_id = x['relatedPaper']
#    try:
#        r = requests.get('https://api.semanticscholar.org/graph/v1/paper/URL:' + paper_id + '/citations',
#                         params={'limit': '1000'})
#        print("Number of Citations ", len(r.json()['data']))
#        print("---------------------------------")
#    except:
#        print("Status Code: ", r.status_code)
#        print("---------------------------------")

with open("data_sorted.json", 'r+', encoding='utf-8') as f:
    data = json.load(f)
    print(data)
    for x in data:
        print(x['id'])
        paper_id = x['relatedPaper']
        try:
            r = requests.get('https://api.semanticscholar.org/graph/v1/paper/URL:' + paper_id + '/citations',
                             params={'limit': '1000'})
            print("Number of Citations ", len(r.json()['data']))
            try:
                x["Citations"].append("100")
                print("Check Up")
                print(type(x))
            except:
                print("Not working")
            print("---------------------------------")
        except:
            print("Status Code: ", r.status_code)
            print("---------------------------------")
