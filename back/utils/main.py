import requests
import json
from bs4 import BeautifulSoup


headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
}

articles = []
urls = []

for i in range (1, 15):

    url = 'https://vgr.by/2025/page/' + str(i)
    def getSoup(url, headers):
        page = requests.get(url, headers=headers)
        return BeautifulSoup(page.content, 'html.parser')


    soup = getSoup(url, headers)
    result = soup.find_all('article')

    for index, i in enumerate(result):
        res = []
        url = []
        img = getSoup(i.find('a', itemprop='url').get('href'), headers)
        res.append('Вечерний Гродно')
        res.append((i.find('h3').text).strip()) 
        text = (i.find('p', class_='edgtf-post-excerpt'))
        if text:
            res.append(text.text.strip())
        else: res.append('Text is not found')
        res.append((i.find('a', itemprop='author').text).strip()) 
        res.append(img.find('a', rel='category tag').text)
        date = i.find('div', class_='edgtf-post-info-date')
        if date:
            res.append(date.find('a').text.strip())
        else:
            res.append('Author is unknown')
        link = i.find('a', itemprop='url')
        if link:
            url.append(link.get('href'))
        else:
            url.append('Link is not found')
        imgLink = img.find('img', class_='wp-post-image')
        if imgLink:
            url.append(imgLink.get('src'))
        else:
            url.append('Image is not found')
        
        articles.append(res)
        urls.append(url)


with open('newsAdd.json', 'w', encoding='utf-8') as jsonfile:
    json.dump(articles, jsonfile, ensure_ascii=False, indent=4)

with open('urlsAdd.json', 'w', encoding='utf-8') as jsonfile:
    json.dump(urls, jsonfile, ensure_ascii=False, indent=4)
