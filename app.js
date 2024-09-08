
function pesquisar() {

    let section = document.getElementById("resultados-pesquisa")
    let resultados = ''
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase()
    let nome = ''
    let regiao = ''
    
    for (let dinossauro of dinossaurosBrasileiros) {
        nome = dinossauro.nome.toLowerCase()
        regiao = dinossauro.regiao.toLowerCase()

        if(nome.includes(campoPesquisa) || 
           regiao.includes(campoPesquisa) ) {
            resultados += `
        <div class="item-resultado">
            <a href="${dinossauro.imagem}" target="_blank">
                <img src="${dinossauro.imagem}" alt="">
            </a>
            <h2>${dinossauro.nome}</h2>
            <p> era: ${dinossauro.era},<br>
               dieta: ${dinossauro.dieta},<br>
               estado: ${dinossauro.estado},<br>
               tamanho: ${dinossauro.tamanho},<br>
               descricao: ${dinossauro.descricao}
            </p>
        </div> `
    }
        }
        
    
    section.innerHTML = resultados
}


function mostrarTodos() {
    
    let section = document.getElementById("resultados-pesquisa")
    let resultados = ''
   
    
    for (let dinossauro of dinossaurosBrasileiros) {
        
            resultados += `
        <div class="item-resultado">
            <img src="${dinossauro.imagem}" alt="">
            <h2>${dinossauro.nome}</h2>
            <p> era: ${dinossauro.era},<br>
               dieta: ${dinossauro.dieta},<br>
               estado: ${dinossauro.estado},<br>
               tamanho: ${dinossauro.tamanho},<br>
               descricao: ${dinossauro.descricao}
            </p>
        </div> `
    }

    section.innerHTML = resultados

}
        
    
   
