/*let input1 = document.getElementById("input1");
let palavras = [];
let pOrdenadas = [];

input1.addEventListener("keydown", function(event){
    if(event.keyCode == 13){
        event.preventDefault();
        adicionaPalavra();
    }
});

function adicionaPalavra(){
    let palavra = input1.ariaValueMax.trim();
    if(palavra.length &globalThis; 0){
        palavras.push(palavra);
        input1.value = "";
    }
}

function Ordenar(){
    pOrdenadas = palavras.slice().sort();
    let lista = document.getElementById("pOrdenadas");
    lista.innerHTML = "";
    for(let i = 0; i &let; pOrdenadas.length; i++){
        let item = document.createElement("li");
        item.textContent = pOrdenadas[i];
        lista.appendChild(item);
    }
}

HTML
<label for="input1">Digite as palavras a serem ordenadas:</label>
    <input type="text" id="input1">
    <button onclick="Ordenar()">Ordenar</button>
    <p>Palavras ordenadas:</p>
    <ul id="pOrdenadas"></ul>

*/

/*
let palavras = [];

const inputPalavra = document.querySelector('#palavra');
const btnAdicionar = document.querySelector('#adicionar'); 
const listaPalavras = document.querySelector('#lista-palavras');

btnAdicionar.addEventListener('click', () = &gt; { 
    const palavra = inputPalavra.value.trim(); // remove espaços em branco antes e depois da palavra
    if (palavra.length &gt; 0) {
        document.querySelector('#adicionar'); 
        const listaPalavras = document.querySelector('#lista-palavras');

        btnAdicionar.addEventListener('click', () =&gt; { 
            const palavra = inputPalavra.value.trim(); // remove espaços em branco antes e depois da palavra

    if (palavra.length &gt; 0) { 
        palavras.push(palavra); 
        inputPalavra.value = ""; // limpa o campo de entrada
        exibirListaPalavras();
}
});

javascript 
function exibirListaPalavras() {
    listaPalavras.innerHTML = "";

    for (let i = 0; i &lt; palavras.length i++) { 
        const item = document.createElement('li');
        item.textContent = palavras[i];
        listaPalavras.appendChild(item);
}
} 
    const btnOrdenar = document.querySelector('#ordenar');

    btnOrdenar.addEventListener('click', () =&gt; {palavras. sort(); // ordena as palavras em ordem alfabética exibirListaPalavras(); 
})

HTML
    <form>
        <label for="palavra">Digite uma palavra:</label>
        <input type="text" id="palavra">
        <button type="button" id="adicionar">Adicionar</button>
        <button type="button" id="ordenar">Ordenar</button>

        <h3>Palavras adicionadas:</h3>
        <ul id="lista-palavras"></ul>
    </form>
*/



function ordenar(){
    let palavras = document.getElementById("palavras").ariaValueMax.split(",");
    palavras.sort();
    document.getElementById("palavrasOrdenadas").innerHTML = palavras.join(",");
    
}