// Promise
// then catch
//async await

function log(etapa) {
    return console.log(etapa + new Date().toLocaleDateString())
}

function requisicaoSimulada(nome, tempoMS = 1500,deveFalhar = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(deveFalhar) {
                reject(new Error(`falha em ${nome}`))
            } else {
                resolve(`${nome} Concluida em ${tempoMS}ms`);
            }
        }, tempoMS)
    })
}

function exemploThenCatch() {
    log("1. Início (sem await)");
    requisicaoSimulada("Buscar usuário", 2000)
        .then((resultado) => {
            log(`3. Then ${resultado}`);
        })
        .catch((erro) => {
            console.log("erro capturado com .catch " + erro.message);
        });
    log("2. Continuou o fluxo sem esperar a promise");
}

// exemploThenCatch();




async function exemploAsyncAwait() {
    log("1. Etapa com async Await");
    try {
        const resultado = await requisicaoSimulada("Buscar usuário", 2000);
        log("2. Resultado obtido com await" + resultado);
            
    } catch (error) {
        console.error(error.message);
        }
        log("3. Só roda depois do await");
}

exemploAsyncAwait()