import json
import requests
from tqdm import tqdm

# Read datasets from data.json file
with open("data.json", "r") as f:
    datasets = json.load(f)  # [:10]  # only load 10 papers


def fetch_paper_info(url):
    response = requests.get(
        f"https://api.semanticscholar.org/graph/v1/paper/{url}?fields=title,year,authors,venue,journal"
    )
    data = response.json()
    # print(data)
    return data


def generate_bibtex_entry(dataset):
    if "relatedPaper" in dataset:
        related_paper = dataset["relatedPaper"]
        if related_paper.endswith(".pdf"):
            related_paper = related_paper.replace("/pdf/", "/abs/").replace(".pdf", "")
        if "arxiv.org" in related_paper:
            paper_info = fetch_paper_info(f"ARXIV:{related_paper.split('/')[-1]}")
        elif "DOI" in dataset:
            paper_info = fetch_paper_info(f"DOI:{dataset['DOI']}")
        else:
            return None
    else:
        return None

    # Extract author names
    authors = " and ".join(
        [f"{author['name'].split(' ')[-1]}, {author['name'].split(' ')[0]}" for author in paper_info.get("authors", [])]
    )

    # Extract title
    title = paper_info.get("title", "")

    entry_type = "inProceedings"

    # Extract publication information
    venue = paper_info.get("venue", "")
    journal = paper_info.get("journal")
    journal_name = ""
    if journal:
        journal_name = journal.get("name")
        if journal_name == None:
            journal_name = ""
        else:
            entry_type = "article"

    # arXiv as journal
    if (venue == "" or venue == "arXiv.org") and (journal_name == "" or journal_name.lower() == "arxiv"):
        if "arxiv.org" in dataset["relatedPaper"]:
            arxiv_id = dataset["relatedPaper"].split("/")[-1]
            journal_name = f"arXiv:{arxiv_id}"
            entry_type = "article"

    # Generate BibTeX entry
    bibtex_entry = f"@{entry_type}{{{dataset['id'].replace(' ', '').replace('^', '')},\n"
    bibtex_entry += f"  author = {{{authors}}},\n"
    bibtex_entry += f"  title = {{{{{title}}}}},\n"

    if journal_name != "" and journal_name.lower() != "arxiv":
        if isinstance(journal_name, str):
            bibtex_entry += f"  journal = {{{journal_name}}},\n"
    else:
        bibtex_entry += f"  booktitle = {{{venue}}},\n"

    year = paper_info.get("year", "")
    bibtex_entry += f"  year = {{{year}}},\n"

    bibtex_entry += "}"
    return bibtex_entry


bibtex_entries = []

with tqdm(total=len(datasets), desc="Fetching BibTeX Entries") as pbar:
    for dataset in datasets:
        bibtex_entry = generate_bibtex_entry(dataset)
        if bibtex_entry:
            bibtex_entries.append(bibtex_entry)
        pbar.update(1)

with open("datasets.bib", "w") as f:
    f.write("\n".join(bibtex_entries))

with open("datasets.tex", "w") as f:
    f.write("\\section{Datasets}\n")
    f.write("\\label{datasets}\n")
    f.write("List of {} datasets from the domain of autonomous driving:\n".format(len(datasets)))
    f.write("\\begin{itemize}\n")

    # Loop over datasets
    for dataset in datasets:
        # Write the \cite{} command for each dataset
        f.write(
            f"\\item {dataset['id'].replace('^', '-')}~\\cite{{{dataset['id'].replace(' ', '').replace('^', '')}}}\n"
        )

    f.write("\\end{itemize}\n")
