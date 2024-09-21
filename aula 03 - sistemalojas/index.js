const express = require("express");

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));


// Rota Principal

app.get('/', (req, res) => {
    const totalProdutos = 1.382;
    const totalVendasMes = 3.439007;
    const totalVendasDia = 58.244; 
    const dataUltimaAtualizacao = new Date().toLocaleString();

    // Constantes Ações Recentes

    const acoesRecentes = [
        { usuario: 'Paula', acao: 'finalizou uma venda', data: '2024-09-20 09:33' },
        { usuario: 'Ayla', acao: 'finalizou uma venda', data: '2024-09-20 09:33' },
        { usuario: 'Diego', acao: 'fez modificações a parte de produtos', data: '2024-09-20 09:33' },
        { usuario: 'Lucas', acao: 'realizou uma entrada ao estoque no produto Guitarra Fender Stratocaster', data: '2024-09-20 09:33' },
        { usuario: 'Matheus', acao: 'finalizou uma venda', data: '2024-09-20 09:32' },
        { usuario: 'Wellington', acao: 'finalizou uma venda', data: '2024-09-20 09:31' },
        { usuario: 'Alan', acao: 'finalizou uma venda', data: '2024-09-20 09:30' },
        { usuario: 'Alan', acao: 'finalizou uma venda', data: '2024-09-20 09:30' },
        { usuario: 'Tiago', acao: 'cadastrou um novo funcionário', data: '2024-09-20 09:30' },
        { usuario: 'Kaique', acao: 'finalizou uma venda', data: '2024-09-20 09:28' },
        { usuario: 'Ariane', acao: 'cadastrou um novo funcionário', data: '2024-09-20 09:28' },
        { usuario: 'Ariane', acao: 'cadastrou um novo funcionário', data: '2024-09-20 09:27' },
        { usuario: 'Simone', acao: 'cadastrou um novo funcionário', data: '2024-09-20 09:25' },
    ];

    // Constantes Vendas Por Dia

    const vendasPorDia = [
        { data: '2024-09-20', quantidadeVendas: 6, total: 58244 },
        { data: '2024-09-19', quantidadeVendas: 36, total: 598353 },
        { data: '2024-09-18', quantidadeVendas: 60, total: 952221 },
        { data: '2024-09-17', quantidadeVendas: 49, total: 621369 },
        { data: '2024-09-16', quantidadeVendas: 54, total: 856251 },
        { data: '2024-09-15', quantidadeVendas: 21, total: 352569 },
    ];

    // Constantes Vendas Mensais

    const vendasMensais = [
        { mes: 'Setembro 2024', quantidade: 212, total: 8.546355 },
        { mes: 'Agosto 2024', quantidade: 551, total: 20.546759 },
        { mes: 'Julho 2024', quantidade: 493, total: 18.725856 },
        { mes: 'Junho 2024', quantidade: 578, total: 21.688367 },
        { mes: 'Maio 2024', quantidade: 412, total: 13.763568 },
        { mes: 'Abril 2024', quantidade: 699, total: 27.465698 },
        { mes: 'Março 2024', quantidade: 512, total: 19.487838 },
        { mes: 'Fevereiro 2024', quantidade: 422, total: 12.654158 },
        { mes: 'Janeiro 2024', quantidade: 478, total: 14.578132 }
    ];

    // Constantes Funcionários

    const funcionarios =[
        { nome: 'Tiago', cargo: 'Dono'},
        { nome: 'Ayla', cargo: 'Dono'},
        { nome: 'Carlos', cargo: 'Gerente'},
        { nome: 'Paula', cargo: 'Gerente'},
        { nome: 'Wellington', cargo: 'Vendedor'},
        { nome: 'Kaique', cargo: 'Vendedor'},
        { nome: 'Alan', cargo: 'Vendedor'},
        { nome: 'Simone', cargo: 'Vendedor'},
        { nome: 'Ariane', cargo: 'Vendedor'},
        { nome: 'Matheus', cargo: 'Vendedor'},
        { nome: 'Juliano', cargo: 'Financeiro'},
        { nome: 'Pablo', cargo: 'Financeiro'},
        { nome: 'Diego', cargo: 'T.I'},
        { nome: 'Larissa', cargo: 'T.I'},
        { nome: 'Pedro', cargo: 'T.I'},
        { nome: 'Lucas', cargo: 'Estoquista'},
        { nome: 'Renan', cargo: 'Estoquista'},
        { nome: 'Henrique', cargo: 'Estoquista'},
        { nome: 'Ricardo', cargo: 'Suporte técnico'},
        { nome: 'João', cargo: 'Suporte técnico'},
        { nome: 'Caio', cargo: 'Suporte técnico'},
        { nome: 'Roberto', cargo: 'Suporte técnico'},
        { nome: 'Gilberto', cargo: 'Suporte técnico'},
        { nome: 'Omine', cargo: 'Suporte técnico'},
    ]

    // Renderizando na página Index

    res.render('index', {
        totalProdutos,
        totalVendasMes,
        totalVendasDia,
        dataUltimaAtualizacao,
        acoesRecentes,
        funcionarios,
        vendasPorDia,
        vendasMensais
    });
});

