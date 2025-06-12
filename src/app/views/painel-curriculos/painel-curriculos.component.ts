import { Component, OnInit } from '@angular/core';
import { CurriculosService } from 'src/app/core/services/curriculo.service';
import { Curriculo } from 'src/app/models/curriculo.model';

@Component({
  selector: 'app-painel-curriculos',
  templateUrl: './painel-curriculos.component.html',
  styleUrls: ['./painel-curriculos.component.scss']
})
export class PainelCurriculosComponent implements OnInit {

  public vagas: Curriculo[] = [];
  //armazenar os dados do API -json

  constructor(private _curriculosService: CurriculosService) {} // aplicando o service no Construtor

  ngOnInit(): void {
    this.listarVagas();
  }

  listarVagas() {
    // Lista as vagas do servidor usando o serviço 'VagaService'
    this._curriculosService.getCurriculos().subscribe((retornaCurriculo) => {
      this.vagas = retornaCurriculo.map((item) => {
        // Mapeia os dados retornados para objetos 'Vaga'
        return new Curriculo(
          item.id,
          item.nome,
          item.foto,
          item.descricao,
          item.formacao,
          item.experiencia
        );
      });
    });
  }
}
