function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.querySelector('input#txtano')
    var res = window.document.getElementById('res')
    if (fano.value == 0 || fano.value > ano){
        window.alert('[Erro] Verifique os dados e tente novamente!')
    }else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'img/crianca_masc.png')
            }else if(idade > 12 && idade < 18){
                //adolescente
                img.setAttribute('src', 'img/adolescente_masc.png')
            }else if(idade >= 18 && idade < 65 ){
                //adulto
                img.setAttribute('src','img/adulto_masc.png')
            }else{
                //idoso
                img.setAttribute('src', 'img/idoso_masc.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 12){
                img.setAttribute('src', 'img/crianca_fem.png')
            }else if(idade >= 12 && idade < 18){
                img.setAttribute('src', 'img/adolescente_fem.png')
            }else if(idade >= 18 && idade < 65){
                img.setAttribute('src', 'img/adulto_fem.png')
            }else{
                img.setAttribute('src', 'img/idoso_fem.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} ano.`
        res.appendChild(img)
    }
}