// Rota Clientes

app.get("/clientes", (req, res) => {

    //Constantes Pedidos

    const pedidos = [
        { nome: "Marcos Ramos", cpf: "990.081.409-69", endereco: "Rua Yoshi Takaki, 300" },
        { nome: "Carol Ayumi", cpf: "657.895.655-73", endereco: "Rua Sete Barras, nº 991" },
        { nome: "Gabriel Azevedo", cpf: "473.884.756-21", endereco: "Rua Presidente Humberto Alencar Castelo Branco, nº 451" },
        { nome: "Julia Hikita", cpf: "136.297.868-04", endereco: "Rua Vitório Cassiano, nº 388" },
        { nome: "Daniel Rodrigues", cpf: "292.493.614-40", endereco: "Rua Prefeito José de Carvalho, nº 678" }
    ];

    //Renderizando Clientes

    res.render('clientes', { pedidos: pedidos });
});

// Rota Clientes

app.get("/produtos", (req, res) => {
    
    // Constantes Categorias
    
    const categorias = {

        // Objetos

        Guitarras: [
            { nome: 'Guitarra Jackson JS22-7', preco: '2.600,00',quantidade: 7, imagem: './imgs/jackson-js22.jpg' },
            { nome: 'Guitarra Fender Stratocaster', preco: '2.100,00',quantidade: 51, imagem: './imgs/strato.png' },
            { nome: 'Guitarra LTD SC-8 Signature Stephen Carpenter', preco: '10.900,00',quantidade: 3, imagem: './imgs/8string.jpg' },
            { nome: 'Guitarra ESP E-II Signature Babymetal', preco: '15.000,00',quantidade: 2, imagem: './imgs/9string.png' },
            { nome: 'Guitarra Queen Stratocaster D137561', preco: '575,00',quantidade: 45, imagem: './imgs/strato-queen.webp'},
            { nome: 'Guitarra Superstrato Tagima TW TG-510', preco: '1.060,00',quantidade: 36, imagem: './imgs/superstrato.webp'},
            { nome: 'Guitarra Tagima Signature Juninho Afram JA-3', preco: '2.003,00',quantidade: 7, imagem: './imgs/juninhoafraim.webp'},
            { nome: 'Guitarra Telecaster Seven St-307', preco: '807,00',quantidade: 52, imagem: './imgs/telecaster.webp'},
            { nome: 'Guitarra Les Paul Michael LP GM750N', preco: '1.649,00',quantidade: 27, imagem: './imgs/lespaul.webp'},
            { nome: 'Guitarra Tagima Stratocaster TW TG-530', preco: '1.014,00',quantidade: 38, imagem: './imgs/tagima.webp'},
            { nome: 'Guitarra Ibanez RG GIO GRG121DX', preco: '2.265,00',quantidade: 21, imagem: './imgs/ibanez.webp'},
            { nome: 'Guitarra 7 Cordas S By Solar', preco: '3.051,00',quantidade: 9, imagem: './imgs/solar.webp'},
            { nome: 'Guitarra Jackson JS Series King V JS32', preco: '4.178,00',quantidade: 5, imagem: './imgs/flyingvwebp.webp'},
            { nome: 'Guitarra ESP LTD MT-130', preco: '1.972,00',quantidade: 30, imagem: './imgs/esp.webp'},
            { nome: 'Guitarra Jackson JS22 DKA', preco: '2.245,00',quantidade: 6, imagem: './imgs/js22azul.webp'},
            { nome: 'Guitarra Jazzmaster TW-61', preco: '1.044,00',quantidade: 15, imagem: './imgs/jazzmaster.webp'},
            { nome: 'Guitarra Strinberg Headless SHN6', preco: '2.708,00',quantidade: 4, imagem: './imgs/headless.webp'},
            { nome: 'Guitarra Epiphone SG', preco: '5.799,00',quantidade: 6, imagem: './imgs/sg.webp'},
            { nome: 'Guitarra Strinberg Semi-Acústica SHS300', preco: '2.125,00',quantidade: 8, imagem: './imgs/semiacustica.webp'}
        ],

        Amplificadores: [
            { nome: 'Amplificador Boss Katana', preco: '3.500,00', quantidade: 6, imagem: './imgs/katana.jpg' },
            { nome: 'Amplificador Mackintec Maxx 15W', preco: '305,00', quantidade: 12, imagem: './imgs/maxx.webp' },
            { nome: 'Amplificador Meteoro Space Junior 35W', preco: '517,00', quantidade: 12, imagem: './imgs/meteoro.webp' },
            { nome: 'Amplificador Orange Crush Mini', preco: '539,00', quantidade: 4, imagem: './imgs/orange.webp' },
            { nome: 'Amplificador Meteoro Guitar F-350 ', preco: '2.022,00', quantidade: 6, imagem: './imgs/meteoroguitar.webp' },
            { nome: 'Amplificador Meteoro Nitrous GS100', preco: '2.550,00', quantidade: 6, imagem: './imgs/nitrous.webp' },
            { nome: 'Amplificador Borne Strike G30', preco: '399,00', quantidade: 22, imagem: './imgs/borne.webp' },
            { nome: 'Amplificador Fender Mustang GTX100', preco: '5.085,00', quantidade: 9, imagem: './imgs/fender.webp' },
            { nome: 'Amplificador Tagima Black Fox 30', preco: '1.189,00', quantidade: 7, imagem: './imgs/tagimacaixa.webp' },
            { nome: 'Amplificador Fender Frontman 10G', preco: '737,00', quantidade: 20, imagem: './imgs/fenderpequena.webp' },
            { nome: 'Amplificador Fender Champion 100', preco: '4.229,00', quantidade: 5, imagem: './imgs/fendergrande.webp' },
            { nome: 'Amplificador Baixo Meteoro Space Jr M750', preco: '1.330,00', quantidade: 3, imagem: './imgs/meteorobaixo.webp' },
            { nome: 'Amplificador Baixo GoBass GB100', preco: '523,00', quantidade: 10, imagem: './imgs/gobass.webp' },
            { nome: 'Amplificador Baixo Impact Bass CB80', preco: '884,00', quantidade: 4, imagem: './imgs/bornebass.webp' },
            { nome: 'Amplificador Baixo Meteoro 100bs', preco: '529,00', quantidade: 2, imagem: './imgs/meteorobass.webp' },
        ],

        Violões: [
            { nome: 'Violão Fender Classic CD-60SCE 12 Cordas', preco: '3.999,00', quantidade: 10, imagem: './imgs/12strings.jpg' },
            { nome: 'Violão Gianini Start NF-14', preco: '521,00', quantidade: 30, imagem: './imgs/classico.webp' },
            { nome: 'Violão Michael Galaxy VM925DT', preco: '1.127,00', quantidade: 15, imagem: './imgs/pretoviolao.webp' },
            { nome: 'Violão Seizi Supreme Ryu MIrai', preco: '4.989,00', quantidade: 1, imagem: './imgs/seizi.jpg' },
            { nome: 'Violão Gianini Performance GDC-1', preco: '578,00', quantidade: 21, imagem: './imgs/gianinipreto.webp' },
            { nome: 'Violão Lava Me 4', preco: '7.999,00', quantidade: 1, imagem: './imgs/lavame.webp' },
            { nome: 'Violão Gianini GGC', preco: '940,00', quantidade: 11, imagem: './imgs/gianinimarrom.webp' },
            { nome: 'Violão Rozini RX207 EGC.F.I', preco: '1.299,00', quantidade: 2, imagem: './imgs/violao7cordas.webp' },
            { nome: 'Violão Yamaha SLG200S', preco: '5.029,00', quantidade: 1, imagem: './imgs/violaodoido.webp' },
            { nome: 'Violão Tagima Dallas Gran ', preco: '918,00', quantidade: 3, imagem: './imgs/tagimaviolao.webp' },
        ],

        Ukuleles: [
            { nome: 'Ukulele Shelby SU21R', preco: '270,00', quantidade: 5, imagem: './imgs/ukulele.jpg' },
            { nome: 'Ukulele Shelby SU23M', preco: '235,00', quantidade: 2, imagem: './imgs/ukulele.webp' },
            { nome: 'Ukulele Kalani Kal300 CS', preco: '377,00', quantidade: 9, imagem: './imgs/kalani.webp' },
            { nome: 'Ukulele Tander', preco: '168,00', quantidade: 10, imagem: './imgs/tander.webp' },
            { nome: 'Ukulele Gianini GUK-23 ZW', preco: '299,00', quantidade: 6, imagem: './imgs/gianiniukulele.webp' },
            { nome: 'Ukulele Lanikai 5 cordas', preco: '350,00', quantidade: 1, imagem: './imgs/ukulele5cordas.jpg' }
        ],

        Baixos: [
            { nome: 'Baixo Tagima TW-73', preco: '1.033,00', quantidade: 20, imagem: './imgs/baixo.webp' },
            { nome: 'Baixo Yamaha TRBX174', preco: '1.602,00', quantidade: 15, imagem: './imgs/baixoyamaha.webp' },
            { nome: 'Baixo Tagima XB31 6 Cordas', preco: '1.726,00', quantidade: 3, imagem: './imgs/baixo6cordas.webp' },
            { nome: 'Baixo Yamaha TRBX305', preco: '3.410,00', quantidade: 10, imagem: './imgs/baixo5cordas.webp' },
            { nome: 'Baixo Alembic Europa 10 Cordas', preco: '10.650,00', quantidade: 2, imagem: './imgs/baixo10cordas.webp' },
            { nome: 'Baixo Ibanez RH Freatless 5 Cordas', preco: '12.169,00', quantidade: 5, imagem: './imgs/ibanezbaixo.webp' },
            { nome: 'Baixo Ibanez SR5005-OL', preco: '23.791,00', quantidade: 2, imagem: './imgs/ibanezcaro.webp' },
            { nome: 'Baixo Ibanez AFB200-TKS', preco: '9.873,00', quantidade: 1, imagem: './imgs/baixoibanez.webp' },
            { nome: 'Baixo Tagima TW-66', preco: '1.227,00', quantidade: 10, imagem: './imgs/tagimabaixo.webp' },
        ],

        Pedaleiras: [
            { nome: 'Pedaleira Line-6', preco: '6.100,00', quantidade: 2, imagem: './imgs/pedaleira.jpg' },
            { nome: 'Pedaleira Boss Zoom G1X Four', preco: '817,00', quantidade: 15, imagem: './imgs/pedaleira.webp' },
            { nome: 'Pedaleira Joyo Gem Box 3', preco: '2.611,00', quantidade: 2, imagem: './imgs/pedal.webp' },
            { nome: 'Pedaleira Cucave Cube Baby', preco: '250,00', quantidade: 20, imagem: './imgs/cucave.webp' },
            { nome: 'Pedaleira Boss GT-1', preco: '1.736,00', quantidade: 14, imagem: './imgs/pedaltop.webp' },
        ],
        
        Acessórios: [
            { nome: 'Cabo P10', preco: '50,00', quantidade: 150, imagem: './imgs/p10.jpg' },
            { nome: 'Capotraste Dolphin', preco: '23,00', quantidade: 150, imagem: './imgs/capotraste.webp' },
            { nome: 'SLide ', preco: '33,00', quantidade: 60, imagem: './imgs/slide.webp' },
            { nome: 'Fretwrap', preco: '59,00', quantidade: 60, imagem: './imgs/fretwrap.webp' },
            { nome: 'Cordas Ernie Ball Slink 0.10', preco: '69,00', quantidade: 30, imagem: './imgs/corda010.webp' },
            { nome: 'Cordas Ernie Ball Barítona 0.13', preco: '78,00', quantidade: 30, imagem: './imgs/cordabaritono.webp' },
            { nome: 'Cordas Ernie Ball Earthwood 0.11', preco: '70,00', quantidade: 50, imagem: './imgs/cordaacustico.webp' },
            { nome: 'Cordas Ernie Ball Slink 0.45 5 Cordas', preco: '156,00', quantidade: 30, imagem: './imgs/cordabaixo5.webp' },
            { nome: 'Cordas Ernie Ball Super Slink 0.45', preco: '179,00', quantidade: 30, imagem: './imgs/corda4baixo.webp' },
            { nome: 'Cordas Ernie Ball Heavy Bottom 0.10 7 Cordas', preco: '107,00', quantidade: 40, imagem: './imgs/corda7corda.webp' },
            { nome: 'Cordas Ernie Ball Slinky 0.10 8 Cordas', preco: '143,00', quantidade: 20, imagem: './imgs/corda8corda.webp' },
            { nome: 'Cordas Ibanez 0.9 9 Cordas', preco: '169,00', quantidade: 10, imagem: './imgs/corda9corda.webp' },
        ],
        
    };

    // Renderizando Produtos

    const produto = req.params.produto;
    res.render("produtos", {
        categorias: categorias
    });
});


