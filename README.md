# PokedexReactNative

Um aplicativo móvel desenvolvido com React Native que simula uma Pokédex, permitindo aos usuários visualizar uma lista de Pokémon, detalhes individuais e gerenciar seus favoritos.

## Visão Geral do Projeto

Este projeto é uma Pokedex construída utilizando React Native, focada em oferecer uma experiência de usuário fluida e intuitiva. Ele permite aos usuários:

* Visualizar uma lista de Pokémon.
* Acessar detalhes específicos de cada Pokémon (estatísticas, evoluções, etc.).
* Marcar Pokémon como favoritos para acesso rápido.
* Suporte a temas claro/escuro (light/dark theme).
* Tela inicial personalizável.
* Configurações dinâmicas.

## Tecnologias Utilizadas

* **React Native:** Framework para construção de aplicativos móveis nativos usando JavaScript e React.
* **TypeScript:** Superset do JavaScript que adiciona tipagem estática, melhorando a robustez e manutenibilidade do código.
* **APIs:** Integração com APIs de Pokémon (provavelmente a PokéAPI) para buscar os dados.

## Funcionalidades

* **Listagem de Pokémon:** Exibe uma lista de Pokémon, com opção de filtragem.
* **Detalhes do Pokémon:** Ao selecionar um Pokémon da lista, o usuário pode ver informações detalhadas como tipo, habilidades, estatísticas, cadeia de evolução, e mais.
* **Sistema de Favoritos:** Permite adicionar e remover Pokémon de uma lista de favoritos.
* **Navegação Intuitiva:** Estrutura de navegação clara entre as telas de lista, detalhes e favoritos.
* **Temas:** Alternância entre modos claro e escuro.

## Como Instalar e Rodar o Projeto

Para configurar e executar o projeto em seu ambiente local, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

* Node.js e npm (ou Yarn)
* Git
* React Native CLI ou Expo CLI (dependendo da configuração do projeto)
* Android Studio (para emulador Android) ou Xcode (para simulador iOS)

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/jtancon/PokedexReactNative.git](https://github.com/jtancon/PokedexReactNative.git)
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd PokedexReactNative
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    # ou se estiver usando Yarn
    # yarn install
    ```

### Executando o Aplicativo

Para rodar o aplicativo em um emulador/simulador ou dispositivo físico:

* **Para Android:**
    ```bash
    npx react-native run-android
    ```
* **Para iOS (macOS apenas):**
    ```bash
    npx react-native run-ios
    ```
    Ou, se você usa o Metro Bundler separadamente:
    ```bash
    npx react-native start
    # Em outra aba do terminal:
    # npx react-native run-android
    # ou
    # npx react-native run-ios
    ```

## Estrutura do Projeto

* `App.tsx`: Componente raiz do aplicativo.
* `src/screens/`: Contém as diferentes telas do aplicativo (PokedexList, PokemonDetails, Favorites).
* `src/contexts/`: Gerenciamento de estado global, como o contexto de favoritos (`FavoritesContext.js`).
* `src/components/`: Componentes reutilizáveis da UI.
* `README.md`: Este arquivo.

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões, melhorias ou encontrar algum bug, sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*.

## Licença

Este projeto está licenciado sob a licença MIT.
