//10. Você está programando um sistema para uma empresa de recursos humanos. De acordo com o tempo de experiência do candidato você deve informar ao recrutador o nível do candidato. Considere:
//a.    Menor que 2 anos → Júnior
//b.    Entre 2 e 5 anos → Pleno
//c.    Acima de 5 anos → Sênior

let anos_experiencia = 1

if(anos_experiencia < 2 ){
    console.log("Junior")
}else if(anos_experiencia >= 2 && anos_experiencia <= 5){
    console.log("Pleno")
}else if(anos_experiencia > 5){
    console.log("Senior")
}