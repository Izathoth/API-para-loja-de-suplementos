## API de Suplementos de Academia

**Este repositório é para uma API RESTful que gerencia uma loja de suplementos de academia. Desenvolvida com Node.js e Express, a API oferece funcionalidades completas para operações CRUD (Criar, Ler, Atualizar e Excluir) em suplementos.**

### Endpoints

- **`GET /api/supplements`**: Retorna uma lista de todos os suplementos disponíveis.
- **`GET /api/supplements/:id`**: Obtém detalhes de um suplemento específico pelo `id`.
- **`POST /api/supplements`**: Adiciona um novo suplemento à loja. Requer `nome`, `marca` e `preço` no corpo da requisição.
- **`PUT /api/supplements/:id`**: Atualiza um suplemento existente pelo `id`. Aceita campos opcionais `nome`, `marca` e `preço`.
- **`DELETE /api/supplements/:id`**: Remove um suplemento da loja pelo `id`.

## Cada suplemento possui os seguintes campos:
- `id`: Identificador único.
- `nome`: Nome do suplemento.
- `marca`: Marca do suplemento.
- `preço`: Preço do suplemento (em reais).
![api](https://cdn-icons-png.flaticon.com/512/2164/2164832.png)
