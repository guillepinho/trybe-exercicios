import json
import csv

with open("arquivo.json") as file:
    books = json.load(file)
    totalCount = len(books)

    grouped_categories = {}
    for obj in books:
        for category in obj["categories"]:
            if category not in grouped_categories:
                grouped_categories[category] = 0
            grouped_categories[category] += 1

    file.close()

with open("new-file.csv", "w", encoding="utf-8") as file:
    headers = ["categoria", "porcentagem"]

    writer = csv.DictWriter(file, fieldnames=headers)
    writer.writeheader()

    for category, number in grouped_categories.items():
        percentual = round((number / totalCount) * 100, 2)
        row = {"categoria": category, "porcentagem": f"{percentual}%"}
        writer.writerow(row)

    file.close()
