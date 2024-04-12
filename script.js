const fundomenu = document.querySelector('.config-menu');
const cliquemenu = document.querySelector('#icone-menu');
const fecharmenu = document.querySelector('#icone-fechar-menu')

cliquemenu.addEventListener('click', function(){
    fundomenu.classList.add('ativar-configmenu')
})

fecharmenu.addEventListener('click', function(){
    fundomenu.classList.remove('ativar-configmenu')
})



let fundolupa = document.querySelector('.fundo-pesquisa');
let inputlupa = document.querySelector('#input-pesquisa');

inputlupa.addEventListener('input', function(){
fundolupa.classList.add('ativar-lupa')
});

inputlupa.addEventListener('mouseout', function(){
fundolupa.classList.remove('ativar-lupa')
});

const pesquisainput = document.getElementById('input-pesquisa');//Barra de Pesquisa
const produtoinput  = document.getElementById('listadesk').getElementsByTagName('li'); //Lista + Dados
pesquisainput.addEventListener('input',function(){
const pesquisaterminal = pesquisainput.value.toLowerCase();

for (let i = 0; i < produtoinput.length; i++){
    const produtonome = produtoinput[i].innerText.toLowerCase();
    if (produtonome.includes(pesquisaterminal)){
        produtoinput[i].style.display = 'block'; 
    } else{
        produtoinput[i].style.display = 'none';
    }};
});






let fundolupamob = document.querySelector('.lupa-pesquisa');
let inputlupamob = document.querySelector('#inputmob');

inputlupamob.addEventListener('input', function(){
    fundolupamob.classList.add('ativar-pesquisa')
});
inputlupamob.addEventListener('mouseout', function(){
    fundolupamob.classList.remove('ativar-pesquisa')
});

const pesquisainputmob = document.getElementById('inputmob');//Barra de Pesquisa
const produtoinputmob  = document.getElementById('lista').getElementsByTagName('li'); //Lista + Dados
pesquisainputmob.addEventListener('input',function(){
const pesquisaterminalmob = pesquisainputmob.value.toLowerCase(); 
for (let i = 0; i < produtoinputmob.length; i++){
        const produtonomemob = produtoinputmob[i].innerText.toLowerCase();
        if (produtonomemob.includes(pesquisaterminalmob)){
            produtoinputmob[i].style.display = 'block'; 
        } else{
            produtoinputmob[i].style.display = 'none';
        }};
})

