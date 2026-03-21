
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
    │   │       └── 📄 sobre.ts
    │   │
    │   └── deploy/
    │       ├── 📄 deploy-command-build.ts
    │       └── 📄 deploy-command-dev.ts
    │
    └── shared/
        └── types/
            ├── 📄 command.ts
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

. Para rodar o projeto primeiramente é necessario criar um bot no site [Portal do desenvolvedor do Discord](https://discord.com/developers/applications)

. Crie uma nova aplicação
Clique em "New Application"
Escolha um nome para o seu bot
Clique em "Create"

. Adicione um bot à aplicação
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
    GET http://localhost:3000/
    GET http://localhost:3000/health
    GET http://localhost:3000/logs
```

## 🖼️ Imagens & Screenshots


