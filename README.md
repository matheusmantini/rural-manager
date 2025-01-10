<h1 align="center"> Projeto Rural Manager By Brain Ag </h1>

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)
![Styled Components](https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![JEST](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)
![REDUX](https://img.shields.io/badge/-Redux-black?style=flat-square&logo=redux)

<p align="center"><i>Status do Projeto</i>: <b>Concluido</b></p> 
    
## Funcionalidades

- **Página de Dashboard (/)**

  - [x] Total de fazendas cadastradas (quantidade).
  - [x] Total de hectares registrados (área total).
  - [x] Gráficos de pizza:
    - Por estado.
    - Por cultura plantada.
    - Por uso do solo (área agricultável e vegetação).

- **Página dos Produtores (/produtor)**

  - [x] Lista todos os produtores cadastrados com paginação;
  - [x] Permite editar e deletar produtores já cadastrados, além de adicionar novos;
    - Valida o CPF ou CNPJ fornecido pelo usuário.
    - Garante que a soma das áreas agricultável e de vegetação não ultrapasse a área total da fazenda nem que a área total seja igual ou menor que 0.
    - Permite o registro de várias propriedades do produtor, além das culturas plantadas por cada uma delas.
    - O produtor pode estar associado a 0, 1 ou mais propriedades rurais.
    - Uma propriedade rural pode ter 0, 1 ou mais culturas plantadas por safra.

## Deploy da Aplicação na vercel

> https://rural-manager.vercel.app/

## Como rodar a aplicação:

1. No terminal, clone o projeto:

   > git clone https://github.com/matheusmantini/rural-manager.git

2. Entre na pasta do projeto:

   > cd rural-manager

3. Instale as dependências:

   > npm install

4. Execute a aplicação:

   > npm run dev

5. Pronto, agora é possível acessar a aplicação a partir da rota http://localhost:5173/

## Desenvolvedor

| [<img src="https://avatars.githubusercontent.com/u/71985890?v=4" width=115 > <br> <sub> Matheus Mantini </sub>](https://www.linkedin.com/in/matheusmantini/) |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------: |
