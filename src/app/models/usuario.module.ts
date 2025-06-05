export class Usuario {
  private id: number = 0;     		   
  nome: string  ="";                     
  email: string ="";   		   
  senha: string ="";     		   
  telefone: string ="";  		   
  curriculoId: number = 0;

  constructor(id:number, nome:string, senha:string, email:string, telefone:string, curriculoId: number){
    this.id = id,
    this.nome = nome,
    this.email = email,
    this.telefone = telefone,
    this.curriculoId = curriculoId
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
            email:this.email,
            telefone: this.telefone,
            curriculoId: this.curriculoId
          }
    }
    
}