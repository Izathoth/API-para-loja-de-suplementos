// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// banco de dados com um array
let supplements = [
    { id: 1, nome: 'Whey Protein', marca: 'Marca A', preco: 150 },
    { id: 2, nome: 'Creatina', marca: 'Marca B', preco: 120 },
    { id: 3, nome: 'BCAA', marca: 'Marca C', preco: 90 },
    { id: 4, nome: 'Glutamina', marca: 'Marca D', preco: 110 },
    { id: 5, nome: 'Pré-treino', marca: 'Marca E', preco: 80 },
    { id: 6, nome: 'Caseína', marca: 'Marca F', preco: 140 },
    { id: 7, nome: 'Multivitamínico', marca: 'Marca G', preco: 60 },
    { id: 8, nome: 'Óleo de Peixe', marca: 'Marca H', preco: 70 },
    { id: 9, nome: 'Arginina', marca: 'Marca I', preco: 85 },
    { id: 10, nome: 'Beta-Alanina', marca: 'Marca J', preco: 95 },
    { id: 11, nome: 'Proteína Vegana', marca: 'Marca K', preco: 160 },
    { id: 12, nome: 'Tribulus Terrestris', marca: 'Marca L', preco: 75 },
    { id: 13, nome: 'HMB', marca: 'Marca M', preco: 130 },
    { id: 14, nome: 'L-Carnitina', marca: 'Marca N', preco: 100 },
    { id: 15, nome: 'ZMA', marca: 'Marca O', preco: 50 },
    { id: 16, nome: 'EAA', marca: 'Marca P', preco: 120 },
    { id: 17, nome: 'Glutamina + BCAA', marca: 'Marca Q', preco: 140 },
    { id: 18, nome: 'Whey Isolado', marca: 'Marca R', preco: 180 },
    { id: 19, nome: 'Proteína de Arroz', marca: 'Marca S', preco: 155 },
    { id: 20, nome: 'Dextrose', marca: 'Marca T', preco: 65 },
    { id: 21, nome: 'Maltodextrina', marca: 'Marca U', preco: 60 },
    { id: 22, nome: 'Pós-treino', marca: 'Marca V', preco: 85 },
    { id: 23, nome: 'Inositol', marca: 'Marca W', preco: 70 },
    { id: 24, nome: 'Colágeno Hidrolisado', marca: 'Marca X', preco: 140 },
    { id: 25, nome: 'Maca Peruana', marca: 'Marca Y', preco: 55 }
];

// Middleware
app.use(bodyParser.json());

// Listar todos os suplementos
app.get('/api/supplements', (req, res) => {
    res.json(supplements);
});

// Obter detalhes de um suplemento específico
app.get('/api/supplements/:id', (req, res) => {
    const supplement = supplements.find(s => s.id === parseInt(req.params.id));
    if (supplement) {
        res.json(supplement);
    } else {
        res.status(404).send('Suplemento não encontrado');
    }
});

// Adicionar um novo suplemento
app.post('/api/supplements', (req, res) => {
    const newSupplement = {
        id: supplements.length + 1,
        nome: req.body.nome,
        marca: req.body.marca,
        preco: req.body.preco
    };
    supplements.push(newSupplement);
    res.status(201).json(newSupplement);
});

// Atualizar um suplemento existente
app.put('/api/supplements/:id', (req, res) => {
    const supplement = supplements.find(s => s.id === parseInt(req.params.id));
    if (supplement) {
        supplement.nome = req.body.nome || supplement.nome;
        supplement.marca = req.body.marca || supplement.marca;
        supplement.preco = req.body.preco || supplement.preco;
        res.json(supplement);
    } else {
        res.status(404).send('Suplemento não encontrado');
    }
});

// Excluir um suplemento
app.delete('/api/supplements/:id', (req, res) => {
    const index = supplements.findIndex(s => s.id === parseInt(req.params.id));
    if (index !== -1) {
        supplements.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Suplemento não encontrado');
    }
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});