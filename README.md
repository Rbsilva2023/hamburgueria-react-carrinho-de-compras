## Sobre a entrega

O objetivo desta é implementar um conjunto de funcionalidades e estilização a projeto existente, colocando em prática os conhecimentos aprendidos até aqui.
Iremos acessar a lista de produto desta API e simularemos um carrinho de compras com React.
Além disso, para praticar a estilização, a aplicação deverá ser semelhante a este Figma.

## Instruções
Comece realizando o clone do repositório. Diferente da entrega anterior, novamente, não partiremos da estaca zero, por isso, após o clone execute o npm install para baixar as dependências.

### 1. Estilização
Todos os componentes da aplicação já estão prontos de forma básica, e novamente, utilizaremos o SASS para estilizar este projeto, por isso, o estilo pode ser um excelente ponto de partida. 
Atente-se que, nessa entrega a responsividade vai ser obrigatória, por isso, chegou o momento de você aplicar tudo que aprendeu até agora.

### 2. Trazendo os produtos da API | Busca
Um bom primeiro passo na lógica será utilizar o useEffect para trazer os produtos da API, fique atento, já existe um estado adequado para armazenar os produtos e também já foi feito um map do mesmo.
Com os produtos vindo da API, uma funcionalidade interessante a desenvolver em seguida é a busca, observe que o formulário de busca já captura o que o usuário fornece.

### 3. Gerenciamento do carrinho | Modal
De forma muito semelhante ao gerenciamento de transações na entrega anterior, trabalhe na lógica de adicionar e remover itens do carrinho, bem como imprimir os totais. Fique atento, diferente da entrega anterior, os produtos do carrinho virão da própria lista de produtos fornecida pela API.

Nessa etapa, com o gerenciamento funcionando de forma correta, valerá muito a pena utilizar o useEffect para persistir os dados do carrinho no localStorage.

### 4. Modal
Para o modal, será exigido um comportamento simples de abertura e fechamento, aplique seu conhecimento de condicionais no JSX.

### 5. Desafio - Refine o comportamento do seu modal
Não é obrigatório, mas, caso você consiga, com base no que foi mostrado nos conteúdos extras, aplique os comportamentos de: fechar ao clicar fora e fechar ao clicar na "Esc" em seu modal, de preferência trabalhando com a criação de hooks para cada um destes comportamentos. Você consegue!
