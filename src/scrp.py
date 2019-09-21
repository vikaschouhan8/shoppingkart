import requests
from bs4 import BeautifulSoup
import json
# url="https://www.w3schools.com/html/default.asp"
url="https://www.amazon.in/b?ie=UTF8&node=6308595031"
req = requests.get(url)
soup = BeautifulSoup(req.content,"html.parser")
items = []
links = []
for el in soup.find_all('span',attrs={'class':'a-color-secondary acs_tile__links__link__text'}):
    items.append(el.get_text().strip("\u\n\t\t\t\t\t"))

for e in soup.find_all('a',attrs={'class':'a-link-normal aok-block a-text-normal'}, href=True):
    links.append(e['href'])

cat_link = dict(zip(items, links))
# print(cat_link)

with open("scrap_amazon_new", mode='w') as fp:
    fp.write(json.dumps(cat_link)) 