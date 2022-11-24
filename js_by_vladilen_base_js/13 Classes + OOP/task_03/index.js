class Dictionary {
    constructor(name) {
        this.name = name;
        this.words = {};
    }

    add(word, description) {
        if (!this.words.hasOwnProperty(word)) {
            this.words[word] = {
                "word": word,
                "description": description
            };
        }
    }

    remove(word) {
        if (this.words.hasOwnProperty(word)) {
            delete this.words[word];
        }
    }

    get(word) {
        if (this.words.hasOwnProperty(word)) {
            return this.words[word];
        } else {
            console.log("No such element");
        }
    }

    showAllWords() {
        console.log(this.words)
    }
}

const dictionary = new Dictionary('Толковый словарь');
dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
dictionary.remove('JavaScript');
dictionary.showAllWords();
// Веб-разработчик - Человек, который создает новые
// сервисы и сайты или поддерживает и дополняет существующие