document.addEventListener('DOMContentLoaded', () => {
    const experimentData = JSON.parse(localStorage.getItem('selectedExperiment'));
    
    if (experimentData) {
        const imagemGrande = document.querySelector('.imagemgrande');
        imagemGrande.style.backgroundImage = `url('${experimentData.imagem}')`;
        imagemGrande.style.backgroundSize = 'cover';
        imagemGrande.style.backgroundPosition = 'center';
        
        document.querySelector('.bigtitle').textContent = experimentData.nome;
        
        const statusDiv = document.querySelector('.titulo .avariado');
        if (experimentData.intacto) {
            statusDiv.className = 'intacto';
            statusDiv.innerHTML = `<img class="check" src="assets/images/check.png">intacto`;
        } else {
            statusDiv.className = 'avariado';
            statusDiv.innerHTML = `<img class="cancel" src="assets/images/cancel.png">avariado`;
        }
        
        document.querySelector('.descricao p:last-child').textContent = experimentData.descricao;
        
        const passosDiv = document.querySelector('.passoapasso');
        experimentData.passoapasso.forEach(passo => {
            const p = document.createElement('p');
            p.textContent = passo;
            passosDiv.appendChild(p);
        });
    }
    
    const searchInput = document.querySelector("#barraPesquisa");
    
    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();
    });
});