// Rota Pedidos

app.get("/pedidos", (req, res) => {

    //Constantes Pedidos

    const pedidos = [
        { id: 95554, data: '2024-09-20', nome: "Marcos Ramos", valor: 1180 },
        { id: 95553, data: '2024-09-20', nome: "Carol Ayumi", valor: 2334 },
        { id: 95552, data: '2024-09-20', nome: "Gabriel Azevedo", valor: 2839 },
        { id: 95551, data: '2024-09-20', nome: "Julia Hikita", valor: 22976 },
        { id: 95550, data: '2024-09-20', nome: "Daniel Rodrigues", valor: 21269 },
        { id: 95549, data: '2024-09-20', nome: "Felipe Lara", valor: 7646 },
        { id: 95548, data: '2024-09-19', nome: "Ana Cristina", valor: 4653 },
        { id: 95547, data: '2024-09-19', nome: "Claudio José", valor: 95646 },
        { id: 95546, data: '2024-09-19', nome: "Vitor Erick", valor: 45315 },
        { id: 95545, data: '2024-09-19', nome: "Renan Wako", valor: 16542 },
        { id: 95544, data: '2024-09-19', nome: "Paulo Roberto", valor: 1235 },
        { id: 95543, data: '2024-09-19', nome: "Julia Hikita", valor: 60 },
        { id: 95542, data: '2024-09-19', nome: "Cássio Pereira", valor: 134 },
        { id: 95541, data: '2024-09-19', nome: "Tiago Ackerman", valor: 1387 },
        { id: 95540, data: '2024-09-19', nome: "João Marcos", valor: 5445 }
    ];

    //Renderizando Pedidos

    const valorTotal = pedidos.reduce((total, pedido) => total + pedido.valor, 0);
    res.render("pedidos", { pedidos: pedidos, valorTotal: valorTotal });
});

const port = 8080;

app.listen(port, (error) => {
    if(error){
        console.log(`Ocorreu um erro: ${error}`);
    } else {
        console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
    }
});
