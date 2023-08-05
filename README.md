# EasyScrum-frontend
Frontend SPA em  react do projeto EasyScrum, um app de gestão de projetos ágeis

## Rodando o projeto
Instalação das dependências
```sh
npm install
```

Iniciando o servidor de desenvolvimento
```sh
npm run dev
```

**OBS:** O app utiliza a configuração de contida em variáveis de ambiente para determinar qual o endereço do backend
para as chamadas à API. É necessário criar um arquivo .env na raíz do projeto com `VITE_BACKEND_URL` e colocar o endereço
lá.

Ex:

```sh
echo "VITE_BACKEDN_URL=http://localhost:8080" > .env
```


## Documentação

Inicialização StoryBook

```sh
npm run storybook
```
