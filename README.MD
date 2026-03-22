# 🤖 discord-bot-express

Este é um bot desenvolvido para o Discord com o objetivo de responder comandos basicos, e tendo integração com com servidores para monitoramento do bot.

## 🛠️ Tecnologias Utilizadas

**Node.js:** Ambiente de execução para o backend

**Express.js:** Utilizado para criação de uma API REST integrada ao bot

**Discord.js:** Responsável pela comunicação com a API do Discord e gerenciamento do bot

**Typescript.js:** Tipagem estática para maior segurança e manutenção do código
## 📁 Estrutura projeto

Este projeto é organizado em camadas, separando a API (Express), a lógica do bot do Discord e módulos compartilhados.

```bash
discord-bot-express/
│
├── 📄 .env.example
├── 📄 .gitignore
├── 📄 index.ts
├── 📄 package.json
├── 📄 package-lock.json
├── 📄 README.md
├── 📄 tsconfig.json
│
└── src/
    │
    ├── api/
    │   ├── 📄 express.ts
    │   └── routes/
    │       ├── 📄 default.ts
    │       ├── 📄 health.ts
    │       └── 📄 log.ts
    │
    ├── bot/
    │   ├── 📄 discord.ts
    │   │
    │   ├── commands/
    │   │   └── utility/
    │   │       ├── 📄 ajuda.ts
    │   │       ├── 📄 hora.ts
    │   │       ├── 📄 ping.ts
    │   │       ├── 📄 cep.ts
    │   │       ├── 📄 moeda.ts
    │   │       └── 📄 sobre.ts
    │   │
    │   └── deploy/
    │       ├── 📄 deploy-command-build.ts
    │       └── 📄 deploy-command-dev.ts
    │
    └── shared/
        ├── 📄 persistance.ts
        │
        └── types/
            ├── 📄 command.ts
            ├── 📄 commandData.ts
            ├── 📄 Moeda.ts
            ├── 📄 cep.ts
            └── 📄 commandData.ts
```
## 🌐 Instalação

Baixe o repositorio:

```bash
  git clone https://github.com/Manoelrev/discord-bot-express.git
  cd discord-bot-express
```

Instale as dependencias com:

```javascript
  npm i // or npm install
```


## 📌 Como iniciar o projeto

- Para rodar o projeto primeiramente é necessario criar um bot no site [Portal do desenvolvedor do Discord](https://discord.com/developers/applications)

- Crie uma nova aplicação
Clique em "New Application"
Escolha um nome para o seu bot
Clique em "Create"

- Adicione um bot à aplicação
Vá até a aba "Bot"
Clique em "Add Bot"
Confirme a criação


#### ⚙️ Variaveis de ambiente

Para executar o projeto corretamente, é necessário configurar as variáveis de ambiente utilizando um arquivo .env

na raiz do projeto crie um arquivo chamado:

```bash
  .env # nome do arquivo
```
 ⚙️ Exemplo de configuração
```bash
  # Porta API Express (opcional) 
  PORT=
  
  # Token do bot do discord
  DISCORD_TOKEN=

  # ID da sua aplicação
  CLIENTE_ID=

  # ID do servidor de teste
  GUILD_ID=
``` 

- DISCORD_TOKEN: Abra sua aplicação em [Portal do desenvolvedor do Discord](https://discord.com/developers/applications) vá para pagina de bot e copie seu token

- CLIENTE_ID: ID do cliente do seu aplicativo ([Portal do desenvolvedor do Discord](https://discord.com/developers/applications) > "Informações gerais" > ID do aplicativo)

- GUILD_ID: ID do seu servidor de desenvolvimento ([Ative o modo de desenvolvedor](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID) > Clique com o botão direito do mouse no título do servidor > "Copiar ID")



### ⬇️ Rodando a aplicação 

Após a configuração do .env você pode executar a aplicação com os comandos

```bash
  # Rodar aplicação localmente
  
  npm run dev

  # Exportar comandos para o servidor de teste do discord

  npm run deploy:dev

  # Exportar comandos para todos os servidores do discord

  npm run deploy:bluid
```
## 📝 Exemplos comandos

#### Comandos Discord
```javascript
    ⚙️ /ajuda
    lista os comandos disponiveis
    ⚙️ /ping
    responde com pong!
    ⚙️ /hora
    retorna data e hora atual
    ⚙️ /sobre
    mostra informações do projeto
```
#### Rotas Express

```
    GET /
    GET /health
    GET /logs
```

## 🖼️ Imagens & Screenshots

- Discord
![Comando ajuda](https://github.com/user-attachments/assets/64ed45c0-e5c4-433f-b4fd-e6ad46701248)

![Comando moeda](https://github.com/user-attachments/assets/e888ff8d-2864-4979-bf6e-78ba2ace3095)

![Comando sobre](https://github.com/user-attachments/assets/c0376940-8c96-4292-b88b-0f117c6fb757)

- Express

![Pagina Health](https://github.com/user-attachments/assets/288de971-1fdb-497f-b43e-540e5cf42dcb)

![Pagina logs](https://github.com/user-attachments/assets/6739007e-10fd-4b9b-be1b-666dac1ccbf0)
