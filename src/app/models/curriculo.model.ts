export class Curriculo{
    //atributos
    public id:number = 0;
    nome:string = "";
    foto:string ="";
    descricao:string="";
    formacao:string = "";
    experiencia:string = ""

    constructor(id:number, nome:string, foto:string, descricao:string, formacao:string, experiencia:string){
        this.id = id,
        this.nome = nome;
        this.foto = foto;
        this.descricao = descricao;
        this.formacao = formacao;
        this.experiencia = experiencia
    }

    // ^ forma classica de criação de classe
    
    //getter and setters
    getId():number{
        return this.id;
    }
    setId(id:number):void{
        this.id = id
    }

    //toMap Obj -> Api
    
    toMap(): {[key:string]:any}{
        return{
            id: this.id,
            nome:this.nome,
            foto:this.foto,
            descricao: this.descricao,
            formacao: this.formacao,
            experiencia: this.experiencia
        }
    }

}