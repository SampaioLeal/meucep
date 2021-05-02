# MeuCEP

Aplicação que consiste na visualização de informações de CEPs brasileiros e de histórico de CEPs recém-pesquisados.

## Instalação

A princípio deve-se instalar os pacotes utilizando `npm` ou `yarn`:

```
npm install
```

ou

```
yarn install
```

Após a instalação dos pacotes é necessário configurar as variáveis de ambiente para a inicialização da aplicação React.
As variáveis utilizadas podem ser encontradas no arquivo `.env.example` na raiz do projeto.

`.env.example`:

```
REACT_APP_APIURL=http://localhost:3001
```

## Inicialização

Para inicializar o servidor de desenvolvimento basta rodar o script `start`:

```
yarn start
```

ou

```
npm run start
```

_Para gerar um build para produção deve-se executar o script `build`._

## Recursos

- Homepage com pesquisa de CEP e ilustração
- Tela de detalhes do CEP com barra de pesquisa
- Página com os CEPs recém-pesquisados e ilustração para listagem vazia
- Design responsivo by Chakra UI
- Página 404 com ilustração
