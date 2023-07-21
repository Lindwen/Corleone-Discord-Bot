<br/>
<p align="center">
  <a href="https://github.com/Lindwen/Corleone-Discord-Bot">
    <img src="https://www.vectorlogo.zone/logos/js_discord/js_discord-icon.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Corleone-Discord-Bot</h3>

  <p align="center">
    Un bot discord multi-fonctions en JavaScript
    <br/>
    <br/>
    <a href="https://github.com/Lindwen/Corleone-Discord-Bot/issues">Report Bug</a>
    .
    <a href="https://github.com/Lindwen/Corleone-Discord-Bot/issues">Request Feature</a>
  </p>
</p>

![Contributors](https://img.shields.io/github/contributors/Lindwen/Corleone-Discord-Bot?color=dark-green) ![Forks](https://img.shields.io/github/forks/Lindwen/Corleone-Discord-Bot?style=social) ![Stargazers](https://img.shields.io/github/stars/Lindwen/Corleone-Discord-Bot?style=social) ![Issues](https://img.shields.io/github/issues/Lindwen/Corleone-Discord-Bot) ![License](https://img.shields.io/github/license/Lindwen/Corleone-Discord-Bot) 

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [About The Project](#about-the-project)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Contributing](#contributing)
  - [Creating A Pull Request](#creating-a-pull-request)
- [License](#license)
- [Authors](#authors)
- [Acknowledgements](#acknowledgements)

## About The Project

J'ai créé ce bot dans un but purement privé, mais j'ai choisi de le rendre public pour pouvoir faire profiter le maximum de personnes.

## Built With



* [Javascript](https://developer.mozilla.org/fr/docs/Web/JavaScript)
* [NodeJS](https://nodejs.org/en)
* [discordjs](https://discord.js.org/)
* [yarn](https://yarnpkg.com/)

## Getting Started


### Prerequisites

* npm

```sh
npm install --global yarn
```

### Installation

1. Créer une nouvelle application discord : [https://discord.com/developers/applications](https://discord.com/developers/applications)

2. Cloner le repo

```sh
git clone https://github.com/Lindwen/Corleone-Discord-Bot.git
cd Corleone-Discord-Bo
```

3. Installer les paquets YARN

```sh
yarn install
```

4. Modifier le fichier de configuration

```sh
cp example.config.json config.json
vi config.json
```

```json
{
    "token": "YOUR_BOT_TOKEN_HERE",
    "client_id": "YOUR_CLIENT_ID_HERE",
    "owner_id": "YOUR_ID_HERE",
    "guilds": [
        "YOUR_FIRST_GUILD_ID_HERE",
        "YOUR_SECOND_GUILD_ID_HERE"
    ],
    "status": [
        "dupliquer des 💎",
        "1+1=27 🧠",
        "chercher un ami",
        "feur ?"
    ]
}
```

5. Lancer le bot

5.1. Avec Yarn
```sh
yarn start
```

5.2. Avec Docker
```sh
docker compose up -d --build
```

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.
* If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/Lindwen/Corleone-Discord-Bot/issues/new) to discuss it, or directly create a pull request after you edit the *README.md* file with necessary changes.
* Please make sure you check your spelling and grammar.
* Create individual PR for each suggestion.
* Please also read through the [Code Of Conduct](https://github.com/Lindwen/Corleone-Discord-Bot/blob/main/CODE_OF_CONDUCT.md) before posting your first idea as well.

### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See [LICENSE](https://github.com/Lindwen/Corleone-Discord-Bot/blob/main/LICENSE.md) for more information.

## Authors

* **Lindwen** - *DevOps Student* - [Lindwen](https://github.com/Lindwen) - *Creator*

## Acknowledgements

* [ShaanCoding](https://github.com/ShaanCoding/)
* [Othneil Drew](https://github.com/othneildrew/Best-README-Template)
* [ImgShields](https://shields.io/)
