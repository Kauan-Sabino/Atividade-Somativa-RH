import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/models/vaga.model'
import { VagasService } from 'src/app/core/services/vaga.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.scss']
})
export class PainelVagasComponent implements OnInit{
  public vaga:Vaga = new Vaga(0, '', '', '', 0);//rastrear dados no formulario

  public vagas: Vaga[] = [];

  constructor(private _vagasService: VagasService) {} 

  ngOnInit(): void {
    this.listarVagas();
  }

  listarVagas() {
    this._vagasService.getVagas().subscribe((retornaVaga) => {
      this.vagas = retornaVaga.map((item) => {

        return new Vaga(
          item.id,
          item.nome,
          item.foto,
          item.descricao,
          item.salario
        );
      });
    });
  }
}
