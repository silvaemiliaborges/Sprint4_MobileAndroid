using System;
using System.Collections.Generic;

namespace Senai.OpFlix.WebApi.Domains
{
    public partial class Lancamentos
    {
        public int IdLancamento { get; set; }
        public string Nome { get; set; }
        public int DuracaoMin { get; set; }
        public string Classificacao { get; set; }
        public DateTime DataLancamento { get; set; }
        public string Sinopse { get; set; }
        public int? IdPlataforma { get; set; }
        public int? IdGenero { get; set; }
        public int? IdTipo { get; set; }
        public string Imagem { get; set; }

        public Generos IdGeneroNavigation { get; set; }
        public Plataformas IdPlataformaNavigation { get; set; }
        public Tipos IdTipoNavigation { get; set; }
    }
}
