start_components();
populaArray();



let capitulos = [{
        id: 0,
        unidade: 1,
        tipo: 1,
        titulo: `Educação Financeira`,
        descricao: `
        É fundamental que a escola colabore com a Educação Financeira de seus alunos para evitar formar cidadãos que não se relacionam de forma saudável com o dinheiro.
    `,
        numero: 1,
        estrelaExercicio: 5,
        completed: false,
        opened: false,
        progresso: 0,
        height: 0,
        scrollTop: 0,
        scrolled: 0
    },
    {
        id: 1,
        unidade: 1,
        tipo: 1,
        titulo: `Aprendendo a lidar com o dinheiro`,
        descricao: `
        Uma vida financeira saudável, sem dívidas, sem “buracos” no orçamento e com as contas equilibradas, é o sonho (e o desafio) de muitas famílias.`,
        numero: 2,
        estrelaExercicio: 5,
        completed: false,
        opened: false,
        progresso: 0,
        height: 0,
        scrollTop: 0,
        scrolled: 0
    },
    {
        id: 2,
        unidade: 1,
        tipo: 2,
        titulo: `Teste de aprendizado`,
        descricao: `Agora vamos exercitar todo o aprendizado desta unidade.`,
        numero: 1,
        estrelaExercicio: 6,
        completed: false,
        questions: [
            false,
            false,
            false,
            false,
            false,
            false
        ]



    },
]


let disciplina = {

    totalCapitulos: 0,
    totalExercicios: 0,
    totalEstrelas: 0

}







// Variáveis Globais
let progress = [];
let height = [];
let scrollTops = [];
let scrolled = [];
let stars = [];
let questions = [];
var result = [];



var numModulo = 0;
var itemModule = '';
var itemExercise = '';
var totalStars = 0;
var currentScoreStars = 0;
var currentUnidade = 0;
var totalExercicios = 0;
var currentScoreExercicios = 0;

// seletores globais
let home = document.querySelector('.home');
let modulos = document.querySelector('.modules');
let content = document.querySelector('.content');
let video = document.querySelector('.video');
let score = document.querySelector('.score');
let menu = document.querySelector('.menu');
let tools = document.querySelector('.tools');
let save = document.querySelector('.save');




function populaArray() {

    // Insere o valor inicial em todos os arrays e acordo com a quantidade de módulos
    setTimeout(() => {
        let itemsModules = modulos.querySelectorAll('.modules-item');
        var num = 0;
        var numStars = 5;
        var checkQuestions = false;

        for (let i = 0; i < itemsModules.length; i++) {
            progress.push(num);
            stars.push(numStars);
            height.push(num);
            scrollTops.push(num);
            scrolled.push(num);
            questions.push(checkQuestions);
        }

    }, 100);

    setTimeout(() => {

        var unidades = document.querySelectorAll('.unidade');
        var index = 0;
        let resultadoTeste = new Array();


        for (var i = 0; i < unidades.length; i++) {
            resultadoTeste[i] = new Array();
        }



        result = resultadoTeste;


    }, 100);


    setTimeout(() => {

        let unidades = modulos.querySelectorAll('.unidade');


        for (let index = 0; index < unidades.length; index++) {
            for (let i = 0; i < 6; i++) {

                result[index].push(false);

            }

        }


    }, 250);



}