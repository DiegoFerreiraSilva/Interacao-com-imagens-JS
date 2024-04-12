const lampada = document.getElementById('imginte')
const seção = document.getElementById('section1')
quebrado = false

// Acionando Eventos DOM
lampada.addEventListener('mouseenter', ligar)
lampada.addEventListener('mouseleave', desligar)
lampada.addEventListener('dblclick', quebrar)

function quebrar() {
    lampada.setAttribute('src', 'quebrado.png')
    quebrado = true
    // Criando elemento do tipo button
    var btn = document.createElement('button')
    btn.type = 'button'
    btn.id = 'btnJS'
    btn.innerHTML = 'Trocar'
    btn.className = 'button'
    btn.onclick = function() {
        lampada.setAttribute('src', 'desligado.png')
        quebrado = false
        seção.removeChild(btn)
    }
    // Adicionando o elemento criado na section
    seção.appendChild(btn)
}

// Trocando as imagens da lâmpada
function ligar() {
    if (quebrado != true) {
        lampada.setAttribute('src', 'ligado.png')
    }
}

function desligar() {
    if (quebrado != true) {
        lampada.setAttribute('src', 'desligado.png')
    }
}
