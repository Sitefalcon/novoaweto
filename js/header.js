const menu = document.querySelector('.menu');
function ativarscroll(){
    
menu.classList.toggle('ativarscrols', scrollY > 0);}
window.addEventListener('scroll', ativarscroll);

const fundomenu = document.querySelector('.config-menu');
const cliquemenu = document.querySelector('#icone-menu');
const fecharmenu = document.querySelector('#icone-fechar-menu')
cliquemenu.addEventListener('click', function(){
    fundomenu.classList.add('ativar-configmenu')
})
fecharmenu.addEventListener('click', function(){
    fundomenu.classList.remove('ativar-configmenu')
})





//CONFIGURAÇÃO SEGUNDA  LUPA - MOBILE
let fundolupamobum = document.querySelector('.seçao-lupa');
let inputlupamobum = document.querySelector('#icone-lupa');
let fecharlupamobum = document.querySelector('#close-menu-lupa')

inputlupamobum.addEventListener('click', function(){
fundolupamobum.classList.add('ativar-seçao-lupa')
});

fecharlupamobum.addEventListener('click', function(){
fundolupamobum.classList.remove('ativar-seçao-lupa')
});

let lupapesquisamobum = document.querySelector('#mob-inputpesquisa')
let listainputmobum = document.querySelector('.mob-lupapesquisa')

lupapesquisamobum.addEventListener('input', function(){
    listainputmobum.classList.add('ativar-pesquisa')
})
const pesquisainputmobum = document.getElementById('mob-inputpesquisa');//Barra de Pesquisa
const produtoinputmobum  = document.getElementById('listaseçao').getElementsByTagName('li'); //Lista + Dados

pesquisainputmobum.addEventListener('input', function(){
const pesquisaterminalmobum = pesquisainputmobum.value.toLowerCase();

for (let i = 0; i < produtoinputmobum.length; i++){
    const produtonomemobum = produtoinputmobum[i].innerText.toLowerCase();
   
    if (produtonomemobum.includes(pesquisaterminalmobum)){
    produtoinputmobum[i].style.display = 'block'; 
    } 

    else{
    produtoinputmobum[i].style.display = 'none';
}};

})










let fundolupamob = document.querySelector('.fundo-inputmob'); //fundo pesquisa
let inputlupamob = document.querySelector('#inputmob'); //lupa pesquisa
inputlupamob.addEventListener('input' , function(){  
    fundolupamob.classList.add('ativar-inputmob')
})
inputlupamob.addEventListener('mouseout' , function(){
    fundolupamob.classList.remove('ativar-inputmob')
})

const pesquisainputmob = document.getElementById('inputmob');//Barra de Pesquisa
const produtoinputmob  = document.getElementById('listamobum').getElementsByTagName('li'); //Lista + Dados
pesquisainputmob.addEventListener('input', function(){
const pesquisaterminalmob = pesquisainputmob.value.toLowerCase();
    
    for (let i = 0; i < produtoinputmob.length; i++){
        const produtonomemob = produtoinputmob[i].innerText.toLowerCase();
       
        if (produtonomemob.includes(pesquisaterminalmob)){
        produtoinputmob[i].style.display = 'block'; 
        } 

        else{
        produtoinputmob[i].style.display = 'none';
    }};

})