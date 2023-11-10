/*
OPERADORES ARITMÉTICOS
+ --> adição ou concatenação
- * /
% --> Módulo, pega o resto da divisão
** --> Exponenciação
++ --> Incrementar 1
-- --> Decrementar
*/

let i = 10
console.log(i)
i-- // i = i + 1
console.log(i)

/*
OPERADORES RELACIONAIS

== --> igual
!= --> diferente
> < <>= <=
*/

/*
OPERADORES LÓGICOS

&& --> E
|| --> OU
! --> NÂO
*/

let usuario = "Flavio", senha = 123
// u:admin s:123

if (usuario == "admin" && senha == 123){
    console.log("Usuario ou senha inválido")
}

let a = 60, b = 100, c = 1000

if (a > b && a > c){
    console.log("A é maior")
}else if(b > c && b > a){
    console.log("B é maior")
}else if(c > a && c > b){
    console.log("C é maior")
}

let meia_entrada = "estudante"
if(meia_entrada == "estudante" || meia_entrada == "idoso" || meia_entrada == "pcd" || meia_entrada == "baixa renda"){
    console.log("você tem direito a meia entrada")
}else{
    console.log("você não tem desconto")
}