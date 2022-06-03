
# ⚛️ React Native: Primeira tela para o App MatrizKIDS

Essa é a aplicação do Fábio Mori após concluir o projeto do curso **Começando do Zero** da formação em **React Native** na [Alura](https://www.alura.com.br/).

## 📱 Projeto

Neste projeto foi aplicado todo aprendizado para fazer uma tela relacionada ao jogo warX para o aplicativo do MatrizKIDS, uma edtech que ensina crianças a programarem através do Scratch

<img src="https://user-images.githubusercontent.com/101336111/171656025-318c2b4f-5218-4b16-b1bc-127af5a2dcea.png" width="300" height="600">
<img src="https://user-images.githubusercontent.com/101336111/171656038-6ddc3205-9082-4f13-b3b5-23a5b0329a84.png" width="300" height="600">


## 🧑‍💻 Técnicas e Tecnologias

As técnicas e tecnologias ensinadas pela [Alura](https://www.alura.com.br/) no projeto são:

- `Expo`: tecnologia para simplificar o ambiente de desenvolvimento
- `Componentes React Native`: componentes já existentes básicos da tecnologia para compor a tela
  - `Text`: componente para exibir textos
  - `View`: container para blocos de componentes
  - `ScrollView`: container para blocos de componentes com barra de rolagem
  - `Image`: componente para exibir imagens
  - `TouchableOpacity`: componente para criar áreas clicáveis
- `Componentes customizados`: criação e utilização de componentes customizados
- `Suporte a telas`: não permitir que conteúdos estejam sob a *StatusBar* (barra superior nativa) ou barra de gestos do iPhone
- `Expo Google Fonts`: suporte a fontes do google via Expo
- `StyleSheet`: estilização básica de componentes
- `Dimensions`: captura de dados das dimensões da tela

## 📲 O aprendizado do aluno Fábio Mori
### Indrodução da história.

O Expo é um *framework* e uma plataforma para aplicações React universais. É um conjunto de ferramentas e serviços construídos em torno de plataformas nativas de React Native que ajudam você a desenvolver, construir e implantar rapidamente em aplicativos iOs, Android e web a partir da mesma base de código Java Script e Type Script.

A diferença entre React Native e Expo (utilizado neste projeto), já que o segundo não necessita da instalação do ambiente Java com Android Studio ou Xcode, pois ele é enviado diretamente ao aplicativo do Expo instalado no celular que já inclui os códigos nativos necessários. A desvantagem da utilização do Expo é que existem funcionalidades no React Native que ainda não são suportadas no Expo, além dos aplicativos ocuparem pouco mais de espaço na memória do celular do que aplicações nativas com o React Native. Porém, como a configuração e desenvolvimento com o Expo é mais simples, é uma ótima opção para quem está começando a aprender essa tecnologia, assim como eu, além de poder ser um melhor custo benefício em algumas aplicações também.

Partindo para o desenvolvimento, instalei e configurei o ambiente de programação para criar a aplicação em **React Native**. O software utilizado para programar foi o **Visual Code** e utilizei o **Android Studio** como emulador durante o desenvolvimento, assim como aprendi a utilizar o próprio aplicativo para mobile **Expo Go** como emulador também.  

Segui todos os passos explicados durante as aulas do curso **React Native: criando um app** da [Alura](https://www.alura.com.br/) e desenvolvi esta aplicação da forma como foi instruído pela @nataliakt. Após a conclusão do curso apliquei o mesmo programa, fazendo as alterações necessárias e aplicando o aprendizado para o meu objetivo que é criar um aplicativo para um dos produtos minha edtech, a Escola Matriz, o MatrizKIDS.

### Tags e comandos React Native

- `Button`: componente utilizado para criar um botão na sua aplicação, porém neste projeto utilizamos o componente ``<TouchbleOpacity>``, já que estamos em uma aplicação para Android e iOs com Expo e na documentação para iOs a recomendação é a utilização deste componente ao invés do ``<Button>``.
- `ScrollView`: o React Native não faz o scroll automático, ou seja, a função de rolar a tela do celular para continuar visualizando a página. Para fazer isso utilizamos a tag ``<ScrollView></ScrollView>``.
- `FlatList`: inicialmente aprendemos a utilizar a função ``.map`` para otimizar uma lista, mas no React Native ele não é o mais recomendado. Desta forma o componente ``<Flatlist>`` foi utilizado para a criação das listas que estão na tela do aplicativo. Com este componente foi preciso refatorar a tela para que o componente principal seja a ``<Flatlist>`` e adicionar o *Header* e *Footer*, que representam os elementos acima e abaixo da lista. Algo interessante a ser apresentado é que o ``.map`` é quase que a mesma coisa que copiar e colar os elementos manualmente na questão do primeiro carregamento, e, mesmo usando o ``key``, todos os elementos serão exibidos na tela de uma vez, podendo causar travamentos. 
- `StyleSheet`: é o componente que utilizamos para criar e parametrizar todos os estilos de textos, botões e imagens que podemos observar no aplicativo.

### Outras coisas importantes

- **Reutilizar componentes:** uma técnica muito importante em programação, seguindo os conceitos de programação modular. O objetivo é identificar padrões de componentes que são utilizados de forma repetitiva durante o projeto. Por exemplo, criamos a tag ``<Botao>``, que representa o modelo personalizado de um botão neste projeto. Como esta função é muito comum e podemos precisar dela em outras telas durante o projeto, faz mais sentido desenvolver está funcionalidade como uma função separada e importá-la ao nosso código toda vez que for preciso. Desta forma não precisamos escrever novamente todo o código desta aplicação toda vez que vamos utilizar um botão no projeto.
- **Desconstruir objetos:** conseguimos remover a camada externa dos objetos para que possamos passar cada parâmetro do objeto como um parâmetro do componente, simplificando a declaração desses parâmetros.
- **O que são mocks:** são funções que podemos utilizar para substituir funções originais. Em programação geralmente são utilizados em testes automatizados como forma de substituir as funções originais para que os dados reais não sejam afetados pelos testes.
- **Organizar textos em um só local:** a organização de um código é fundamental para o trabalho em equipe, principalmente nos dias atuais onde temos cada vez mais um grupo de pessoas trabalho de forma colaborativa dentro de um mesmo projeto. Partindo deste conceito uma das organizações aprendidas aqui é a de colocar todos os textos utilizados na aplicação em um só arquivo dentro do projeto e importá-lo ao código toda vez que for necessário. Além de deixar o código mais limpo, claro e organizado, facilita também que um serviço de tradução, por exemplo, feito por alguém que não conhece de programação, seja mais simples de ser feito já que o tradutor não vai precisar procurar todos os textos dentro do projeto.
- **Criar estilos:** o trabalho de experiência do usuário é muito importante e poderá definir o sucesso de um projeto. Desta forma, com o React Native, podemos alterar muitos parâmetros relacionados ao estilo da nossa aplicação. Cores, margens, tamanho da fonte, bordas, cor de fundo, espaçamento e muitas outras possibilidades que podemos fazer.
- **Usar fonte externa:** além das fontes já disponíveis no React Native, podemos importar fontes externas para utilizarmos na nossa aplicação. O **Google fonts** tem todas as fontes e você pode baixar os arquivos *.ttf* e instalá-los manualmente. Na documentação oficial do Expo é ensinado como fazer isso também. O código que pode ser utilizado é ``expo install expo-font @expo-google-fonts/nome-da-fonte``, após essa instalação é necessário aplicar a fonte no arquivo *App.js* e dentro da função ``App(){}``.
- **Para editar textos ao mesmo tempo:** selecione a palavra e aperte *Ctrl* o *Comand + D*. Toda vez que você apertar este comando ele seleciona o próximo igual, depois aperte a seta para a direita e edite. 

### Conceitos aprendidos

- **API:** Interface de Programação e Aplicação, é um conjunto de padrões que fazem parte de uma interface e permitem a criação de plataformas de maneira mais simples e pratica para desenvolvedores. A partir dela criamos softwares, apps, dentre outras aplicações. Apps para celulares são criados a partir de padrões definidos e disponibilizados pelas APIs de cada sistema operacional, ou seja, ela é um conjunto de normas que possibilita a comunicação entre plataformas através de uma série de padrões e protocolos. 
-  **Arquivos.src:** Código fonte de um programa escrito em uma das muitas linguagens de programação. Pode ser editado com software de programação ou usando um editor de texto básico, além de poder ser compilado em um programa executável usando um compilador de software.
-  **ADB:** Android Debug Bridge, é uma ferramenta de linha de comando versátil que permite a comunicação com um dispositivo. Este comando facilita uma variedade de ações do dispositivo, como instalar e depurar apps, dentre outros.



### ▶️ Rodando o Projeto

Com a pasta do projeto no computador, primeiro instalar as dependências:
```
npm install
```

Em seguida iniciar o projeto:
```
npm start
```
